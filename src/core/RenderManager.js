// src/core/RenderManager.js
import * as THREE from 'three';

export class RenderManager {
    constructor(container) {
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            alpha: true 
        });
        this.renderer.setClearColor(0x000000, 0);
        this.container = container;
    }
    
    initialize() {
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
        window.addEventListener('resize', this.handleResize.bind(this));
    }

    render(scene, camera) {
        this.renderer.render(scene, camera);
    }

    handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.renderer.setSize(width, height);
        return { width, height };
    }
}