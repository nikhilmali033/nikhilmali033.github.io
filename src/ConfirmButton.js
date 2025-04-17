import * as THREE from 'three';
import InteractiveObject from './InteractiveObject';
import RoundedBoxGeometry from './RoundedBoxGeometry';

export default class ConfirmButton extends InteractiveObject {
    constructor({
        width = 1.2,
        height = 0.5,
        position = { x: 0, y: 0, z: 0 },
        text = 'Confirm',
        fontColor = '#ffffff',
        activeColor = 0x4287f5,
        inactiveColor = 0x787878,
        hoverBehavior = {
            enabled: true
        },
        selectionBehavior = {
            enabled: true,
            clickThreshold: 200,
            moveThreshold: 5
        }
    } = {}) {
        super({
            position,
            hoverBehavior,
            selectionBehavior,
            // Disable dragging for buttons
            dragBehavior: {
                enabled: false
            }
        });

        // Button-specific state
        this._buttonState = {
            isActive: false,
            scale: 1.0,
            targetScale: 1.0,
            scaleVelocity: 0,
            labelScale: 1.0,
            // Text cache
            textCanvas: null,
            textTexture: null
        };

        // Store properties
        this._props = {
            width,
            height,
            text,
            fontColor,
            activeColor,
            inactiveColor
        };

        // Create button mesh
        this._createButtonMesh();
        
        // Initialize interaction capabilities
        this._initializeInteraction();
        
        // Debug flag for tracing interaction events
        this._debug = true;
    }

    _createButtonMesh() {
        // Create geometry for button
        const geometry = new RoundedBoxGeometry(
            this._props.width, 
            this._props.height, 
            0.1,  // depth
            0.05, // radius
            3     // segments
        );
        
        // Create material - start with inactive
        const material = new THREE.MeshPhongMaterial({
            color: this._props.inactiveColor,
            shininess: 30,
            specular: 0x222222
        });

        // Create mesh
        this.buttonMesh = new THREE.Mesh(geometry, material);
        this.buttonMesh.castShadow = true;
        this.buttonMesh.receiveShadow = true;
        
        // Set as the interactive mesh for base class
        this.interactiveMesh = this.buttonMesh;
        
        // Add mesh to this Object3D
        this.add(this.buttonMesh);

        // Create text label
        this._createTextLabel();
    }

