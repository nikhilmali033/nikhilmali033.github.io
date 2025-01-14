// src/core/StateEngine.js
import { SceneEngine } from './SceneEngine';
import { RenderManager } from './RenderManager';
import { ResourceLoader } from './ResourceLoader';
import { Card } from '../objects/Card';

export class StateEngine {
    constructor(container) {
        // Core systems
        this.resourceLoader = new ResourceLoader();
        this.sceneEngine = new SceneEngine(this.resourceLoader);
        this.renderManager = new RenderManager();
        
        // State tracking
        this.entities = new Map();
        this.gameState = {
            isInitialized: false,
            isPaused: false,
            currentTime: 0,
            lastUpdateTime: 0
        };
        
        this.container = container;
    }

    async initialize() {
        try {
            // Load resources first
            await this.resourceLoader.loadShaders();
            
            // Initialize scene and renderer
            this.sceneEngine.initialize(this.renderManager.domElement);
            this.renderManager.initialize(this.container);
            
            // Mark as initialized
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
                // Create base entity through Card class
                entity = Card.create(config);
                
                // Let SceneEngine handle the setup in scene
                const sceneObject = this.sceneEngine.createObject(type, {
                    ...config,
                    entity,
                    onUpdate: (data) => Card.update(entity, data)
                });
                
                // Store complete entity data
                if (sceneObject) {
                    entity.id = sceneObject.id;
                    entity.mesh = sceneObject.mesh;
                    entity.material = sceneObject.material;
                    
                    // Track entity
                    this.entities.set(entity.id, {
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

        // Let SceneEngine clean up scene objects
        this.sceneEngine.removeObject(entityData.entity.mesh);
        
        // Clean up our tracking
        this.entities.delete(id);
        
        return true;
    }

    update(time) {
        if (!this.gameState.isInitialized || this.gameState.isPaused) return;

        // Update timing
        this.gameState.currentTime = time;
        const deltaTime = time - this.gameState.lastUpdateTime;
        this.gameState.lastUpdateTime = time;

        // Update scene (handles input and physics)
        this.sceneEngine.update(time);

        // Render
        const scene = this.sceneEngine.getScene();
        const camera = this.sceneEngine.getCamera();
        this.renderManager.render(scene, camera);
    }

    // Game state methods
    pause() {
        this.gameState.isPaused = true;
    }

    resume() {
        this.gameState.isPaused = false;
        this.gameState.lastUpdateTime = performance.now();
    }

    createGameObjects() {
        // Configuration for initial game setup
        const config = {
            cards: {
                mainCard: {
                    position: [0, 0, 0],
                    width: 1,
                    height: 1.4,
                    layer: 'cards'
                },
                surroundingCards: [
                    {
                        position: [-1.5, 1, 0],
                        width: 1,
                        height: 1.4,
                        layer: 'cards'
                    },
                    {
                        position: [1.5, 1, 0],
                        width: 1,
                        height: 1.4,
                        layer: 'cards'
                    },
                    {
                        position: [0, -1.5, 0],
                        width: 1,
                        height: 1.4,
                        layer: 'cards'
                    }
                ]
            }
            // Add other object configurations as needed:
            // background: {...},
            // effects: {...},
            // ui: {...}
        };

        try {
            // Create main card
            const mainCard = this.createEntity('card', config.cards.mainCard);
            if (!mainCard) throw new Error('Failed to create main card');

            // Create surrounding cards
            const surroundingCards = config.cards.surroundingCards.map(cardConfig => {
                const card = this.createEntity('card', cardConfig);
                if (!card) throw new Error('Failed to create surrounding card');
                return card;
            });

            // Track created objects in game state if needed
            this.gameState.mainCard = mainCard;
            this.gameState.surroundingCards = surroundingCards;

            // Future: Add other game object creation here
            // this.createBackgroundEffects(config.background);
            // this.createUIElements(config.ui);
            
            return true;
        } catch (error) {
            console.error('Error creating game objects:', error);
            return false;
        }
    }
}