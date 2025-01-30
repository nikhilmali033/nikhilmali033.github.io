import * as THREE from 'three';

// Global state for cards
const cardState = {
    position: new THREE.Vector3(),
    velocity: new THREE.Vector3(),
    rotation: new THREE.Euler(),
    isDragging: false,
    dragOffset: new THREE.Vector3(),
    dampingFactor: 0.95  // For smooth deceleration
};

// Core scene elements
let scene, camera, renderer;
let card;  // The card mesh
let raycaster;
let mouse;
let animationFrameId;

function initScene(container) {
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    camera.position.z = 5;
    
    // Initialize raycaster for interaction
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    // Create card
    const geometry = new THREE.BoxGeometry(2, 3, 0.1);  // Card-like proportions
    const material = new THREE.MeshPhongMaterial({ 
        color: 0xffffff,
        specular: 0x050505,
        shininess: 100
    });
    card = new THREE.Mesh(geometry, material);
    scene.add(card);
    
    // Add lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    // Event listeners
    window.addEventListener('resize', onWindowResize);
    container.addEventListener('mousedown', onMouseDown);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseup', onMouseUp);
    
    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function onMouseDown(event) {
    event.preventDefault();
    
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(card);
    
    if (intersects.length > 0) {
        cardState.isDragging = true;
        cardState.velocity.set(0, 0, 0);  // Reset velocity when grabbing
        cardState.dragOffset.copy(card.position).sub(intersects[0].point);
    }
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    if (cardState.isDragging) {
        raycaster.setFromCamera(mouse, camera);
        const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const intersectPoint = new THREE.Vector3();
        raycaster.ray.intersectPlane(intersectPlane, intersectPoint);
        
        // Update position with drag offset
        card.position.copy(intersectPoint.add(cardState.dragOffset));
        
        // Calculate velocity based on movement
        cardState.velocity.subVectors(card.position, cardState.position);
        cardState.position.copy(card.position);
    }
}

function onMouseUp() {
    cardState.isDragging = false;
}

function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    if (!cardState.isDragging) {
        // Apply velocity and damping
        card.position.add(cardState.velocity);
        cardState.velocity.multiplyScalar(cardState.dampingFactor);
        
        // Optional: Add subtle hovering animation
        card.rotation.y = Math.sin(Date.now() * 0.001) * 0.1;
    }
    
    renderer.render(scene, camera);
}

function cleanup() {
    window.removeEventListener('resize', onWindowResize);
    if (renderer) {
        renderer.domElement.removeEventListener('mousedown', onMouseDown);
        renderer.domElement.removeEventListener('mousemove', onMouseMove);
        renderer.domElement.removeEventListener('mouseup', onMouseUp);
        renderer.dispose();
    }
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
    }
}

export { initScene, cleanup };