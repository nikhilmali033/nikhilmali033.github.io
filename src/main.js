import * as THREE from 'three';
import SceneManager from './SceneManager';
import ConfirmButton from './ConfirmButton';

let sceneManager;
let animationFrameId;

function init() {
    const container = document.getElementById('app');
    if (!container) return;

    // Create scene manager
    sceneManager = new SceneManager(container);
    
    // Add confirm button
    const confirmButton = new ConfirmButton({
        text: 'Confirm',
        position: { x: 2, y: -2, z: 0.1 },
        activeColor: 0x22aa22,  // Green when active
        inactiveColor: 0x888888 // Gray when inactive
    });
    
    // Add button with confirm handler
    sceneManager.addConfirmButton(confirmButton, (button) => {
        console.log('Confirmed selection:', sceneManager.getSelectedCards());
        // Here you could process the selected cards
        
        // For this example, just log and flash the button
        const origColor = button._props.activeColor;
        button.buttonMesh.material.color.setHex(0x2222ff); // Flash blue
        
        // Reset color after a brief flash
        setTimeout(() => {
            if (button._buttonState.isActive) {
                button.buttonMesh.material.color.setHex(origColor);
            }
        }, 200);
    });

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