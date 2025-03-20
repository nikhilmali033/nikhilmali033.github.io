import * as THREE from 'three';
import InteractiveCard from './InteractiveCard';

/**
 * Manages the 3D scene and interaction between objects
 */
export default class SceneManager {
    constructor(container) {
        this.container = container;
        this.interactiveObjects = new Set();
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.draggedObject = null;
        
        // Global state management
        this.state = {
            selectedCards: new Set(),
            selectionListeners: new Set()
        };
        
        this._initializeScene();
        this._setupLighting();
        this._setupEventListeners();
    }

    _initializeScene() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x2a1b3d);

        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.z = 5;

        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true 
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Add to container
        this.container.appendChild(this.renderer.domElement);

        // Create common shadow-catching ground plane
        const groundGeometry = new THREE.PlaneGeometry(20, 20);
        const groundMaterial = new THREE.ShadowMaterial({
            opacity: 0.3
        });
        this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
        this.ground.position.z = -1;
        this.ground.rotation.x = 0; // Already facing camera
        this.ground.receiveShadow = true;
        this.scene.add(this.ground);
    }

    _setupLighting() {
        // Main directional light for shadows
        this.mainLight = new THREE.DirectionalLight(0xffffff, 0.7);
        this.mainLight.position.set(5, 5, 5);
        this.mainLight.castShadow = true;
        
        // Configure shadow properties
        const shadowCam = this.mainLight.shadow.camera;
        shadowCam.near = 0.1;
        shadowCam.far = 100;
        shadowCam.left = -10;
        shadowCam.right = 10;
        shadowCam.top = 10;
        shadowCam.bottom = -10;
        this.mainLight.shadow.mapSize.width = 2048;
        this.mainLight.shadow.mapSize.height = 2048;
        
        // Glare spotlight for specular highlights
        this.glareLight = new THREE.SpotLight(0xffffff, 1);
        this.glareLight.position.set(3, 3, 5);
        this.glareLight.angle = Math.PI / 4;
        this.glareLight.penumbra = 0.1;
        this.glareLight.decay = 0.5;
        
        // Ambient light for general illumination
        this.ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        
        // Add lights to scene
        this.scene.add(this.mainLight);
        this.scene.add(this.glareLight);
        this.scene.add(this.ambientLight);
    }

    _setupEventListeners() {
        window.addEventListener('resize', this._onWindowResize.bind(this));
        
        // Pointer events
        this.renderer.domElement.addEventListener('pointerdown', this._onPointerDown.bind(this));
        this.renderer.domElement.addEventListener('pointermove', this._onPointerMove.bind(this));
        this.renderer.domElement.addEventListener('pointerup', this._onPointerUp.bind(this));
        this.renderer.domElement.addEventListener('pointerout', this._onPointerUp.bind(this));
    }

    _onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    _updateMousePosition(event) {
        this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }

    _getInteractiveMeshes() {
        // Collect all interactive meshes from all interactive objects
        return Array.from(this.interactiveObjects)
            .map(obj => obj.interactiveMesh)
            .filter(mesh => mesh != null);
    }

    _findParentObject(mesh) {
        return mesh?.userData?.parent || null;
    }

    _onPointerDown(event) {
        this._updateMousePosition(event);
        
        // Update raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        // Get all intersected objects
        const intersects = this.raycaster.intersectObjects(this._getInteractiveMeshes());

        if (intersects.length > 0) {
            const intersectedObject = this._findParentObject(intersects[0].object);
            if (intersectedObject) {
                this.draggedObject = intersectedObject;
                
                // Create event object with necessary data
                const eventData = {
                    clientX: event.clientX,
                    clientY: event.clientY,
                    ray: this.raycaster.ray,
                    camera: this.camera
                };
                
                intersectedObject.onDragStart(eventData);
                
                // Bring object to front
                this._bringToFront(intersectedObject);
            }
        }
    }

    _onPointerMove(event) {
        const previousX = this.mouse.x;
        this._updateMousePosition(event);
        
        // Update raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        if (this.draggedObject) {
            // Handle drag if the object supports dragging
            if (this.draggedObject.config.dragBehavior.enabled) {
                // Handle drag
                const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
                const intersectPoint = new THREE.Vector3();
                this.raycaster.ray.intersectPlane(intersectPlane, intersectPoint);
                
                // Update object position
                this.draggedObject.position.copy(intersectPoint);
                this.draggedObject.position.add(this.draggedObject._state.dragOffset);
                
                // Calculate and apply rotation based on drag velocity (if it's a card)
                if (this.draggedObject instanceof InteractiveCard) {
                    const rotationAmount = THREE.MathUtils.clamp(
                        (this.mouse.x - previousX) * -2,
                        -Math.PI / 4,
                        Math.PI / 4
                    );
                    this.draggedObject.rotation.z = rotationAmount;
                }
            }
        } else {
            // Handle hover
            const intersects = this.raycaster.intersectObjects(this._getInteractiveMeshes());
            
            // Create event object
            const eventData = {
                clientX: event.clientX,
                clientY: event.clientY,
                camera: this.camera
            };

            // Update hover states for all objects
            this.interactiveObjects.forEach(obj => {
                const isIntersected = intersects.some(
                    intersect => this._findParentObject(intersect.object) === obj
                );
                
                if (isIntersected && !obj._state.isHovering) {
                    obj.onPointerEnter(eventData);
                } else if (!isIntersected && obj._state.isHovering) {
                    obj.onPointerLeave(eventData);
                }
                
                if (isIntersected) {
                    obj.onPointerMove(eventData);
                }
            });
        }
    }

    _onPointerUp(event) {
        if (this.draggedObject) {
            this.draggedObject.onDragEnd({
                clientX: event.clientX,
                clientY: event.clientY
            });
            this.draggedObject = null;
        }
    }

    _bringToFront(object) {
        // Calculate new z-position that's slightly in front of all other objects
        let maxZ = Math.max(
            ...Array.from(this.interactiveObjects).map(obj => obj.position.z)
        );
        
        // Only adjust if the object is not already selected (which elevates it)
        if (!object._state.isSelected) {
            object.position.z = maxZ + 0.01;
        }
    }

    /**
     * Register a selection state listener
     * @param {Function} listener - Callback function(selectedCards)
     * @return {Function} - Function to unregister the listener
     */
    addSelectionListener(listener) {
        if (typeof listener !== 'function') return () => {};
        
        this.state.selectionListeners.add(listener);
        
        // Return function to remove this listener
        return () => {
            this.state.selectionListeners.delete(listener);
        };
    }
    
    /**
     * Notify all selection listeners of state change
     * @private
     */
    _notifySelectionChange() {
        const selectedCards = Array.from(this.state.selectedCards);
        this.state.selectionListeners.forEach(listener => {
            try {
                listener(selectedCards);
            } catch (err) {
                console.error('Error in selection listener:', err);
            }
        });
    }
    
    /**
     * Handle object selection state change
     * @param {InteractiveObject} object - The object that changed state
     * @private
     */
    _handleSelectionChange(object) {
        // Currently only tracking cards
        if (object instanceof InteractiveCard) {
            if (object._state.isSelected) {
                this.state.selectedCards.add(object);
            } else {
                this.state.selectedCards.delete(object);
            }
            
            // Notify listeners
            this._notifySelectionChange();
        }
    }
    
    /**
     * Get all currently selected cards
     * @return {Array} - Array of selected card objects
     */
    getSelectedCards() {
        return Array.from(this.state.selectedCards);
    }
    
    /**
     * Check if any cards are selected
     * @return {boolean} - True if at least one card is selected
     */
    hasSelectedCards() {
        return this.state.selectedCards.size > 0;
    }

    /**
     * Add an interactive object to the scene
     * @param {InteractiveObject} object - The object to add
     */
    addObject(object) {
        this.interactiveObjects.add(object);
        this.scene.add(object);
        
        // Set up selection change tracking
        if ('setCallback' in object) {
            // Listen for selection changes
            object.setCallback('onSelect', () => this._handleSelectionChange(object));
            object.setCallback('onDeselect', () => this._handleSelectionChange(object));
        }
        
        return object;
    }

    /**
     * Create and add a card with the given texture
     * @param {THREE.Texture} texture - Texture for the card
     * @param {Object} config - Configuration for the card
     */
    addCard(texture, config = {}) {
        const card = new InteractiveCard({ texture, ...config });
        return this.addObject(card);
    }
    
    /**
     * Create and add a confirm button that activates when cards are selected
     * @param {Object} buttonObject - The button object to add
     * @param {Function} onConfirm - Callback when button is clicked
     */
    addConfirmButton(buttonObject, onConfirm) {
        // Add button to scene
        this.addObject(buttonObject);
        
        // Set inactive by default
        buttonObject.setActive(false);
        
        // Set up click handler
        if (typeof onConfirm === 'function') {
            buttonObject.setCallback('onClick', onConfirm);
        }
        
        // Add selection listener to update button state
        this.addSelectionListener((selectedCards) => {
            buttonObject.setActive(selectedCards.length > 0);
        });
        
        return buttonObject;
    }

    /**
     * Remove an object from the scene
     * @param {InteractiveObject} object - The object to remove
     */
    removeObject(object) {
        this.interactiveObjects.delete(object);
        this.scene.remove(object);
        object.dispose();
    }

    /**
     * Update all objects and render the scene
     * @param {number} deltaTime - Time since last update
     */
    update(deltaTime) {
        // Update all objects
        this.interactiveObjects.forEach(object => object.update(deltaTime));
        
        // Render scene
        this.renderer.render(this.scene, this.camera);
    }

    /**
     * Clean up and dispose of resources
     */
    dispose() {
        // Clean up event listeners
        window.removeEventListener('resize', this._onWindowResize);
        this.renderer.domElement.removeEventListener('pointerdown', this._onPointerDown);
        this.renderer.domElement.removeEventListener('pointermove', this._onPointerMove);
        this.renderer.domElement.removeEventListener('pointerup', this._onPointerUp);
        this.renderer.domElement.removeEventListener('pointerout', this._onPointerUp);
        
        // Dispose of interactive objects
        this.interactiveObjects.forEach(object => {
            object.dispose();
        });
        this.interactiveObjects.clear();
        
        // Dispose of renderer
        this.renderer.dispose();
        
        // Remove canvas from container
        if (this.container.contains(this.renderer.domElement)) {
            this.container.removeChild(this.renderer.domElement);
        }
    }
}