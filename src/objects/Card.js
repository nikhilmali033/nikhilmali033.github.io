import * as THREE from 'three';

// src/objects/Card.js
export class Card {
    static createGeometry(width = 1, height = 1.4) {
        const shape = new THREE.Shape();
        const radius = 0.1;
        
        shape.moveTo(-width/2 + radius, -height/2);
        shape.lineTo(width/2 - radius, -height/2);
        shape.quadraticCurveTo(width/2, -height/2, width/2, -height/2 + radius);
        shape.lineTo(width/2, height/2 - radius);
        shape.quadraticCurveTo(width/2, height/2, width/2 - radius, height/2);
        shape.lineTo(-width/2 + radius, height/2);
        shape.quadraticCurveTo(-width/2, height/2, -width/2, height/2 - radius);
        shape.lineTo(-width/2, -height/2 + radius);
        shape.quadraticCurveTo(-width/2, -height/2, -width/2 + radius, -height/2);
        
        return new THREE.ShapeGeometry(shape);
    }

    static createMaterial(resourceLoader) {
        // We can keep this simple since ResourceLoader handles proper uniform setup
        return resourceLoader.createMaterial('card');
    }

    static create(sceneEngine, { position, width = 1, height = 1.4, layer = 'cards' }) {
        const geometry = Card.createGeometry(width, height);
        const material = Card.createMaterial(sceneEngine.resourceLoader);
        
        // Verify material creation was successful
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
                tiltSpeed: 0.1
            }
        };
    }

    static update(sceneEngine, entity, mouse) {
        // Verify we have all required properties
        console.log('Debug uniforms:', entity.material.uniforms); // See what uniforms we actually have
        if (!entity || !entity.mesh || !entity.material || !entity.material.uniforms) {
            return;
        }

        const { mesh, material, state } = entity;

        // Verify all uniforms exist before updating
        const uniforms = material.uniforms;
        if (!uniforms.normal || !uniforms.normal.value) {
            console.error('Missing normal uniform in card material');
            return;
        }

        // Convert mouse to world position for normal calculation
        const worldMouse = new THREE.Vector3(
            mouse.x, 
            mouse.y, 
            0
        ).unproject(sceneEngine.camera);

        // Calculate direction to cursor
        const dirToCursor = new THREE.Vector3()
            .subVectors(worldMouse, mesh.position)
            .normalize();
            
        // Update target normal with limited tilt
        state.targetNormal.copy(state.baseNormal)
            .lerp(dirToCursor, 0.3);
            
        // Limit maximum tilt angle
        const angle = state.baseNormal.angleTo(state.targetNormal);
        if (angle > state.maxTiltAngle) {
            state.targetNormal.lerp(state.baseNormal, 
                1 - (state.maxTiltAngle / angle));
        }

        // Smooth normal interpolation
        state.currentNormal.lerp(state.targetNormal, state.tiltSpeed);
        
        // Update shader uniform
        uniforms.normal.value.copy(state.currentNormal);
    }
}