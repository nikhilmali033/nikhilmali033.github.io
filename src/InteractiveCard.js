import * as THREE from 'three';
import InteractiveObject from './InteractiveObject';

export default class InteractiveCard extends InteractiveObject {
    constructor({
        texture,
        width = 2,
        height = 3,
        position = { x: 0, y: 0, z: 0 },
        idlePhase = Math.random(),
        springPhysics = {
            strength: 0.3,
            damping: 0.75,
            wiggleStrength: 0.5,
            wiggleDamping: 0.6,
            zStrength: 0.5,
            zDamping: 0.5
        },
        dragBehavior = {
            returnSpeed: 0.1,
            dampingFactor: 0.95,
            enabled: true
        },
        selectionBehavior = {
            enabled: true,
            clickThreshold: 200,
            moveThreshold: 5
        },
        hoverBehavior = {
            enabled: true
        }
    } = {}) {
        super({
            position,
            springPhysics,
            dragBehavior,
            selectionBehavior,
            hoverBehavior
        });

        // Card-specific state
        this._cardState = {
            // Animation states
            scale: 1.0,
            targetScale: 1.0,
            scaleVelocity: 0,
            // Initial hover animation
            initialHoverTime: 0,
            isInitialHover: false,
            wiggleRotation: 0,
            wiggleVelocity: 0,
            // Glow effect
            glowIntensity: 0,
            targetGlowIntensity: 0,
            glowVelocity: 0,
            // Z-position
            targetZ: 0,
            zVelocity: 0,
            // Card rotation
            targetRotation: new THREE.Euler(),
            // Offset for pivot point
            pivotOffset: 0.7,
            idlePhase: idlePhase * Math.PI * 2
        };

        // Create card mesh
        this._createCardMesh(texture, width, height);
        
        // Initialize interaction capabilities
        this._initializeInteraction();
    }

    _createCardMesh(texture, width, height) {
        // Create geometry and material
        const geometry = new THREE.PlaneGeometry(width, height);
        const material = new THREE.MeshPhongMaterial({
            map: texture,
            transparent: true,
            side: THREE.DoubleSide,
            shininess: 100,
            specular: 0x444444,
            emissive: 0x000000
        });

        // Create mesh
        this.cardMesh = new THREE.Mesh(geometry, material);
        this.cardMesh.castShadow = true;
        this.cardMesh.receiveShadow = true;

        // Position mesh relative to pivot point
        this.cardMesh.position.y = -this._cardState.pivotOffset;
        
        // Set as the interactive mesh for base class
        this.interactiveMesh = this.cardMesh;
        
        // Add mesh to this Object3D
        this.add(this.cardMesh);

        // Create glow effect
        this._createGlowEffect(width, height);
    }

