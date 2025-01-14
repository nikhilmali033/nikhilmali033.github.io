import * as THREE from 'three';

export class Card {
    static createGeometry(width = 1, height = 1.4) {
        const geometry = new THREE.PlaneGeometry(width, height);
        return geometry;
    }

    static createMaterial(resourceLoader) {
        return resourceLoader.createMaterial('card');
    }

        // In Card.js
    static create(sceneEngine, { position, width = 1, height = 1.4, layer = 'cards' }) {
        const geometry = Card.createGeometry(width, height);
        const material = Card.createMaterial(sceneEngine.resourceLoader);
        
        if (!material) {
            console.error('Failed to create card - material creation failed');
            return null;
        }

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(position[0], position[1], 0);

        return {
            mesh,
            material,
            type: 'card',
            needsTimeUpdate: true,
            state: {
                baseNormal: new THREE.Vector3(0, 0, 1),
                targetNormal: new THREE.Vector3(0, 0, 1),
                currentNormal: new THREE.Vector3(0, 0, 1),
                maxTiltAngle: Math.PI / 6,
                tiltSpeed: 0.1,
                // Add hover state
                isHovered: false,
                baseScale: 1.0,
                hoverScale: 1.05,
                currentScale: 1.0,
                // Animation state
                transitionDuration: 0.15, // seconds
                transitionStartTime: 0,
                isTransitioning: false
            }
        };
    }

    static updateHoverState(entity, isHovered, time) {
        const { mesh, state } = entity;
        const { baseScale, hoverScale, transitionDuration } = state;

        if (state.isHovered !== isHovered) {
            state.isHovered = isHovered;
            state.isTransitioning = true;
            state.transitionStartTime = time;
        }

        if (state.isTransitioning) {
            const elapsed = (time - state.transitionStartTime) / 1000; // Convert to seconds
            const progress = Math.min(elapsed / transitionDuration, 1);
            
            if (progress >= 1) {
                state.isTransitioning = false;
                state.currentScale = isHovered ? hoverScale : baseScale;
            } else {
                const startScale = isHovered ? baseScale : hoverScale;
                const endScale = isHovered ? hoverScale : baseScale;
                state.currentScale = startScale + (endScale - startScale) * progress;
            }

            mesh.scale.setScalar(state.currentScale);
        }
    }

    static update(sceneEngine, entity, mouse, time) {
        const { mesh, material, state } = entity;
        
        // Update hover state first
        Card.updateHoverState(entity, state.isHovered, time);
        
        // Use current scale for calculations
        const scaledWidth = mesh.geometry.parameters.width * state.currentScale;
        const scaledHeight = mesh.geometry.parameters.height * state.currentScale;
        
        // Convert mouse to world space
        const worldMouse = new THREE.Vector3(
            mouse.x, 
            mouse.y, 
            0.5
        ).unproject(sceneEngine.camera);
        
        // Get card position
        const cardPos = mesh.position.clone();
        
        // Calculate relative position
        const relativePos = new THREE.Vector3().subVectors(worldMouse, cardPos);
        
        // Calculate distance based tilt
        const maxDistance = Math.max(scaledWidth, scaledHeight);
        const distance = relativePos.length();
        const distanceScale = Math.min(distance / maxDistance, 1.0);
        
        // Calculate normalized tilt direction
        const newNormal = new THREE.Vector3(0, 0, 1);
        newNormal.x = -(relativePos.x) / maxDistance;
        newNormal.y = -(relativePos.y) / maxDistance;
        newNormal.z = 1;
        newNormal.normalize();
        
        // Apply distance-based scaling to tilt
        newNormal.x *= distanceScale;
        newNormal.y *= distanceScale;
        newNormal.normalize();
        
        // Update the normal uniform
        material.uniforms.tiltNormal.value.copy(newNormal);
        
        // Create a quaternion to rotate the mesh to face the new normal
        const defaultNormal = new THREE.Vector3(0, 0, 1);
        const quaternion = new THREE.Quaternion();
        quaternion.setFromUnitVectors(defaultNormal, newNormal);
        
        // Apply the rotation to the mesh
        mesh.quaternion.copy(quaternion);
    }

    // In SceneEngine.js
    registerInteraction(object) {
        if (!object.mesh) return;

        this.interactionManager.register(object.mesh, {
            onHover: (isHovered) => {
                if (!object.material?.uniforms) return;
                object.material.uniforms.hover.value = isHovered ? 1.0 : 0.0;
                // Hover scale is now handled in Card.js
                object.state.isHovered = isHovered;
            },
            onPress: () => {
                if (!object.material?.uniforms) return;
                object.material.uniforms.selected.value = 1.0;
                this.bringToFront(object);
            },
            onDrag: (mousePosition) => {
                const worldPos = new THREE.Vector3(
                    mousePosition.x,
                    mousePosition.y,
                    0
                ).unproject(this.camera);
                object.mesh.position.x = worldPos.x;
                object.mesh.position.y = worldPos.y;
            },
            onRelease: () => {
                if (!object.material?.uniforms) return;
                object.material.uniforms.selected.value = 0.0;
            }
        });
    }
}