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
        
        // Layer management (simplified for clarity)
        this.layers = new Map([
            ['background', { zIndex: 0, group: new THREE.Group() }],
            ['cards', { zIndex: 10, group: new THREE.Group() }],
            ['ui', { zIndex: 20, group: new THREE.Group() }],
            ['effects', { zIndex: 30, group: new THREE.Group() }],
            ['overlay', { zIndex: 40, group: new THREE.Group() }]
        ]);
        
        // Initialize layers with larger z-separation
        this.layers.forEach((layer) => {
            layer.group.position.z = layer.zIndex;  // Remove the 0.1 multiplication
            layer.group.renderOrder = layer.zIndex; // Add explicit render order
            this.scene.add(layer.group);
        });
        this.draggedObject = null;
    }

    initialize(domElement) {
        this.domElement = domElement;
        this.inputManager.initialize(domElement);
    }

    setupCamera() {
        const aspect = window.innerWidth / window.innerHeight;
        this.camera = new THREE.OrthographicCamera(
            -aspect, aspect, 1, -1, 1, 100  // Tighter near/far range
        );
        this.camera.position.z = 50;  // Position camera in middle of range
    }

    registerInteractiveObject(mesh, config) {
        this.interactiveObjects.set(mesh.uuid, {
            mesh,
            config,
            state: {
                isHovered: false,
                isPressed: false,
                isDragging: false
            }
        });
    }

    unregisterInteractiveObject(mesh) {
        this.interactiveObjects.delete(mesh.uuid);
    }

    findIntersectingObject(position) {
        // Update raycaster with normalized device coordinates
        this.raycaster.setFromCamera(
            new THREE.Vector2(position.x, position.y),
            this.camera
        );
        
        // Get all interactive meshes
        const meshes = Array.from(this.interactiveObjects.values())
            .map(obj => obj.mesh);
        
        // Find intersections
        const intersects = this.raycaster.intersectObjects(meshes, false);
        
        if (intersects.length === 0) return null;
        
        // Return both intersection data and our stored interactive object data
        const intersection = intersects[0];
        const interactiveData = this.interactiveObjects.get(intersection.object.uuid);
        
        return {
            intersection,
            interactiveData
        };
    }

    createObject(type, config) {
        switch (type) {
            case 'card':
                return this.createCard(config);
            // Add other object types as needed
            default:
                console.error(`Unknown object type: ${type}`);
                return null;
        }
    }

    createCard(config) {
        const { position, width = 1, height = 1.4, layer = 'cards' } = config;
        
        // Card creation is now minimal - just basic setup
        const geometry = new THREE.PlaneGeometry(width, height);
        const material = this.resourceLoader.createMaterial('card');
        const mesh = new THREE.Mesh(geometry, material);
        
        // Basic positioning
        mesh.position.set(position[0], position[1], 0);
        
        // Add to appropriate layer
        const layerData = this.layers.get(layer);
        layerData.group.add(mesh);
        
        // Register for interactions with basic config
        this.registerInteractiveObject(mesh, {
            type: 'card',
            ...config
        });
        
        return {
            id: mesh.uuid,
            mesh,
            material
        };
    }

    update(time) {
        const inputData = this.inputManager.getInputData();
        const intersectionResult = this.findIntersectingObject(inputData.position);
        
        // If something is being dragged, only update that
        if (this.draggedObject) {
            if (!inputData.isPressed) {
                // Move back to original layer when drag ends
                const layerData = this.layers.get('cards');  // Assuming it's a card
                layerData.group.add(this.draggedObject.mesh);
                this.draggedObject = null;
            } else {
                this.draggedObject.config.onUpdate({
                    time,
                    input: inputData,
                    intersection: intersectionResult?.intersection || null,
                    camera: this.camera,
                    isIntersected: true
                });
                return;
            }
        }

        // Normal update for all objects when nothing is being dragged
        this.interactiveObjects.forEach((obj) => {
            const isIntersected = intersectionResult?.interactiveData === obj;
            if (obj.config.onUpdate) {
                obj.config.onUpdate({
                    time,
                    input: inputData,
                    intersection: intersectionResult?.intersection || null,
                    camera: this.camera,
                    isIntersected,
                    onDragStart: (card) => {
                        this.draggedObject = obj;
                        const overlayLayer = this.layers.get('overlay');
                        
                        // Store original world position
                        const worldPosition = new THREE.Vector3();
                        obj.mesh.getWorldPosition(worldPosition);
                        
                        // Move to overlay layer
                        overlayLayer.group.add(obj.mesh);
                        
                        // Restore world position
                        obj.mesh.position.copy(worldPosition);
                        
                        // Set higher render order for the dragged mesh
                        obj.mesh.renderOrder = overlayLayer.group.renderOrder + 1;
                    }
                });
            }
        });
    }

    // Utility methods
    getScene() { return this.scene; }
    getCamera() { return this.camera; }
}