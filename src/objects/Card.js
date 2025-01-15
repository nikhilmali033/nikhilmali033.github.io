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
            scale: 1,
            tiltFactor: 0.15,
            scaleHover: 1.1,
            scaleDrag: 1.15
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

            // Tilt based on movement
            const dragTiltX = input.dragDelta.x * state.tiltFactor * 0.1;
            const dragTiltY = -input.dragDelta.y * state.tiltFactor * 0.1;
            state.tilt.set(dragTiltX, dragTiltY, 1).normalize();

        } else if (state.isHovered && intersection) {
            // Return to base position when not dragging
            mesh.position.lerp(state.basePosition, 0.1);

            // Tilt toward mouse position when hovering
            const localPoint = intersection.point.clone().sub(mesh.position);
            const tiltX = -localPoint.x * state.tiltFactor;
            const tiltY = -localPoint.y * state.tiltFactor;
            state.tilt.set(tiltX, tiltY, 1).normalize();

        } else {
            // Return to default state
            mesh.position.lerp(state.basePosition, 0.1);
            state.tilt.lerp(new THREE.Vector3(0, 0, 1), 0.1);
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