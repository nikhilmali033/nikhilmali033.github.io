import * as THREE from 'three';

/**
 * Manages scene transitions and lifecycle
 */
export default class SceneController {
    constructor(container, config = {}) {
        this.container = container;
        this.config = config;
        
        // Scene registry
        this.scenes = new Map();
        this.currentScene = null;
        this.previousScene = null;
        
        // Transition state
        this.isTransitioning = false;
        
        // Three.js core
        this.renderer = null;
        this.camera = null;
        this.scene = null;
        
        // Camera transition state
        this.cameraTransition = null;
        
        // Global resources (shared between scenes)
        this.globalResources = {
            raycaster: new THREE.Raycaster(),
            mouse: new THREE.Vector2(),
            clock: new THREE.Clock()
        };

        // --- DEBUG ---
        this._debug = true;
        
        this._initializeRenderer();
        this._setupEventListeners();
    }
    
    /**
     * Register a scene
     * @param {string} name - Scene identifier
     * @param {BaseScene} SceneClass - Scene class (not instance)
     * @param {Object} config - Scene-specific configuration
     * @returns {SceneController} - Returns this for method chaining
     */
    registerScene(name, SceneClass, config = {}) {
        if (this.scenes.has(name)) {
            console.warn(`Scene '${name}' already registered, overwriting...`);
        }
        
        // Validate that SceneClass is a constructor
        if (typeof SceneClass !== 'function') {
            throw new Error(`Scene class for '${name}' must be a constructor function or class`);
        }
        
        // Store scene information
        this.scenes.set(name, {
            Class: SceneClass,
            instance: null,
            config: config,
            initialized: false,
            metadata: {
                registeredAt: Date.now(),
                transitionCount: 0,
                lastActivated: null
            }
        });
        
        console.log(`Scene '${name}' registered successfully`);
        
        // Return this for method chaining
        return this;
    }
    
    /**
     * Transition to a scene
     * @param {string} sceneName - Name of the scene to transition to
     * @param {Object} transitionData - Data to pass to the new scene
     * @returns {Promise<boolean>} Success status
     */
    async transitionTo(sceneName, transitionData = {}) {
        if (this.isTransitioning) {
            console.warn('Transition already in progress');
            return false;
        }
        
        const sceneInfo = this.scenes.get(sceneName);
        if (!sceneInfo) {
            console.error(`Scene '${sceneName}' not found`);
            return false;
        }
        
        this.isTransitioning = true;
        
        try {
            // Initialize scene if needed
            if (!sceneInfo.initialized) {
                console.log(`Initializing scene: ${sceneName}`);
                sceneInfo.instance = new sceneInfo.Class(this, sceneInfo.config);
                await sceneInfo.instance.initialize();
                this.scene.add(sceneInfo.instance);
                sceneInfo.initialized = true;
            }
            
            const newScene = sceneInfo.instance;
            
            // Exit current scene
            if (this.currentScene) {
                await this.currentScene.onExit(transitionData);
                this.previousScene = this.currentScene;
            }
            
            // Transition camera
            await this._transitionCamera(newScene.getCameraConfig());
            
            // Enter new scene
            await newScene.onEnter(transitionData);
            
            this.currentScene = newScene;
            this.isTransitioning = false;
            
            console.log(`Transitioned to scene: ${sceneName}`);
            return true;
            
        } catch (error) {
            console.error(`Error transitioning to scene '${sceneName}':`, error);
            this.isTransitioning = false;
            return false;
        }
    }
    
    /**
     * Get current scene name
     * @returns {string|null} Current scene name
     */
    getCurrentSceneName() {
        for (const [name, info] of this.scenes) {
            if (info.instance === this.currentScene) {
                return name;
            }
        }
        return null;
    }
    
    /**
     * Update loop
     */
    update() {
        const deltaTime = this.globalResources.clock.getDelta();
        
        // Update camera transition
        if (this.cameraTransition && this.cameraTransition.active) {
            this._updateCameraTransition();
        }
        
        // Update current scene
        if (this.currentScene && this.currentScene.isActive) {
            this.currentScene.update(deltaTime);
        }
        
        // Render
        this.renderer.render(this.scene, this.camera);
    }
    
    /**
     * Handle window resize
     */
    handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
    
    /**
     * Clean up resources
     */
    dispose() {
        // Dispose all scenes
        this.scenes.forEach(sceneInfo => {
            if (sceneInfo.instance) {
                sceneInfo.instance.dispose();
            }
        });
        this.scenes.clear();
        
        // Clean up event listeners
        window.removeEventListener('resize', this._onWindowResize);
        this.renderer.domElement.removeEventListener('pointerdown', this._onPointerDown);
        this.renderer.domElement.removeEventListener('pointermove', this._onPointerMove);
        this.renderer.domElement.removeEventListener('pointerup', this._onPointerUp);
        
        // Dispose renderer
        this.renderer.dispose();
        
        // Remove canvas
        if (this.container.contains(this.renderer.domElement)) {
            this.container.removeChild(this.renderer.domElement);
        }
    }
    
