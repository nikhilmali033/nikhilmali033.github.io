// TextPhysics.js - Updated Implementation with fixes
import * as THREE from 'three';
import * as CANNON from 'cannon';

export default class TextPhysics {
    constructor(scene, world) {
        this.scene = scene;
        this.world = world;
        this.textMeshes = [];
        this.currentText = "";
        this.physicsMaterial = new CANNON.Material('physicsMaterial');
        
        // Configuration options
        this.config = {
            // Timing parameters (in milliseconds)
            characterDelay: 100,     // Delay between character animations
            holdDelay: 2000,          // Time to hold text before physics drop
            fadeInDuration: 200,     // How long the fade-in animation takes
            zposition: 3,
            
            // Animation parameters
            initialScale: 2.0,       // Initial scale when fading in
            targetScale: 1.5,        // Target scale
            characterSpacing: 0.2,

            // Physics parameters
            initialRotation: 3,    // Initial random rotation amount
            
            
            // Appearance
            fontSize: 100,
            fontStyle: 'bold',
            fontFamily: 'Arial',
            textColor: 'red',
            textAlign: 'center',
            textBaseline: 'middle'
        };
    }

    // Main method to animate text
    animateText(text) {
        this.currentText = text;
        
        // Clean up old physics objects
        this.textMeshes.forEach(item => {
            this.scene.remove(item.mesh);
            this.world.remove(item.body);
        });
        this.textMeshes = [];
        
        // Measure text to determine positions
        const measurements = this._measureText(text);
        const totalWidth = measurements.totalWidth;
        const charWidths = measurements.charWidths;
        
        // Create 3D objects for each character
        let currentX = -totalWidth / 2; // Start from the left side (centered)
        
        for (let i = 0; i < text.length; i++) {
            // Position for this character
            const charWidth = charWidths[i];
            const x = currentX + (charWidth / 2);
            
            // Create 3D character with initial state
            const charObject = this._createChar({
                char: text[i],
                x: x,
                y: 0,
                width: charWidth,
                height: measurements.height,
                index: i
            });
            
            // Schedule fade-in animation
            setTimeout(() => {
                this._startFadeIn(charObject);
            }, i * this.config.characterDelay);
            
            // Schedule physics drop
            setTimeout(() => {
                this._startPhysicsDrop(charObject);
            }, i * this.config.characterDelay + this.config.holdDelay);
            
            // Move to the next character position
            currentX += charWidth;
        }
    }

    // Measure text to determine layout
    _measureText(text) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 1024;
        canvas.height = 256;
        
        ctx.font = `${this.config.fontStyle} ${this.config.fontSize}px ${this.config.fontFamily}`;
        ctx.textAlign = this.config.textAlign;
        ctx.textBaseline = this.config.textBaseline;
        
        // Measure total width
        const totalWidth = ctx.measureText(text).width * 0.01 * this.config.characterSpacing; // Scale down for scene size
        
        // Measure individual character widths
        const charWidths = [];
        for (let i = 0; i < text.length; i++) {
            const width = ctx.measureText(text[i]).width * 0.01 * this.config.characterSpacing; // Scale down for scene size
            charWidths.push(width);
        }
        
        // Approximate height based on fontSize
        const height = this.config.fontSize * 0.01 * this.config.characterSpacing; // Scale down for scene size
        