    _createGlowEffect(width, height) {
        // Create slightly larger geometry for glow
        const glowGeometry = new THREE.PlaneGeometry(width * 1.1, height * 1.1);
        
        // Create glow material
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0x00ffff,
            transparent: true,
            opacity: 0,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending
        });
        
        // Create glow mesh
        this.glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        this.glowMesh.position.z = -0.05; // Slightly behind card
        this.glowMesh.position.y = -this._cardState.pivotOffset; // Same pivot offset as card
        
        // Add glow to this Object3D
        this.add(this.glowMesh);
    }

    onPointerEnter(event) {
        // Call the original method to maintain all existing behavior
        super.onPointerEnter(event);
        
        // Initialize wiggle animation
        if (this._state.isHovering && !this._state.isDragging) {
            this._cardState.isInitialHover = true;
            this._cardState.initialHoverTime = Date.now();
            this._cardState.targetScale = 1.1;
            this._cardState.scaleVelocity = 0.05;
            this._cardState.wiggleRotation = 0;
            this._cardState.wiggleVelocity = 0.15;
        }
        
        // If we're hovering and have access to SceneManager, trigger text animation
        if (this._state.isHovering && !this._state.isDragging && this.sceneManager) {
            this.sceneManager.animateText("Card Hovered!");
        }
    }

    onPointerLeave(event) {
        super.onPointerLeave(event);
        
        if (!this._state.isHovering && !this._state.isDragging) {
            this._cardState.targetScale = this._state.isSelected ? 1.1 : 1.0;
            this._cardState.isInitialHover = false;
            // Reset wiggle rotation to prevent permanent offset
            this._cardState.wiggleRotation = 0;
            console.log("mouseleft")
            this._cardState.isInitialHover = true;
            this._cardState.wiggleVelocity = 0;
        }
    }

    onPointerMove(event) {
        super.onPointerMove(event);
        
        if (this._state.isHovering && !this._state.isDragging) {
            // Calculate tilt based on mouse position relative to card
            const cardScreenPosition = this.position.clone().project(event.camera);
            const mousePosition = new THREE.Vector2(
                (event.clientX / window.innerWidth) * 2 - 1,
                -(event.clientY / window.innerHeight) * 2 + 1
            );
            
            const tiltX = (mousePosition.y - cardScreenPosition.y) * 0.5;
            const tiltY = (mousePosition.x - cardScreenPosition.x) * 0.5;
            
            this._cardState.targetRotation.x = -tiltX;
            this._cardState.targetRotation.y = tiltY;
        }
    }

    onDragStart(event) {
        super.onDragStart(event);
        // Card-specific drag start behavior
    }

    // Override onDragEnd to properly handle clicks - FIXED VERSION
    onDragEnd(event) {
        super.onDragEnd(event);
        
        // Reset z-rotation
        this.rotation.z = 0;
        
        // Reset scale if not hovering or selected
        if (!this._state.isHovering && !this._state.isSelected) {
            this._cardState.targetScale = 1.0;
            this._cardState.isInitialHover = false;
        }
        
        // The click detection and selection toggle is handled in the parent class
        // We just need to ensure our state is correct
        console.log(`Card drag ended. Current selection state: ${this._state.isSelected}`);
    }

    toggleSelected() {
        // Call parent implementation
        super.toggleSelected();
        
        console.log(`Card toggled. Selected: ${this._state.isSelected}`);
        
        if (this._state.isSelected) {
            // Enter selected state
            this._cardState.targetScale = 1.1;
            this._cardState.targetGlowIntensity = 0.7;
            this._cardState.targetZ = 0.5; // Lift card up
            
            console.log(`Card selected - targetZ: ${this._cardState.targetZ}`);
        } else {
            // Exit selected state
            this._cardState.targetScale = this._state.isHovering ? 1.1 : 1.0;
            this._cardState.targetGlowIntensity = 0;
            this._cardState.targetZ = 0;
            
            console.log(`Card deselected - targetZ: ${this._cardState.targetZ}`);
        }
    }

    // Override update from base class
    update(deltaTime = 1/60) {
        super.update(deltaTime);
        
        this._updateScale();
        this._updateWiggle();
        this._updateRotation();
        this._updateGlow();
        this._updateElevation();
    }

    _updateScale() {
        // Spring physics for scale
        const scaleDiff = this._cardState.targetScale - this._cardState.scale;
        const scaleForce = scaleDiff * this.config.springPhysics.strength;
        this._cardState.scaleVelocity += scaleForce;
        this._cardState.scaleVelocity *= this.config.springPhysics.damping;
        this._cardState.scale += this._cardState.scaleVelocity;
        
        // Apply scale
        this.cardMesh.scale.set(this._cardState.scale, this._cardState.scale, 1);
        this.glowMesh.scale.set(this._cardState.scale, this._cardState.scale, 1);
    }

    _updateWiggle() {
        if (this._cardState.isInitialHover) {
            const wiggleForce = -this._cardState.wiggleRotation * this.config.springPhysics.wiggleStrength;
            this._cardState.wiggleVelocity += wiggleForce;
            this._cardState.wiggleVelocity *= this.config.springPhysics.wiggleDamping;
            this._cardState.wiggleRotation += this._cardState.wiggleVelocity;
            
            this.cardMesh.rotation.z = this._cardState.wiggleRotation;
            this.glowMesh.rotation.z = this._cardState.wiggleRotation;
            
            if (Math.abs(this._cardState.wiggleVelocity) < 0.001 && 
                Math.abs(this._cardState.wiggleRotation) < 0.001) {
                this._cardState.isInitialHover = false;
                this._cardState.wiggleRotation = 0;
            }
        }
    }

    _updateRotation() {
        if (!this._state.isDragging && !this._state.isHovering && !this._state.isSelected) {
            // Idle animation
            const time = Date.now() * 0.001 + this._cardState.idlePhase;
            this._cardState.targetRotation.x = Math.sin(time) * 0.1;
            this._cardState.targetRotation.y = Math.cos(time) * 0.1;
        }
        
        // Apply rotation
        this.cardMesh.rotation.x += (this._cardState.targetRotation.x - 
                                   this.cardMesh.rotation.x) * 0.1;
        this.cardMesh.rotation.y += (this._cardState.targetRotation.y - 
                                   this.cardMesh.rotation.y) * 0.1;
        
        // Apply same rotation to glow
        this.glowMesh.rotation.x = this.cardMesh.rotation.x;
        this.glowMesh.rotation.y = this.cardMesh.rotation.y;
    }

    _updateGlow() {
        // Spring physics for glow intensity
        const glowDiff = this._cardState.targetGlowIntensity - this._cardState.glowIntensity;
        const glowForce = glowDiff * this.config.springPhysics.zStrength; // Using a different strength for glow
        this._cardState.glowVelocity += glowForce;
        this._cardState.glowVelocity *= this.config.springPhysics.zDamping; // Damping
        this._cardState.glowIntensity += this._cardState.glowVelocity;
        
        // Apply glow intensity
        this.glowMesh.material.opacity = this._cardState.glowIntensity;
    }

    _updateElevation() {
        // Spring physics for z position (elevation)
        const zDiff = this._cardState.targetZ - this.position.z;
        const zForce = zDiff * this.config.springPhysics.zStrength;
        console.log("zstregnth: ", this.config.springPhysics.zStrength)
        console.log("zdamping ", this.config.springPhysics.zDamping)
        this._cardState.zVelocity += zForce;
        this._cardState.zVelocity *= this.config.springPhysics.zDamping; // Damping
        this.position.z += this._cardState.zVelocity;
    }

    // Override dispose from base class
    dispose() {
        super.dispose();
        
        // Clean up card-specific resources
        this.cardMesh.geometry.dispose();
        this.cardMesh.material.dispose();
        if (this.cardMesh.material.map) {
            this.cardMesh.material.map.dispose();
        }
        this.glowMesh.geometry.dispose();
        this.glowMesh.material.dispose();
    }
}