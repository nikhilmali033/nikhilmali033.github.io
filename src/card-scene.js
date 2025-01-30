import * as THREE from 'three';

const cardState = {
    position: new THREE.Vector3(),
    velocity: new THREE.Vector3(),
    rotation: new THREE.Euler(),
    isDragging: false,
    isHovering: false,
    dragOffset: new THREE.Vector3(),
    dampingFactor: 0.95,
    returnSpeed: 0.1,
    targetRotation: new THREE.Euler(),
    rotationSpeed: 0.1,
    lastMouseX: 0,
    pivotOffset: 0.7  // Pivot point above center
};

let scene, camera, renderer;
let card, cardPivot;  // cardPivot will be the parent object for rotation
let raycaster;
let mouse;
let animationFrameId;

function initScene(container) {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x2a1b3d);  // Modest purple
    
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    
    // Setup renderer with shadow support
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    camera.position.z = 5;
    
    // Initialize raycaster for interaction
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('./textures/joker.png');
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;

    // Create pivot point
    cardPivot = new THREE.Object3D();
    scene.add(cardPivot);
    
    // Create card
    const geometry = new THREE.PlaneGeometry(2, 3);
    const material = new THREE.MeshPhongMaterial({ 
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        shininess: 100,
        specular: 0x444444,
        emissive: 0x000000
    });
    
    card = new THREE.Mesh(geometry, material);
    card.castShadow = true;
    card.receiveShadow = true;
    
    // Offset card so pivot point is at y=0.7
    card.position.y = -cardState.pivotOffset;
    cardPivot.add(card);
    
    // Add shadow-catching plane
    const shadowCatcher = new THREE.Mesh(
        new THREE.PlaneGeometry(10, 10),
        new THREE.ShadowMaterial({
            opacity: 0.3
        })
    );
    shadowCatcher.position.z = -0.3;
    shadowCatcher.receiveShadow = true;
    scene.add(shadowCatcher);
    
    // Lighting setup
    const mainLight = new THREE.DirectionalLight(0xffffff, 0.7);
    mainLight.position.set(5, 5, 5);
    mainLight.castShadow = true;
    mainLight.shadow.camera.near = 0.1;
    mainLight.shadow.camera.far = 100;
    mainLight.shadow.camera.left = -10;
    mainLight.shadow.camera.right = 10;
    mainLight.shadow.camera.top = 10;
    mainLight.shadow.camera.bottom = -10;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    scene.add(mainLight);
    
    const glareLight = new THREE.SpotLight(0xffffff, 2);
    glareLight.position.set(0, 1, 5);
    glareLight.angle = Math.PI / 4;
    glareLight.penumbra = 0.1;
    glareLight.decay = 0.1;
    scene.add(glareLight);
    
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
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
    cardState.lastMouseX = event.clientX;  // Store initial mouse position
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(card);
    
    if (intersects.length > 0) {
        cardState.isDragging = true;
        cardState.velocity.set(0, 0, 0);
        cardState.dragOffset.copy(cardPivot.position).sub(intersects[0].point);
    }
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Calculate horizontal mouse velocity
    const mouseVelocityX = event.clientX - cardState.lastMouseX;
    cardState.lastMouseX = event.clientX;
    
    // Update hover state and tilt
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(card);
    cardState.isHovering = intersects.length > 0;
    
    if (cardState.isDragging) {
        const intersectPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const intersectPoint = new THREE.Vector3();
        raycaster.ray.intersectPlane(intersectPlane, intersectPoint);
        
        // Update position with drag offset
        cardPivot.position.copy(intersectPoint.add(cardState.dragOffset));
        
        // Calculate velocity based on movement
        cardState.velocity.subVectors(cardPivot.position, cardState.position);
        cardState.position.copy(cardPivot.position);
        
        // Calculate rotation based on drag velocity
        // Negative mouseVelocityX creates opposite rotation
        const rotationAmount = THREE.MathUtils.clamp(
            -mouseVelocityX * 0.01, // Scale factor for rotation
            -Math.PI / 4,            // Max negative rotation
            Math.PI / 4              // Max positive rotation
        );
        cardPivot.rotation.z = rotationAmount;
    } else if (cardState.isHovering) {
        // Hover tilt behavior
        const cardScreenPosition = cardPivot.position.clone().project(camera);
        const tiltX = (mouse.y - cardScreenPosition.y) * 0.5;
        const tiltY = (mouse.x - cardScreenPosition.x) * 0.5;
        
        cardState.targetRotation.x = -tiltX;
        cardState.targetRotation.y = tiltY;
    } else {
        cardState.targetRotation.x = 0;
        cardState.targetRotation.y = 0;
    }
}

function onMouseUp() {
    cardState.isDragging = false;
    cardPivot.rotation.z = 0;  // Reset rotation immediately
}

function animate() {
    animationFrameId = requestAnimationFrame(animate);
    
    if (!cardState.isDragging) {
        // Apply velocity and damping
        cardPivot.position.add(cardState.velocity);
        cardState.velocity.multiplyScalar(cardState.dampingFactor);
        
        // Return to origin
        cardPivot.position.lerp(new THREE.Vector3(0, 0, 0), cardState.returnSpeed);
        
        // Idle animation when not hovering
        if (!cardState.isHovering) {
            const time = Date.now() * 0.001;
            cardState.targetRotation.x = Math.sin(time) * 0.1;
            cardState.targetRotation.y = Math.cos(time) * 0.1;
        }
    }
    
    // Smooth rotation lerping (except for z which is handled by drag)
    card.rotation.x += (cardState.targetRotation.x - card.rotation.x) * cardState.rotationSpeed;
    card.rotation.y += (cardState.targetRotation.y - card.rotation.y) * cardState.rotationSpeed;
    
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