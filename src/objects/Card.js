// src/objects/Card.js
import * as THREE from 'three';

export class Card {
    static create(config = {}) {
        const {
            width = 1,
            height = 1.4,
            position = [0, 0, 0]
        } = config;

        // Create basic mesh
        const geometry = new THREE.PlaneGeometry(width, height);
        const mesh = new THREE.Mesh(geometry);
        mesh.position.set(...position);

        // Simplified state
        const state = {
            isHovered: false,
            isDragging: false,
            basePosition: new THREE.Vector3(...position),
            dragOffset: new THREE.Vector3(),
            // Animation states with reasonable defaults
            tilt: new THREE.Vector3(0, 0, 1),
            targetTilt: new THREE.Vector3(0, 0, 1),
            scale: 1,
            scaleHover: 1.1,
            scaleDrag: 1.15,
            // Debug flag
            debug: true
        };

        return { mesh, state };
    }

    static update(card, data) {
        const { mesh, state } = card;
        const { time, input, intersection, isIntersected } = data;

        // Update interaction state
        const wasHovered = state.isHovered;
        const wasDragging = state.isDragging;
        
        state.isHovered = isIntersected;
        state.isDragging = state.isDragging ? input.isPressed : (isIntersected && input.isPressed);

        // Handle drag start
        if (state.isDragging && !wasDragging) {
            if (intersection) {
                state.dragOffset.copy(mesh.position).sub(intersection.point);
            }
        }

        // Update position and tilt based on state
        if (state.isDragging) {
            // Update position during drag
            const worldPos = new THREE.Vector3(
                input.position.x, 
                input.position.y, 
                0
            ).unproject(data.camera);
            mesh.position.copy(worldPos).add(state.dragOffset);

            // Calculate tilt based on drag velocity with dampening
            const dragSpeed = Math.sqrt(
                input.dragDelta.x * input.dragDelta.x + 
                input.dragDelta.y * input.dragDelta.y
            );
            const dragAngle = Math.atan2(-input.dragDelta.y, input.dragDelta.x);
            
            // Max tilt angle in radians (30 degrees)
            const maxTiltAngle = (Math.PI / 6);
            // Scale tilt by drag speed, capped at max angle
            const tiltAmount = Math.min(dragSpeed * 0.01, maxTiltAngle);
            
            // Calculate tilt axis perpendicular to drag direction
            const tiltX = Math.sin(dragAngle) * tiltAmount;
            const tiltY = Math.cos(dragAngle) * tiltAmount;
            
            // Set target tilt
            state.targetTilt.set(tiltX, tiltY, 1).normalize();
            
            // Create new vector for current tilt and lerp to target
            state.tilt = new THREE.Vector3().copy(state.tilt).lerp(state.targetTilt, 0.2);
            
            // Convert tilt vector to rotation
            mesh.rotation.x = Math.asin(state.tilt.y);  // Tilt forward/backward
            mesh.rotation.y = -Math.asin(state.tilt.x); // Tilt left/right
            
            if (state.debug) {
                console.log('Drag tilt:', {
                    dragSpeed,
                    tiltAmount: tiltAmount * (180 / Math.PI), // Convert to degrees
                    normal: state.tilt.toArray(),
                    rotation: [mesh.rotation.x * (180 / Math.PI), mesh.rotation.y * (180 / Math.PI)]
                });
            }

        } else if (state.isHovered && intersection) {
            // Return to base position when not dragging
            mesh.position.lerp(state.basePosition, 0.1);

            // Calculate angle and distance to intersection point
            const localPoint = intersection.point.clone().sub(mesh.position);
            const distanceToMouse = localPoint.length();
            const angleToMouse = Math.atan2(localPoint.y, localPoint.x);
            
            // Max tilt angle in radians (20 degrees for hover)
            const maxHoverTilt = (Math.PI / 9);
            // Scale tilt by distance from center, capped at max angle
            const tiltAmount = Math.min(distanceToMouse * 0.5, maxHoverTilt);
            
            // Calculate tilt away from mouse position
            const tiltX = -Math.cos(angleToMouse) * tiltAmount;
            const tiltY = -Math.sin(angleToMouse) * tiltAmount;
            
            // Set target tilt
            state.targetTilt.set(tiltX, tiltY, 1).normalize();
            
            // Create new vector for current tilt and lerp to target
            state.tilt = new THREE.Vector3().copy(state.tilt).lerp(state.targetTilt, 0.1);
            
            // Convert tilt vector to rotation
            mesh.rotation.x = Math.asin(state.tilt.y);  // Tilt forward/backward
            mesh.rotation.y = -Math.asin(state.tilt.x); // Tilt left/right
            
            if (state.debug) {
                console.log('Hover tilt:', {
                    distance: distanceToMouse,
                    tiltAmount: tiltAmount * (180 / Math.PI), // Convert to degrees
                    normal: state.tilt.toArray(),
                    rotation: [mesh.rotation.x * (180 / Math.PI), mesh.rotation.y * (180 / Math.PI)]
                });
            }

        } else {
            // Return to default state
            mesh.position.lerp(state.basePosition, 0.1);
            state.tilt.lerp(new THREE.Vector3(0, 0, 1), 0.1);
            
            // Smoothly return rotation to zero
            mesh.rotation.x *= 0.9;
            mesh.rotation.y *= 0.9;
        }

        // Update scale based on state
        const targetScale = state.isDragging ? state.scaleDrag : 
                          state.isHovered ? state.scaleHover : 1;
        state.scale = THREE.MathUtils.lerp(state.scale, targetScale, 0.1);
        mesh.scale.setScalar(state.scale);

        // Update uniforms if they exist
        if (mesh.material?.uniforms) {
            const uniforms = mesh.material.uniforms;
            if (uniforms.time) uniforms.time.value = time;
            if (uniforms.hover) uniforms.hover.value = state.isHovered ? 1.0 : 0.0;
            if (uniforms.selected) uniforms.selected.value = state.isDragging ? 1.0 : 0.0;
            if (uniforms.tiltNormal) uniforms.tiltNormal.value.copy(state.tilt);
        }
    }
}