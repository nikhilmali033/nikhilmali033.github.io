// src/core/InteractionManager.js
import * as THREE from 'three';

export class InteractionManager {
    constructor(renderManager) {
        this.renderManager = renderManager;
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.interactiveObjects = new Map();  // Maps meshes to their callbacks
        this.selectedObject = null;
        this.isDragging = false;
    }

    initialize() {
        const canvas = this.renderManager.renderer.domElement;
        
        canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
        canvas.addEventListener('mousedown', this.onMouseDown.bind(this));
        canvas.addEventListener('mouseup', this.onMouseUp.bind(this));
        canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));
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

    updateMousePosition(event) {
        const canvas = this.renderManager.renderer.domElement;
        const rect = canvas.getBoundingClientRect();
        
        this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    }

    findIntersectingObject() {
        const intersects = [];
        
        // Check each layer for intersections
        this.renderManager.layers.forEach(({ scene, camera }) => {
            this.raycaster.setFromCamera(this.mouse, camera);
            
            // Get only interactive objects from the scene
            const meshes = scene.children.filter(obj => 
                this.interactiveObjects.has(obj)
            );
            
            intersects.push(...this.raycaster.intersectObjects(meshes));
        });

        // Return the closest intersection
        return intersects.length > 0 ? intersects[0].object : null;
    }

    onMouseMove(event) {
        const previousSelectedObject = this.selectedObject;
        this.updateMousePosition(event);
        
        const intersectedObject = this.findIntersectingObject();
        this.selectedObject = intersectedObject;

        // Handle hover states
        if (previousSelectedObject !== this.selectedObject) {
            if (previousSelectedObject) {
                const callbacks = this.interactiveObjects.get(previousSelectedObject);
                callbacks?.onHover?.(false);
            }
            if (this.selectedObject) {
                const callbacks = this.interactiveObjects.get(this.selectedObject);
                callbacks?.onHover?.(true);
            }
        }

        // Handle dragging
        if (this.isDragging && this.selectedObject) {
            const callbacks = this.interactiveObjects.get(this.selectedObject);
            callbacks?.onDrag?.(this.mouse);
        }
    }

    onMouseDown(event) {
        this.updateMousePosition(event);
        const intersectedObject = this.findIntersectingObject();
        
        if (intersectedObject) {
            this.selectedObject = intersectedObject;
            this.isDragging = true;
            
            const callbacks = this.interactiveObjects.get(intersectedObject);
            callbacks?.onPress?.();
        }
    }

    onMouseUp(event) {
        if (this.selectedObject) {
            const callbacks = this.interactiveObjects.get(this.selectedObject);
            callbacks?.onRelease?.();
        }
        
        this.isDragging = false;
    }

    onMouseLeave(event) {
        if (this.selectedObject) {
            const callbacks = this.interactiveObjects.get(this.selectedObject);
            callbacks?.onRelease?.();
            callbacks?.onHover?.(false);
        }
        
        this.selectedObject = null;
        this.isDragging = false;
    }
}