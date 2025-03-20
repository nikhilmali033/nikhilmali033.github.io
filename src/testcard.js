import * as THREE from 'three';

export default class InteractiveCard extends THREE.Object3D {
    constructor({
        texture,
        width = 2,
        height = 3,
        springPhysics = {
            strength: 0.3,
            damping: 0.75,
            wiggleStrength: 0.5,
            wiggleDamping: 0.6
        },
        dragBehavior = {
            returnSpeed: 0.1,
            dampingFactor: 0.95
        }
    } = {}) {
        super();

        // Private state
        this._state = {
            velocity: new THREE.Vector3(),
            rotation: new THREE.Euler(),
            isDragging: false,
            isHovering: false,
            isSelected: false,
            dragOffset: new THREE.Vector3(),
            targetRotation: new THREE.Euler(),
            dragStartTime: 0,
            dragStartPosition: new THREE.Vector2(),
            lastMouseX: 0,
            pivotOffset: 0.7,
            // Animation states
            scale: 1.0,
            targetScale: 1.0,
            scaleVelocity: 0,
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
            zVelocity: 0
        };

        // Store configuration
        this._config = {
            springPhysics,
            dragBehavior
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
        this.cardMesh.position.y = -this._state.pivotOffset;
        
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
        this.glowMesh.position.y = -this._state.pivotOffset; // Same pivot offset as card
        
        // Add glow to this Object3D
        this.add(this.glowMesh);
    }

    _initializeInteraction() {
        // Make object interactive
        this.cardMesh.userData.parent = this;
        this.cardMesh.userData.type = 'InteractiveCard';
        
        // Set up raycasting layer
        this.cardMesh.layers.enable(1); // Layer 1 for interactive objects
    }

    // Event handlers
    onPointerEnter = (event) => {
        if (!this._state.isDragging) {
            this._state.isHovering = true;
            this._state.isInitialHover = true;
            this._state.initialHoverTime = Date.now();
            this._state.targetScale = 1.1;
            this._state.scaleVelocity = 0.05;
            this._state.wiggleRotation = 0;
            this._state.wiggleVelocity = 0.15;
        }
    }

    onPointerLeave = (event) => {
        if (!this._state.isDragging) {
            this._state.isHovering = false;
            this._state.targetScale = this._state.isSelected ? 1.1 : 1.0;
            this._state.isInitialHover = false;
        }
    }

    onPointerMove = (event) => {
        if (!this._state.isDragging) {
            // Calculate tilt based on mouse position relative to card
            const cardScreenPosition = this.position.clone().project(event.camera);
            const mousePosition = new THREE.Vector2(
                (event.clientX / window.innerWidth) * 2 - 1,
                -(event.clientY / window.innerHeight) * 2 + 1
            );
            
            const tiltX = (mousePosition.y - cardScreenPosition.y) * 0.5;
            const tiltY = (mousePosition.x - cardScreenPosition.x) * 0.5;
            
            this._state.targetRotation.x = -tiltX;
            this._state.targetRotation.y = tiltY;
        }
    }

    onDragStart = (event) => {
        this._state.isDragging = true;
        this._state.velocity.set(0, 0, 0);
        
        // Calculate drag offset
        const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const intersectPoint = new THREE.Vector3();
        event.ray.intersectPlane(intersectPlane, intersectPoint);
        this._state.dragOffset.copy(this.position).sub(intersectPoint);
        
        this._state.lastMouseX = event.clientX;
        
        // Record drag start time and position for click detection
        this._state.dragStartTime = Date.now();
        this._state.dragStartPosition = new THREE.Vector2(event.clientX, event.clientY);
    }

    onDragEnd = (event) => {
        this._state.isDragging = false;
        this.rotation.z = 0;
        
        // Check if this was a click (short time and minimal movement)
        const dragEndTime = Date.now();
        const dragDuration = dragEndTime - this._state.dragStartTime;
        
        const dragEndPosition = new THREE.Vector2(event.clientX, event.clientY);
        const distance = dragEndPosition.distanceTo(this._state.dragStartPosition);
        
        // If drag was short and movement was minimal, consider it a click
        if (dragDuration < 200 && distance < 5) {
            this.toggleSelected();
        }
        
        if (!this._state.isHovering && !this._state.isSelected) {
            this._state.targetScale = 1.0;
            this._state.isInitialHover = false;
        }
    }

    toggleSelected() {
        this._state.isSelected = !this._state.isSelected;
        
        if (this._state.isSelected) {
            // Enter selected state
            this._state.targetScale = 1.1;
            this._state.targetGlowIntensity = 0.7;
            this._state.targetZ = 0.5; // Lift card up a bit
        } else {
            // Exit selected state
            this._state.targetScale = this._state.isHovering ? 1.1 : 1.0;
            this._state.targetGlowIntensity = 0;
            this._state.targetZ = 0;
        }
    }

    // Animation update
    update(deltaTime = 1/60) {
        this._updateScale();
        this._updateWiggle();
        this._updatePosition();
        this._updateRotation();
        this._updateGlow();
        this._updateElevation();
    }

    _updateScale() {
        // Spring physics for scale
        const scaleDiff = this._state.targetScale - this._state.scale;
        const scaleForce = scaleDiff * this._config.springPhysics.strength;
        this._state.scaleVelocity += scaleForce;
        this._state.scaleVelocity *= this._config.springPhysics.damping;
        this._state.scale += this._state.scaleVelocity;
        
        // Apply scale
        this.cardMesh.scale.set(this._state.scale, this._state.scale, 1);
        this.glowMesh.scale.set(this._state.scale, this._state.scale, 1);
    }

    _updateWiggle() {
        if (this._state.isInitialHover) {
            const wiggleForce = -this._state.wiggleRotation * this._config.springPhysics.wiggleStrength;
            this._state.wiggleVelocity += wiggleForce;
            this._state.wiggleVelocity *= this._config.springPhysics.wiggleDamping;
            this._state.wiggleRotation += this._state.wiggleVelocity;
            
            this.cardMesh.rotation.z = this._state.wiggleRotation;
            this.glowMesh.rotation.z = this._state.wiggleRotation;
            
            if (Math.abs(this._state.wiggleVelocity) < 0.001 && 
                Math.abs(this._state.wiggleRotation) < 0.001) {
                this._state.isInitialHover = false;
                this._state.wiggleRotation = 0;
            }
        }
    }

    _updatePosition() {
        if (!this._state.isDragging) {
            // Apply velocity and damping
            this.position.add(this._state.velocity);
            this._state.velocity.multiplyScalar(this._config.dragBehavior.dampingFactor);
            
            // Return to origin (but keep z position for elevation)
            const targetPosition = new THREE.Vector3(0, 0, this.position.z);
            this.position.x += (targetPosition.x - this.position.x) * this._config.dragBehavior.returnSpeed;
            this.position.y += (targetPosition.y - this.position.y) * this._config.dragBehavior.returnSpeed;
        }
    }

    _updateRotation() {
        if (!this._state.isDragging && !this._state.isHovering && !this._state.isSelected) {
            // Idle animation
            const time = Date.now() * 0.001;
            this._state.targetRotation.x = Math.sin(time) * 0.1;
            this._state.targetRotation.y = Math.cos(time) * 0.1;
        }
        
        // Apply rotation
        this.cardMesh.rotation.x += (this._state.targetRotation.x - 
                                   this.cardMesh.rotation.x) * 0.1;
        this.cardMesh.rotation.y += (this._state.targetRotation.y - 
                                   this.cardMesh.rotation.y) * 0.1;
        
        // Apply same rotation to glow
        this.glowMesh.rotation.x = this.cardMesh.rotation.x;
        this.glowMesh.rotation.y = this.cardMesh.rotation.y;
    }

    _updateGlow() {
        // Spring physics for glow intensity
        const glowDiff = this._state.targetGlowIntensity - this._state.glowIntensity;
        const glowForce = glowDiff * 0.2; // Using a different strength for glow
        this._state.glowVelocity += glowForce;
        this._state.glowVelocity *= 0.9; // Damping
        this._state.glowIntensity += this._state.glowVelocity;
        
        // Apply glow intensity
        this.glowMesh.material.opacity = this._state.glowIntensity;
    }

    _updateElevation() {
        // Spring physics for z position (elevation)
        const zDiff = this._state.targetZ - this.position.z;
        const zForce = zDiff * 0.2;
        this._state.zVelocity += zForce;
        this._state.zVelocity *= 0.9; // Damping
        this.position.z += this._state.zVelocity;
    }

    // Cleanup
    dispose() {
        this.cardMesh.geometry.dispose();
        this.cardMesh.material.dispose();
        if (this.cardMesh.material.map) {
            this.cardMesh.material.map.dispose();
        }
        this.glowMesh.geometry.dispose();
        this.glowMesh.material.dispose();
    }
}