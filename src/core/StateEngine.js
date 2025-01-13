// src/core/StateEngine.js
import { SceneEngine } from './SceneEngine';
import { RenderManager } from './RenderManager';
import { ResourceLoader } from './ResourceLoader';

// In StateEngine.js

export class StateEngine {
    constructor(container) {
        this.container = container;
        this.resourceLoader = new ResourceLoader();
        this.sceneEngine = new SceneEngine(this.resourceLoader);
        this.renderManager = new RenderManager();
        this.entities = new Map();
    }


    async initialize() {
        await this.resourceLoader.loadShaders();
        
        // Initialize scene first
        this.sceneEngine.initialize(this.renderManager.domElement);
        
        // Then initialize renderer with container
        this.renderManager.initialize(this.container);
    }

    trackEntity(id, type, initialState = {}) {
        this.entities.set(id, {
            type,
            state: initialState
        });
        return id;
    }

    createGameObjects() {
        // Create test card in center
        const testCard = this.sceneEngine.createCard({
            position: [0, 0],
            width: 1,
            height: 1.4
        });
        this.trackEntity(testCard.id, 'card', {
            isDragging: false,
            position: [0, 0],
            rotation: 0
        });

        // Create a few more test cards with slight offsets
        const positions = [
            [-1.5, 1],
            [1.5, 1],
            [0, -1.5]
        ];

        positions.forEach(pos => {
            const card = this.sceneEngine.createCard({
                position: pos,
                width: 1,
                height: 1.4
            });
            this.trackEntity(card.id, 'card', {
                isDragging: false,
                position: pos,
                rotation: 0
            });
        });
    }

    update(time) {
        const scene = this.sceneEngine.getScene();
        const camera = this.sceneEngine.getCamera();
        
        // Update game state
        this.sceneEngine.updateUniforms(time);
        
        // Render
        this.renderManager.render(scene, camera);
    }
}