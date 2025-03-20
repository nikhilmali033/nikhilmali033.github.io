// Integrated THREE.js scene with falling text effect
let scene, camera, renderer, cube;
let world, textMeshes = [];
let animationId;
let textContainer, textInput, animateBtn, restartBtn;
let activeChars = [];
let animationComplete = false;
let dropInProgress = false;
let currentText = "Hello World";

// Character animation timing
const charDelay = 150; // milliseconds between each character appearing
const readingDelay = 2000; // milliseconds to wait after text appears before dropping

// Slot management for characters
const MAX_SLOTS = 20;
let slotTimers = Array(MAX_SLOTS).fill(null);
let nextSlot = 0;

function init() {
    // Create UI Elements
    createUIElements();
    
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
    renderer.shadowMap.enabled = true;
    
    // Add to container
    container.appendChild(renderer.domElement);

    // Initialize physics
    initPhysics();
    
    // Add lights
    addLights();
    
    // Add ground plane
    addGround();

    // Create cube with texture
    createCube();

    // Initialize text
    createText();

    // Handle window resize
    window.addEventListener('resize', onWindowResize);
    
    // Add event listeners for buttons
    animateBtn.addEventListener('click', handleUserInput);
    restartBtn.addEventListener('click', restart);
    
    // Allow pressing Enter in the input field
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
    
    // Start animation
    animate();
}

function createUIElements() {
    // Create UI container
    const uiContainer = document.createElement('div');
    uiContainer.style.position = 'absolute';
    uiContainer.style.width = '100%';
    uiContainer.style.height = '100%';
    uiContainer.style.pointerEvents = 'none';
    document.getElementById('app').appendChild(uiContainer);
    
    // Create text container
    textContainer = document.createElement('div');
    textContainer.id = 'text-container';
    textContainer.style.position = 'absolute';
    textContainer.style.fontSize = '32px';
    textContainer.style.textAlign = 'center';
    textContainer.style.perspective = '1000px';
    textContainer.style.zIndex = '5';
    textContainer.style.width = '100%';
    textContainer.style.top = '40%';
    textContainer.style.color = 'white';
    uiContainer.appendChild(textContainer);
    
    // Create control panel
    const controlPanel = document.createElement('div');
    controlPanel.style.position = 'absolute';
    controlPanel.style.bottom = '20px';
    controlPanel.style.left = '0';
    controlPanel.style.right = '0';
    controlPanel.style.display = 'flex';
    controlPanel.style.justifyContent = 'center';
    controlPanel.style.gap = '10px';
    controlPanel.style.padding = '10px';
    controlPanel.style.zIndex = '10';
    controlPanel.style.pointerEvents = 'auto';
    uiContainer.appendChild(controlPanel);
    
    // Create text input
    textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Type your text here...';
    textInput.maxLength = 50;
    textInput.style.padding = '10px';
    textInput.style.background = '#333';
    textInput.style.color = 'white';
    textInput.style.border = '1px solid #555';
    textInput.style.borderRadius = '4px';
    textInput.style.fontSize = '16px';
    textInput.style.width = '300px';
    controlPanel.appendChild(textInput);
    
    // Create animate button
    animateBtn = document.createElement('button');
    animateBtn.textContent = 'Animate Text';
    animateBtn.style.padding = '10px 20px';
    animateBtn.style.background = '#444';
    animateBtn.style.color = 'white';
    animateBtn.style.border = 'none';
    animateBtn.style.borderRadius = '4px';
    animateBtn.style.cursor = 'pointer';
    controlPanel.appendChild(animateBtn);
    
    // Create restart button
    restartBtn = document.createElement('button');
    restartBtn.textContent = 'Restart';
    restartBtn.style.padding = '10px 20px';
    restartBtn.style.background = '#444';
    restartBtn.style.color = 'white';
    restartBtn.style.border = 'none';
    restartBtn.style.borderRadius = '4px';
    restartBtn.style.cursor = 'pointer';
    controlPanel.appendChild(restartBtn);
}

function initPhysics() {
    // Initialize Cannon.js physics world
    world = new CANNON.World();
    world.gravity.set(0, -9.82, 0); // Earth gravity
    world.broadphase = new CANNON.NaiveBroadphase();
    world.solver.iterations = 10;
    
    // Create ground plane for physics
    const groundShape = new CANNON.Plane();
    const groundBody = new CANNON.Body({
        mass: 0, // mass = 0 makes it static
        shape: groundShape
    });
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2); // Rotate to be flat
    groundBody.position.set(0, -2, 0);
    world.addBody(groundBody);
    
    // Create physics body for the cube
    const cubeShape = new CANNON.Box(new CANNON.Vec3(1, 1, 1)); // Half-dimensions
    const cubeBody = new CANNON.Body({
        mass: 0, // Static cube
        shape: cubeShape
    });
    cubeBody.position.set(0, 0, 0);
    world.addBody(cubeBody);
}

