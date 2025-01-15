import * as THREE from 'three';

export class CardOrientation {
    constructor(config = {}) {
        // Configuration
        this.config = {
            maxTiltAngle: config.maxTiltAngle ?? 0.05,
            rotationSpeed: config.rotationSpeed ?? 0.05,
            returnSpeed: config.returnSpeed ?? 0.05,
            tiltResponseScale: config.tiltResponseScale ?? 0.05
        };

        // State
        this.quaternion = new THREE.Quaternion();
        this.targetQuaternion = new THREE.Quaternion();
        this.normal = new THREE.Vector3(0, 0, 1);
        
        // Reusable objects
        this._direction = new THREE.Vector3();
        this._up = new THREE.Vector3(0, 1, 0);
        this._right = new THREE.Vector3();
        this._lookAtMatrix = new THREE.Matrix4();
    }

    update(deltaTime, params = {}) {
        const { isHovered, relativeMousePos, isDragging, dragVelocity } = params;
        
        if (isHovered && !isDragging) {
            this.updateHoverOrientation(relativeMousePos);
        } else if (isDragging && dragVelocity) {
            this.updateDragOrientation(dragVelocity);
        } else {
            this.updateReturnOrientation();
        }

        // Interpolate current quaternion
        const speed = isDragging ? this.config.rotationSpeed : this.config.returnSpeed;
        const lerpFactor = 1 - Math.pow(0.001, deltaTime * speed);
        this.quaternion.slerp(this.targetQuaternion, lerpFactor);

        // Update normal
        this.normal.set(0, 0, 1).applyQuaternion(this.quaternion);
        
        return {
            quaternion: this.quaternion,
            normal: this.normal
        };
    }

    updateHoverOrientation(relativeMousePos) {
        // Calculate direction from card center to mouse
        this._direction.copy(relativeMousePos).normalize();
        
        // Apply tilt angle limit
        const angle = this._direction.angleTo(this.normal);
        if (angle > this.config.maxTiltAngle) {
            this._direction.lerp(
                new THREE.Vector3(0, 0, 1), 
                1 - this.config.maxTiltAngle / angle
            );
        }

        // Calculate orientation
        this._right.crossVectors(this._direction, this._up).normalize();
        this._up.crossVectors(this._right, this._direction).normalize();
        
        this._lookAtMatrix.lookAt(
            new THREE.Vector3(0, 0, 0),
            this._direction,
            this._up
        );
        
        this.targetQuaternion.setFromRotationMatrix(this._lookAtMatrix);
    }

    updateDragOrientation(dragVelocity) {
        // Create rotation from drag velocity
        const rotX = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(1, 0, 0),
            dragVelocity.y * this.config.tiltResponseScale
        );
        
        const rotY = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 1, 0),
            -dragVelocity.x * this.config.tiltResponseScale
        );
        
        this.targetQuaternion.multiplyQuaternions(rotY, rotX);
    }

    updateReturnOrientation() {
        this.targetQuaternion.identity();
    }

    // Utility methods
    getCurrentQuaternion() {
        return this.quaternion;
    }

    getCurrentNormal() {
        return this.normal;
    }

    setConfig(newConfig) {
        Object.assign(this.config, newConfig);
    }

    reset() {
        this.quaternion.identity();
        this.targetQuaternion.identity();
        this.normal.set(0, 0, 1);
    }
}