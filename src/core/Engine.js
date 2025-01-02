import { RenderManager } from './RenderManager.js';
import { InteractionManager } from './InteractionManager.js';
import { ResourceLoader } from './ResourceLoader.js';
import * as THREE from 'three';

export class Engine {
    constructor(container) {
        this.container = container;
        this.renderManager = new RenderManager(container);
        this.resourceLoader = new ResourceLoader();
        this.interactionManager = new InteractionManager(this.renderManager);
        
        this.neonElements = new Set();
        this.time = 0;
        this.isInitialized = false;
        
        this.debugState = {
            shaderLoading: new Map(),
            materialRegistration: new Map(),
            elementCreation: new Map()
        };
    }

    async initialize() {
        try {
            const shadersLoaded = await this.resourceLoader.loadShaders();
            this.debugState.shaderLoading.set('initial', {
                success: shadersLoaded,
                availableShaders: Array.from(this.resourceLoader.shaders.keys())
            });

            this.renderManager.initialize();

            const neonVertex = this.resourceLoader.getShader('neon_vertex');
            const neonFragment = this.resourceLoader.getShader('neon_fragment');
            
            this.debugState.shaderLoading.set('neon', {
                vertex: !!neonVertex,
                fragment: !!neonFragment,
                vertexContent: neonVertex,
                fragmentContent: neonFragment
            });
            
            if (!neonVertex || !neonFragment) {
                throw new Error('Failed to get neon shaders');
            }

            const material = this.renderManager.registerWorkingMaterial('neon', neonVertex, neonFragment, {
                glowColor: { value: new THREE.Vector3(1.0, 0.2, 0.5) },
                glowIntensity: { value: 1.0 },
                pulseSpeed: { value: 2.0 }
            });
            
            this.debugState.materialRegistration.set('neon', {
                material: !!material,
                uniforms: material ? Object.keys(material.uniforms) : [],
                shaders: {
                    vertex: material?.vertexShader,
                    fragment: material?.fragmentShader
                }
            });

            this.interactionManager.initialize();
            
            requestAnimationFrame(this.animate.bind(this));

        } catch (error) {
            console.error('Engine initialization error:', error);
            this.debugState.error = {
                message: error.message,
                stack: error.stack,
                phase: this.getCurrentPhase()
            };
            throw error;
        }
    }

    getCurrentPhase() {
        if (!this.debugState.shaderLoading.get('initial')) return 'pre-shader-loading';
        if (!this.debugState.shaderLoading.get('neon')) return 'shader-retrieval';
        if (!this.debugState.materialRegistration.get('neon')) return 'material-registration';
        return 'post-initialization';
    }

    createNeonElement(position, scale = 1.0, color = new THREE.Vector3(1.0, 0.2, 0.5)) {
        const debugKey = `element_${this.debugState.elementCreation.size}`;
        
        try {
            const geometry = new THREE.CircleGeometry(scale, 32);
            
            const colorArray = color instanceof THREE.Vector3 ? 
                [color.x, color.y, color.z] : 
                Array.isArray(color) ? color : [color.x, color.y, color.z];
            
            this.debugState.elementCreation.set(debugKey, {
                phase: 'start',
                geometry: {
                    type: geometry.type,
                    parameters: { scale, segments: 32 }
                },
                position: position.toArray(),
                color: colorArray
            });

            const element = this.renderManager.addToLayer(
                geometry,
                'effects',
                'neon',
                {
                    glowColor: { value: colorArray },
                    glowIntensity: { value: 1.0 },
                    pulseSpeed: { value: 2.0 }
                }
            );
            
            this.debugState.elementCreation.get(debugKey).phase = 'post-creation';
            this.debugState.elementCreation.get(debugKey).element = {
                uuid: element.uuid,
                material: {
                    type: element.material.type,
                    uniforms: Object.keys(element.material.uniforms)
                }
            };
    
            element.position.set(position.x, position.y, 0);
            this.neonElements.add(element);
            
            this.debugState.elementCreation.get(debugKey).phase = 'complete';
            return element;
            
        } catch (error) {
            this.debugState.elementCreation.get(debugKey).error = {
                message: error.message,
                stack: error.stack,
                phase: this.debugState.elementCreation.get(debugKey).phase
            };
            throw error;
        }
    }

    animate(timestamp) {
        this.time = timestamp * 0.001;
        
        try {
            this.neonElements.forEach(element => {
                const material = this.renderManager.objectMaterials.get(element);
                if (material) {
                    const isHovered = element === this.interactionManager.selectedObject;
                    material.uniforms.glowIntensity.value = isHovered ? 1.5 : 1.0;
                }
            });
            
            this.renderManager.render(this.time);
            requestAnimationFrame(this.animate.bind(this));
            
        } catch (error) {
            console.error('Animation loop error:', error);
            this.debugState.animationError = {
                message: error.message,
                stack: error.stack,
                time: this.time,
                elements: Array.from(this.neonElements).map(el => ({
                    uuid: el.uuid,
                    position: el.position.toArray(),
                    material: el.material ? {
                        uniforms: Object.keys(el.material.uniforms)
                    } : null
                }))
            };
            throw error;
        }
    }
}