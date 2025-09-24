import * as THREE from 'three';

/**
 * Base class for all scenes in the application
 */
export default class BaseScene extends THREE.Group {
    constructor(sceneController, config = {}) {
        super();
        
        this.sceneController = sceneController;
        this.config = config;
        this.isActive = false;
        this.resources = new Set(); // Track resources for cleanup
        
        // Scene-specific camera configuration
        this.cameraConfig = {
            position: new THREE.Vector3(0, 0, 5),
            rotation: new THREE.Euler(0, 0, 0),
            lookAt: null,
            transitionDuration: 1000,
            ...config.camera
        };
        
        // UI container for DOM elements
        this.uiContainer = null;
        
        // Animation/transition state
        this.transitionState = {
            phase: 'inactive', // 'entering', 'active', 'exiting', 'inactive'
            progress: 0
        };
    }
    
    /**
     * Initialize the scene (called once when first created)
     * Override this to set up your scene's objects
     */
    async initialize() {
        // Create UI container
        this.uiContainer = document.createElement('div');
        this.uiContainer.className = 'scene-ui-container';
        this.uiContainer.style.position = 'absolute';
        this.uiContainer.style.top = '0';
        this.uiContainer.style.left = '0';
        this.uiContainer.style.width = '100%';
        this.uiContainer.style.height = '100%';
        this.uiContainer.style.pointerEvents = 'none';
        this.uiContainer.style.display = 'none';
        document.body.appendChild(this.uiContainer);
        
        // Override in subclasses to create scene content
        await this._createSceneContent();
    }
    
    /**
     * Called when entering this scene
     * @param {Object} transitionData - Data passed from previous scene
     */
    async onEnter(transitionData = {}) {
        console.log(`Entering scene: ${this.constructor.name}`, transitionData);
        this.isActive = true;
        this.transitionState.phase = 'entering';
        this.visible = true;
        
        // Show UI
        if (this.uiContainer) {
            this.uiContainer.style.display = 'block';
            // Allow UI interaction after a delay
            setTimeout(() => {
                this.uiContainer.style.pointerEvents = 'auto';
            }, 100);
        }
        
        // Start enter transition
        await this._playEnterTransition(transitionData);
        
        this.transitionState.phase = 'active';
    }
    
    /**
     * Called when exiting this scene
     * @param {Object} transitionData - Data to pass to next scene
     */
    async onExit(transitionData = {}) {
        console.log(`Exiting scene: ${this.constructor.name}`, transitionData);
        this.transitionState.phase = 'exiting';
        
        // Hide UI
        if (this.uiContainer) {
            this.uiContainer.style.pointerEvents = 'none';
        }
        
        // Play exit transition
        await this._playExitTransition(transitionData);
        
        // Hide everything
        this.visible = false;
        if (this.uiContainer) {
            this.uiContainer.style.display = 'none';
        }
        
        this.isActive = false;
        this.transitionState.phase = 'inactive';
    }
    
    /**
     * Update loop (called every frame when scene is active)
     * @param {number} deltaTime - Time since last update
     */
    update(deltaTime) {
        // Override in subclasses
    }
    
    /**
     * Handle pointer/mouse events
     * @param {string} eventType - 'pointerdown', 'pointermove', 'pointerup'
     * @param {Object} eventData - Event data including mouse position, ray, etc.
     */
    handlePointerEvent(eventType, eventData) {
        // Override in subclasses to handle interaction
    }
    
    /**
     * Get camera configuration for this scene
     * @returns {Object} Camera configuration
     */
    getCameraConfig() {
        return this.cameraConfig;
    }
    
    /**
     * Clean up resources
     */
    dispose() {
        console.log(`Disposing scene: ${this.constructor.name}`);
        
        // Clean up UI
        if (this.uiContainer && this.uiContainer.parentNode) {
            this.uiContainer.parentNode.removeChild(this.uiContainer);
        }
        
        // Dispose of tracked resources
        this.resources.forEach(resource => {
            if (resource.dispose) {
                resource.dispose();
            }
        });
        this.resources.clear();
        
        // Remove all children
        while (this.children.length > 0) {
            const child = this.children[0];
            this.remove(child);
            if (child.geometry) child.geometry.dispose();
            if (child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => m.dispose());
                } else {
                    child.material.dispose();
                }
            }
        }
    }
    
    /**
     * Helper to add a resource that needs cleanup
     * @protected
     */
    _trackResource(resource) {
        this.resources.add(resource);
        return resource;
    }
    
    /**
     * Create scene content (override in subclasses)
     * @protected
     */
    async _createSceneContent() {
        // Override this method to create your scene
        console.warn(`${this.constructor.name} should override _createSceneContent()`);
    }
    
    /**
     * Play enter transition (override for custom transitions)
     * @protected
     */
    async _playEnterTransition(transitionData) {
        // Default: fade in
        return new Promise(resolve => {
            const duration = 500;
            const startTime = Date.now();
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                this.transitionState.progress = progress;
                
                // Simple fade in
                this.traverse(child => {
                    if (child.material) {
                        child.material.opacity = progress;
                    }
                });
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            
            // Ensure materials are transparent
            this.traverse(child => {
                if (child.material && !child.material.transparent) {
                    child.material.transparent = true;
                }
            });
            
            animate();
        });
    }
    
    /**
     * Play exit transition (override for custom transitions)
     * @protected
     */
    async _playExitTransition(transitionData) {
        // Default: fade out
        return new Promise(resolve => {
            const duration = 500;
            const startTime = Date.now();
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                this.transitionState.progress = 1 - progress;
                
                // Simple fade out
                this.traverse(child => {
                    if (child.material) {
                        child.material.opacity = 1 - progress;
                    }
                });
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            
            animate();
        });
    }
}