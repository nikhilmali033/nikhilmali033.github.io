import * as THREE from 'three';

/**
 * Base class for all interactive objects in the scene
 */
export default class InteractiveObject extends THREE.Object3D {
    constructor(config = {}) {
        super();

        // Set default configs
        this.config = {
            // Initial position
            position: {
                x: 0,
                y: 0,
                z: 0
            },
            // Physics configuration
            springPhysics: {
                strength: 0.3,
                damping: 0.75
            },
            // Drag behavior
            dragBehavior: {
                returnSpeed: 0.1,
                dampingFactor: 0.95,
                enabled: false
            },
            // Selection behavior
            selectionBehavior: {
                enabled: false,
                clickThreshold: 200,    // Max time for a click in ms
                moveThreshold: 5        // Max movement for a click in pixels
            },
            // Hover behavior
            hoverBehavior: {
                enabled: false
            },
            // Override any defaults with passed config
            ...config
        };

        // State object common to all interactive objects
        this._state = {
            // Interaction states
            isDragging: false,
            isHovering: false,
            isSelected: false,
            
            // Drag tracking
            dragOffset: new THREE.Vector3(),
            dragStartTime: 0,
            dragStartPosition: new THREE.Vector2(),
            
            // Physics
            velocity: new THREE.Vector3(),
            
            // Callbacks
            onSelect: null,
            onDeselect: null,
            onClick: null,
            onDragStart: null,
            onDragEnd: null
        };
        
        // Every interactive object must have at least one mesh for interaction
        this.interactiveMesh = null;
        
        // Set initial position from config
        this.position.set(
            this.config.position.x,
            this.config.position.y,
            this.config.position.z
        );
    }
    
    /**
     * Initialize core interaction capabilities
     * @protected
     */
    _initializeInteraction() {
        if (!this.interactiveMesh) {
            console.warn('Interactive object has no interactiveMesh');
            return;
        }
        
        // Make mesh interactive
        this.interactiveMesh.userData.parent = this;
        this.interactiveMesh.userData.type = 'InteractiveObject';
        
        // Set up raycasting layer
        this.interactiveMesh.layers.enable(1); // Layer 1 for interactive objects
    }
    
    /**
     * Set a callback function
     * @param {string} callbackName - Name of the callback
     * @param {Function} callbackFunction - Function to call
     */
    setCallback(callbackName, callbackFunction) {
        if (typeof callbackFunction !== 'function') {
            console.warn(`Invalid callback: ${callbackName}`);
            return;
        }
        
        this._state[callbackName] = callbackFunction;
    }
    
    /**
     * Handle pointer enter event
     * @param {Object} event - Pointer event data
     * @virtual
     */
    onPointerEnter(event) {
        if (!this.config.hoverBehavior.enabled) return;
        
        if (!this._state.isDragging) {
            this._state.isHovering = true;
            // Object-specific behavior should be implemented in subclasses
        }
    }
    
    /**
     * Handle pointer leave event
     * @param {Object} event - Pointer event data
     * @virtual
     */
    onPointerLeave(event) {
        if (!this.config.hoverBehavior.enabled) return;
        
        if (!this._state.isDragging) {
            this._state.isHovering = false;
            // Object-specific behavior should be implemented in subclasses
        }
    }
    
    /**
     * Handle pointer move event
     * @param {Object} event - Pointer event data
     * @virtual
     */
    onPointerMove(event) {
        // By default, do nothing - override in subclasses
    }
    
    /**
     * Handle drag start event
     * @param {Object} event - Pointer event data
     * @virtual
     */
    onDragStart(event) {
        if (!this.config.dragBehavior.enabled) return;
        
        this._state.isDragging = true;
        this._state.velocity.set(0, 0, 0);
        
        // Calculate drag offset
        const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const intersectPoint = new THREE.Vector3();
        event.ray.intersectPlane(intersectPlane, intersectPoint);
        this._state.dragOffset.copy(this.position).sub(intersectPoint);
        
        // Record drag start time and position for click detection
        this._state.dragStartTime = Date.now();
        this._state.dragStartPosition = new THREE.Vector2(event.clientX, event.clientY);
        
        // Call custom callback
        if (this._state.onDragStart) {
            this._state.onDragStart(this, event);
        }
    }
    
    /**
     * Handle drag end event
     * @param {Object} event - Pointer event data
     * @virtual
     */
    onDragEnd(event) {
        if (!this.config.dragBehavior.enabled) return;
        
        this._state.isDragging = false;
        
        // Check if this was a click (short time and minimal movement)
        if (this.config.selectionBehavior.enabled) {
            const dragEndTime = Date.now();
            const dragDuration = dragEndTime - this._state.dragStartTime;
            
            const dragEndPosition = new THREE.Vector2(event.clientX, event.clientY);
            const distance = dragEndPosition.distanceTo(this._state.dragStartPosition);
            
            // If drag was short and movement was minimal, consider it a click
            if (dragDuration < this.config.selectionBehavior.clickThreshold && 
                distance < this.config.selectionBehavior.moveThreshold) {
                this._onClick(event);
            }
        }
        
        // Call custom callback
        if (this._state.onDragEnd) {
            this._state.onDragEnd(this, event);
        }
    }
    
    /**
     * Handle click event
     * @param {Object} event - Click event data
     * @private
     */
    _onClick(event) {
        if (this.config.selectionBehavior.enabled) {
            this.toggleSelected();
        }
        
        // Call custom callback
        if (this._state.onClick) {
            this._state.onClick(this, event);
        }
    }
    
    /**
     * Toggle selected state
     * @virtual
     */
    toggleSelected() {
        if (!this.config.selectionBehavior.enabled) return;
        
        this._state.isSelected = !this._state.isSelected;
        
        // Call appropriate callback
        if (this._state.isSelected && this._state.onSelect) {
            this._state.onSelect(this);
        } else if (!this._state.isSelected && this._state.onDeselect) {
            this._state.onDeselect(this);
        }
    }
    
    /**
     * Update object state
     * @param {number} deltaTime - Time since last update in milliseconds
     * @virtual
     */
    update(deltaTime) {
        // Default implementation just updates position based on velocity
        if (this.config.dragBehavior.enabled && !this._state.isDragging) {
            // Apply velocity and damping
            this.position.add(this._state.velocity);
            this._state.velocity.multiplyScalar(this.config.dragBehavior.dampingFactor);
            
            // Return to origin (x,y only)
            const targetPosition = new THREE.Vector3(0, 0, this.position.z);
            this.position.x += (targetPosition.x - this.position.x) * this.config.dragBehavior.returnSpeed;
            this.position.y += (targetPosition.y - this.position.y) * this.config.dragBehavior.returnSpeed;
        }
    }
    
    /**
     * Dispose of resources
     * @virtual
     */
    dispose() {
        // Default implementation does nothing
        // Subclasses should override this to clean up resources
    }
}