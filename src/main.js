import * as THREE from 'three';
import SceneManager from './SceneManager';

let sceneManager;
let animationFrameId;

function init() {
    const container = document.getElementById('app');
    if (!container) return;

    // Create scene manager
    sceneManager = new SceneManager(container);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const basePath = window.location.hostname === 'localhost' 
        ? './textures/joker.png'  // Local development
        : '/repository-name/textures/joker.png';  // GitHub Pages

    textureLoader.load(
        basePath,
        (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;

            // Add card to scene
            sceneManager.addCard(texture, {
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
                    dampingFactor: 0.95
                }
            });

            // Start animation loop
            animate();
        },
        undefined,
        (error) => {
            console.error('Error loading texture:', error);
        }
    );
}

function animate() {
    animationFrameId = requestAnimationFrame(animate);
    sceneManager.update(100);  // Pass fixed deltaTime or use actual time delta
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