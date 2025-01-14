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
        const { mesh, material, state } = entity;
        
        // Convert mouse to world space
        const worldMouse = new THREE.Vector3(
            mouse.x, 
            mouse.y, 
            0.5  // Place cursor in front of the card
        ).unproject(sceneEngine.camera);
        
        // Get card position
        const cardPos = mesh.position.clone();
        
        // Calculate tilt direction
        const tiltDir = new THREE.Vector3()
            .subVectors(worldMouse, cardPos)
            .normalize();
        
        // Start with base normal (pointing at camera)
        const newNormal = new THREE.Vector3(0, 0, 1);
        
        // Calculate tilt based on mouse position relative to card
        newNormal.x = -(worldMouse.x - cardPos.x) * 0.5;  // Tilt left/right
        newNormal.y = -(worldMouse.y - cardPos.y) * 0.5;  // Tilt up/down
        newNormal.z = 1;  // Keep some forward direction
        newNormal.normalize();  // Ensure it's a unit vector
        
        // Update the normal uniform
        material.uniforms.tiltNormal.value.copy(newNormal);
        
        // Log for debugging
        if (sceneEngine.interactionManager.isDragging) {
            console.log('Mouse World Pos:', 
                'x:', worldMouse.x.toFixed(3),
                'y:', worldMouse.y.toFixed(3),
                'z:', worldMouse.z.toFixed(3)
            );
            console.log('New Normal:', 
                'x:', newNormal.x.toFixed(3),
                'y:', newNormal.y.toFixed(3),
                'z:', newNormal.z.toFixed(3)
            );
        }
    }
}