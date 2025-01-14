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
            ['cards', { zIndex: 1, group: new THREE.Group() }],
            ['ui', { zIndex: 2, group: new THREE.Group() }],
            ['effects', { zIndex: 3, group: new THREE.Group() }],
            ['overlay', { zIndex: 4, group: new THREE.Group() }]
        ]);
        
        // Initialize layers
        this.layers.forEach((layer) => {
            layer.group.position.z = layer.zIndex * 0.1;
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
            -aspect, aspect, 1, -1, 0.1, 1000
        );
        this.camera.position.z = 1;
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
        // Get current input state
        const inputData = this.inputManager.getInputData();
        
        // Find currently intersected object
        const intersectionResult = this.findIntersectingObject(inputData.position);
        
        // Build interaction data package for objects
        const interactionData = {
            time,
            input: inputData,
            intersection: intersectionResult?.intersection || null,
            camera: this.camera
        };

        // Update all interactive objects
        this.interactiveObjects.forEach((obj) => {
            // Check if this is the intersected object
            const isIntersected = intersectionResult?.interactiveData === obj;
            
            // Let the object handle its own update
            if (obj.config.onUpdate) {
                obj.config.onUpdate({
                    ...interactionData,
                    isIntersected
                });
            }
        });
    }

    // Utility methods
    getScene() { return this.scene; }
    getCamera() { return this.camera; }
}