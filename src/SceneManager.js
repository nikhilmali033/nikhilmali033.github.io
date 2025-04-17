import * as THREE from 'three';
import InteractiveCard from './InteractiveCard';
import ConfirmButton from './ConfirmButton';
import * as CANNON from 'cannon';
import TextPhysics from './TextPhysics';
import NeuralNetworkManager from './NeuralNetworkManager';

/**
 * Manages the 3D scene and interaction between objects
 */
export default class SceneManager {
    constructor(container, customConfig = {}) {
        this.container = container;
        this.interactiveObjects = new Set();
        this.buttonObjects = new Set(); // Dedicated tracking for buttons
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.draggedObject = null;
        
        // Default configuration
        this.defaultConfig = {
            // Debug settings
            debug: true,
            
            // Camera settings
            camera: {
                fov: 75,
                near: 0.1,
                far: 1000,
                position: { x: 0, y: 0, z: 5 }
            },
            
            // Scene settings
            scene: {
                background: 0x2a1b3d
            },
            
            // Card settings
            card: {
                physics: {
                    strength: 0.3,       // Spring strength for animations
                    damping: 0.75,       // Damping factor for animations
                    wiggleStrength: 0.5, // Strength of wiggle animation
                    wiggleDamping: 0.6   // Damping of wiggle animation
                },
                dragging: {
                    returnSpeed: 0.1,    // Speed of return to origin
                    dampingFactor: 0.95  // Damping factor for momentum
                },
                animation: {
                    hoverScale: 1.1,     // Scale when hovering
                    selectedScale: 1.1,  // Scale when selected
                    selectedElevation: 0.5, // Z-axis elevation when selected
                    glowIntensity: 0.7,  // Glow intensity when selected
                    glowColor: 0x00ffff  // Color of glow effect
                },
                selection: {
                    clickThreshold: 200, // Max time for a click (ms)
                    moveThreshold: 5     // Max movement for a click (px)
                },
                dimensions: {
                    width: 2,
                    height: 3,
                    pivotOffset: 0.7    // Offset for card pivot point
                }
            },
            
            // Button settings
            button: {
                dimensions: {
                    analyzeWidth: 1.5,
                    analyzeHeight: 0.5,
                    debugWidth: 1.2,
                    debugHeight: 0.4
                },
                positions: {
                    analyze: { x: 0, y: -2, z: 0.1 },
                    debug: { x: 2, y: 1.5, z: 0.1 }
                },
                colors: {
                    activeAnalyze: 0x4287f5,
                    inactiveAnalyze: 0x787878,
                    activeDebug: 0xff0000,
                    inactiveDebug: 0xaa0000
                },
                animations: {
                    hoverScale: 1.1,
                    clickScale: 1.2,
                    springStrength: 0.3,
                    springDamping: 0.7
                }
            },
            
            // Neural network settings
            neuralNetwork: {
                // Camera settings
                camera: {
                    position: { x: 0, y: 0, z: 25 },
                    transitionDuration: 1500 // ms
                },
                
                // Network structure
                structure: {
                    inputLayer: 784, // 28x28 pixels
                    hiddenLayer: 64,
                    outputLayer: 10
                },
                
                // Layer positions
                layerPositions: {
                    input: -5,
                    hidden: 2,
                    output: 9
                },
                
                // Layer configuration
                inputLayer: {
                    neuronSize: 0.08,
                    horizontalSpacing: 0.15,
                    verticalSpacing: 0.15
                },
                
                hiddenLayer: {
                    neuronSize: 0.15,
                    horizontalSpacing: 0.5,
                    verticalSpacing: 0.5
                },
                
                outputLayer: {
                    neuronSize: 0.25,
                    verticalSpacing: 0.8
                },
                
                // Label configuration
                labels: {
                    offsetY: 5,
                    scale: { x: 2, y: 0.5, z: 1 }
                },
                
                // Animation settings
                animation: {
                    dataCubeSize: 0.08,
                    arcHeight: 0.5,
                    duration: 1000,
                    maxOpacity: 0.8,
                    randomDelayFactor: 1000,
                    connectionsPerNeuron: 5,
                    hiddenLayerDelay: 1900,
                    outputLayerDelay: 2300,
                    resultDelay: 4000
                },
                
                // Colors
                colors: {
                    neuron: 0x3498db,
                    positiveWeight: 0x2ecc71,
                    negativeWeight: 0xe74c3c,
                    highlightedNeuron: 0xff5722
                }
            }
        };
        
        // Merge custom config with defaults
        this.config = this._mergeConfig(this.defaultConfig, customConfig);
        
        // Global state management
        this.state = {
            selectedCards: new Set(),
            selectionListeners: new Set(),
            currentView: 'card', // 'card' or 'network'
            // Track click state
            isClicking: false,
            clickStartTime: 0,
            clickStartPosition: new THREE.Vector2()
        };
        
        this._initializeScene();
        this._setupLighting();
        this._initializePhysics();
        this._setupEventListeners();
        
        // TextPhysics will be initialized later when needed
        this.textPhysics = null;
        this.neuralNetworkManager = null;
    }
    
