import * as THREE from 'three';
import InteractiveObject from './InteractiveObject';

export default class ConfirmButton extends InteractiveObject {
    constructor({
        width = 1.2,
        height = 0.5,
        depth = 0.1,
        position = { x: 0, y: 0, z: 0 },
        text = 'Confirm',
        fontColor = '#ffffff',
        activeColor = 0x4287f5,
        inactiveColor = 0x787878,
        hoverColor = 0x5299ff,
        pushDepth = 0.03
    } = {}) {
        super({
            position,
            hoverBehavior: { enabled: true },
            selectionBehavior: { enabled: false }, // Buttons don't use selection
            dragBehavior: { enabled: false }
        });

        // Button state
        this._buttonState = {
            isActive: false,
            isPushed: false,
            baseZ: position.z || 0,
            currentZ: position.z || 0
        };

        // Store properties
        this._props = {
            width,
            height,
            depth,
            text,
            fontColor,
            activeColor,
            inactiveColor,
            hoverColor,
            pushDepth
        };

        // Create button mesh
        this._createButtonMesh();
        
        // Initialize interaction
        this._initializeInteraction();
        
        // Debug
        this._debug = false;
    }

    _createButtonMesh() {
        // Simple box geometry
        const geometry = new THREE.BoxGeometry(
            this._props.width, 
            this._props.height, 
            this._props.depth
        );
        
        // Basic material
        const material = new THREE.MeshPhongMaterial({
            color: this._props.inactiveColor,
            shininess: 30,
            specular: 0x222222
        });

        // Create mesh
        this.buttonMesh = new THREE.Mesh(geometry, material);
        this.buttonMesh.castShadow = true;
        this.buttonMesh.receiveShadow = true;
        
        // Set as interactive mesh
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
        
        // Create material
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
        this.textMesh.position.z = this._props.depth / 2 + 0.001; // Just in front of button
        
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
        
        // Enable/disable hover behavior
        this.config.hoverBehavior.enabled = isActive;
    }

    /**
     * Check if the button is active
     * @return {boolean} - Whether the button is active
     */
    isActive() {
        return this._buttonState.isActive;
    }

    // Handle hover
    onPointerEnter(event) {
        if (!this._buttonState.isActive) return;
        
        super.onPointerEnter(event);
        
        // Change color on hover
        this.buttonMesh.material.color.setHex(this._props.hoverColor);
    }

    onPointerLeave(event) {
        super.onPointerLeave(event);
        
        // Reset color
        if (this._buttonState.isActive) {
            this.buttonMesh.material.color.setHex(this._props.activeColor);
        }
        
        // Release push if leaving while pushed
        if (this._buttonState.isPushed) {
            this._releasePush();
        }
    }

    // Handle clicks
    onDragStart(event) {
        // Buttons don't drag, but we use this for push effect
        if (!this._buttonState.isActive) return;
        
        this._pushButton();
    }

    onDragEnd(event) {
        if (!this._buttonState.isActive) return;
        
        // Release button
        this._releasePush();
        
        // Check if this is a click
        const dragEndTime = Date.now();
        const dragDuration = dragEndTime - this._state.dragStartTime;
        const dragEndPosition = new THREE.Vector2(event.clientX, event.clientY);
        const distance = this._state.dragStartPosition ? 
            dragEndPosition.distanceTo(this._state.dragStartPosition) : 0;
        
        if (dragDuration < 200 && distance < 5) {
            // Execute click callback
            if (this._state.onClick) {
                if (this._debug) {
                    console.log(`Button '${this._props.text}' clicked`);
                }
                this._state.onClick(this);
            }
        }
    }

    _pushButton() {
        if (this._buttonState.isPushed) return;
        
        this._buttonState.isPushed = true;
        this._buttonState.currentZ = this._buttonState.baseZ - this._props.pushDepth;
        
        // Animate push
        this.buttonMesh.position.z = -this._props.pushDepth;
        this.textMesh.position.z = this._props.depth / 2 + 0.001 - this._props.pushDepth;
    }

    _releasePush() {
        if (!this._buttonState.isPushed) return;
        
        this._buttonState.isPushed = false;
        this._buttonState.currentZ = this._buttonState.baseZ;
        
        // Animate release
        this.buttonMesh.position.z = 0;
        this.textMesh.position.z = this._props.depth / 2 + 0.001;
    }

    // Simple update - no complex animations
    update(deltaTime = 1/60) {
        super.update(deltaTime);
        // No additional animations needed
    }

    // Clean up
    dispose() {
        super.dispose();
        
        this.buttonMesh.geometry.dispose();
        this.buttonMesh.material.dispose();
        
        this.textMesh.geometry.dispose();
        this.textMesh.material.dispose();
        this.textMesh.material.map.dispose();
    }
}