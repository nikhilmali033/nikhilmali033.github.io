// src/objects/Card.js
import * as THREE from 'three';

export class Card {
    static createGeometry(width = 1, height = 1.4) {
        return new THREE.PlaneGeometry(width, height);
    }

    static createMaterial(resourceLoader) {
        return resourceLoader.createMaterial('card');
    }

    static create(sceneEngine, { position, width = 1, height = 1.4 }) {
        const geometry = Card.createGeometry(width, height);
        const material = Card.createMaterial(sceneEngine.resourceLoader);

        if (!material) {
            console.error('Failed to create card - material creation failed');
            return null;
        }

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(position[0], position[1], 0);

        return {
            mesh,
            material,
            type: 'card',
            needsTimeUpdate: true,
            state: {
                // Core state
                currentState: 'IDLE',
                lastIntersection: null,

                // Animation states
                transitionStartTime: 0,
                isTransitioning: false,
                transitionDuration: 0.15,

                // Scale states
                baseScale: 1.0,
                hoverScale: 1.05,
                currentScale: 1.0,

                // Tilt states
                tiltAmount: 0.15,
                currentTilt: new THREE.Vector3(0, 0, 1),
                targetTilt: new THREE.Vector3(0, 0, 1),

                // Drag states
                isDragging: false,
                dragStartPosition: new THREE.Vector3(),
                dragOffset: new THREE.Vector3(),

                // Animation tracking
                lastUpdateTime: 0,
                animations: new Map()
            }
        };
    }

    static update(sceneEngine, entity, intersectionData, time) {
        const { mesh, material, state } = entity;
        const deltaTime = (time - state.lastUpdateTime) / 1000;
        state.lastUpdateTime = time;

        // Update state based on intersection
        this.updateState(entity, intersectionData);
        
        // Process state-specific behaviors
        switch (state.currentState) {
            case 'IDLE':
                this.processIdleState(entity, deltaTime);
                break;
            
            case 'HOVER':
                this.processHoverState(entity, intersectionData, deltaTime);
                break;
            
            case 'DRAGGING':
                this.processDragState(entity, intersectionData, deltaTime);
                break;
        }

        // Update material uniforms
        if (material.uniforms) {
            material.uniforms.time.value = time;
            material.uniforms.hover.value = (state.currentState === 'HOVER' || state.currentState === 'DRAGGING') ? 1.0 : 0.0;
            material.uniforms.selected.value = state.currentState === 'DRAGGING' ? 1.0 : 0.0;
            material.uniforms.tiltNormal.value.copy(state.currentTilt);
        }

        // Process any active animations
        this.processAnimations(entity, deltaTime);

        return mesh;
    }

    static updateState(entity, intersectionData) {
        const { state } = entity;
        const wasIntersecting = !!state.lastIntersection;
        const isIntersecting = !!intersectionData;

        // State transition logic
        switch (state.currentState) {
            case 'IDLE':
                if (isIntersecting) {
                    this.transitionToState(entity, 'HOVER');
                }
                break;

            case 'HOVER':
                if (!isIntersecting) {
                    this.transitionToState(entity, 'IDLE');
                } else if (intersectionData.isDragging) {
                    this.transitionToState(entity, 'DRAGGING');
                }
                break;

            case 'DRAGGING':
                if (!intersectionData.isDragging) {
                    this.transitionToState(entity, isIntersecting ? 'HOVER' : 'IDLE');
                }
                break;
        }

        state.lastIntersection = intersectionData;
    }

    static transitionToState(entity, newState) {
        const { state } = entity;
        const oldState = state.currentState;
        
        // Exit current state
        switch (oldState) {
            case 'DRAGGING':
                state.isDragging = false;
                break;
        }

        // Enter new state
        switch (newState) {
            case 'HOVER':
                this.addAnimation(entity, 'scale', {
                    start: state.currentScale,
                    target: state.hoverScale,
                    duration: state.transitionDuration
                });
                break;

            case 'IDLE':
                this.addAnimation(entity, 'scale', {
                    start: state.currentScale,
                    target: state.baseScale,
                    duration: state.transitionDuration
                });
                break;

            case 'DRAGGING':
                state.isDragging = true;
                state.dragStartPosition.copy(entity.mesh.position);
                break;
        }

        state.currentState = newState;
    }

    static processIdleState(entity, deltaTime) {
        const { state } = entity;
        
        // Reset tilt gradually
        state.targetTilt.set(0, 0, 1);
        this.updateTilt(entity, deltaTime);
    }

    static processHoverState(entity, intersectionData, deltaTime) {
        if (!intersectionData) return;

        const { state } = entity;
        const { point } = intersectionData;

        // Calculate tilt based on intersection point
        this.calculateTilt(entity, point);
        this.updateTilt(entity, deltaTime);
    }

    static processDragState(entity, intersectionData, deltaTime) {
        if (!intersectionData) return;

        const { mesh, state } = entity;
        const { point } = intersectionData;

        // Update position
        mesh.position.copy(point).add(state.dragOffset);

        // Maintain hover tilt
        this.calculateTilt(entity, point);
        this.updateTilt(entity, deltaTime);
    }

    static calculateTilt(entity, point) {
        const { mesh, state } = entity;
        const localPoint = point.clone().sub(mesh.position);
        
        // Calculate tilt direction
        const tiltX = -localPoint.x * state.tiltAmount;
        const tiltY = -localPoint.y * state.tiltAmount;
        
        state.targetTilt.set(tiltX, tiltY, 1).normalize();
    }

    static updateTilt(entity, deltaTime) {
        const { state } = entity;
        const lerpFactor = 1 - Math.pow(0.001, deltaTime);
        
        state.currentTilt.lerp(state.targetTilt, lerpFactor);
    }

    static addAnimation(entity, name, { start, target, duration }) {
        entity.state.animations.set(name, {
            startValue: start,
            targetValue: target,
            duration,
            elapsed: 0
        });
    }

    static processAnimations(entity, deltaTime) {
        const { state } = entity;

        state.animations.forEach((anim, name) => {
            anim.elapsed += deltaTime;
            const progress = Math.min(anim.elapsed / anim.duration, 1);
            
            switch (name) {
                case 'scale':
                    state.currentScale = THREE.MathUtils.lerp(
                        anim.startValue,
                        anim.targetValue,
                        progress
                    );
                    entity.mesh.scale.setScalar(state.currentScale);
                    break;
            }

            if (progress >= 1) {
                state.animations.delete(name);
            }
        });
    }
}