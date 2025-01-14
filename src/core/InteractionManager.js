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
        
        // New state tracking
        this.lastIntersectedObject = null;
        this.lastMousePosition = new THREE.Vector2();
        this.mouseHasMoved = false;
    }

    initialize(camera, scene, domElement) {
        this.camera = camera;
        this.scene = scene;
        
        // Bind methods
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    updateMouseCoordinates(x, y, viewportWidth, viewportHeight) {
        // Store last position for movement detection
        this.lastMousePosition.copy(this.mouse);
        
        // Update current position
        this.mouse.x = (x / viewportWidth) * 2 - 1;
        this.mouse.y = -(y / viewportHeight) * 2 + 1;
        
        // Set flag if mouse has moved
        this.mouseHasMoved = !this.lastMousePosition.equals(this.mouse);
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
        
        const interactiveList = Array.from(this.interactiveObjects.keys());
        const intersects = this.raycaster.intersectObjects(interactiveList, false);
        
        return intersects.length > 0 ? intersects[0] : null;
    }

    // New update method for the main loop
    update(time) {
        const intersection = this.findIntersectingObject();
        const intersectedObject = intersection?.object || null;
        
        // Handle hover state changes
        if (intersectedObject !== this.lastIntersectedObject) {
            // Handle unhover for previous object
            if (this.lastIntersectedObject) {
                const callbacks = this.interactiveObjects.get(this.lastIntersectedObject);
                callbacks?.onHover?.(false, null);
            }
            
            // Handle hover for new object
            if (intersectedObject) {
                const callbacks = this.interactiveObjects.get(intersectedObject);
                callbacks?.onHover?.(true, intersection);
            }
            
            this.lastIntersectedObject = intersectedObject;
        }
        // Update hover state even if same object (for intersection data)
        else if (intersectedObject && this.mouseHasMoved) {
            const callbacks = this.interactiveObjects.get(intersectedObject);
            callbacks?.onHover?.(true, intersection);
        }
        
        // Handle dragging
        if (this.isDragging && this.selectedObject) {
            const callbacks = this.interactiveObjects.get(this.selectedObject);
            callbacks?.onDrag?.(this.mouse, intersection);
        }
        
        // Reset movement flag
        this.mouseHasMoved = false;
    }

    // Simplified mouse event handlers
    handleMouseMove(normalizedX, normalizedY) {
        // Just update coordinates, raycasting happens in update loop
        this.mouse.x = normalizedX;
        this.mouse.y = normalizedY;
        this.mouseHasMoved = true;
    }

    handleMouseDown() {
        const intersection = this.findIntersectingObject();
        
        if (intersection) {
            this.selectedObject = intersection.object;
            this.isDragging = true;
            
            const callbacks = this.interactiveObjects.get(this.selectedObject);
            callbacks?.onPress?.(intersection);
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