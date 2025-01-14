// src/objects/Card.js
import * as THREE from 'three';

export class Card {
    static create(config = {}) {
        const {
            width = 1,
            height = 1.4,
            position = [0, 0, 0]
        } = config;

        // Create basic mesh
        const geometry = new THREE.PlaneGeometry(width, height);
        const material = null; // Will be set by SceneEngine via resourceLoader
        const mesh = new THREE.Mesh(geometry);
        console.log('balls')

        // Set initial position
        mesh.position.set(...position);

        // Initial state
        const state = {
            // Core state
            status: 'idle',

            // Position states
            basePosition: new THREE.Vector3(...position),
            targetPosition: new THREE.Vector3(...position),
            dragOffset: new THREE.Vector3(),

            // Scale states
            baseScale: 1,
            currentScale: 1,
            targetScale: 1,

            // Animation states
            tiltAmount: 0.15,
            currentTilt: new THREE.Vector3(0, 0, 1),
            targetTilt: new THREE.Vector3(0, 0, 1),
            
            // Timing
            lastUpdateTime: 0,
            transitionStartTime: 0,
            transitionDuration: 0.15,
        };

        // Return minimal card object
        return { mesh, state };
    }

    static update(card, data) {
        const { mesh, state } = card;
        const { time, input, intersection, isIntersected, camera } = data;
        
        console.log('Card Update Received:', {
            hasIntersection: !!intersection,
            isIntersected,
            inputData: {
                position: input.position,
                isPressed: input.isPressed,
                isDragging: input.isDragging
            }
        });

        // Calculate delta time
        const deltaTime = (time - state.lastUpdateTime) / 1000;
        state.lastUpdateTime = time;

        // Update state based on input
        this.updateCardState(card, data);
        
        // Process state-specific behavior
        switch (state.status) {
            case 'idle':
                this.processIdleState(card, deltaTime);
                break;
            
            case 'hover':
                this.processHoverState(card, data, deltaTime);
                break;
            
            case 'drag':
                this.processDragState(card, data, deltaTime);
                break;
                
            case 'drop':
                this.processDropState(card, deltaTime);
                break;
        }

        // Update material uniforms if they exist
        if (mesh.material?.uniforms) {
            this.updateUniforms(card, data);
        }

        // Process animations
        this.processAnimations(card, deltaTime);
    }

    static updateCardState(card, data) {
        const { state } = card;
        const { input, isIntersected } = data;
        const prevStatus = state.status;
        
        console.log('Card Update:', {
            status: state.status,
            isIntersected,
            isPressed: input.isPressed,
            dragStatus: input.isDragging
        });

        // Determine new state
        let newStatus = prevStatus;

        switch (prevStatus) {
            case 'idle':
                if (isIntersected) {
                    newStatus = input.isPressed ? 'drag' : 'hover';
                }
                break;

            case 'hover':
                if (!isIntersected) {
                    newStatus = 'idle';
                } else if (input.isPressed) {
                    newStatus = 'drag';
                }
                break;

            case 'drag':
                if (!input.isPressed) {
                    newStatus = isIntersected ? 'hover' : 'drop';
                }
                break;

            case 'drop':
                if (this.hasReachedTarget(card)) {
                    newStatus = isIntersected ? 'hover' : 'idle';
                }
                break;
        }

        // Handle state transition if needed
        if (newStatus !== prevStatus) {
            this.transitionToState(card, newStatus, data);
        }
    }

    static transitionToState(card, newStatus, data) {
        const { state } = card;
        const { input, time } = data;

        console.log('State Transition:', {
            from: state.status,
            to: newStatus,
            time,
            inputState: {
                isPressed: input.isPressed,
                isDragging: input.isDragging
            }
        });

        state.status = newStatus;
        state.transitionStartTime = time;

        switch (newStatus) {
            case 'idle':
                state.targetScale = state.baseScale;
                state.targetTilt.set(0, 0, 1);
                break;

            case 'hover':
                state.targetScale = state.baseScale * 1.1;
                console.log('hover')
                break;

            case 'drag':
                state.targetScale = state.baseScale * 1.15;
                // Store drag offset from object center
                if (input.isPressed) {
                    this.calculateDragOffset(card, data);
                }
                break;

            case 'drop':
                state.targetPosition.copy(state.basePosition);
                state.targetScale = state.baseScale;
                state.targetTilt.set(0, 0, 1);
                break;
        }
    }