function addLights() {
    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    // Add directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 10, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    scene.add(directionalLight);
}

function addGround() {
    // Add ground plane for visualization
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x222222,
        transparent: true,
        opacity: 0.7
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -2;
    ground.receiveShadow = true;
    scene.add(ground);
}

function createCube() {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    
    // Load texture
    const textureLoader = new THREE.TextureLoader();
    
    console.log('Loading texture...');
    
    textureLoader.load(
        './textures/lowrezcat.jpg',  // Make sure you have this file
        (texture) => {
            console.log('Texture loaded successfully');
            
            const material = new THREE.MeshStandardMaterial({ 
                map: texture,
                roughness: 0.7,
                metalness: 0.2
            });
            cube = new THREE.Mesh(geometry, material);
            cube.castShadow = true;
            cube.receiveShadow = true;
            scene.add(cube);
        },
        undefined,  // onProgress callback
        (error) => {
            console.error('Error loading texture:', error);
            
            // Fall back to a colored material if texture fails to load
            const material = new THREE.MeshStandardMaterial({ 
                color: 0xff00ff,
                roughness: 0.7,
                metalness: 0.2
            });
            cube = new THREE.Mesh(geometry, material);
            cube.castShadow = true;
            cube.receiveShadow = true;
            scene.add(cube);
        }
    );
}

// Create the animated text character by character
function createText() {
    while (textContainer.firstChild) {
        textContainer.removeChild(textContainer.firstChild);
    }
    
    activeChars = [];
    animationComplete = false;
    dropInProgress = false;
    
    // Create span for each character
    for (let i = 0; i < currentText.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.style.display = 'inline-block';
        charSpan.style.opacity = '0';
        charSpan.style.transform = 'scale(5)';
        charSpan.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        charSpan.textContent = currentText[i];
        textContainer.appendChild(charSpan);
        activeChars.push(charSpan);
    }
    
    // Reveal characters one by one
    activeChars.forEach((char, index) => {
        setTimeout(() => {
            char.style.opacity = '1';
            char.style.transform = 'scale(1)';
            
            // Check if all characters are visible
            if (index === activeChars.length - 1) {
                setTimeout(() => {
                    animationComplete = true;
                }, readingDelay); // Wait for reading time after the last character appears
            }
        }, index * charDelay);
    });
}

// Drop the text with physics
function dropText() {
    if (animationComplete && !dropInProgress) {
        dropInProgress = true;
        
        // Get the positions of each character
        const charPositions = [];
        activeChars.forEach(char => {
            const rect = char.getBoundingClientRect();
            // Convert to three.js coordinate system (center at 0,0,0)
            const x = rect.left + rect.width / 2 - window.innerWidth / 2;
            const y = -rect.top - rect.height / 2 + window.innerHeight / 2;
            
            charPositions.push({
                char: char.textContent,
                x: x * 0.01, // Scale down to appropriate size for scene
                y: y * 0.01,
                width: rect.width * 0.01,
                height: rect.height * 0.01,
                element: char
            });
        });
        
        // Create 3D texts and apply physics
        textMeshes = [];
        
        charPositions.forEach((charInfo, index) => {
            setTimeout(() => {
                // Instantly hide the original character
                charInfo.element.style.display = 'none';
                createPhysicsChar(charInfo, index);
            }, index * 100); // Cascade effect for dropping
        });
    }
}

