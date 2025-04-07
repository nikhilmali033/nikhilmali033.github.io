import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.module.js';
        
        class NeuralNetworkVisualizer {
            constructor(customConfig = {}) {
                // Default configuration with all adjustable parameters
                this.defaultConfig = {
                    // Camera settings
                    camera: {
                        position: { x: -7, y: 0.5, z: 7 },
                        rotation: { x: 0, y: -1, z: 0 },
                        fov: 75
                    },
                    
                    // Neural network layout
                    network: {
                        // Layer positions on z-axis
                        layerPositions: {
                            input: 0,
                            hidden: 4,
                            output: 6
                        },
                        
                        // Layer spacing
                        inputLayer: {
                            neuronSize: 0.08,
                            horizontalSpacing: 0.2,
                            verticalSpacing: 0.2
                        },
                        
                        hiddenLayer: {
                            neuronSize: 0.15,
                            horizontalSpacing: 0.5,
                            verticalSpacing: 0.5
                        },
                        
                        outputLayer: {
                            neuronSize: 0.25,
                            verticalSpacing: 0.8
                        },
                        
                        // Label positions
                        labels: {
                            offsetY: 5,
                            scale: { x: 2, y: 0.5, z: 1 }
                        }
                    },
                    
                    // Animation settings
                    animation: {
                        dataCubeSize: 0.08,
                        arcHeight: 0.5,
                        duration: 1000,
                        maxOpacity: 0.8
                    },
                    
                    // Colors
                    colors: {
                        background: 0x0f0f1f,
                        neuron: 0x3498db,
                        positiveWeight: 0x2ecc71,
                        negativeWeight: 0xe74c3c,
                        highlightedNeuron: 0xff5722
                    }
                };
                
                // Merge custom config with defaults
                this.config = this.defaultConfig;
                
                // DOM elements
                this.container = document.getElementById('visualization-container');
                this.drawingCanvas = document.getElementById('drawing-canvas');
                this.drawingContext = this.drawingCanvas.getContext('2d');
                this.clearBtn = document.getElementById('clear-btn');
                this.recognizeBtn = document.getElementById('recognize-btn');
                this.resultContainer = document.getElementById('result-container');
                this.resultText = document.getElementById('result-text');
                
                // Clear canvas with black
                this.drawingContext.fillStyle = 'black';
                this.drawingContext.fillRect(0, 0, this.drawingCanvas.width, this.drawingCanvas.height);
                
                // Initialize scene
                this.scene = new THREE.Scene();
                this.scene.background = new THREE.Color(this.config.colors.background);
                
                // Initialize camera
                this.camera = new THREE.PerspectiveCamera(
                    this.config.camera.fov, 
                    window.innerWidth / window.innerHeight, 
                    0.1, 
                    1000
                );
                this.camera.position.set(
                    this.config.camera.position.x,
                    this.config.camera.position.y,
                    this.config.camera.position.z
                );
                this.camera.rotation.set(
                    this.config.camera.rotation.x,
                    this.config.camera.rotation.y,
                    this.config.camera.rotation.z
                );
                
                // Initialize renderer
                this.renderer = new THREE.WebGLRenderer({ antialias: true });
                this.renderer.setSize(window.innerWidth, window.innerHeight);
                this.renderer.setPixelRatio(window.devicePixelRatio);
                this.container.appendChild(this.renderer.domElement);
                
                // Initialize lights
                const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
                this.scene.add(ambientLight);
                
                const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
                directionalLight.position.set(0, 10, 10);
                this.scene.add(directionalLight);
                
                // Neural network structure
                this.networkStructure = {
                    inputLayer: 784, // 28x28 pixels
                    hiddenLayer: 64,
                    outputLayer: 10
                };
                
                // Network elements
                this.neurons = {
                    input: [],
                    hidden: [],
                    output: []
                };
                
                this.animations = [];
                this.animationPhase = 0;
                
                // Interaction state
                this.isDrawing = false;
                this.isProcessing = false;
                this.lastDrawPosition = null;
                
                // Clock for animations
                this.clock = new THREE.Clock();
                
                // Initialize
                this.initNetwork();
                this.initEvents();
                this.animate();
            }
            
            // Deep merge of configuration objects
            mergeConfig(defaultConfig, customConfig) {
                const result = { ...defaultConfig };
                
                for (const key in customConfig) {
                    if (typeof customConfig[key] === 'object' && 
                        customConfig[key] !== null && 
                        !Array.isArray(customConfig[key]) &&
                        defaultConfig.hasOwnProperty(key)) {
                        
                        result[key] = this.mergeConfig(defaultConfig[key], customConfig[key]);
                    } else {
                        result[key] = customConfig[key];
                    }
                }
                
                return result;
            }
            
            // Initialize the neural network visualization
            initNetwork() {
                // Create layers
                this.createInputLayer();
                this.createHiddenLayer();
                this.createOutputLayer();
                
                // Add labels
                const labelConfig = this.config.network.labels;
                const layerPositions = this.config.network.layerPositions;
                
                this.addTextLabel(
                    "Input Layer", 
                    new THREE.Vector3(0, labelConfig.offsetY, layerPositions.input)
                );
                this.addTextLabel(
                    "Hidden Layer", 
                    new THREE.Vector3(0, labelConfig.offsetY, layerPositions.hidden)
                );
                this.addTextLabel(
                    "Output Layer", 
                    new THREE.Vector3(0, labelConfig.offsetY, layerPositions.output)
                );
            }
            
            // Create the input layer (28x28 grid)
            createInputLayer() {
                const layerConfig = this.config.network.inputLayer;
                const neuronSize = layerConfig.neuronSize;
                const gridSize = 28;
                const hSpacing = layerConfig.horizontalSpacing;
                const vSpacing = layerConfig.verticalSpacing;
                const totalWidth = gridSize * hSpacing;
                const zPosition = this.config.network.layerPositions.input;
                
                // Create neuron geometry
                const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
                
                // Create neurons in a grid
                for (let i = 0; i < this.networkStructure.inputLayer; i++) {
                    const row = Math.floor(i / gridSize);
                    const col = i % gridSize;
                    
                    const x = (col * hSpacing) - (totalWidth / 2);
                    const y = (row * vSpacing) - (totalWidth / 2);
                    
                    const material = new THREE.MeshPhongMaterial({
                        color: this.config.colors.neuron,
                        transparent: true,
                        opacity: 0.5
                    });
                    
                    const neuron = new THREE.Mesh(geometry, material.clone());
                    neuron.position.set(x, y, zPosition);
                    
                    this.neurons.input.push({
                        mesh: neuron,
                        position: { x, y, z: zPosition },
                        index: i,
                        activation: 0
                    });
                    
                    this.scene.add(neuron);
                }
            }
            
            // Create the hidden layer
            createHiddenLayer() {
                const layerConfig = this.config.network.hiddenLayer;
                const neuronSize = layerConfig.neuronSize;
                const gridSize = Math.ceil(Math.sqrt(this.networkStructure.hiddenLayer));
                const hSpacing = layerConfig.horizontalSpacing;
                const vSpacing = layerConfig.verticalSpacing;
                const totalSize = gridSize * hSpacing;
                const zPosition = this.config.network.layerPositions.hidden;
                
                // Create neurons in a grid
                const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
                
                for (let i = 0; i < this.networkStructure.hiddenLayer; i++) {
                    const row = Math.floor(i / gridSize);
                    const col = i % gridSize;
                    
                    const x = (col * hSpacing) - (totalSize / 2);
                    const y = (row * vSpacing) - (totalSize / 2);
                    
                    const material = new THREE.MeshPhongMaterial({
                        color: this.config.colors.neuron,
                        transparent: true,
                        opacity: 0.5
                    });
                    
                    const neuron = new THREE.Mesh(geometry, material.clone());
                    neuron.position.set(x, y, zPosition);
                    
                    this.neurons.hidden.push({
                        mesh: neuron,
                        position: { x, y, z: zPosition },
                        index: i,
                        activation: 0
                    });
                    
                    this.scene.add(neuron);
                }
            }
            
            // Create the output layer
            createOutputLayer() {
                const layerConfig = this.config.network.outputLayer;
                const neuronSize = layerConfig.neuronSize;
                const spacing = layerConfig.verticalSpacing;
                const zPosition = this.config.network.layerPositions.output;
                
                // Create neurons in a vertical arrangement
                const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
                const totalHeight = (this.networkStructure.outputLayer - 1) * spacing;
                
                for (let i = 0; i < this.networkStructure.outputLayer; i++) {
                    const x = 0;
                    const y = (i * spacing) - (totalHeight / 2);
                    
                    const material = new THREE.MeshPhongMaterial({
                        color: this.config.colors.neuron,
                        transparent: true,
                        opacity: 0.5
                    });
                    
                    const neuron = new THREE.Mesh(geometry, material.clone());
                    neuron.position.set(x, y, zPosition);
                    
                    this.neurons.output.push({
                        mesh: neuron,
                        position: { x, y, z: zPosition },
                        index: i,
                        activation: 0
                    });
                    
                    this.scene.add(neuron);
                    
                    // Add digit label
                    this.addTextLabel(
                        i.toString(), 
                        new THREE.Vector3(x + 0.6, y, zPosition)
                    );
                }
            }
            
            // Add text label to a 3D position
            addTextLabel(text, position) {
                const canvas = document.createElement('canvas');
                canvas.width = 256;
                canvas.height = 64;
                
                const ctx = canvas.getContext('2d');
                ctx.fillStyle = '#ffffff';
                ctx.font = 'bold 36px Arial';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                ctx.fillText(text, 128, 32);
                
                const texture = new THREE.CanvasTexture(canvas);
                const material = new THREE.SpriteMaterial({ map: texture });
                const sprite = new THREE.Sprite(material);
                sprite.position.copy(position);
                
                const labelScale = this.config.network.labels.scale;
                sprite.scale.set(labelScale.x, labelScale.y, labelScale.z);
                this.scene.add(sprite);
            }
            
            // Initialize event listeners
            initEvents() {
                // Window resize
                window.addEventListener('resize', this.onWindowResize.bind(this));
                
                // Canvas drawing events
                this.drawingCanvas.addEventListener('mousedown', this.startDrawing.bind(this));
                this.drawingCanvas.addEventListener('mousemove', this.draw.bind(this));
                this.drawingCanvas.addEventListener('mouseup', this.stopDrawing.bind(this));
                this.drawingCanvas.addEventListener('mouseleave', this.stopDrawing.bind(this));
                
                // Touch events
                this.drawingCanvas.addEventListener('touchstart', this.handleTouch.bind(this));
                this.drawingCanvas.addEventListener('touchmove', this.handleTouch.bind(this));
                this.drawingCanvas.addEventListener('touchend', this.stopDrawing.bind(this));
                
                // Button events
                this.clearBtn.addEventListener('click', this.clearCanvas.bind(this));
                this.recognizeBtn.addEventListener('click', () => {
                    if (!this.isProcessing) {
                        this.processDrawing();
                    }
                });
            }
            
            // Handle window resize
            onWindowResize() {
                this.camera.aspect = window.innerWidth / window.innerHeight;
                this.camera.updateProjectionMatrix();
                this.renderer.setSize(window.innerWidth, window.innerHeight);
            }
            
            // Start drawing on canvas
            startDrawing(e) {
                this.isDrawing = true;
                this.lastDrawPosition = null;
                this.draw(e);
            }
            
            // Handle drawing
            draw(e) {
                if (!this.isDrawing) return;
                
                const rect = this.drawingCanvas.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                this.drawingContext.strokeStyle = 'white';
                this.drawingContext.lineWidth = 15;
                this.drawingContext.lineCap = 'round';
                this.drawingContext.lineJoin = 'round';
                
                if (!this.lastDrawPosition) {
                    this.drawingContext.beginPath();
                    this.drawingContext.moveTo(x, y);
                } else {
                    this.drawingContext.lineTo(x, y);
                    this.drawingContext.stroke();
                }
                
                this.lastDrawPosition = { x, y };
            }
            
            // Handle touch events
            handleTouch(e) {
                e.preventDefault();
                
                if (e.type === 'touchstart') {
                    this.isDrawing = true;
                    this.lastDrawPosition = null;
                }
                
                if (this.isDrawing) {
                    const rect = this.drawingCanvas.getBoundingClientRect();
                    const touch = e.touches[0];
                    const x = touch.clientX - rect.left;
                    const y = touch.clientY - rect.top;
                    
                    this.drawingContext.strokeStyle = 'white';
                    this.drawingContext.lineWidth = 15;
                    this.drawingContext.lineCap = 'round';
                    this.drawingContext.lineJoin = 'round';
                    
                    if (!this.lastDrawPosition) {
                        this.drawingContext.beginPath();
                        this.drawingContext.moveTo(x, y);
                    } else {
                        this.drawingContext.lineTo(x, y);
                        this.drawingContext.stroke();
                    }
                    
                    this.lastDrawPosition = { x, y };
                }
            }
            
            // Stop drawing
            stopDrawing() {
                this.isDrawing = false;
            }
            
            // Clear the canvas
            clearCanvas() {
                this.drawingContext.fillStyle = 'black';
                this.drawingContext.fillRect(0, 0, this.drawingCanvas.width, this.drawingCanvas.height);
                this.lastDrawPosition = null;
                this.resultContainer.style.display = 'none';
                
                // Reset network visualization
                this.resetNetwork();
            }
            
            // Reset network visualization
            resetNetwork() {
                // Clear animations
                this.clearAnimations();
                
                // Reset neurons
                Object.keys(this.neurons).forEach(layer => {
                    this.neurons[layer].forEach(neuron => {
                        neuron.activation = 0;
                        neuron.mesh.material.color.setHex(this.config.colors.neuron);
                        neuron.mesh.material.opacity = 0.5;
                    });
                });
            }
            
            // Get pixel data from canvas
            getPixelData() {
                const imageData = this.drawingContext.getImageData(0, 0, 280, 280);
                const downsampledData = [];
                const cellSize = 280 / 28;
                
                for (let y = 0; y < 28; y++) {
                    for (let x = 0; x < 28; x++) {
                        let sum = 0;
                        for (let dy = 0; dy < cellSize; dy++) {
                            for (let dx = 0; dx < cellSize; dx++) {
                                const pixelX = Math.floor(x * cellSize + dx);
                                const pixelY = Math.floor(y * cellSize + dy);
                                const idx = (pixelY * 280 + pixelX) * 4;
                                sum += imageData.data[idx]; // Red channel
                            }
                        }
                        // Normalize to 0-1
                        downsampledData.push(sum / (cellSize * cellSize * 255));
                    }
                }
                
                return downsampledData;
            }
            
            // Process the drawing
            processDrawing() {
                this.isProcessing = true;
                this.animationPhase = 0;
                
                // Get pixel data from canvas
                const inputData = this.getPixelData();
                
                // Simulate network weights
                const weights = this.simulateWeights();
                
                // Simulate forward pass
                const activations = this.simulateForwardPass(inputData, weights);
                
                // Visualize input layer activations immediately
                this.updateInputLayer(inputData);
                
                // Animate data flow
                this.scheduleLayerAnimation(activations, weights);
                
                // Show result at the end of animation
                const predictedDigit = activations.output.indexOf(Math.max(...activations.output));
                setTimeout(() => {
                    this.resultText.textContent = predictedDigit;
                    this.resultContainer.style.display = 'block';
                    this.isProcessing = false;
                }, 4000);
            }
            
            // Schedule animations between layers with proper timing
            scheduleLayerAnimation(activations, weights) {
                // First animate input to hidden (delay 1s)
                setTimeout(() => {
                    this.animationPhase = 1;
                    this.animateInputToHidden(activations.input, weights.inputToHidden);
                }, 0);
                
                // Then animate hidden layer activations (delay 2s)
                setTimeout(() => {
                    this.animationPhase = 2;
                    this.updateHiddenLayer(activations.hidden);
                }, 1900);
                
                // Then animate hidden to output (delay 3s)
                setTimeout(() => {
                    this.animationPhase = 3;
                    this.animateHiddenToOutput(activations.hidden, weights.hiddenToOutput);
                }, 2300);
                
                // Finally show output layer activations (delay 4s)
                setTimeout(() => {
                    this.animationPhase = 4;
                    this.updateOutputLayer(activations.output);
                }, 3550);
            }
            
            // Simulate weights
            simulateWeights() {
                return {
                    inputToHidden: Array(this.networkStructure.inputLayer)
                        .fill()
                        .map(() => Array(this.networkStructure.hiddenLayer)
                            .fill()
                            .map(() => Math.random() * 2 - 1)),
                    hiddenToOutput: Array(this.networkStructure.hiddenLayer)
                        .fill()
                        .map(() => Array(this.networkStructure.outputLayer)
                            .fill()
                            .map(() => Math.random() * 2 - 1))
                };
            }
            
            // Simulate forward pass through network
            simulateForwardPass(inputData, weights) {
                // Layer activations
                const activations = {
                    input: inputData,
                    hidden: Array(this.networkStructure.hiddenLayer).fill(0),
                    output: Array(this.networkStructure.outputLayer).fill(0)
                };
                
                // Input to hidden
                for (let i = 0; i < this.networkStructure.inputLayer; i++) {
                    for (let j = 0; j < this.networkStructure.hiddenLayer; j++) {
                        activations.hidden[j] += activations.input[i] * weights.inputToHidden[i][j];
                    }
                }
                
                // Apply ReLU
                activations.hidden = activations.hidden.map(x => Math.max(0, x));
                
                // Hidden to output
                for (let i = 0; i < this.networkStructure.hiddenLayer; i++) {
                    for (let j = 0; j < this.networkStructure.outputLayer; j++) {
                        activations.output[j] += activations.hidden[i] * weights.hiddenToOutput[i][j];
                    }
                }
                
                // Apply softmax
                const expSum = activations.output.reduce((sum, val) => sum + Math.exp(val), 0);
                activations.output = activations.output.map(val => Math.exp(val) / expSum);
                
                return activations;
            }
            
            // Update input layer visualization
            updateInputLayer(activations) {
                this.neurons.input.forEach((neuron, i) => {
                    const activation = activations[i] || 0;
                    neuron.activation = activation;
                    
                    // Update color based on activation
                    if (activation > 0.1) {
                        neuron.mesh.material.color.setHSL(0.6, 0.8, 0.5);
                        neuron.mesh.material.opacity = activation;
                    } else {
                        neuron.mesh.material.opacity = 0.1;
                    }
                });
            }
            
            // Update hidden layer visualization
            updateHiddenLayer(activations) {
                this.neurons.hidden.forEach((neuron, i) => {
                    const activation = activations[i] || 0;
                    neuron.activation = activation;
                    
                    // Update color based on activation
                    if (activation > 0) {
                        neuron.mesh.material.color.setHSL(0.6 - (activation * 0.6), 0.8, 0.5);
                        neuron.mesh.material.opacity = 0.3 + (activation * 0.7);
                    } else {
                        neuron.mesh.material.opacity = 0.2;
                    }
                });
            }
            
            // Update output layer visualization
            updateOutputLayer(activations) {
                const maxIndex = activations.indexOf(Math.max(...activations));
                
                this.neurons.output.forEach((neuron, i) => {
                    const activation = activations[i] || 0;
                    neuron.activation = activation;
                    
                    // Update color based on activation
                    if (i === maxIndex) {
                        // Highlight predicted digit
                        neuron.mesh.material.color.setHex(this.config.colors.highlightedNeuron);
                        neuron.mesh.material.opacity = 1.0;
                    } else if (activation > 0.1) {
                        neuron.mesh.material.color.setHSL(0.6 - (activation * 0.6), 0.8, 0.5);
                        neuron.mesh.material.opacity = 0.3 + (activation * 0.7);
                    } else {
                        neuron.mesh.material.opacity = 0.2;
                    }
                });
            }
            
            // Animate data flow from input to hidden layer
            animateInputToHidden(inputActivations, weights) {
                this.clearAnimations();
                
                // Find active input neurons (value > threshold)
                const activeInputIndices = [];
                for (let i = 0; i < inputActivations.length; i++) {
                    if (inputActivations[i] > 0.2) {
                        activeInputIndices.push(i);
                    }
                }
                
                // For each active input neuron, create data cubes flowing to each hidden neuron
                for (const inputIdx of activeInputIndices) {
                    // Create connections to a subset of hidden neurons (for visual clarity)
                    const targetCount = 5; // Connect to 5 random hidden neurons
                    const targetIndices = [];
                    
                    while (targetIndices.length < targetCount) {
                        const rand = Math.floor(Math.random() * this.networkStructure.hiddenLayer);
                        if (!targetIndices.includes(rand)) {
                            targetIndices.push(rand);
                        }
                    }
                    
                    // Create data cubes for each connection
                    for (const hiddenIdx of targetIndices) {
                        const weight = weights[inputIdx][hiddenIdx];
                        const contribution = inputActivations[inputIdx] * weight;
                        
                        // Only show significant contributions
                        if (Math.abs(contribution) > 0.05) {
                            const sourceNeuron = this.neurons.input[inputIdx];
                            const targetNeuron = this.neurons.hidden[hiddenIdx];
                            
                            this.createDataCube(
                                sourceNeuron.position,
                                targetNeuron.position,
                                weight,
                                Math.random() * 1000 // Random delay
                            );
                        }
                    }
                }
            }
            
            // Animate data flow from hidden to output layer
            animateHiddenToOutput(hiddenActivations, weights) {
                this.clearAnimations();
                
                // Find active hidden neurons
                const activeHiddenIndices = [];
                for (let i = 0; i < hiddenActivations.length; i++) {
                    if (hiddenActivations[i] > 0.1) {
                        activeHiddenIndices.push(i);
                    }
                }
                
                // Create data cubes flowing to output neurons
                for (const hiddenIdx of activeHiddenIndices) {
                    // For each output neuron
                    for (let outputIdx = 0; outputIdx < this.networkStructure.outputLayer; outputIdx++) {
                        const weight = weights[hiddenIdx][outputIdx];
                        const contribution = hiddenActivations[hiddenIdx] * weight;
                        
                        // Only show significant contributions
                        if (Math.abs(contribution) > 0.05) {
                            const sourceNeuron = this.neurons.hidden[hiddenIdx];
                            const targetNeuron = this.neurons.output[outputIdx];
                            
                            this.createDataCube(
                                sourceNeuron.position,
                                targetNeuron.position,
                                weight,
                                Math.random() * 500 // Random delay
                            );
                        }
                    }
                }
            }
            
            // Create an animated data cube
            createDataCube(sourcePos, targetPos, weight, delay = 0) {
                const animConfig = this.config.animation;
                
                // Create cube mesh
                const size = animConfig.dataCubeSize;
                const geometry = new THREE.BoxGeometry(size, size, size);
                
                // Color based on weight sign (green for positive, red for negative)
                const color = weight >= 0 ? 
                    this.config.colors.positiveWeight : 
                    this.config.colors.negativeWeight;
                
                const material = new THREE.MeshPhongMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.8 * Math.min(1, Math.abs(weight) * 2)
                });
                
                const cube = new THREE.Mesh(geometry, material);
                cube.position.copy(sourcePos);
                this.scene.add(cube);
                
                // Store animation data
                const animation = {
                    cube: cube,
                    startTime: Date.now() + delay,
                    duration: animConfig.duration,
                    sourcePos: sourcePos,
                    targetPos: targetPos,
                    complete: false
                };
                
                this.animations.push(animation);
            }
            
            // Clear all animations
            clearAnimations() {
                for (const anim of this.animations) {
                    if (anim.cube) {
                        this.scene.remove(anim.cube);
                    }
                }
                
                this.animations = [];
            }
            
            // Update animations
            updateAnimations() {
                const currentTime = Date.now();
                const arcHeight = this.config.animation.arcHeight;
                const maxOpacity = this.config.animation.maxOpacity;
                
                for (let i = 0; i < this.animations.length; i++) {
                    const anim = this.animations[i];
                    
                    if (anim.complete) continue;
                    
                    const elapsed = currentTime - anim.startTime;
                    
                    if (elapsed < 0) {
                        // Not started yet
                        anim.cube.visible = false;
                    } else if (elapsed > anim.duration) {
                        // Animation complete
                        this.scene.remove(anim.cube);
                        anim.complete = true;
                    } else {
                        // Update position
                        const progress = elapsed / anim.duration;
                        
                        // Cubic easing
                        const easedProgress = this.easeInOutCubic(progress);
                        
                        // Linear interpolation
                        anim.cube.position.x = anim.sourcePos.x + (anim.targetPos.x - anim.sourcePos.x) * easedProgress;
                        anim.cube.position.y = anim.sourcePos.y + (anim.targetPos.y - anim.sourcePos.y) * easedProgress;
                        anim.cube.position.z = anim.sourcePos.z + (anim.targetPos.z - anim.sourcePos.z) * easedProgress;
                        
                        // Add vertical arc
                        anim.cube.position.y += Math.sin(progress * Math.PI) * arcHeight;
                        
                        // Update visibility and opacity
                        anim.cube.visible = true;
                        anim.cube.material.opacity = Math.sin(progress * Math.PI) * maxOpacity;
                        
                        // Rotate the cube (for visual interest)
                        anim.cube.rotation.x += 0.05;
                        anim.cube.rotation.y += 0.05;
                    }
                }
                
                // Remove completed animations
                this.animations = this.animations.filter(anim => !anim.complete);
            }
            
            // Cubic easing function
            easeInOutCubic(t) {
                return t < 0.5
                    ? 4 * t * t * t
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
            }
            
            // Animation loop
            animate() {
                requestAnimationFrame(this.animate.bind(this));
                
                // Update animations
                this.updateAnimations();
                
                // Render scene
                this.renderer.render(this.scene, this.camera);
            }
            
            // Update configuration
            updateConfig(newConfig) {
                this.config = this.mergeConfig(this.defaultConfig, newConfig);
                
                // Update camera
                this.camera.position.set(
                    this.config.camera.position.x,
                    this.config.camera.position.y,
                    this.config.camera.position.z
                );
                this.camera.rotation.set(
                    this.config.camera.rotation.x,
                    this.config.camera.rotation.y,
                    this.config.camera.rotation.z
                );
                this.camera.fov = this.config.camera.fov;
                this.camera.updateProjectionMatrix();
                
                // Updated scene background
                this.scene.background = new THREE.Color(this.config.colors.background);
                
                // To fully update positions of all elements, we'd need to recreate them
                // For this demo we'll just change the colors
                Object.keys(this.neurons).forEach(layer => {
                    this.neurons[layer].forEach(neuron => {
                        neuron.mesh.material.color.setHex(this.config.colors.neuron);
                    });
                });
            }
        }

        // Example custom configuration
        const customConfig = {
            camera: {
                position: { x: 0, y: 0, z: 25 },
                fov: 60
            },
            network: {
                layerPositions: {
                    input: -5,
                    hidden: 2,
                    output: 9
                },
                inputLayer: {
                    horizontalSpacing: 0.15,
                    verticalSpacing: 0.15
                }
            },
            colors: {
                background: 0x111133,
                positiveWeight: 0x00ff00,
                negativeWeight: 0xff0000
            }
        };

        // Initialize the visualizer when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            // Use default config:
            // const visualizer = new NeuralNetworkVisualizer();
            
            // Or use custom config:
            const visualizer = new NeuralNetworkVisualizer(customConfig);
            
            // Example of updating config at runtime
            // (Uncomment to test)
            /*
            setTimeout(() => {
                visualizer.updateConfig({
                    colors: {
                        background: 0x000022,
                        neuron: 0x00aaff
                    },
                    camera: {
                        position: { x: 5, y: 2, z: 20 }
                    }
                });
            }, 5000);
            */
        });