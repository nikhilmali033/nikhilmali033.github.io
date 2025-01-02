// src/core/ResourceLoader.js
import * as THREE from 'three';

export class ResourceLoader {
    constructor() {
        // Store shader code
        this.shaderSources = new Map();
        // Store compiled material templates
        this.materialTemplates = new Map();
        console.log('📁 ResourceLoader initialized');
    }

    async loadShaders() {
        try {
            console.log('⏳ Starting shader loading...');
            
            const shaderModules = import.meta.glob('../shaders/**/*.{vert,frag}', { 
                query: '?raw',
                import: 'default'
            });
            
            console.log('📁 Found shader files:', Object.keys(shaderModules));

            // Load all shader files first
            const loadPromises = Object.entries(shaderModules).map(async ([path, importFn]) => {
                try {
                    const content = await importFn();
                    const { name, type } = this.parseShaderPath(path);
                    
                    // Store shader source pairs by base name
                    if (!this.shaderSources.has(name)) {
                        this.shaderSources.set(name, {});
                    }
                    this.shaderSources.get(name)[type] = this.processShader(content);
                    
                    console.log('✅ Loaded shader:', { name, type, path });
                } catch (err) {
                    console.error('❌ Failed to load shader:', { path, error: err });
                }
            });

            await Promise.all(loadPromises);

            // Create material templates from shader pairs
            for (const [name, shaders] of this.shaderSources.entries()) {
                if (shaders.vertex && shaders.fragment) {
                    this.createMaterialTemplate(name, shaders.vertex, shaders.fragment);
                }
            }

            console.log('📚 Created materials:', Array.from(this.materialTemplates.keys()));
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

    createMaterialTemplate(name, vertexShader, fragmentShader) {
        // Define default uniforms for this material type
        const uniforms = this.getDefaultUniforms(name);

        // Create the material template
        const material = new THREE.ShaderMaterial({
            uniforms: THREE.UniformsUtils.clone(uniforms),
            vertexShader,
            fragmentShader,
            transparent: true,
            blending: THREE.AdditiveBlending
        });

        this.materialTemplates.set(name, material);
    }

    getDefaultUniforms(materialName) {
        // Define material-specific default uniforms
        const defaults = {
            'neon': {
                time: { value: 0 },
                resolution: { value: new THREE.Vector2() },
                glowColor: { value: new THREE.Vector3(1.0, 0.2, 0.5) },
                glowIntensity: { value: 1.0 },
                pulseSpeed: { value: 2.0 }
            }
            // Add other material types here
        };

        return defaults[materialName] || {};
    }

    createMaterial(name, customUniforms = {}) {
        const template = this.materialTemplates.get(name);
        if (!template) {
            console.warn('⚠️ Material template not found:', name);
            return null;
        }

        // Clone the template material
        const material = template.clone();
        
        // Clone uniforms deeply and merge with custom uniforms
        material.uniforms = THREE.UniformsUtils.clone(template.uniforms);
        Object.entries(customUniforms).forEach(([key, value]) => {
            if (material.uniforms[key]) {
                material.uniforms[key].value = value;
            }
        });

        return material;
    }
}