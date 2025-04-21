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
        position: { x: 0, y: 0, z: 5 },
        rotation: { x: 0, y: 0, z: 0 },
        // Or use lookAt instead of rotation
        lookAt: { x: 0, y: 0, z: 0 },
        transitionDuration: 1000 // ms
    },

    scene: {
        background: 0x000033, // Base color
        backgroundTransition: {
            enabled: true,
            colors: [0x000033, 0x330033, 0x003333], // Deep blue, purple, teal
            transitionSpeed: 0.005 // Very slow transition
        }
    },
    
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
        // Camera settings with rotation
        camera: {
            position: { x: -10, y: 2, z: 15 },
            // Example 1: Using rotation
            rotation: { x: 10, y: 0.2, z: 0 },
            // Example 2: Or use lookAt (will override rotation if both are set)
            lookAt: { x: 0, y: 0, z: 0 },
            transitionDuration: 1200 // ms
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
        
        // Example of runtime configuration update with camera changes
        setTimeout(() => {
            console.log("Updating configuration with camera rotation...");
            sceneManager.updateConfig({
                camera: {
                    // Slight tilt to make the scene more dynamic
                    rotation: { x: 0.05, y: -0.1, z: 0.03 }
                },
                neuralNetwork: {
                    camera: {
                        position: { x: 8, y: 3, z: 20 },
                        rotation: { x: -0.1, y: 0.3, z: 0.05 },
                        transitionDuration: 1500
                    },
                    animation: {
                        arcHeight: 0.8,      // Higher arcs for data cubes
                        duration: 800        // Faster animations
                    }
                }
            });
            
            // Demonstrate camera transition directly
            setTimeout(() => {
                if (sceneManager.state.currentView === 'card') {
                    console.log("Demonstrating smooth camera transition...");
                    // Example of a camera move with rotation in the card view
                    sceneManager.transitionCamera({
                        position: { x: -2, y: 1, z: 6 },
                        rotation: { x: 0.1, y: -0.2, z: 0 },
                        transitionDuration: 2000
                    }, () => {
                        console.log("Camera transition complete");
                        
                        // Return to original position after 3 seconds
                        setTimeout(() => {
                            sceneManager.transitionCamera({
                                position: sceneManager.config.camera.position,
                                rotation: sceneManager.config.camera.rotation,
                                lookAt: sceneManager.config.camera.lookAt,
                                transitionDuration: 2000
                            });
                        }, 3000);
                    });
                }
            }, 2000);
        }, 5000);
        
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