// src/core/ResourceLoader.js
import * as THREE from 'three';

export class ResourceLoader {
    constructor() {
        // Existing shader storage
        this.shaderPairs = new Map();
        this.materialTemplates = new Map();
        
        // Add texture storage
        this.textureLoader = new THREE.TextureLoader();
        this.loadedTextures = new Map();
        
        console.log('📁 ResourceLoader initialized');
    }

    async loadTexture(path) {
        if (this.loadedTextures.has(path)) {
            return this.loadedTextures.get(path);
        }

        try {
            const texture = await new Promise((resolve, reject) => {
                this.textureLoader.load(
                    path,
                    (texture) => {
                        // Configure texture
                        texture.minFilter = THREE.LinearFilter;
                        texture.magFilter = THREE.LinearFilter;
                        texture.generateMipmaps = true;
                        resolve(texture);
                    },
                    undefined, // onProgress not needed
                    reject
                );
            });

            this.loadedTextures.set(path, texture);
            return texture;
        } catch (error) {
            console.error('Error loading texture:', error);
            return null;
        }
    }

    getDefaultTextureUniforms() {
        return {
            mainTexture: { type: 't', value: null },
            opacity: { type: 'f', value: 1.0 },
            textureScale: { type: 'v2', value: new THREE.Vector2(1, 1) },
            textureOffset: { type: 'v2', value: new THREE.Vector2(0, 0) },
            time: { type: 'f', value: 0.0 }
        };
    }

    async createTexturedMaterial(texturePath, customUniforms = {}) {
        const texture = await this.loadTexture(texturePath);
        if (!texture) return null;

        // Start with default uniforms
        const uniforms = this.getDefaultTextureUniforms();
        
        // Set the loaded texture
        uniforms.mainTexture.value = texture;
        
        // Merge custom uniforms
        Object.entries(customUniforms).forEach(([key, value]) => {
            if (uniforms[key]) {
                uniforms[key].value = value;
            } else {
                uniforms[key] = value;
            }
        });

        // Create material with texture shader
        const material = new THREE.ShaderMaterial({
            vertexShader: this.shaderPairs.get('texture').vertex,
            fragmentShader: this.shaderPairs.get('texture').fragment,
            uniforms,
            transparent: true,
            side: THREE.DoubleSide
        });

        return material;
    }

    async loadShaders() {
        try {
            console.log('⏳ Loading all shader files...');
            
            // Import all shader files
            const shaderFiles = import.meta.glob('../shaders/**/*.{vert,frag}', { 
                query: '?raw',
                import: 'default'
            });
            
            // Load and pair shaders
            const loadPromises = Object.entries(shaderFiles).map(async ([path, importFn]) => {
                const content = await importFn();
                const { name, type } = this.parseShaderPath(path);
                
                // Initialize shader pair if doesn't exist
                if (!this.shaderPairs.has(name)) {
                    this.shaderPairs.set(name, {});
                }
                
                // Add shader content to pair
                const pair = this.shaderPairs.get(name);
                pair[type] = this.processShader(content);
                
                console.log(`✅ Loaded ${type} shader for ${name}`);
            });

            await Promise.all(loadPromises);

            // Create material templates for complete shader pairs
            for (const [name, shaders] of this.shaderPairs) {
                if (shaders.vertex && shaders.fragment) {
                    await this.createMaterialTemplate(name, shaders);
                } else {
                    console.error(`❌ Incomplete shader pair for ${name}`);
                }
            }

            console.log('📚 Available materials:', Array.from(this.materialTemplates.keys()));
            return true;
        } catch (error) {
            console.error('❌ Error loading shaders:', error);
            return false;
        }
    }

    parseShaderPath(path) {
        const parts = path.split('/');
        const fileName = parts[parts.length - 1];
        const name = fileName.split('.')[0];
        const type = fileName.endsWith('.vert') ? 'vertex' : 'fragment';
        return { name, type };
    }

    processShader(content) {
        if (!content.includes('precision')) {
            content = 'precision highp float;\n' + content;
        }
        return content.trim();
    }

    async createMaterialTemplate(name, shaders) {
        try {
            // Create the base material template with default properties
            const material = new THREE.ShaderMaterial({
                vertexShader: shaders.vertex,
                fragmentShader: shaders.fragment,
                transparent: true,
                uniforms: this.getDefaultUniforms(name)
            });

            this.materialTemplates.set(name, material);
            console.log(`✅ Created material template: ${name}`);
            return material;
        } catch (error) {
            console.error(`❌ Error creating material template ${name}:`, error);
            return null;
        }
    }

    getDefaultUniforms(materialName) {
        const defaults = {
            'card': {
                uniforms: {
                    time: { type: 'f', value: 0.0 },
                    hover: { type: 'f', value: 0.0 },
                    selected: { type: 'f', value: 0.0 },
                    tiltNormal: { type: 'v3', value: new THREE.Vector3(0, 0, 1) },  // renamed from 'normal'
                    highlightColor: { type: 'v3', value: new THREE.Vector3(1.0, 0.8, 0.2) },
                    glowColor: { type: 'v3', value: new THREE.Vector3(50, 100, 100) },
                    glowIntensity: { type: 'f', value: 0.0 }
                }
            }
        };
    
        return defaults[materialName]?.uniforms || {};
    }

    createMaterial(name, customUniforms = {}) {
        const template = this.materialTemplates.get(name);
        if (!template) {
            console.error(`❌ Material ${name} not found`);
            return null;
        }
    
        // Clone the template material
        const material = template.clone();
        
        // Set up uniforms properly
        const baseUniforms = this.getDefaultUniforms(name);
        material.uniforms = {};
        
        // Add base uniforms
        Object.entries(baseUniforms).forEach(([key, value]) => {
            material.uniforms[key] = { type: value.type, value: value.value };
        });
    
        // Merge custom uniforms
        Object.entries(customUniforms).forEach(([key, value]) => {
            if (material.uniforms[key]) {
                material.uniforms[key].value = value.value;
            }
        });
    
        return material;
    }


}