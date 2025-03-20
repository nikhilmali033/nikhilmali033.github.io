import * as THREE from 'three';
import SceneManager from './SceneManager';
import ConfirmButton from './ConfirmButton';

let sceneManager;
let animationFrameId;

function init() {
    const container = document.getElementById('app');
    if (!container) return;

    // Create scene manager with physics
    sceneManager = new SceneManager(container);
    sceneManager._initializePhysics();
    
    // Initialize text physics
    sceneManager.initTextPhysics();
    
    // Load card
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load('./textures/joker.png', (texture) => {
        // Add card with reference to scene manager
        const card = sceneManager.addCard(texture, {
            width: 2,
            height: 3,
            springPhysics: {
                strength: 0.3,
                damping: 0.75,
                wiggleStrength: 0.5,
                wiggleDamping: 0.6
            },
            dragBehavior: {
                returnSpeed: 0.1,
                dampingFactor: 0.95,
                enabled: true
            },
            selectionBehavior: {
                enabled: true,
                clickThreshold: 200,
                moveThreshold: 5
            },
            hoverBehavior: {
                enabled: true
            }
        });
        
        // Ensure the card has a reference to the scene manager
        card.sceneManager = sceneManager;
        
        // Set initial text
        sceneManager.animateText("Hello World");
        
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