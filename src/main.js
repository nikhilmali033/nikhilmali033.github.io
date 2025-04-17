import * as THREE from 'three';
import SceneManager from './SceneManager';

let sceneManager;
let animationFrameId;

// Custom configuration
const customConfig = {
    // Enable debug mode
    debug: true,
    
    // Customize card physics
    card: {
        physics: {
            strength: 0.35,      // Slightly more springy
            wiggleStrength: 0.6  // More pronounced wiggle
        },
        dragging: {
            returnSpeed: 0.12    // Faster return to origin
        }
    },
    
    // Adjust neural network settings
    neuralNetwork: {
        // Faster camera transition
        camera: {
            transitionDuration: 1200
        },
        // More connections for better visualization
        animation: {
            connectionsPerNeuron: 7,
            randomDelayFactor: 800
        }
    }
};

function init() {
    const container = document.getElementById('app');
    if (!container) return;

    // Create scene manager with custom configuration
    sceneManager = new SceneManager(container, customConfig);
    
    // Initialize text physics for animations
    sceneManager.initTextPhysics();
    
    // Load card texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('./textures/joker.png', (texture) => {
        // Add card - the config will be applied from the global sceneManager.config
        const card = sceneManager.addCard(texture);
        
        // Add analyze button for neural network
        sceneManager.addAnalyzeButton();
        
        // Add debug camera button
        sceneManager.addDebugCameraButton();
        
        // Set initial welcome text
        sceneManager.animateText("Select a Card");
        
        // Example of runtime configuration update
        // Uncomment to test changing parameters at runtime
        /*
        setTimeout(() => {
            sceneManager.updateConfig({
                card: {
                    physics: {
                        wiggleStrength: 0.8,  // Make wiggle even more pronounced
                    }
                },
                neuralNetwork: {
                    animation: {
                        arcHeight: 0.8,      // Higher arcs for data cubes
                        duration: 800        // Faster animations
                    }
                }
            });
        }, 5000);
        */
        
        // Start animation loop
        animate();
    });
}

function animate() {
    animationFrameId = requestAnimationFrame(animate);
    sceneManager.update(1/60);  // Use fixed deltaTime or calculate actual time delta
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