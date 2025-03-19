// Simple THREE.js rotating cube
let scene, camera, renderer, cube;
let animationId;

function init() {
    // Get the container
    const container = document.getElementById('app');
    
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2a1b3d);

    // Create camera
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 5;

    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Add to container
    container.appendChild(renderer.domElement);

    // Create cube with texture
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    
    // Load texture with absolute path
    const textureLoader = new THREE.TextureLoader();
    
    console.log('Loading texture...');
    
    // Use a simple path approach
    textureLoader.load(
        './textures/image.jpg',  // Make sure you have this file
        (texture) => {
            console.log('Texture loaded successfully');
            
            const material = new THREE.MeshBasicMaterial({ map: texture });
            cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            
            // Start animation once texture is loaded
            animate();
        },
        undefined,  // onProgress callback
        (error) => {
            console.error('Error loading texture:', error);
            
            // Fall back to a colored material if texture fails to load
            const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
            cube = new THREE.Mesh(geometry, material);
            scene.add(cube);
            
            animate();
        }
    );

    // Handle window resize
    window.addEventListener('resize', onWindowResize);
}

function animate() {
    animationId = requestAnimationFrame(animate);
    
    // Rotate cube
    if (cube) {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
    }
    
    // Render scene
    renderer.render(scene, camera);
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function cleanup() {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    
    window.removeEventListener('resize', onWindowResize);
    
    if (renderer && renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

// Cleanup on page unload
window.addEventListener('unload', cleanup);