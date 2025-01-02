// src/core/SceneEngine.js
import * as THREE from 'three';

export class SceneEngine {
    constructor(renderManager, resourceLoader) {
        this.renderManager = renderManager;
        this.resourceLoader = resourceLoader;
        
        // Scene setup
        this.scene = new THREE.Scene();
        this.setupCamera();
        
        // Entity tracking
        this.entities = new Map();
        this.entitiesNeedingUpdate = new Set();
        this.callbacks = new Map();
    }

    setupCamera() {
        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera(
            -aspect, aspect, 1, -1, 0.1, 1000
        );
        this.camera.position.z = 1;
        
        window.addEventListener('resize', () => {
            const { width, height } = this.renderManager.handleResize();
            const aspect = width / height;
            this.camera.left = -aspect;
            this.camera.right = aspect;
            this.camera.updateProjectionMatrix();
        });
    }

    createButton({ position, size = 0.5, callback, stateCallback }) {
        const geometry = new THREE.CircleGeometry(size, 32);
        const material = this.resourceLoader.createMaterial('neon');
        
        if (!material) {
            console.error('Failed to create neon material for button');
            return null;
        }

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(position[0], position[1], 0);
        mesh.layers.enable(1); // UI layer
        this.scene.add(mesh);
        
        const entityId = mesh.uuid;
        const entityData = {
            mesh,
            type: 'button',
            state: { pressed: false },
            needsTimeUpdate: true,
            material
        };

        this.entities.set(entityId, entityData);
        this.entitiesNeedingUpdate.add(entityId);
        this.callbacks.set(entityId, { onClick: callback, onState: stateCallback });

        return entityId;
    }

    handleInteraction(point, type) {
        const raycaster = new THREE.Raycaster();
        raycaster.layers.set(1); // Only check UI layer
        const mouse = new THREE.Vector2(point.x, point.y);
        raycaster.setFromCamera(mouse, this.camera);

        const intersects = raycaster.intersectObjects(this.scene.children);
        
        if (intersects.length > 0) {
            const mesh = intersects[0].object;
            const entityId = mesh.uuid;
            const entityData = this.entities.get(entityId);
            const callback = this.callbacks.get(entityId);

            if (type === 'click' && callback) {
                callback.onClick?.();
                entityData.state.pressed = true;
                callback.onState?.(entityData.state);
                
                setTimeout(() => {
                    entityData.state.pressed = false;
                    callback.onState?.(entityData.state);
                }, 100);
            }
        }
    }

    updateUniforms(time) {
        for (const id of this.entitiesNeedingUpdate) {
            const entity = this.entities.get(id);
            if (!entity) continue;

            if (entity.needsTimeUpdate) {
                entity.material.uniforms.time.value = time;
            }

            entity.material.uniforms.glowIntensity.value = 
                entity.state.pressed ? 2.0 : 1.0;
        }
    }

    render(time) {
        this.updateUniforms(time);
        this.renderManager.render(this.scene, this.camera);
    }

    removeEntity(id) {
        const entity = this.entities.get(id);
        if (entity) {
            this.scene.remove(entity.mesh);
            this.entities.delete(id);
            this.entitiesNeedingUpdate.delete(id);
            this.callbacks.delete(id);
        }
    }
}