    _createTextLabel() {
        // Create canvas for text
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 512;
        canvas.height = 256;
        
        // Store for later updates
        this._buttonState.textCanvas = canvas;
        
        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        // Set text properties
        context.font = 'Bold 60px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        
        // Draw text
        context.fillStyle = this._props.fontColor;
        context.fillText(this._props.text, canvas.width / 2, canvas.height / 2);
        
        // Create texture from canvas
        const texture = new THREE.CanvasTexture(canvas);
        texture.needsUpdate = true;
        this._buttonState.textTexture = texture;
        
        // Create material with transparency
        const material = new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            side: THREE.DoubleSide
        });
        
        // Create plane for text
        const geometry = new THREE.PlaneGeometry(
            this._props.width * 0.9, 
            this._props.height * 0.7
        );
        
        // Create mesh
        this.textMesh = new THREE.Mesh(geometry, material);
        this.textMesh.position.z = 0.06; // Slightly in front of button
        
        // Add to button
        this.add(this.textMesh);
    }

    /**
     * Set the active state of the button
     * @param {boolean} isActive - Whether the button is active
     */
    setActive(isActive) {
        if (this._buttonState.isActive === isActive) return;
        
        if (this._debug) {
            console.log(`Button '${this._props.text}' active state changed: ${isActive}`);
        }
        
        this._buttonState.isActive = isActive;
        
        // Update button color
        this.buttonMesh.material.color.setHex(
            isActive ? this._props.activeColor : this._props.inactiveColor
        );
        
        // Enable/disable interactive behavior
        this.config.selectionBehavior.enabled = isActive;
        this.config.hoverBehavior.enabled = isActive;
    }

    /**
     * Check if the button is active
     * @return {boolean} - Whether the button is active
     */
    isActive() {
        return this._buttonState.isActive;
    }

    // Extend event handlers from base class
    onPointerEnter(event) {
        if (this._debug) {
            console.log(`Button '${this._props.text}' onPointerEnter, active: ${this._buttonState.isActive}`);
        }
        
        // Only process if button is active
        if (!this._buttonState.isActive) return;
        
        super.onPointerEnter(event);
        
        if (this._state.isHovering) {
            this._buttonState.targetScale = 1.1;
        }
    }

    onPointerLeave(event) {
        if (this._debug) {
            console.log(`Button '${this._props.text}' onPointerLeave, active: ${this._buttonState.isActive}`);
        }
        
        super.onPointerLeave(event);
        
        if (!this._state.isHovering) {
            this._buttonState.targetScale = 1.0;
        }
    }

    // Direct click handler - bypass the drag event chain if needed
    onDirectClick(event) {
        if (this._debug) {
            console.log(`Button '${this._props.text}' onDirectClick, active: ${this._buttonState.isActive}`);
        }
        
        // Only allow click if button is active
        if (!this._buttonState.isActive) {
            console.log(`Button '${this._props.text}' ignoring click because it's inactive`);
            return;
        }
        
        // Visual feedback
        this._buttonState.targetScale = 1.2;
        setTimeout(() => {
            this._buttonState.targetScale = 1.0;
        }, 100);
        
        // Call the onClick callback directly
        if (this._state.onClick) {
            console.log(`Button '${this._props.text}' executing onClick callback`);
            this._state.onClick(this);
        } else {
            console.warn(`Button '${this._props.text}' has no onClick callback set`);
        }
    }

    // Override toggleSelected for button-specific behavior
    toggleSelected() {
        // Only allow selection if button is active
        if (!this._buttonState.isActive) {
            console.log(`Button '${this._props.text}' ignoring toggleSelected because it's inactive`);
            return;
        }
        
        if (this._debug) {
            console.log(`Button '${this._props.text}' toggleSelected`);
        }
        
        super.toggleSelected();
        
        // Buttons don't stay selected, they trigger actions and reset
        if (this._state.isSelected) {
            // Reset selection state immediately
            this._state.isSelected = false;
            
            // Dispatch confirm event if callback is set
            if (this._state.onClick) {
                console.log(`Button '${this._props.text}' executing onClick callback from toggleSelected`);
                this._state.onClick(this);
            } else {
                console.warn(`Button '${this._props.text}' has no onClick callback set`);
            }
        }
    }

    // Override the _onClick method from InteractiveObject to add debugging
    _onClick(event) {
        if (this._debug) {
            console.log(`Button '${this._props.text}' _onClick internal method`);
        }
        
        if (this.config.selectionBehavior.enabled) {
            this.toggleSelected();
        } else {
            console.log(`Button '${this._props.text}' selection behavior is disabled`);
            
            // Call onClick directly even if selection behavior is disabled
            if (this._state.onClick) {
                console.log(`Button '${this._props.text}' executing onClick callback from _onClick`);
                this._state.onClick(this);
            }
        }
    }
    
    // Override onDragStart to add debugging
    onDragStart(event) {
        if (this._debug) {
            console.log(`Button '${this._props.text}' onDragStart`);
        }
        
        super.onDragStart(event);
    }
    
    // Override onDragEnd to add debugging and fix click detection
    onDragEnd(event) {
        if (this._debug) {
            console.log(`Button '${this._props.text}' onDragEnd`);
        }
        
        // Skip normal drag behavior but still check for clicks
        if (this.config.selectionBehavior.enabled) {
            const dragEndTime = Date.now();
            const dragDuration = dragEndTime - this._state.dragStartTime;
            
            const dragEndPosition = new THREE.Vector2(event.clientX, event.clientY);
            const distance = this._state.dragStartPosition ? 
                dragEndPosition.distanceTo(this._state.dragStartPosition) : 0;
            
            console.log(`Button drag duration: ${dragDuration}ms, distance: ${distance}px`);
            
            // If drag was short and movement was minimal, consider it a click
            if (dragDuration < this.config.selectionBehavior.clickThreshold && 
                distance < this.config.selectionBehavior.moveThreshold) {
                this._onClick(event);
            }
        }
        
        this._state.isDragging = false;
    }

    // Override update to handle button-specific animations
    update(deltaTime = 1/60) {
        super.update(deltaTime);
        
        this._updateScale();
    }

    _updateScale() {
        // Spring physics for scale
        const scaleDiff = this._buttonState.targetScale - this._buttonState.scale;
        const scaleForce = scaleDiff * 0.3; // Strength
        this._buttonState.scaleVelocity += scaleForce;
        this._buttonState.scaleVelocity *= 0.7; // Damping
        this._buttonState.scale += this._buttonState.scaleVelocity;
        
        // Apply scale
        this.buttonMesh.scale.set(
            this._buttonState.scale, 
            this._buttonState.scale, 
            this._buttonState.scale
        );
        
        this.textMesh.scale.set(
            this._buttonState.scale, 
            this._buttonState.scale, 
            1
        );
    }

    // Override dispose to clean up button resources
    dispose() {
        super.dispose();
        
        this.buttonMesh.geometry.dispose();
        this.buttonMesh.material.dispose();
        
        this.textMesh.geometry.dispose();
        this.textMesh.material.dispose();
        
        if (this._buttonState.textTexture) {
            this._buttonState.textTexture.dispose();
        }
    }
}