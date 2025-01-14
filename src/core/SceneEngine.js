import * as THREE from 'three';
import { InteractionManager } from './InteractionManager';
import { Card } from '../objects/Card.js';

export class SceneEngine {
    constructor(resourceLoader) {
        this.resourceLoader = resourceLoader;
        this.interactionManager = new InteractionManager();
        
        // Scene setup
        this.scene = new THREE.Scene();
        
        // Initialize core components
        this.setupCamera();
        this.domElement = null;
        
        // Layer management with object tracking
        this.layers = new Map([
            ['background', { 
                zIndex: 0, 
                group: new THREE.Group(),
                objects: new Map()  // Maps object types to Sets of objects
            }],
            ['cards', { 
                zIndex: 1, 
                group: new THREE.Group(),
                objects: new Map()
            }],
            ['ui', { 
                zIndex: 2, 
                group: new THREE.Group(),
                objects: new Map()
            }],
            ['effects', { 
                zIndex: 3, 
                group: new THREE.Group(),
                objects: new Map()
            }],
            ['overlay', { 
                zIndex: 4, 
                group: new THREE.Group(),
                objects: new Map()
            }]
        ]);

        // Initialize layer groups in scene
        this.layers.forEach((layer, name) => {
            layer.group.position.z = layer.zIndex * 0.1;
            this.scene.add(layer.group);
        });

        // Entity tracking for interaction management
        this.entities = new Map();
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
    }

    updateCameraAspect(width, height) {
        const aspect = width / height;
        this.camera.left = -aspect;
        this.camera.right = aspect;
        this.camera.updateProjectionMatrix();
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

    // Layer Management Methods
    registerObject(object, type, layerName) {
        const layer = this.layers.get(layerName);
        if (!layer) {
            console.error(`Layer ${layerName} not found`);
            return false;
        }

        // Initialize object type Set if it doesn't exist
        if (!layer.objects.has(type)) {
            layer.objects.set(type, new Set());
        }

        // Add object to layer's type set
        layer.objects.get(type).add(object);
        
        // Add mesh to layer group
        layer.group.add(object.mesh);
        
        // Register for interaction if needed
        if (object.mesh) {
            this.registerInteraction(object);
        }

        return true;
    }

    unregisterObject(object, type, layerName) {
        const layer = this.layers.get(layerName);
        if (!layer) return false;

        const typeSet = layer.objects.get(type);
        if (!typeSet) return false;

        // Remove from layer tracking
        typeSet.delete(object);
        
        // Remove mesh from layer group
        if (object.mesh) {
            layer.group.remove(object.mesh);
            this.interactionManager.unregister(object.mesh);
        }

        return true;
    }

    moveObjectToLayer(object, type, fromLayer, toLayer) {
        if (this.unregisterObject(object, type, fromLayer)) {
            return this.registerObject(object, type, toLayer);
        }
        return false;
    }

    getObjectsInLayer(layerName, type = null) {
        const layer = this.layers.get(layerName);
        if (!layer) return new Set();

        if (type) {
            return layer.objects.get(type) || new Set();
        }

        // Combine all object sets if no type specified
        const allObjects = new Set();
        for (const objects of layer.objects.values()) {
            for (const obj of objects) {
                allObjects.add(obj);
            }
        }
        return allObjects;
    }

    // Object Creation Methods
    createCard(config) {
        const { position, width, height, layer = 'cards' } = config;
        const cardEntity = Card.create(this, { position, width, height });
        
        // Register card in appropriate layer
        this.registerObject(cardEntity, 'card', layer);
        
        // Track entity for general management
        this.entities.set(cardEntity.mesh.uuid, cardEntity);
        
        return {
            id: cardEntity.mesh.uuid,
            mesh: cardEntity.mesh,
            material: cardEntity.material
        };
    }

    // In SceneEngine.js (update registration to handle intersection data)
    registerInteraction(object) {
        if (!object.mesh) return;

        this.interactionManager.register(object.mesh, {
            onHover: (isHovered, intersection) => {
                if (!object.material?.uniforms) return;
                object.material.uniforms.hover.value = isHovered ? 1.0 : 0.0;
                object.state.isHovered = isHovered;
                object.state.lastIntersection = intersection;  // Store intersection data
            },
            onPress: () => {
                if (!object.material?.uniforms) return;
                object.material.uniforms.selected.value = 1.0;
                this.bringToFront(object);
            },
            onDrag: (mousePosition, intersection) => {
                const worldPos = new THREE.Vector3(
                    mousePosition.x,
                    mousePosition.y,
                    0
                ).unproject(this.camera);
                object.mesh.position.x = worldPos.x;
                object.mesh.position.y = worldPos.y;
                object.state.lastIntersection = intersection;  // Update intersection data
            },
            onRelease: () => {
                if (!object.material?.uniforms) return;
                object.material.uniforms.selected.value = 0.0;
            }
        });
    }





    bringToFront(object) {
        for (const [layerName, layer] of this.layers) {
            for (const objects of layer.objects.values()) {
                if (objects.has(object)) {
                    // Find max Z in current layer
                    let maxZ = 0;
                    objects.forEach(obj => {
                        if (obj.mesh && obj !== object) {
                            maxZ = Math.max(maxZ, obj.mesh.position.z);
                        }
                    });
                    // Set object slightly above max Z
                    object.mesh.position.z = maxZ + 0.01;
                    return;
                }
            }
        }
    }

    // Update Methods
    update(time) {
        // Update all objects by type in each layer
        for (const [layerName, layer] of this.layers) {
            // Update cards
            const cards = layer.objects.get('card') || new Set();
            for (const card of cards) {
                // Verify card is valid before updating
                if (!card || !card.mesh || !card.material) {
                    console.warn(`Invalid card object found in layer ${layerName}`);
                    continue;
                }

                try {
                    Card.update(this, card, this.interactionManager.mouse);
                    
                    // Only update time if uniforms exist and update is needed
                    if (card.needsTimeUpdate && 
                        card.material.uniforms && 
                        card.material.uniforms.time) {
                        card.material.uniforms.time.value = time;
                    }
                } catch (error) {
                    console.error(`Error updating card in layer ${layerName}:`, error);
                }
            }

            // Add other object type updates here as needed
            // const buttons = layer.objects.get('button') || new Set();
            // for (const button of buttons) {
            //     Button.update(this, button);
            // }
        }
    }

    // Scene Access Methods
    getScene() { return this.scene; }
    getCamera() { return this.camera; }
    getDomElement() { return this.domElement; }
}