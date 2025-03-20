// TextPhysics.js - Simplified
import * as THREE from 'three';
import * as CANNON from 'cannon';

export default class TextPhysics {
    constructor(scene, world) {
        this.scene = scene;
        this.world = world;
        this.textMeshes = [];
        this.currentText = "";
        this.textContainer = this._createTextContainer();
        this.physicsMaterial = new CANNON.Material('physicsMaterial');
    }

    _createTextContainer() {
        const container = document.createElement('div');
        container.id = 'text-container';
        container.style.position = 'absolute';
        container.style.width = '100%';
        container.style.textAlign = 'center';
        container.style.top = '50%';
        container.style.fontSize = '32px';
        container.style.color = 'white';
        container.style.pointerEvents = 'none';
        document.getElementById('app').appendChild(container);
        return container;
    }

    // Animation the text and drop it
    animateText(text) {
        this.currentText = text;
        
        // Clear current text
        this.textContainer.innerHTML = '';
        
        // Clean up old physics objects
        this.textMeshes.forEach(item => {
            this.scene.remove(item.mesh);
            this.world.remove(item.body);
        });
        this.textMeshes = [];
        
        // Create spans for each character with animation delay
        const chars = [];
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.display = 'inline-block';
            span.style.opacity = '0';
            span.style.transform = 'scale(2)';
            span.style.transition = 'all 0.5s ease-out';
            this.textContainer.appendChild(span);
            chars.push(span);
            
            // Animate in with delay
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'scale(1)';
            }, i * 100);
        }
        
        // After all characters are visible, start physics drop
        setTimeout(() => {
            this._dropCharacters(chars);
        }, text.length * 100 + 800);
    }

    _dropCharacters(chars) {
        chars.forEach((span, index) => {
            setTimeout(() => {
                const rect = span.getBoundingClientRect();
                const x = rect.left + rect.width / 2 - window.innerWidth / 2;
                const y = -rect.top - rect.height / 2 + window.innerHeight / 2;
                
                // Hide the original character
                span.style.display = 'none';
                
                // Create physical version
                this._createPhysicsChar({
                    char: span.textContent,
                    x: x * 0.01,
                    y: y * 0.01,
                    width: rect.width * 0.01,
                    height: rect.height * 0.01
                });
            }, index * 50); // Cascade effect
        });
    }

    _createPhysicsChar(charInfo) {
        // Create character material with canvas texture
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 128;
        canvas.height = 128;
        
        // Draw character
        ctx.fillStyle = 'white';
        ctx.font = 'bold 100px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(charInfo.char, canvas.width / 2, canvas.height / 2);
        
        // Create texture
        const texture = new THREE.CanvasTexture(canvas);
        
        // Create mesh
        const width = charInfo.width * 3;
        const height = charInfo.height * 3;
        const depth = 0.2;
        
        const geometry = new THREE.BoxGeometry(width, height, depth);
        const material = new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true
        });
        
        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.position.set(charInfo.x * 3, charInfo.y * 3, 0);
        
        this.scene.add(mesh);
        
        // Create physics body
        const shape = new CANNON.Box(new CANNON.Vec3(width/2, height/2, depth/2));
        const body = new CANNON.Body({
            mass: 1,
            shape: shape,
            material: this.physicsMaterial
        });
        
        body.position.copy(mesh.position);
        
        // Add random forces
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
        
        this.world.addBody(body);
        
        // Add to tracking array
        this.textMeshes.push({
            mesh: mesh,
            body: body
        });
    }

    update() {
        // Update mesh positions based on physics
        this.textMeshes.forEach(item => {
            item.mesh.position.copy(item.body.position);
            item.mesh.quaternion.copy(item.body.quaternion);
        });
    }

    dispose() {
        // Clean up
        this.textMeshes.forEach(item => {
            this.scene.remove(item.mesh);
            this.world.remove(item.body);
        });
        
        if (this.textContainer && this.textContainer.parentNode) {
            this.textContainer.parentNode.removeChild(this.textContainer);
        }
    }
}