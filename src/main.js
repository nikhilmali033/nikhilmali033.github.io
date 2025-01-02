// src/main.js
import * as THREE from 'three';
import { StateEngine } from './core/StateEngine';

class Main {
    constructor() {
        this.clock = new THREE.Clock();
        this.stateEngine = new StateEngine(document.body);
    }
    
    async initialize() {
        await this.stateEngine.initialize();
        
        // Create test button
        this.stateEngine.createButton({
            position: [0, 0],
            callback: () => {
                console.log('Button clicked!');
            }
        });
        
        this.animate();
    }
    
    animate = () => {
        requestAnimationFrame(this.animate);
        const time = this.clock.getElapsedTime();
        this.stateEngine.update(time);
    }
}

const app = new Main();
app.initialize();