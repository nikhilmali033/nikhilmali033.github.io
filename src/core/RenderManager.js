// src/core/RenderManager.js
import * as THREE from 'three';

export class RenderManager {
    constructor(container) {
        this.container = container;
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setClearColor(0x000000, 0);
        
        // Layer structure 
        this.layers = {
            background: this.createLayer(-10),  // Furthest back
            main: this.createLayer(0),         // Main content
            ui: this.createLayer(10)           // Front layer
        };
        
        this.objectMaterials = new WeakMap();
    }

    createLayer(zIndex) {
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
        camera.position.z = 1;
        
        return {
            scene,
            camera,
            zIndex,
            objects: new Set()
        };
    }

    addToLayer(geometry, layerName, materialType, materialConfig = {}) {
        const layer = this.layers[layerName];
        if (!layer) {
            throw new Error(`Layer ${layerName} does not exist`);
        }

        const mesh = null;

        if (materialConfig != {}) {
            const mesh = new THREE.Mesh(geometry, materialConfig);
        }
        


        mesh.position.z = layer.zIndex;
        
        layer.scene.add(mesh);
        layer.objects.add(mesh);
        return mesh;
    }
    
    initialize() {
        console.log('⏳ RenderManager initialization starting...');
        
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);
        
        window.addEventListener('resize', this.handleResize.bind(this));
        
        console.log('✅ RenderManager initialization complete');
        return true;
    }

    addMesh(mesh) {
        this.scene.add(mesh);
        return mesh;
    }
    
    removeMesh(mesh) {
        this.scene.remove(mesh);
        mesh.geometry.dispose();
        mesh.material.dispose();
    }

    removeFromLayer(mesh, layerName) {
        const layer = this.layers[layerName];
        if (layer && layer.objects.has(mesh)) {
            layer.scene.remove(mesh);
            layer.objects.delete(mesh);
        }
    }

    render(time) {
        // Clear renderer
        this.renderer.clear();
        
        // Render each layer in order of z-index
        Object.values(this.layers)
            .sort((a, b) => a.zIndex - b.zIndex)
            .forEach(layer => {
                this.renderer.clearDepth();
                this.renderer.render(layer.scene, layer.camera);
            });
    }
    
    handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspect = width / height;

        this.camera.left = -aspect;
        this.camera.right = aspect;
        this.camera.updateProjectionMatrix();
        
        this.renderer.setSize(width, height);
        
        return { width, height }; // Return dimensions for SceneEngine to handle
    }

}