// Create a single 3D character with physics
function createPhysicsChar(charInfo, index) {
    // Assign character to a slot
    const slotIndex = nextSlot;
    nextSlot = (nextSlot + 1) % MAX_SLOTS;
    
    // Character dimensions
    const width = charInfo.width * 3;
    const height = charInfo.height * 3;
    const depth = 0.2;
    
    // Create character material - use Canvas to create a texture with the letter
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const canvasSize = 128;
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    
    // Set background to transparent
    ctx.clearRect(0, 0, canvasSize, canvasSize);
    
    // Draw character
    ctx.fillStyle = 'white';
    ctx.font = 'bold 100px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(charInfo.char, canvasSize / 2, canvasSize / 2);
    
    // Create texture from canvas
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    // Create character geometry
    const geometry = new THREE.BoxGeometry(width, height, depth);
    
    // Create front and back materials
    const frontMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        emissive: 0x333333,
        emissiveMap: texture
    });
    
    // Create the sides with a plain material
    const sideMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        emissive: 0x333333
    });
    
    // Create materials array for each face of the box
    // Order: right, left, top, bottom, front, back
    const materials = [
        sideMaterial, sideMaterial,
        sideMaterial, sideMaterial,
        frontMaterial, frontMaterial
    ];
    
    // Create mesh with materials
    const textMesh = new THREE.Mesh(geometry, materials);
    textMesh.castShadow = true;
    
    // Position it exactly where the character is
    textMesh.position.set(charInfo.x * 3, charInfo.y * 3, 0);
    
    scene.add(textMesh);
    
    // Create physics body (box shape)
    const shape = new CANNON.Box(new CANNON.Vec3(
        width / 2, 
        height / 2, 
        depth / 2
    ));
    
    const body = new CANNON.Body({
        mass: 1,
        shape: shape
    });
    
    // Match the position of the original text element exactly
    body.position.set(charInfo.x * 3, charInfo.y * 3, 0);
    
    // Add random initial velocity for popping effect
    const randomX = (Math.random() - 0.5) * 3;
    const randomY = Math.random() * 2 + 3; // Up force
    const randomZ = (Math.random() - 0.5) * 2;
    
    body.velocity.set(randomX, randomY, randomZ);
    
    // Add random rotation
    const randomAngularVelocity = new CANNON.Vec3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
    );
    body.angularVelocity.copy(randomAngularVelocity);
    
    world.addBody(body);
    
    textMeshes.push({
        mesh: textMesh,
        body: body,
        slot: slotIndex
    });
    
    // Set a timer to remove this letter after a while
    if (slotTimers[slotIndex]) {
        clearTimeout(slotTimers[slotIndex]);
    }
    
    slotTimers[slotIndex] = setTimeout(() => {
        // Clean up this character after some time
        scene.remove(textMesh);
        world.remove(body);
        
        // Find and remove from textMeshes array
        const index = textMeshes.findIndex(item => item.slot === slotIndex);
        if (index !== -1) {
            textMeshes.splice(index, 1);
        }
        
        slotTimers[slotIndex] = null;
    }, 10000); // Remove after 10 seconds
}

// Add a single character to the scene (for user input)
function addCharacter(char) {
    // Create the character element
    const charSpan = document.createElement('span');
    charSpan.style.display = 'inline-block';
    charSpan.style.opacity = '0';
    charSpan.style.transform = 'scale(5)';
    charSpan.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
    charSpan.textContent = char;
    textContainer.appendChild(charSpan);
    
    // Make it visible after a brief delay
    setTimeout(() => {
        charSpan.style.opacity = '1';
        charSpan.style.transform = 'scale(1)';
        
        // Schedule the drop after it's visible
        setTimeout(() => {
            const rect = charSpan.getBoundingClientRect();
            const x = rect.left + rect.width / 2 - window.innerWidth / 2;
            const y = -rect.top - rect.height / 2 + window.innerHeight / 2;
            
            // Hide the character immediately (no fade)
            charSpan.style.display = 'none';
            
            // Create the physics character
            createPhysicsChar({
                char: char,
                x: x * 0.01,
                y: y * 0.01,
                width: rect.width * 0.01,
                height: rect.height * 0.01,
                element: charSpan
            }, 0);
            
            // Remove the span after animation
            setTimeout(() => {
                textContainer.removeChild(charSpan);
            }, 100);
            
        }, 800); // Time to read the character
    }, 50);
}

// Handle user input
function handleUserInput() {
    const text = textInput.value.trim();
    if (text) {
        // Process one character at a time
        const processChar = (index) => {
            if (index < text.length) {
                addCharacter(text[index]);
                setTimeout(() => processChar(index + 1), 150);
            }
        };
        
        processChar(0);
        
        // Clear the input field
        textInput.value = '';
    }
}

// Animation loop
function animate() {
    animationId = requestAnimationFrame(animate);
    
    // Check if animation is complete and start drop animation
    if (animationComplete && !dropInProgress) {
        dropText();
    }
    
    // Update physics
    world.step(1/60);
    
    // Update mesh positions based on physics
    textMeshes.forEach(item => {
        item.mesh.position.copy(item.body.position);
        item.mesh.quaternion.copy(item.body.quaternion);
    });
    
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

// Restart the animation
function restart() {
    // Clear 3D objects
    textMeshes.forEach(item => {
        scene.remove(item.mesh);
        world.remove(item.body);
    });
    textMeshes = [];
    
    // Clear all slot timers
    slotTimers.forEach((timer, index) => {
        if (timer) {
            clearTimeout(timer);
            slotTimers[index] = null;
        }
    });
    
    // Default demo animation
    currentText = "Hello World";
    createText();
}

function cleanup() {
    if (animationId) {
        cancelAnimationFrame(animationId);
    }
    
    window.removeEventListener('resize', onWindowResize);
    
    if (renderer && renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
    
    // Clear all slot timers
    slotTimers.forEach((timer, index) => {
        if (timer) {
            clearTimeout(timer);
            slotTimers[index] = null;
        }
    });
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', init);

// Cleanup on page unload
window.addEventListener('unload', cleanup);