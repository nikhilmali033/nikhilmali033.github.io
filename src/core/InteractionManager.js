// src/core/InteractionManager.js
import * as THREE from 'three';

export class InteractionManager {
    constructor() {
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.interactiveObjects = new Map();
        this.selectedObject = null;
        this.isDragging = false;
        this.camera = null;
        this.scene = null;
    }

    initialize(camera, scene, domElement) {
        this.camera = camera;
        this.scene = scene;
        
        // DOM event handling should be managed by SceneEngine
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    updateMouseCoordinates(x, y, viewportWidth, viewportHeight) {
        this.mouse.x = (x / viewportWidth) * 2 - 1;
        this.mouse.y = -(y / viewportHeight) * 2 + 1;
    }

    register(mesh, callbacks) {
        this.interactiveObjects.set(mesh, {
            onPress: callbacks.onPress || null,
            onRelease: callbacks.onRelease || null,
            onHover: callbacks.onHover || null,
            onDrag: callbacks.onDrag || null
        });
    }

    unregister(mesh) {
        this.interactiveObjects.delete(mesh);
    }

    findIntersectingObject() {
        if (!this.camera || !this.scene) return null;
        
        this.raycaster.setFromCamera(this.mouse, this.camera);
        
        // Only check objects that are registered for interaction
        const interactiveList = Array.from(this.interactiveObjects.keys());
        const intersects = this.raycaster.intersectObjects(interactiveList, false);
        
        return intersects.length > 0 ? intersects[0] : null;  // Return full intersection data
    }
    
    handleMouseMove(normalizedX, normalizedY) {
        const previousSelectedObject = this.selectedObject;
        
        // Update mouse position with normalized coordinates
        this.mouse.x = normalizedX;
        this.mouse.y = normalizedY;
        
        const intersection = this.findIntersectingObject();
        this.selectedObject = intersection?.object || null;  // Store object reference
    
        // Handle hover states with intersection data
        if (previousSelectedObject !== this.selectedObject) {
            if (previousSelectedObject) {
                const callbacks = this.interactiveObjects.get(previousSelectedObject);
                callbacks?.onHover?.(false, null);
            }
            if (this.selectedObject) {
                const callbacks = this.interactiveObjects.get(this.selectedObject);
                callbacks?.onHover?.(true, intersection);
            }
        } else if (this.selectedObject) {
            // Update hover with new intersection data even if same object
            const callbacks = this.interactiveObjects.get(this.selectedObject);
            callbacks?.onHover?.(true, intersection);
        }
    
        // Handle dragging with intersection data
        if (this.isDragging && this.selectedObject) {
            const callbacks = this.interactiveObjects.get(this.selectedObject);
            callbacks?.onDrag?.(this.mouse, intersection);
        }
    }

    handleMouseDown() {
        const intersectedObject = this.findIntersectingObject();
        
        if (intersectedObject) {
            this.selectedObject = intersectedObject;
            this.isDragging = true;
            
            const callbacks = this.interactiveObjects.get(intersectedObject);
            callbacks?.onPress?.();
        }
    }

    handleMouseUp() {
        if (this.selectedObject) {
            const callbacks = this.interactiveObjects.get(this.selectedObject);
            callbacks?.onRelease?.();
        }
        
        this.isDragging = false;
        this.selectedObject = null;
    }
}