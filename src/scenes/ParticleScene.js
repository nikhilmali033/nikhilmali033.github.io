import * as THREE from 'three';
import BaseScene from './BaseScene';

/**
 * Example of a new scene - Particle visualization
 */
export default class ParticleScene extends BaseScene {
    constructor(sceneController, config) {
        super(sceneController, {
            camera: {
                position: new THREE.Vector3(0, 0, 20),
                rotation: new THREE.Euler(0, 0, 0),
                lookAt: new THREE.Vector3(0, 0, 0),
                transitionDuration: 1500
            },
            ...config
        });
        
        this.particleSystem = null;
        this.time = 0;
        this.mouseInfluence = new THREE.Vector3();
    }
    
    async _createSceneContent() {
        // Create particle system
        const particleCount = 10000;
        const geometry = new THREE.BufferGeometry();
        
        // Positions
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const velocities = new Float32Array(particleCount * 3);
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            
            // Random position in sphere
            const radius = Math.random() * 10;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            
            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);
            
            // Random color (purple to blue gradient)
            colors[i3] = 0.5 + Math.random() * 0.5;
            colors[i3 + 1] = 0.2 + Math.random() * 0.3;
            colors[i3 + 2] = 0.8 + Math.random() * 0.2;
            
            // Random size
            sizes[i] = Math.random() * 0.5 + 0.1;
            
            // Initial velocities
            velocities[i3] = (Math.random() - 0.5) * 0.1;
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.1;
            velocities[i3 + 2] = (Math.random() - 0.5) * 0.1;
        }
        
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        
        // Store velocities for animation
        geometry.userData.velocities = velocities;
        
        // Shader material for particles
        const material = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                mousePosition: { value: new THREE.Vector3() }
            },
            vertexShader: `
                attribute float size;
                attribute vec3 color;
                varying vec3 vColor;
                uniform float time;
                uniform vec3 mousePosition;
                
                void main() {
                    vColor = color;
                    
                    vec3 pos = position;
                    
                    // Add some wave motion
                    pos.x += sin(time * 0.5 + position.y * 0.1) * 0.5;
                    pos.y += cos(time * 0.3 + position.x * 0.1) * 0.5;
                    
                    // Mouse influence
                    vec3 toMouse = mousePosition - pos;
                    float mouseDist = length(toMouse);
                    if (mouseDist < 5.0) {
                        pos -= normalize(toMouse) * (5.0 - mouseDist) * 0.5;
                    }
                    
                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = size * (300.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying vec3 vColor;
                
                void main() {
                    vec2 center = gl_PointCoord - 0.5;
                    float dist = length(center);
                    
                    if (dist > 0.5) discard;
                    
                    float alpha = 1.0 - smoothstep(0.3, 0.5, dist);
                    gl_FragColor = vec4(vColor, alpha);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        
        this.particleSystem = new THREE.Points(geometry, material);
        this.add(this.particleSystem);
        
        // Create UI controls
        this._createUI();
    }
    
    _createUI() {
        // Create control panel
        const panel = document.createElement('div');
        panel.style.position = 'absolute';
        panel.style.top = '20px';
        panel.style.left = '20px';
        panel.style.padding = '20px';
        panel.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
        panel.style.borderRadius = '10px';
        panel.style.color = 'white';
        panel.style.fontFamily = 'Arial, sans-serif';
        
        panel.innerHTML = `
            <h2 style="margin: 0 0 15px 0;">Particle System</h2>
            <p style="margin: 0 0 10px 0;">Move your mouse to interact!</p>
            <button id="back-btn" style="
                padding: 10px 20px;
                background: #4287f5;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-size: 14px;
            ">Back to Cards</button>
        `;
        
        this.uiContainer.appendChild(panel);
        
        // Set up button handler
        const backBtn = panel.querySelector('#back-btn');
        backBtn.addEventListener('click', () => {
            this.sceneController.transitionTo('cards', {
                fromScene: 'particles'
            });
        });
    }
    
    async _playEnterTransition(transitionData) {
        // Explode particles from center
        const positions = this.particleSystem.geometry.attributes.position;
        const centerPositions = new Float32Array(positions.count * 3);
        
        // Store original positions
        for (let i = 0; i < positions.count * 3; i++) {
            centerPositions[i] = 0;
        }
        
        // Set all particles to center
        positions.array.set(centerPositions);
        positions.needsUpdate = true;
        
        // Animate explosion
        return new Promise(resolve => {
            const duration = 1500;
            const startTime = Date.now();
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Exponential out easing
                const eased = 1 - Math.pow(1 - progress, 3);
                
                // Update particle positions
                for (let i = 0; i < positions.count; i++) {
                    const i3 = i * 3;
                    
                    // Get target position from stored velocities (repurposed)
                    const radius = Math.random() * 10;
                    const theta = Math.random() * Math.PI * 2;
                    const phi = Math.acos(Math.random() * 2 - 1);
                    
                    const targetX = radius * Math.sin(phi) * Math.cos(theta);
                    const targetY = radius * Math.sin(phi) * Math.sin(theta);
                    const targetZ = radius * Math.cos(phi);
                    
                    positions.array[i3] = targetX * eased;
                    positions.array[i3 + 1] = targetY * eased;
                    positions.array[i3 + 2] = targetZ * eased;
                }
                
                positions.needsUpdate = true;
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            
            animate();
        });
    }
    
    update(deltaTime) {
        this.time += deltaTime;
        
        if (this.particleSystem) {
            // Update shader uniforms
            this.particleSystem.material.uniforms.time.value = this.time;
            this.particleSystem.material.uniforms.mousePosition.value.copy(this.mouseInfluence);
            
            // Rotate particle system
            this.particleSystem.rotation.y += deltaTime * 0.1;
        }
    }
    
    handlePointerEvent(eventType, eventData) {
        if (eventType === 'pointermove') {
            // Convert mouse to 3D position
            const vector = new THREE.Vector3(
                eventData.mouse.x,
                eventData.mouse.y,
                0.5
            );
            vector.unproject(eventData.camera);
            
            const dir = vector.sub(eventData.camera.position).normalize();
            const distance = -eventData.camera.position.z / dir.z;
            this.mouseInfluence = eventData.camera.position.clone().add(dir.multiplyScalar(distance));
        }
    }
}