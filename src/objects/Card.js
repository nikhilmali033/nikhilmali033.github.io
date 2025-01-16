// src/objects/Card.js
import * as THREE from 'three';

export class Card {
    constructor(resourceLoader, config = {}) {
        // Store configuration with defaults
        this.config = {
            width: config.width || 1,
            height: config.height || 1.4,
            position: new THREE.Vector3(...(config.position || [0, 0, 0])),
            shaderName: config.shaderName || 'card',
            scaleHover: 1.1,
            scaleDrag: 1.15,
            debug: config.debug || false
        };

        // Initialize state
        this.state = {
            isHovered: false,
            isDragging: false,
            basePosition: this.config.position.clone(),
            dragOffset: new THREE.Vector3(),
            tilt: new THREE.Vector3(0, 0, 1),
            targetTilt: new THREE.Vector3(0, 0, 1),
            scale: 1
        };

        // Create geometry, material, and mesh
        this.initialize(resourceLoader);
    }

    static create(resourceLoader, config) {
        return new Card(resourceLoader, config);
    }

    initialize(resourceLoader) {
        // Create geometry
        this.geometry = new THREE.PlaneGeometry(
            this.config.width,
            this.config.height
        );

        // Create material through resource loader
        this.material = resourceLoader.createMaterial(this.config.shaderName, {
            uniforms: {
                time: { value: 0.0 },
                hover: { value: 0.0 },
                selected: { value: 0.0 },
                tiltNormal: { value: new THREE.Vector3(0, 0, 1) },
                glowColor: { value: new THREE.Vector3(50, 100, 100) },
                glowIntensity: { value: 0.0 }
            }
        });

        // Create mesh
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.copy(this.config.position);
    }

    update({ time, input, intersection, camera, isIntersected, onDragStart }) {
        // Handle drag start
        if (isIntersected && input.isPressed && !this.state.isDragging) {
            this.state.isDragging = true;
            onDragStart?.();
            if (intersection) {
                this.state.dragOffset.copy(this.mesh.position).sub(intersection.point);
            }
        }

        // Update hover and drag states
        const wasHovered = this.state.isHovered;
        this.state.isHovered = isIntersected;
        this.state.isDragging = this.state.isDragging ? input.isPressed : false;

        // Update position and tilt based on state
        if (this.state.isDragging) {
            this.handleDragUpdate(input, camera);
        } else if (this.state.isHovered && intersection) {
            this.handleHoverUpdate(intersection);
        } else {
            this.handleDefaultUpdate();
        }

        // Update scale
        this.updateScale();

        // Update shader uniforms
        this.updateUniforms(time);
    }

    handleDragUpdate(input, camera) {
        // Update position
        const worldPos = new THREE.Vector3(
            input.position.x,
            input.position.y,
            0
        ).unproject(camera);
        this.mesh.position.copy(worldPos).add(this.state.dragOffset);

        // Calculate tilt based on drag velocity
        const dragSpeed = Math.sqrt(
            input.dragDelta.x * input.dragDelta.x +
            input.dragDelta.y * input.dragDelta.y
        );
        const dragAngle = Math.atan2(-input.dragDelta.y, input.dragDelta.x);

        // Apply tilt
        const maxTiltAngle = Math.PI / 6;
        const tiltAmount = Math.min(dragSpeed * 0.01, maxTiltAngle);
        
        const tiltX = Math.sin(dragAngle) * tiltAmount;
        const tiltY = Math.cos(dragAngle) * tiltAmount;
        
        this.state.targetTilt.set(tiltX, tiltY, 1).normalize();
        this.updateTilt(0.2);
    }

    handleHoverUpdate(intersection) {
        // Return to base position
        this.mesh.position.lerp(this.state.basePosition, 0.1);

        // Calculate hover tilt
        const localPoint = intersection.point.clone().sub(this.mesh.position);
        const distanceToMouse = localPoint.length();
        const angleToMouse = Math.atan2(localPoint.y, localPoint.x);

        const maxHoverTilt = Math.PI / 9;
        const tiltAmount = Math.min(distanceToMouse * 0.5, maxHoverTilt);
        
        const tiltX = -Math.cos(angleToMouse) * tiltAmount;
        const tiltY = -Math.sin(angleToMouse) * tiltAmount;
        
        this.state.targetTilt.set(tiltX, tiltY, 1).normalize();
        this.updateTilt(0.1);
    }

    handleDefaultUpdate() {
        // Return to default position and rotation
        this.mesh.position.lerp(this.state.basePosition, 0.1);
        this.state.tilt.lerp(new THREE.Vector3(0, 0, 1), 0.1);
        
        this.mesh.rotation.x *= 0.9;
        this.mesh.rotation.y *= 0.9;
    }

    updateTilt(lerpFactor) {
        // Update tilt vector
        this.state.tilt.lerp(this.state.targetTilt, lerpFactor);
        
        // Apply rotation
        this.mesh.rotation.x = Math.asin(this.state.tilt.y);
        this.mesh.rotation.y = -Math.asin(this.state.tilt.x);
    }

    updateScale() {
        const targetScale = this.state.isDragging ? this.config.scaleDrag :
                          this.state.isHovered ? this.config.scaleHover : 1;
        this.state.scale = THREE.MathUtils.lerp(this.state.scale, targetScale, 0.1);
        this.mesh.scale.setScalar(this.state.scale);
    }

    updateUniforms(time) {
        if (this.material?.uniforms) {
            const { uniforms } = this.material;
            if (uniforms.time) uniforms.time.value = time;
            if (uniforms.hover) uniforms.hover.value = this.state.isHovered ? 1.0 : 0.0;
            if (uniforms.selected) uniforms.selected.value = this.state.isDragging ? 1.0 : 0.0;
            if (uniforms.tiltNormal) uniforms.tiltNormal.value.copy(this.state.tilt);
        }
    }

    // Cleanup method for proper disposal
    dispose() {
        this.geometry.dispose();
        this.material.dispose();
        // Note: mesh disposal is handled by SceneEngine's removeObject
    }
}