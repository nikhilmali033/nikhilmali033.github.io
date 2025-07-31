import * as THREE from 'three';
import SceneManager from './SceneManager';

let sceneManager;
let animationFrameId;

// Custom configuration
const customConfig = {
    // Enable debug mode
    debug: true,
    
    // Camera settings with rotation
    camera: {
        fov: 75,
        near: 0.1,
        far: 1000,
        position: { x: 0, y: 0, z: 8 }, // Pulled back to see all cards
        rotation: { x: 0, y: 0, z: 0 },
        lookAt: { x: 0, y: 0, z: 0 },
        transitionDuration: 1000
    },

    scene: {
        background: 0x000033,
        backgroundTransition: {
            enabled: true,
            colors: [0x000033, 0x330033, 0x003333],
            transitionSpeed: 0.005
        }
    },
    
    // Card configuration
    card: {
        physics: {
            strength: 0.35,
            damping: 0.75,
            wiggleStrength: 0.6,
            zStrength: 0.5,
            zDamping: 0.7
        },
        dragging: {
            returnSpeed: 0.12
        }
    },
    
    // Neural network settings
    neuralNetwork: {
        camera: {
            position: { x: -10, y: 2, z: 15 },
            rotation: { x: 10, y: 0.2, z: 0 },
            lookAt: { x: 0, y: 0, z: 0 },
            transitionDuration: 1200
        },
        animation: {
            connectionsPerNeuron: 7,
            randomDelayFactor: 800
        }
    }
};

// Card configurations
const cardConfigs = [
    {
        texture: './textures/joker.png',
        position: { x: -4.5, y: 0, z: 0 },
        name: 'joker',
        targetScene: 'neural'
    },
    {
        texture: './textures/joker.png', // You'll need to add this texture
        position: { x: -1.5, y: 0, z: 0 },
        name: 'ace',
        targetScene: 'neural' // Future scene
    },
    {
        texture: './textures/joker.png', // You'll need to add this texture
        position: { x: 1.5, y: 0, z: 0 },
        name: 'king',
        targetScene: 'neural' // Future scene
    },
    {
        texture: './textures/joker.png', // You'll need to add this texture
        position: { x: 4.5, y: 0, z: 0 },
        name: 'queen',
        targetScene: 'neural' // Future scene
    }
];

function init() {
    const container = document.getElementById('app');
    if (!container) return;

    // Create scene manager with custom configuration
    sceneManager = new SceneManager(container, customConfig);
    
    // Initialize text physics for animations
    sceneManager.initTextPhysics();
    
    // Create texture loader
    const textureLoader = new THREE.TextureLoader();
    const loadingManager = new THREE.LoadingManager();
    
    // Track loaded cards
    let cardsLoaded = 0;
    const totalCards = cardConfigs.length;
    
    // Load all card textures
    cardConfigs.forEach((cardConfig, index) => {
        textureLoader.load(
            cardConfig.texture,
            // Success callback
            (texture) => {
                // Add card with specific position
                const card = sceneManager.addCard(texture, {
                    position: cardConfig.position,
                    userData: {
                        name: cardConfig.name,
                        targetScene: cardConfig.targetScene,
                        index: index // Track original index for z-ordering
                    }
                });
                
                
                // Store reference to card for later use
                cardConfig.cardObject = card;
                
                cardsLoaded++;
                console.log(`Loaded ${cardConfig.name} card (${cardsLoaded}/${totalCards})`);
                
                // When all cards are loaded
                if (cardsLoaded === totalCards) {
                    onAllCardsLoaded();
                }
            },
            // Progress callback
            undefined,
            // Error callback
            // Error callback
            (error) => {
                console.error(`Failed to load texture ${cardConfig.texture}:`, error);
                // Create placeholder card
                const placeholderTexture = createPlaceholderTexture(cardConfig.name);
                const card = sceneManager.addCard(placeholderTexture, {
                    position: cardConfig.position,
                    userData: {
                        name: cardConfig.name,
                        targetScene: cardConfig.targetScene,
                        index: index
                    },
                    dragBehavior: {
                        returnSpeed: 0.12,
                        dampingFactor: 0.95,
                        enabled: true,
                        returnPosition: cardConfig.position
                    }
                });
                
                cardConfig.cardObject = card;
                cardsLoaded++;
                
                if (cardsLoaded === totalCards) {
                    onAllCardsLoaded();
                }
            }
        );
    });
    
    // Start animation loop
    animate();
}

function createPlaceholderTexture(name) {
    // Create a canvas texture as placeholder
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 384;
    const ctx = canvas.getContext('2d');
    
    // Background
    ctx.fillStyle = '#2a1b3d';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Border
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 4;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    
    // Text
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(name.toUpperCase(), canvas.width / 2, canvas.height / 2);
    
    return new THREE.CanvasTexture(canvas);
}

function onAllCardsLoaded() {
    console.log('All cards loaded!');
    
    // Add buttons
    sceneManager.addAnalyzeButton();
    sceneManager.addDebugCameraButton();
    
    // Set initial welcome text
    sceneManager.animateText("Select a Card");
    
    // Set up card-specific behaviors
    cardConfigs.forEach(config => {
        const card = config.cardObject;
        if (!card) return;
        
        // Override the hover behavior to show card name
        const originalOnPointerEnter = card.onPointerEnter.bind(card);
        card.onPointerEnter = function(event) {
            originalOnPointerEnter(event);
            if (this._state.isHovering && !this._state.isDragging && sceneManager) {
                sceneManager.animateText(config.name.toUpperCase());
            }
        };
        
        // Set up selection callback for scene transition
        card.setCallback('onSelect', () => {
            console.log(`Card ${config.name} selected`);
            
            // Handle scene transitions based on card
            switch(config.targetScene) {
                case 'neural':
                    // Existing neural network scene
                    if (sceneManager.hasSelectedCards()) {
                        console.log('Ready to analyze with neural network');
                    }
                    break;
                case 'particles':
                    // Future particle scene
                    console.log('Particle scene not implemented yet');
                    sceneManager.animateText("Coming Soon!");
                    break;
                case 'physics':
                    // Future physics playground
                    console.log('Physics scene not implemented yet');
                    sceneManager.animateText("Coming Soon!");
                    break;
                case 'gallery':
                    // Future gallery scene
                    console.log('Gallery scene not implemented yet');
                    sceneManager.animateText("Coming Soon!");
                    break;
            }
        });
    });
}

function animate() {
    animationFrameId = requestAnimationFrame(animate);
    sceneManager.update(1/60);
}

function cleanup() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
    if (sceneManager) {
        sceneManager.dispose();
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

// Cleanup on page unload
window.addEventListener('unload', cleanup);

export { init, cleanup };