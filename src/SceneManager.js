import * as THREE from 'three';
import InteractiveCard from './testcard';

class SceneManager {
    constructor(container) {
        this.container = container;
        this.cards = new Set();
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.draggedCard = null;
        
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

    _onPointerDown(event) {
        this._updateMousePosition(event);
        
        // Update raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        // Get all intersected cards
        const intersects = this.raycaster.intersectObjects(
            Array.from(this.cards).map(card => card.cardMesh)
        );

        if (intersects.length > 0) {
            const intersectedCard = intersects[0].object.userData.parent;
            this.draggedCard = intersectedCard;
            
            // Create event object with necessary data
            const eventData = {
                clientX: event.clientX,
                clientY: event.clientY,
                ray: this.raycaster.ray,
                camera: this.camera
            };
            
            intersectedCard.onDragStart(eventData);
            
            // Bring card to front
            this._bringToFront(intersectedCard);
        }
    }

    _onPointerMove(event) {
        const previousX = this.mouse.x;
        this._updateMousePosition(event);
        
        // Update raycaster
        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        if (this.draggedCard) {
            // Handle drag
            const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
            const intersectPoint = new THREE.Vector3();
            this.raycaster.ray.intersectPlane(intersectPlane, intersectPoint);
            
            // Update card position
            this.draggedCard.position.copy(intersectPoint);
            this.draggedCard.position.add(this.draggedCard._state.dragOffset);
            
            // Calculate and apply rotation based on drag velocity
            const rotationAmount = THREE.MathUtils.clamp(
                (this.mouse.x - previousX) * -2,
                -Math.PI / 4,
                Math.PI / 4
            );
            this.draggedCard.rotation.z = rotationAmount;
        } else {
            // Handle hover
            const intersects = this.raycaster.intersectObjects(
                Array.from(this.cards).map(card => card.cardMesh)
            );
            
            // Create event object
            const eventData = {
                clientX: event.clientX,
                clientY: event.clientY,
                camera: this.camera
            };

            // Update hover states
            this.cards.forEach(card => {
                const isIntersected = intersects.some(
                    intersect => intersect.object.userData.parent === card
                );
                
                if (isIntersected && !card._state.isHovering) {
                    card.onPointerEnter(eventData);
                } else if (!isIntersected && card._state.isHovering) {
                    card.onPointerLeave(eventData);
                }
                
                if (isIntersected) {
                    card.onPointerMove(eventData);
                }
            });
        }
    }

    _onPointerUp(event) {
        if (this.draggedCard) {
            this.draggedCard.onDragEnd({
                clientX: event.clientX,
                clientY: event.clientY
            });
            this.draggedCard = null;
        }
    }

    _bringToFront(card) {
        // Calculate new z-position that's slightly in front of all other cards
        let maxZ = Math.max(
            ...Array.from(this.cards).map(c => c.position.z)
        );
        // Only adjust if the card is not already selected (which elevates it)
        if (!card._state.isSelected) {
            card.position.z = maxZ + 0.01;
        }
    }

    addCard(texture, config = {}) {
        const card = new InteractiveCard({ texture, ...config });
        this.cards.add(card);
        this.scene.add(card);
        return card;
    }

    removeCard(card) {
        this.cards.delete(card);
        this.scene.remove(card);
        card.dispose();
    }

    update(deltaTime) {
        // Update all cards
        this.cards.forEach(card => card.update(deltaTime));
        
        // Render scene
        this.renderer.render(this.scene, this.camera);
    }

    dispose() {
        // Clean up event listeners
        window.removeEventListener('resize', this._onWindowResize);
        this.renderer.domElement.removeEventListener('pointerdown', this._onPointerDown);
        this.renderer.domElement.removeEventListener('pointermove', this._onPointerMove);
        this.renderer.domElement.removeEventListener('pointerup', this._onPointerUp);
        this.renderer.domElement.removeEventListener('pointerout', this._onPointerUp);
        
        // Dispose of cards
        this.cards.forEach(card => {
            card.dispose();
        });
        this.cards.clear();
        
        // Dispose of renderer
        this.renderer.dispose();
        
        // Remove canvas from container
        if (this.container.contains(this.renderer.domElement)) {
            this.container.removeChild(this.renderer.domElement);
        }
    }
}

export default SceneManager;