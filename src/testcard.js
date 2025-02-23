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
            dragOffset: new THREE.Vector3(),
            targetRotation: new THREE.Euler(),
            lastMouseX: 0,
            pivotOffset: 0.7,
            // Animation states
            scale: 1.0,
            targetScale: 1.0,
            scaleVelocity: 0,
            initialHoverTime: 0,
            isInitialHover: false,
            wiggleRotation: 0,
            wiggleVelocity: 0
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

        // Create and add shadow receiver
        const shadowGeometry = new THREE.PlaneGeometry(width * 2, height * 2);
        const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
        this.shadowReceiver = new THREE.Mesh(shadowGeometry, shadowMaterial);
        this.shadowReceiver.position.z = -0.5;
        this.shadowReceiver.receiveShadow = true;
        this.add(this.shadowReceiver);
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
            this._state.targetScale = 1.0;
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
    }

    onDragEnd = (event) => {
        this._state.isDragging = false;
        this.rotation.z = 0;
        
        if (!this._state.isHovering) {
            this._state.targetScale = 1.0;
            this._state.isInitialHover = false;
        }
    }

    // Animation update
    update(deltaTime = 1/60) {
        this._updateScale();
        this._updateWiggle();
        this._updatePosition();
        this._updateRotation();
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
    }

    _updateWiggle() {
        if (this._state.isInitialHover) {
            const wiggleForce = -this._state.wiggleRotation * this._config.springPhysics.wiggleStrength;
            this._state.wiggleVelocity += wiggleForce;
            this._state.wiggleVelocity *= this._config.springPhysics.wiggleDamping;
            this._state.wiggleRotation += this._state.wiggleVelocity;
            
            this.cardMesh.rotation.z = this._state.wiggleRotation;
            
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
            
            // Return to origin
            this.position.lerp(new THREE.Vector3(0, 0, 0), 
                             this._config.dragBehavior.returnSpeed);
        }
    }

    _updateRotation() {
        if (!this._state.isDragging && !this._state.isHovering) {
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
    }

    // Cleanup
    dispose() {
        this.cardMesh.geometry.dispose();
        this.cardMesh.material.dispose();
        if (this.cardMesh.material.map) {
            this.cardMesh.material.map.dispose();
        }
        this.shadowReceiver.geometry.dispose();
        this.shadowReceiver.material.dispose();
    }
}