// src/core/StateEngine.js
import { SceneEngine } from './SceneEngine';
import { RenderManager } from './RenderManager';
import { ResourceLoader } from './ResourceLoader';
import { Card } from '../objects/Card';

export class StateEngine {
    constructor(container) {
        // Initialize core systems in the right order
        this.resourceLoader = new ResourceLoader();
        this.renderManager = new RenderManager();
        
        // SceneEngine only needs resourceLoader for initialization
        this.sceneEngine = new SceneEngine(this.resourceLoader);
        
        this.container = container;
        
        // Track all game entities
        this.entities = new Map();
        
        // Game state
        this.gameState = {
            isInitialized: false,
            isPaused: false,
            currentTime: 0,
            lastUpdateTime: 0
        };
    }

    async initialize() {
        try {
            // First load all resources
            await this.resourceLoader.loadShaders();
            
            // Then initialize render systems
            this.renderManager.initialize(this.container);
            this.sceneEngine.initialize(this.renderManager.domElement);
            
            this.gameState.isInitialized = true;
            return true;
        } catch (error) {
            console.error('Initialization failed:', error);
            return false;
        }
    }

    createEntity(type, config = {}) {
        let entity;

        switch (type) {
            case 'card': {
                // Create card with resourceLoader
                entity = Card.create(this.resourceLoader, config);
                
                // Add to scene management
                const sceneObject = this.sceneEngine.addObject(entity, {
                    layer: config.layer || 'cards',
                    interactionConfig: {
                        // Any card-specific interaction config
                    }
                });
                
                if (sceneObject) {
                    // Track in our entity system
                    this.entities.set(entity.mesh.uuid, {
                        type,
                        entity,
                        config
                    });
                }
                break;
            }
            // Add other entity types here
            default:
                console.error(`Unknown entity type: ${type}`);
                return null;
        }

        return entity;
    }

    removeEntity(id) {
        const entityData = this.entities.get(id);
        if (!entityData) return false;

        // Remove from scene
        this.sceneEngine.removeObject(entityData.entity);
        
        // Cleanup entity resources
        entityData.entity.dispose();
        
        // Remove from tracking
        this.entities.delete(id);
        
        return true;
    }

    update(time) {
        if (!this.gameState.isInitialized || this.gameState.isPaused) return;

        // Update timing
        this.gameState.currentTime = time;
        const deltaTime = time - this.gameState.lastUpdateTime;
        this.gameState.lastUpdateTime = time;

        // Update scene
        this.sceneEngine.update(time);

        // Render
        const scene = this.sceneEngine.getScene();
        const camera = this.sceneEngine.getCamera();
        this.renderManager.render(scene, camera);
    }

    createGameObjects() {
        try {
            // Example configuration for initial game setup
            const config = {
                cards: {
                    mainCard: {
                        position: [0, 0, 0],
                        width: 1,
                        height: 1.4,
                        layer: 'cards',
                        shaderName: 'card' // Specify which shader to use
                    },
                    surroundingCards: [
                        {
                            position: [-1.5, 1, 0],
                            width: 1,
                            height: 1.4,
                            layer: 'cards',
                            shaderName: 'card'
                        },
                        {
                            position: [1.5, 1, 0],
                            width: 1,
                            height: 1.4,
                            layer: 'cards',
                            shaderName: 'card'
                        }
                    ]
                }
            };

            // Create main card
            const mainCard = this.createEntity('card', config.cards.mainCard);
            if (!mainCard) throw new Error('Failed to create main card');

            // Create surrounding cards
            const surroundingCards = config.cards.surroundingCards.map(cardConfig => {
                const card = this.createEntity('card', cardConfig);
                if (!card) throw new Error('Failed to create surrounding card');
                return card;
            });

            // Store references if needed
            this.gameState.mainCard = mainCard;
            this.gameState.surroundingCards = surroundingCards;

            return true;
        } catch (error) {
            console.error('Error creating game objects:', error);
            return false;
        }
    }

    // Game state methods
    pause() {
        this.gameState.isPaused = true;
    }

    resume() {
        this.gameState.isPaused = false;
        this.gameState.lastUpdateTime = performance.now();
    }
}