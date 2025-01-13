// src/core/SceneEngine.js
import * as THREE from 'three';
import { InteractionManager } from './InteractionManager';

export class SceneEngine {
    constructor(resourceLoader) {
        this.resourceLoader = resourceLoader;
        this.interactionManager = new InteractionManager();
        
        // Scene setup
        this.scene = new THREE.Scene();
        this.setupCamera();
        
        // DOM element for event handling
        this.domElement = null;
        
        // Entity and layer tracking
        this.entities = new Map();
        this.entitiesNeedingUpdate = new Set();
        this.layers = new Map([
            ['background', { zIndex: 0, objects: new Set() }],
            ['cards', { zIndex: 1, objects: new Set() }],
            ['ui', { zIndex: 2, objects: new Set() }],
            ['effects', { zIndex: 3, objects: new Set() }],
            ['overlay', { zIndex: 4, objects: new Set() }]
        ]);

        // Initialize layer groups
        this.layerGroups = new Map();
        this.layers.forEach((layer, name) => {
            const group = new THREE.Group();
            group.position.z = layer.zIndex * 0.1;
            this.scene.add(group);
            this.layerGroups.set(name, group);
        });
    }

    initialize(domElement) {
        this.domElement = domElement;
        this.interactionManager.initialize(this.camera, this.scene);
        this.setupEventListeners();
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

    setupEventListeners() {
        if (!this.domElement) return;

        this.domElement.addEventListener('mousemove', (event) => {
            const rect = this.domElement.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            const normalizedX = (x / rect.width) * 2 - 1;
            const normalizedY = -(y / rect.height) * 2 + 1;
            
            this.interactionManager.handleMouseMove(normalizedX, normalizedY);
        });
        
        this.domElement.addEventListener('mousedown', () => {
            this.interactionManager.handleMouseDown();
        });
        
        this.domElement.addEventListener('mouseup', () => {
            this.interactionManager.handleMouseUp();
        });
        
        this.domElement.addEventListener('mouseleave', () => {
            this.interactionManager.handleMouseUp();
        });
    }

    setupCamera() {
        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera(
            -aspect, aspect, 1, -1, 0.1, 1000
        );
        this.camera.position.z = 1;
    }

    updateCameraAspect(width, height) {
        const aspect = width / height;
        this.camera.left = -aspect;
        this.camera.right = aspect;
        this.camera.updateProjectionMatrix();
    }

    // Methods to expose scene data to RenderManager
    getScene() {
        return this.scene;
    }

    getCamera() {
        return this.camera;
    }

    getDomElement() {
        return this.domElement;
    }

    addToLayer(object, layerName) {
        const layer = this.layers.get(layerName);
        const group = this.layerGroups.get(layerName);
        
        if (!layer || !group) {
            console.error(`Layer ${layerName} not found`);
            return false;
        }

        // Remove from current layer if it exists
        this.removeFromCurrentLayer(object);

        // Add to new layer
        layer.objects.add(object);
        group.add(object);
        
        // Set base z position based on layer
        object.position.z = 0; // Relative to group's z position
        return true;
    }

    removeFromCurrentLayer(object) {
        for (const [name, layer] of this.layers) {
            if (layer.objects.has(object)) {
                layer.objects.delete(object);
                const group = this.layerGroups.get(name);
                if (group) {
                    group.remove(object);
                }
                break;
            }
        }
    }

    getTopZIndexInLayer(layerName) {
        const layer = this.layers.get(layerName);
        if (!layer) return 0;

        let maxZ = 0;
        layer.objects.forEach(obj => {
            maxZ = Math.max(maxZ, obj.position.z);
        });
        return maxZ;
    }

    bringToFront(object, layerName) {
        const layer = this.layers.get(layerName);
        if (!layer) return;

        const topZ = this.getTopZIndexInLayer(layerName);
        object.position.z = topZ + 0.01;
    }


        // Inside SceneEngine.js

    createCard({ position, width = 1, height = 1.4, layer = 'cards' }) {
        // Create card geometry with rounded corners
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

        const geometry = new THREE.ShapeGeometry(shape);
        
        // Get material from ResourceLoader
        const material = this.resourceLoader.createMaterial('card', {
            // Any custom uniform values can be set here
            hover: { value: 0.0 },
            selected: { value: 0.0 },
            time: { value: 0.0 }
        });

        if (!material) {
            console.error('Failed to create card material');
            return null;
        }

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(position[0], position[1], 0);
        
        // Add to appropriate layer
        this.addToLayer(mesh, layer);

        // Register card interactions
        this.interactionManager.register(mesh, {
            onHover: (isHovered) => {
                console.log('superballs')
                if (!material.uniforms) return;
                material.uniforms.hover.value = isHovered ? 1.0 : 0.0;
                mesh.scale.set(isHovered ? 1.05 : 1.0, isHovered ? 1.05 : 1.0, 1.0);
            },
            onPress: () => {
                if (!material.uniforms) return;
                material.uniforms.selected.value = 1.0;
                // Track original position for drag handling
                const entityData = this.entities.get(mesh.uuid);
                if (entityData) {
                    entityData.dragStart = {
                        position: mesh.position.clone(),
                        mousePosition: this.interactionManager.mouse.clone()
                    };
                }
                this.bringToFront(mesh, layer);
            },
            onDrag: (mousePosition) => {
                const entityData = this.entities.get(mesh.uuid);
                if (!entityData || !entityData.dragStart) return;
                
                const deltaX = mousePosition.x - entityData.dragStart.mousePosition.x;
                const deltaY = mousePosition.y - entityData.dragStart.mousePosition.y;
                
                mesh.position.x = entityData.dragStart.position.x + deltaX;
                mesh.position.y = entityData.dragStart.position.y + deltaY;
            },
            onRelease: () => {
                if (!material.uniforms) return;
                material.uniforms.selected.value = 0.0;
                
                // Clear drag tracking
                const entityData = this.entities.get(mesh.uuid);
                if (entityData) {
                    delete entityData.dragStart;
                }
            }
        });

        // Track entity
        const entityData = {
            mesh,
            type: 'card',
            material,
            needsTimeUpdate: true
        };

        this.entities.set(mesh.uuid, entityData);
        this.entitiesNeedingUpdate.add(mesh.uuid);

        return {
            id: mesh.uuid,
            mesh,
            material
        };
    }


    updateUniforms(time) {
        for (const id of this.entitiesNeedingUpdate) {
            const entity = this.entities.get(id);
            if (!entity) continue;

            if (entity.needsTimeUpdate) {
                entity.material.uniforms.time.value = time;
            }
        }
    }

    render(time) {
        this.updateUniforms(time);
        this.renderManager.render(this.scene, this.camera);
    }
}