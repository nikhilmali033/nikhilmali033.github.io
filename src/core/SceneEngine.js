// src/core/SceneEngine.js
import * as THREE from 'three';

export class SceneEngine {
    constructor(renderManager, resourceLoader) {
        this.renderManager = renderManager;
        this.resourceLoader = resourceLoader;
        this.entities = new Map();
        console.log('📦 SceneEngine created');
    }

    createButton({ id, position = [0, 0], color = [0.2, 0.8, 1.0], callbacks = {} }) {
        // Create geometry for button
        const geometry = new THREE.CircleGeometry(0.5, 32);
        
        // Create mesh with neon material
        const mesh = this.renderManager.addToLayer(
            geometry,
            'main',
            'neon',
            {
                uniforms: {
                    glowColor: { value: color },
                    pulseSpeed: { value: 1.5 }
                }
            }
        );

        const realmesh = this.renderManager.addMesh(
            geometry,
            'main',
            'neon',
            {
                uniforms: {
                    glowColor: { value: color },
                    pulseSpeed: { value: 1.5 }
                }
            }
        )



        // Position the button
        mesh.position.set(position[0], position[1], 0);

        // Store entity data
        const entityData = {
            id,
            type: 'button',
            mesh,
            callbacks: {
                clicked: callbacks.clicked || (() => {}),
                hover: callbacks.hover || (() => {})
            },
            state: {
                isHovered: false
            }
        };

        this.entities.set(id, entityData);

        // Register with interaction manager
        this.renderManager.interactionManager.register(mesh, {
            onPress: () => this.handleButtonPress(id),
            onHover: (isHovered) => this.handleButtonHover(id, isHovered)
        });

        return id;
    }

    handleButtonPress(id) {
        const entity = this.entities.get(id);
        if (entity && entity.callbacks.clicked) {
            entity.callbacks.clicked();
        }
    }

    handleButtonHover(id, isHovered) {
        const entity = this.entities.get(id);
        if (entity) {
            entity.state.isHovered = isHovered;
            if (entity.callbacks.hover) {
                entity.callbacks.hover(isHovered);
            }

            // Update button appearance based on hover state
            const material = this.renderManager.objectMaterials.get(entity.mesh);
            if (material) {
                material.uniforms.glowIntensity.value = isHovered ? 1.5 : 1.0;
            }
        }
    }

    removeEntity(id) {
        const entity = this.entities.get(id);
        if (entity) {
            this.renderManager.interactionManager.unregister(entity.mesh);
            this.renderManager.removeMesh(entity.mesh);
            this.entities.delete(id);
        }
    }
}