    static calculateDragOffset(card, data) {
        const { mesh, state } = card;
        const { intersection } = data;
        
        if (intersection) {
            state.dragOffset.copy(mesh.position)
                .sub(intersection.point);
        }
    }

    static processIdleState(card, deltaTime) {
        // Smooth return to rest position and rotation
        this.updatePosition(card, deltaTime);
        this.updateTilt(card, deltaTime);
    }

    static processHoverState(card, data, deltaTime) {
        const { intersection } = data;
        
        if (intersection) {
            // Calculate tilt based on intersection point
            this.calculateTilt(card, intersection.point);
        }
        
        this.updateTilt(card, deltaTime);
    }

    static processDragState(card, data, deltaTime) {
        const { input, camera } = data;
        const { mesh, state } = card;
        
        console.log('Drag Processing:', {
            inputPosition: input.position,
            dragDelta: input.dragDelta,
            currentPosition: mesh.position.toArray()
        });

        // Convert screen position to world position
        const worldPos = new THREE.Vector3(
            input.position.x, 
            input.position.y, 
            0
        ).unproject(camera);

        // Update position with drag offset
        mesh.position.copy(worldPos).add(state.dragOffset);

        // Update tilt based on movement
        const dragDelta = new THREE.Vector2(input.dragDelta.x, -input.dragDelta.y);
        this.calculateDragTilt(card, dragDelta);
        this.updateTilt(card, deltaTime);
    }

    static processDropState(card, deltaTime) {
        // Smooth return to base position
        this.updatePosition(card, deltaTime);
        this.updateTilt(card, deltaTime);
    }

    static calculateTilt(card, point) {
        const { mesh, state } = card;
        const localPoint = point.clone().sub(mesh.position);
        
        const tiltX = -localPoint.x * state.tiltAmount;
        const tiltY = -localPoint.y * state.tiltAmount;
        
        state.targetTilt.set(tiltX, tiltY, 1).normalize();
    }

    static calculateDragTilt(card, dragDelta) {
        const { state } = card;
        const tiltX = dragDelta.x * state.tiltAmount * 0.1;
        const tiltY = dragDelta.y * state.tiltAmount * 0.1;
        
        state.targetTilt.set(tiltX, tiltY, 1).normalize();
    }

    static updatePosition(card, deltaTime) {
        const { mesh, state } = card;
        const lerpFactor = 1 - Math.pow(0.001, deltaTime);
        
        mesh.position.lerp(state.targetPosition, lerpFactor);
    }

    static updateTilt(card, deltaTime) {
        const { state } = card;
        const lerpFactor = 1 - Math.pow(0.001, deltaTime);
        
        state.currentTilt.lerp(state.targetTilt, lerpFactor);
    }

    static updateUniforms(card, data) {
        const { mesh, state } = card;
        const { time, input } = data;

        const uniforms = mesh.material.uniforms;
        if (uniforms.time) uniforms.time.value = time;
        if (uniforms.hover) uniforms.hover.value = state.status !== 'idle' ? 1.0 : 0.0;
        if (uniforms.selected) uniforms.selected.value = state.status === 'drag' ? 1.0 : 0.0;
        if (uniforms.tiltNormal) uniforms.tiltNormal.value.copy(state.currentTilt);
    }

    static processAnimations(card, deltaTime) {
        const { mesh, state } = card;
        
        // Scale animation
        const scaleLerpFactor = 1 - Math.pow(0.001, deltaTime);
        state.currentScale = THREE.MathUtils.lerp(
            state.currentScale,
            state.targetScale,
            scaleLerpFactor
        );
        mesh.scale.setScalar(state.currentScale);
    }

    static hasReachedTarget(card) {
        const { mesh, state } = card;
        const threshold = 0.001;
        
        return mesh.position.distanceTo(state.targetPosition) < threshold;
    }
}