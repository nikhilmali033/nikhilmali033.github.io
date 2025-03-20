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
        // Only process if button is active
        if (!this._buttonState.isActive) return;
        
        super.onPointerEnter(event);
        
        if (this._state.isHovering) {
            this._buttonState.targetScale = 1.1;
        }
    }

    onPointerLeave(event) {
        super.onPointerLeave(event);
        
        if (!this._state.isHovering) {
            this._buttonState.targetScale = 1.0;
        }
    }

    // Override toggleSelected for button-specific behavior
    toggleSelected() {
        // Only allow selection if button is active
        if (!this._buttonState.isActive) return;
        
        super.toggleSelected();
        
        // Buttons don't stay selected, they trigger actions and reset
        if (this._state.isSelected) {
            // Reset selection state immediately
            this._state.isSelected = false;
            
            // Dispatch confirm event if callback is set
            if (this._state.onClick) {
                this._state.onClick(this);
            }
        }
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