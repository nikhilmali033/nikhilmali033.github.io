import * as THREE from 'three';

// Create renderer
const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true 
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000, 0);
document.body.appendChild(renderer.domElement);

// Create scene and camera
const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.OrthographicCamera(-aspect, aspect, 1, -1, 0.1, 1000);
camera.position.z = 1;

// Hardcoded shaders
const vertexShader = `
    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
        vec4 modelPos = modelMatrix * vec4(position, 1.0);
        vec4 viewPos = viewMatrix * modelPos;
        gl_Position = projectionMatrix * viewPos;
        
        vUv = uv;
        vPosition = position;
    }
`;

const fragmentShader = `
    precision highp float;
    
    uniform float time;
    uniform vec3 glowColor;
    uniform float glowIntensity;
    uniform float pulseSpeed;
    uniform vec2 resolution;

    varying vec2 vUv;
    varying vec3 vPosition;

    void main() {
        float pulse = (sin(time * pulseSpeed) + 1.0) * 0.5;
        float dist = length(vUv - vec2(0.5));
        float glow = smoothstep(0.5, 0.1, dist) * glowIntensity;
        glow = glow * (0.8 + pulse * 0.2);
        
        vec3 color = glowColor * glow;
        float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
        color = color + noise * 0.05;
        
        gl_FragColor = vec4(color, glow);
    }
`;

// Create material
const material = new THREE.ShaderMaterial({
    uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        glowColor: { value: new THREE.Vector3(1.0, 0.2, 0.5) },
        glowIntensity: { value: 1.0 },
        pulseSpeed: { value: 2.0 }
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthTest: false,
    depthWrite: false
});

// Create geometry and mesh
const geometry = new THREE.CircleGeometry(0.5, 32);
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Handle resize
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspect = width / height;

    renderer.setSize(width, height);
    
    camera.left = -aspect;
    camera.right = aspect;
    camera.updateProjectionMatrix();
    
    material.uniforms.resolution.value.set(width, height);
});

// Animation loop
function animate(time) {
    requestAnimationFrame(animate);
    
    // Update time uniform
    material.uniforms.time.value = time * 0.001;
    
    renderer.render(scene, camera);
}

animate(0);