    /**
     * Deep merge two configuration objects
     * @private
     */
    _mergeConfig(defaultConfig, customConfig) {
        const result = { ...defaultConfig };
        
        for (const key in customConfig) {
            if (typeof customConfig[key] === 'object' && 
                customConfig[key] !== null && 
                !Array.isArray(customConfig[key]) &&
                defaultConfig.hasOwnProperty(key)) {
                
                result[key] = this._mergeConfig(defaultConfig[key], customConfig[key]);
            } else {
                result[key] = customConfig[key];
            }
        }
        
        return result;
    }

    _initializePhysics() {
        // Initialize physics world
        this.world = new CANNON.World();
        this.world.gravity.set(0, -9.82, 0);
        this.world.broadphase = new CANNON.NaiveBroadphase();
        
        // Create ground plane
        const groundShape = new CANNON.Plane();
        const groundBody = new CANNON.Body({
            mass: 0,
            shape: groundShape
        });
        groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2);
        groundBody.position.set(0, -2, 0);
        this.world.addBody(groundBody);
    }

    initTextPhysics() {
        if (!this.textPhysics) {
            this.textPhysics = new TextPhysics(this.scene, this.world);
        }
        return this.textPhysics;
    }

    animateText(text) {
        if (!this.textPhysics) {
            console.warn('TextPhysics not initialized');
            return false;
        }
        
        this.textPhysics.animateText(text);
        return true;
    }
    
    /**
     * Initialize the neural network manager
     */
    initNeuralNetwork() {
        if (!this.neuralNetworkManager) {
            console.log('Initializing neural network manager');
            this.neuralNetworkManager = new NeuralNetworkManager(this.scene, this.camera, this);
            this.neuralNetworkManager.initialize();
        }
        return this.neuralNetworkManager;
    }
    
    /**
     * Switch to the neural network view
     */
    showNeuralNetwork() {
        if (!this.neuralNetworkManager) {
            this.initNeuralNetwork();
        }
        
        console.log('Switching to neural network view');
        this.state.currentView = 'network';
        
        // Hide all cards
        this.interactiveObjects.forEach(obj => {
            if (obj instanceof InteractiveCard) {
                obj.visible = false;
            }
        });
        
        // Hide all buttons except debug button
        this.buttonObjects.forEach(button => {
            if (!(button._props.text === 'Debug Camera')) {
                button.visible = false;
            }
        });
        
        // Show neural network
        this.neuralNetworkManager.show();
    }
    
    /**
     * Switch back to the card view
     */
    showCardView() {
        console.log('Switching back to card view');
        this.state.currentView = 'card';
        
        // Hide neural network UI (note: the network group will be hidden after the camera transition)
        if (this.neuralNetworkManager && this.neuralNetworkManager.ui.overlayContainer) {
            this.neuralNetworkManager.ui.overlayContainer.style.display = 'none';
        }
        
        // Show all cards
        this.interactiveObjects.forEach(obj => {
            if (obj instanceof InteractiveCard) {
                obj.visible = true;
            }
        });
        
        // Show all buttons
        this.buttonObjects.forEach(button => {
            button.visible = true;
        });
    }
    
    // Update method including neural network update
    update(deltaTime) {
        // Step the physics world
        const now = performance.now();
        const physicsDeltaTime = now - (this.lastPhysicsTime || now);
        this.lastPhysicsTime = now;
        const fixedTimeStep = 1/60; // 60 fps
        this.world.step(fixedTimeStep, physicsDeltaTime / 1000, 3);
        
        // Update text physics if initialized
        if (this.textPhysics) {
            this.textPhysics.update(deltaTime);
        }
        
        // Update neural network animations if initialized
        // Note: We update animations regardless of current view to ensure camera transitions complete
        if (this.neuralNetworkManager) {
            this.neuralNetworkManager.updateAnimations();
        }
        
        // Update all objects
        this.interactiveObjects.forEach(object => object.update(deltaTime));
        
        // Render scene
        this.renderer.render(this.scene, this.camera);
    }
    
    // Clean up resources
    dispose() {
        // Clean up event listeners
        window.removeEventListener('resize', this._onWindowResize);
        this.renderer.domElement.removeEventListener('pointerdown', this._onPointerDown);
        this.renderer.domElement.removeEventListener('pointermove', this._onPointerMove);
        this.renderer.domElement.removeEventListener('pointerup', this._onPointerUp);
        this.renderer.domElement.removeEventListener('pointerout', this._onPointerUp);
        
        // Clean up text physics if initialized
        if (this.textPhysics) {
            this.textPhysics.dispose();
            this.textPhysics = null;
        }
        
        // Clean up neural network manager if initialized
        if (this.neuralNetworkManager) {
            this.neuralNetworkManager.dispose();
            this.neuralNetworkManager = null;
        }
        
        // Dispose of interactive objects
        this.interactiveObjects.forEach(object => {
            object.dispose();
        });
        this.interactiveObjects.clear();
        
        // Dispose of button objects
        this.buttonObjects.clear();
        
        // Dispose of renderer
        this.renderer.dispose();
        
        // Remove canvas from container
        if (this.container.contains(this.renderer.domElement)) {
            this.container.removeChild(this.renderer.domElement);
        }
    }

    _initializeScene() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.config.scene.background);

        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            this.config.camera.fov,
            window.innerWidth / window.innerHeight,
            this.config.camera.near,
            this.config.camera.far
        );
        this.camera.position.set(
            this.config.camera.position.x,
            this.config.camera.position.y,
            this.config.camera.position.z
        );

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
        // Don't process interactions when in network view (except for the debug button)
        if (this.state.currentView === 'network') {
            // Only include the debug button in network view
            return Array.from(this.buttonObjects)
                .filter(button => button._props.text === 'Debug Camera')
                .map(button => button.interactiveMesh)
                .filter(mesh => mesh != null);
        }
        
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
        
        // Set click tracking state
        this.state.isClicking = true;
        this.state.clickStartTime = Date.now();
        this.state.clickStartPosition = new THREE.Vector2(event.clientX, event.clientY);
        
        // Update raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        // Enable all raycasting layers
        this.raycaster.layers.set(0); // Default layer
        this.raycaster.layers.enable(1); // Interactive objects layer
        
        // Special handling for buttons - check them first
        const buttonMeshes = Array.from(this.buttonObjects)
            .map(obj => obj.interactiveMesh)
            .filter(mesh => mesh != null && mesh.visible);
            
        const buttonIntersects = this.raycaster.intersectObjects(buttonMeshes);
        
        if (buttonIntersects.length > 0) {
            const intersectedButton = this._findParentObject(buttonIntersects[0].object);
            
            if (intersectedButton) {
                if (this.config.debug) {
                    console.log(`Button intersected: ${intersectedButton._props.text}`);
                }
                
                // Don't start drag events for buttons
                return;
            }
        }
        
        // Regular interactive object handling
        if (this.state.currentView === 'network') return;
        
        // Get all intersected objects (excluding buttons)
        const intersects = this.raycaster.intersectObjects(this._getInteractiveMeshes());

        if (intersects.length > 0) {
            const intersectedObject = this._findParentObject(intersects[0].object);
            if (intersectedObject && !(intersectedObject instanceof ConfirmButton)) {
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
        
        // Skip all other processing in network view except for the debug button
        if (this.state.currentView === 'network' && 
            !this.raycaster.intersectObjects(
                Array.from(this.buttonObjects)
                    .filter(button => button._props.text === 'Debug Camera')
                    .map(button => button.interactiveMesh)
            ).length) {
            return;
        }
        
        // Update raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        // If dragging, move the object
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
            // Special handling for buttons - check them first
            const buttonMeshes = Array.from(this.buttonObjects)
                .map(obj => obj.interactiveMesh)
                .filter(mesh => mesh != null && mesh.visible);
                
            const buttonIntersects = this.raycaster.intersectObjects(buttonMeshes);
            
            // Create event object for buttons
            const eventData = {
                clientX: event.clientX,
                clientY: event.clientY,
                camera: this.camera
            };
            
            // Update hover states for buttons
            this.buttonObjects.forEach(button => {
                const isIntersected = buttonIntersects.some(
                    intersect => this._findParentObject(intersect.object) === button
                );
                
                if (isIntersected && !button._state.isHovering) {
                    button.onPointerEnter(eventData);
                } else if (!isIntersected && button._state.isHovering) {
                    button.onPointerLeave(eventData);
                }
            });
            
            // Handle hover for regular objects
            const intersects = this.raycaster.intersectObjects(this._getInteractiveMeshes());

            // Update hover states for all objects
            this.interactiveObjects.forEach(obj => {
                // Skip buttons (handled separately)
                if (obj instanceof ConfirmButton) return;
                
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
        
        // If we've moved too far, we're not clicking anymore
        if (this.state.isClicking) {
            const dragPosition = new THREE.Vector2(event.clientX, event.clientY);
            const distance = dragPosition.distanceTo(this.state.clickStartPosition);
            
            if (distance > this.config.card.selection.moveThreshold) {
                this.state.isClicking = false;
            }
        }
    }

    _onPointerUp(event) {
        // Calculate if this was a click
        const clickEndTime = Date.now();
        const clickDuration = clickEndTime - this.state.clickStartTime;
        const isClick = this.state.isClicking && 
                       clickDuration < this.config.card.selection.clickThreshold;
        
        if (isClick) {
            if (this.config.debug) {
                console.log("Click detected");
            }
            
            // Update raycaster
            this._updateMousePosition(event);
            this.raycaster.setFromCamera(this.mouse, this.camera);
            
            // Check for button clicks first
            const buttonMeshes = Array.from(this.buttonObjects)
                .map(obj => obj.interactiveMesh)
                .filter(mesh => mesh != null && mesh.visible);
                
            const buttonIntersects = this.raycaster.intersectObjects(buttonMeshes);
            
            if (buttonIntersects.length > 0) {
                const clickedButton = this._findParentObject(buttonIntersects[0].object);
                
                if (clickedButton) {
                    console.log(`Button clicked: ${clickedButton._props.text}`);
                    
                    // Call the direct click method on the button
                    if (typeof clickedButton.onDirectClick === 'function') {
                        clickedButton.onDirectClick(event);
                    } else {
                        console.warn("Button does not have onDirectClick method");
                    }
                    
                    // Skip other processing
                    this.state.isClicking = false;
                    return;
                }
            }
        }
        
        // Reset clicking state
        this.state.isClicking = false;
        
        // Skip all other processing in network view
        if (this.state.currentView === 'network') return;
        
        // Handle drag end
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
        
        // Track buttons separately
        if (object instanceof ConfirmButton) {
            this.buttonObjects.add(object);
        }
        
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
        // Merge with default card config
        const cardConfig = {
            width: this.config.card.dimensions.width,
            height: this.config.card.dimensions.height,
            springPhysics: {
                strength: this.config.card.physics.strength,
                damping: this.config.card.physics.damping,
                wiggleStrength: this.config.card.physics.wiggleStrength,
                wiggleDamping: this.config.card.physics.wiggleDamping
            },
            dragBehavior: {
                returnSpeed: this.config.card.dragging.returnSpeed,
                dampingFactor: this.config.card.dragging.dampingFactor,
                enabled: true
            },
            selectionBehavior: {
                enabled: true,
                clickThreshold: this.config.card.selection.clickThreshold,
                moveThreshold: this.config.card.selection.moveThreshold
            },
            hoverBehavior: {
                enabled: true
            },
            ...config,
            texture
        };
        
        const card = new InteractiveCard(cardConfig);
        
        // Reference to scene manager for animations
        card.sceneManager = this;
        
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
     * Create and add an analyze button for neural network visualization
     * @param {Object} config - Button configuration
     * @return {ConfirmButton} The created button
     */
    addAnalyzeButton(config = {}) {
        const buttonConfig = {
            width: this.config.button.dimensions.analyzeWidth,
            height: this.config.button.dimensions.analyzeHeight,
            position: this.config.button.positions.analyze,
            text: 'Analyze Card',
            fontColor: '#ffffff',
            activeColor: this.config.button.colors.activeAnalyze,
            inactiveColor: this.config.button.colors.inactiveAnalyze,
            ...config
        };
        
        const button = new ConfirmButton(buttonConfig);
        
        // Add button to scene
        this.addObject(button);
        
        // Set inactive by default
        button.setActive(false);
        
        // Set up click handler to show neural network
        button.setCallback('onClick', () => {
            console.log('Analyze button clicked!');
            this.showNeuralNetwork();
        });
        
        // Add selection listener to update button state
        this.addSelectionListener((selectedCards) => {
            button.setActive(selectedCards.length > 0);
        });
        
        return button;
    }
    
    /**
     * Add a debug camera button that tests camera transitions
     */
    addDebugCameraButton() {
        if (this.config.debug) {
            console.log("Adding debug camera button");
        }
        
        const button = new ConfirmButton({
            width: this.config.button.dimensions.debugWidth,
            height: this.config.button.dimensions.debugHeight,
            position: this.config.button.positions.debug,
            text: 'Debug Camera',
            fontColor: '#ffffff',
            activeColor: this.config.button.colors.activeDebug,
            inactiveColor: this.config.button.colors.inactiveDebug
        });
        
        // Add button to scene
        this.addObject(button);
        
        // Always active
        button.setActive(true);
        
        // Set up click handler
        let toggle = false;
        button.setCallback('onClick', () => {
            console.log('Debug camera button clicked!');
            
            if (!this.neuralNetworkManager) {
                this.initNeuralNetwork();
            }
            
            if (toggle) {
                // Return to original position
                console.log('Moving camera back to original position');
                this.camera.position.set(
                    this.config.camera.position.x,
                    this.config.camera.position.y,
                    this.config.camera.position.z
                );
            } else {
                // Move to network view position
                console.log('Moving camera to network view position');
                this.camera.position.set(
                    this.config.neuralNetwork.camera.position.x,
                    this.config.neuralNetwork.camera.position.y,
                    this.config.neuralNetwork.camera.position.z
                );
            }
            
            toggle = !toggle;
        });
        
        return button;
    }

    /**
     * Remove an object from the scene
     * @param {InteractiveObject} object - The object to remove
     */
    removeObject(object) {
        this.interactiveObjects.delete(object);
        
        if (object instanceof ConfirmButton) {
            this.buttonObjects.delete(object);
        }
        
        this.scene.remove(object);
        object.dispose();
    }
    
    /**
     * Update the configuration
     * @param {Object} newConfig - New configuration values
     */
    updateConfig(newConfig) {
        this.config = this._mergeConfig(this.config, newConfig);
        
        // Update camera position if not in network view
        if (this.state.currentView !== 'network') {
            this.camera.position.set(
                this.config.camera.position.x,
                this.config.camera.position.y,
                this.config.camera.position.z
            );
        }
        
        // Other updates can be applied as needed
        
        if (this.config.debug) {
            console.log("Configuration updated:", this.config);
        }
    }
}