// src/main.js
import * as THREE from 'three';
import { ResourceLoader } from './core/ResourceLoader';
import { RenderManager } from './core/RenderManager';
import { SceneEngine } from './core/SceneEngine';
import { StateEngine } from './core/StateEngine';

class Main {
    constructor() {
        // Create core systems
        this.clock = new THREE.Clock();
        this.resourceLoader = new ResourceLoader();
        this.renderManager = new RenderManager(document.body);
        this.sceneEngine = new SceneEngine(this.renderManager, this.resourceLoader);
        this.stateEngine = new StateEngine(this.sceneEngine);
    }
    
    async initialize() {
        // Initialize core systems
        await this.resourceLoader.loadShaders();
        this.renderManager.initialize();
        
        // Initialize state engine (this will create UI elements)
        this.stateEngine.initialize();
        
        // Start render loop
        this.animate();
    }
    
    animate() {
        requestAnimationFrame(this.animate.bind(this));
        const time = this.clock.getElapsedTime();
        this.renderManager.render(time);
    }
}

const app = new Main();
app.initialize();