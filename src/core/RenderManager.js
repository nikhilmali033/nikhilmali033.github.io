// src/core/RenderManager.js
import * as THREE from 'three';

export class RenderManager {
    constructor() {
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true 
        });
        this.renderer.setClearColor(0x000000, 0);
        this.domElement = this.renderer.domElement;
    }
    
    initialize(container) {
        this.updateSize();
        container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', () => this.updateSize());
    }

    updateSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        return { width, height };
    }

    render(scene, camera) {
        this.renderer.render(scene, camera);
    }
}