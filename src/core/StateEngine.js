// src/core/StateEngine.js
import { SceneEngine } from './SceneEngine';
import { RenderManager } from './RenderManager';
import { ResourceLoader } from './ResourceLoader';

export class StateEngine {
    constructor(container) {
        this.renderManager = new RenderManager(container);
        this.resourceLoader = new ResourceLoader();
        this.sceneEngine = new SceneEngine(this.renderManager, this.resourceLoader);
        this.entities = new Map();
        
        this.bindInteractions();
    }

    async initialize() {
        await this.resourceLoader.loadShaders();
        this.renderManager.initialize();
    }

    bindInteractions() {
        const canvas = this.renderManager.renderer.domElement;
        canvas.addEventListener('click', (event) => {
            const rect = canvas.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            this.sceneEngine.handleInteraction({ x, y }, 'click');
        });
    }

    createButton(config) {
        const entityId = this.sceneEngine.createButton({
            ...config,
            stateCallback: (state) => this.handleButtonStateChange(entityId, state)
        });

        this.entities.set(entityId, {
            type: 'button',
            state: { pressed: false }
        });

        return entityId;
    }

    handleButtonStateChange(entityId, newState) {
        const entity = this.entities.get(entityId);
        if (entity) {
            entity.state = { ...entity.state, ...newState };
        }
    }

    update(time) {
        this.sceneEngine.render(time);
    }
}