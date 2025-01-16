// src/core/SceneEngine.js
import * as THREE from 'three';
import { InputManager } from './InputManager';

export class SceneEngine {
    constructor(resourceLoader) {
        this.resourceLoader = resourceLoader;
        this.inputManager = new InputManager();
        
        // Core Three.js setup
        this.scene = new THREE.Scene();
        this.setupCamera();
        
        // Interaction setup
        this.raycaster = new THREE.Raycaster();
        this.interactiveObjects = new Map();
        this.draggedObject = null;
        
        // Layer management
        this.layers = new Map([
            ['background', { zIndex: 0, group: new THREE.Group() }],
            ['cards', { zIndex: 10, group: new THREE.Group() }],
            ['ui', { zIndex: 20, group: new THREE.Group() }],
            ['effects', { zIndex: 30, group: new THREE.Group() }],
            ['overlay', { zIndex: 40, group: new THREE.Group() }]
        ]);
        
        // Initialize layers
        this.layers.forEach((layer) => {
            layer.group.position.z = layer.zIndex;
            layer.group.renderOrder = layer.zIndex;
            this.scene.add(layer.group);
        });
    }

    initialize(domElement) {
        this.domElement = domElement;
        this.inputManager.initialize(domElement);
    }

    setupCamera() {
        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera(
            -aspect, aspect, 1, -1, 1, 100
        );
        this.camera.position.z = 50;
    }

    // Add object to scene and set up for interaction
    addObject(object, config) {
        const { layer = 'cards', interactionConfig = {} } = config;
        
        // Validate object has required properties
        if (!object.mesh || !object.update) {
            console.error('Invalid object: must have mesh and update method');
            return null;
        }

        // Add to appropriate layer
        const layerData = this.layers.get(layer);
        if (!layerData) {
            console.error(`Invalid layer: ${layer}`);
            return null;
        }
        
        layerData.group.add(object.mesh);

        // Register for interactions
        this.registerInteractiveObject(object, interactionConfig);

        return object;
    }

    // Remove object from scene and interaction registry
    removeObject(object) {
        if (!object.mesh) return false;

        // Remove from layer
        object.mesh.parent?.remove(object.mesh);
        
        // Unregister from interactions
        this.unregisterInteractiveObject(object);

        return true;
    }

    registerInteractiveObject(object, config) {
        this.interactiveObjects.set(object.mesh.uuid, {
            object,
            config,
            state: {
                isHovered: false,
                isPressed: false,
                isDragging: false
            }
        });
    }

    unregisterInteractiveObject(object) {
        this.interactiveObjects.delete(object.mesh.uuid);
    }

    findIntersectingObject(position) {
        this.raycaster.setFromCamera(
            new THREE.Vector2(position.x, position.y),
            this.camera
        );
        
        const meshes = Array.from(this.interactiveObjects.values())
            .map(data => data.object.mesh);
        
        const intersects = this.raycaster.intersectObjects(meshes, false);
        
        if (intersects.length === 0) return null;
        
        const intersection = intersects[0];
        const interactiveData = this.interactiveObjects.get(intersection.object.uuid);
        
        return { intersection, interactiveData };
    }

    update(time) {
        const inputData = this.inputManager.getInputData();
        const intersectionResult = this.findIntersectingObject(inputData.position);
        
        // Handle dragged object
        if (this.draggedObject) {
            if (!inputData.isPressed) {
                // Return to original layer
                const originalLayer = this.layers.get(this.draggedObject.originalLayer);
                originalLayer.group.add(this.draggedObject.object.mesh);
                this.draggedObject = null;
            } else {
                // Update dragged object
                this.updateObject(this.draggedObject.object, {
                    time,
                    input: inputData,
                    intersection: intersectionResult?.intersection || null,
                    isIntersected: true
                });
                return;
            }
        }

        // Update all objects
        this.interactiveObjects.forEach(({ object, config }) => {
            const isIntersected = intersectionResult?.interactiveData?.object === object;
            this.updateObject(object, {
                time,
                input: inputData,
                intersection: intersectionResult?.intersection || null,
                isIntersected,
                onDragStart: () => this.handleDragStart(object, config)
            });
        });
    }

    updateObject(object, updateData) {
        updateData.camera = this.camera; // Add camera reference
        object.update(updateData);
    }

    handleDragStart(object, config) {
        // Store original layer by finding which layer contains the mesh
        let originalLayer = 'cards'; // default fallback
        for (const [layerName, layerData] of this.layers.entries()) {
            if (layerData.group.children.includes(object.mesh)) {
                originalLayer = layerName;
                break;
            }
        }

        // Move to overlay layer
        const overlayLayer = this.layers.get('overlay');
        const worldPosition = new THREE.Vector3();
        object.mesh.getWorldPosition(worldPosition);
        
        overlayLayer.group.add(object.mesh);
        object.mesh.position.copy(worldPosition);
        object.mesh.renderOrder = overlayLayer.group.renderOrder + 1;
        
        this.draggedObject = { 
            object, 
            config,
            originalLayer 
        };
    }

    // Utility methods
    getScene() { return this.scene; }
    getCamera() { return this.camera; }

    // Layer management
    getLayer(name) {
        return this.layers.get(name)?.group || null;
    }
}