        return { totalWidth, charWidths, height };
    }

    // Create a single character object
    _createChar(charInfo) {
        // Create character material with canvas texture
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 128;
        canvas.height = 128;
        
        // Draw character
        ctx.fillStyle = this.config.textColor;
        ctx.font = `${this.config.fontStyle} ${this.config.fontSize}px ${this.config.fontFamily}`;
        ctx.textAlign = this.config.textAlign;
        ctx.textBaseline = this.config.textBaseline;
        ctx.fillText(charInfo.char, canvas.width / 2, canvas.height / 2);
        
        // Create texture
        const texture = new THREE.CanvasTexture(canvas);
        
        // Create mesh
        const width = charInfo.width * 3;
        const height = charInfo.height * 3;
        
        // Use PlaneGeometry instead of BoxGeometry for zero depth
        const geometry = new THREE.PlaneGeometry(width, height);
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true,
            opacity: 0 // Start invisible
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.position.set(charInfo.x * 3, charInfo.y * 3, this.config.zposition);
        
        // Add initial random rotation
        const randomRotation = (Math.random() - 0.5) * this.config.initialRotation;
        mesh.rotation.z = randomRotation;
        
        // Scale starts large
        mesh.scale.set(this.config.initialScale, this.config.initialScale, 1);
        
        this.scene.add(mesh);
        
        // State object for tracking this character
        const state = {
            mesh: mesh,
            body: null, // Will create during physics drop
            index: charInfo.index,
            
            // Animation states
            isFadingIn: false,
            isPhysicsActive: false,
            fadeStartTime: 0,
            
            // Position and dimensions
            x: charInfo.x * 3,
            y: charInfo.y * 3,
            width: width,
            height: height
        };
        
        // Add to tracking array
        this.textMeshes.push(state);
        
        return state;
    }

    // Start fade-in animation for a character
    _startFadeIn(charObject) {
        charObject.isFadingIn = true;
        charObject.fadeStartTime = Date.now();
    }

    // Start physics drop for a character
    _startPhysicsDrop(charObject) {
        if (!charObject.isPhysicsActive) {
            charObject.isPhysicsActive = true;
            
            // Create physics body
            const shape = new CANNON.Box(new CANNON.Vec3(
                charObject.width/2, 
                charObject.height/2, 
                0.01 // Minimal depth
            ));
            
            const body = new CANNON.Body({
                mass: 1, // Active mass for physics
                shape: shape,
                material: this.physicsMaterial,
                position: new CANNON.Vec3(
                    charObject.mesh.position.x,
                    charObject.mesh.position.y,
                    charObject.mesh.position.z
                )
            });
            
            // Copy current rotation to body
            const euler = new THREE.Euler().copy(charObject.mesh.rotation);
            const quaternion = new THREE.Quaternion().setFromEuler(euler);
            body.quaternion.set(
                quaternion.x,
                quaternion.y,
                quaternion.z,
                quaternion.w
            );
            
            // Store the body in the state
            charObject.body = body;
            
            // Add body to physics world
            this.world.addBody(body);
            
            // Add random forces for interesting motion
            body.velocity.set(
                (Math.random() - 0.5) * 3,
                Math.random() * 2 + 3,
                (Math.random() - 0.5) * 2
            );
            
            body.angularVelocity.set(
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10
            );
        }
    }

    // Update all character animations and physics
    update(deltaTime = 1/60) {
        const currentTime = Date.now();
        
        this.textMeshes.forEach(item => {
            // Update fade-in linear animation
            if (item.isFadingIn) {
                const elapsed = currentTime - item.fadeStartTime;
                const progress = Math.min(elapsed / this.config.fadeInDuration, 1.0);
                
                // Linear interpolation for scale and opacity
                const scale = this.config.initialScale + (this.config.targetScale - this.config.initialScale) * progress;
                const opacity = progress;
                
                // Apply scale and opacity
                item.mesh.scale.set(scale, scale, 1);
                item.mesh.material.opacity = opacity;
                
                // Linear transition for rotation back to zero
                if (item.mesh.rotation.z !== 0) {
                    const initialRotation = item.mesh.rotation.z;
                    item.mesh.rotation.z = initialRotation * (1 - progress);
                }
                
                // End fade-in when complete
                if (progress >= 1.0 && !item.isPhysicsActive) {
                    item.isFadingIn = false;
                }
            }
            
            // Update physics-driven characters
            if (item.isPhysicsActive && item.body) {
                // Update mesh position to match physics body
                item.mesh.position.copy(item.body.position);
                item.mesh.quaternion.copy(item.body.quaternion);
            }
        });
    }

    // Clean up resources
    dispose() {
        this.textMeshes.forEach(item => {
            this.scene.remove(item.mesh);
            if (item.body) {
                this.world.remove(item.body);
            }
            
            // Dispose geometry and materials
            item.mesh.geometry.dispose();
            item.mesh.material.dispose();
            if (item.mesh.material.map) {
                item.mesh.material.map.dispose();
            }
        });
        
        this.textMeshes = [];
    }
}