    /**
     * Initialize Three.js renderer and scene
     * @private
     */
    _initializeRenderer() {
        // Create scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(this.config.background || 0x000033);
        
        // Create camera
        const fov = this.config.camera?.fov || 75;
        const aspect = window.innerWidth / window.innerHeight;
        const near = this.config.camera?.near || 0.1;
        const far = this.config.camera?.far || 1000;
        
        this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        this.camera.position.z = 5;
        
        // Create renderer
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: this.config.alpha || false
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        
        if (this.config.shadows !== false) {
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        }
        
        // Add to container
        this.container.appendChild(this.renderer.domElement);
        
        // Add basic lighting (scenes can add their own)
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
        directionalLight.position.set(5, 5, 5);
        if (this.config.shadows !== false) {
            directionalLight.castShadow = true;
            directionalLight.shadow.camera.near = 0.1;
            directionalLight.shadow.camera.far = 50;
            directionalLight.shadow.camera.left = -10;
            directionalLight.shadow.camera.right = 10;
            directionalLight.shadow.camera.top = 10;
            directionalLight.shadow.camera.bottom = -10;
            directionalLight.shadow.mapSize.width = 2048;
            directionalLight.shadow.mapSize.height = 2048;
        }
        this.scene.add(directionalLight);
    }
    
    /**
     * Set up event listeners
     * @private
     */
    _setupEventListeners() {
        // Window resize
        this._onWindowResize = this.handleResize.bind(this);
        window.addEventListener('resize', this._onWindowResize);
        
        // Pointer events
        this._onPointerDown = this._handlePointerEvent.bind(this, 'pointerdown');
        this._onPointerMove = this._handlePointerEvent.bind(this, 'pointermove');
        this._onPointerUp = this._handlePointerEvent.bind(this, 'pointerup');
        
        this.renderer.domElement.addEventListener('pointerdown', this._onPointerDown);
        this.renderer.domElement.addEventListener('pointermove', this._onPointerMove);
        this.renderer.domElement.addEventListener('pointerup', this._onPointerUp);
    }
    
    /**
     * Handle pointer events
     * @private
     */
    _handlePointerEvent(eventType, event) {
        // Update mouse position
        this.globalResources.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        this.globalResources.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        
        // Update raycaster
        this.globalResources.raycaster.setFromCamera(this.globalResources.mouse, this.camera);
        
        // Create event data
        const eventData = {
            type: eventType,
            clientX: event.clientX,
            clientY: event.clientY,
            mouse: this.globalResources.mouse,
            raycaster: this.globalResources.raycaster,
            camera: this.camera,
            originalEvent: event
        };
        
        // Pass to current scene
        if (this.currentScene && this.currentScene.isActive && !this.isTransitioning) {
            if (this._debug) {
                console.log(`[SceneController] Dispatching '${eventType}' to scene: ${this.currentScene.constructor.name}`);
            }
            this.currentScene.handlePointerEvent(eventType, eventData);
        }
    }
    
    /**
     * Transition camera to new position/rotation
     * @private
     */
    async _transitionCamera(cameraConfig) {
        return new Promise(resolve => {
            const startPosition = this.camera.position.clone();
            const startQuaternion = this.camera.quaternion.clone();
            
            const targetPosition = new THREE.Vector3(
                cameraConfig.position.x,
                cameraConfig.position.y,
                cameraConfig.position.z
            );
            
            let targetQuaternion;
            if (cameraConfig.lookAt) {
                const tempCamera = this.camera.clone();
                tempCamera.position.copy(targetPosition);
                tempCamera.lookAt(
                    cameraConfig.lookAt.x || 0,
                    cameraConfig.lookAt.y || 0,
                    cameraConfig.lookAt.z || 0
                );
                targetQuaternion = tempCamera.quaternion.clone();
            } else if (cameraConfig.rotation) {
                targetQuaternion = new THREE.Quaternion().setFromEuler(
                    new THREE.Euler(
                        cameraConfig.rotation.x,
                        cameraConfig.rotation.y,
                        cameraConfig.rotation.z,
                        'XYZ'
                    )
                );
            } else {
                targetQuaternion = this.camera.quaternion.clone();
            }
            
            this.cameraTransition = {
                startPosition,
                targetPosition,
                startQuaternion,
                targetQuaternion,
                startTime: Date.now(),
                duration: cameraConfig.transitionDuration || 1000,
                active: true,
                onComplete: resolve
            };
        });
    }
    
    /**
     * Update camera transition
     * @private
     */
    _updateCameraTransition() {
        const transition = this.cameraTransition;
        const elapsed = Date.now() - transition.startTime;
        const progress = Math.min(elapsed / transition.duration, 1);
        
        // Easing function
        const eased = this._easeInOutCubic(progress);
        
        // Interpolate position
        this.camera.position.lerpVectors(
            transition.startPosition,
            transition.targetPosition,
            eased
        );
        
        // Interpolate rotation
        this.camera.quaternion.slerpQuaternions(
            transition.startQuaternion,
            transition.targetQuaternion,
            eased
        );
        
        if (progress >= 1) {
            transition.active = false;
            if (transition.onComplete) {
                transition.onComplete();
            }
        }
    }
    
    /**
     * Cubic easing function
     * @private
     */
    _easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
}