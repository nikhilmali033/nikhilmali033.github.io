import * as THREE from 'three';

/**
 * Manages the neural network visualization in the 3D scene
 */
export default class NeuralNetworkManager {
    constructor(scene, camera, sceneManager) {
        this.scene = scene;
        this.camera = camera;
        this.sceneManager = sceneManager; // Reference to SceneManager for callbacks
        this.isActive = false;
        this.animations = [];
        this.animationPhase = 0;
        this.neurons = {
            input: [],
            hidden: [],
            output: []
        };
        
        // Get config from scene manager
        this.config = sceneManager.config.neuralNetwork;
        
        // Camera positions
        this.cameraPositions = {
            network: new THREE.Vector3(
                this.config.camera.position.x,
                this.config.camera.position.y,
                this.config.camera.position.z
            ),
            original: camera.position.clone()
        };
        
        // Camera rotations/lookAt
        this.cameraSettings = {
            network: {
                position: new THREE.Vector3(
                    this.config.camera.position.x,
                    this.config.camera.position.y,
                    this.config.camera.position.z
                ),
                rotation: this.config.camera.rotation ? 
                    new THREE.Euler(
                        this.config.camera.rotation.x,
                        this.config.camera.rotation.y,
                        this.config.camera.rotation.z
                    ) : null,
                lookAt: this.config.camera.lookAt ? 
                    new THREE.Vector3(
                        this.config.camera.lookAt.x,
                        this.config.camera.lookAt.y,
                        this.config.camera.lookAt.z
                    ) : null
            },
            original: {
                position: camera.position.clone(),
                rotation: camera.rotation.clone(),
                quaternion: camera.quaternion.clone()
            }
        };
        
        // Reference to DOM elements (will be set later)
        this.ui = {
            overlayContainer: null,
            drawingCanvas: null,
            drawingContext: null,
            clearBtn: null,
            recognizeBtn: null,
            backBtn: null,
            resultContainer: null,
            resultText: null
        };
        
        // Drawing state
        this.drawingState = {
            isDrawing: false,
            lastPosition: null
        };
        
        // Clock for animations
        this.clock = new THREE.Clock();
        
        // Create group to hold all neural network elements
        this.networkGroup = new THREE.Group();
        this.scene.add(this.networkGroup);
        this.networkGroup.visible = false;
    }
    
    /**
     * Initialize the neural network visualization
     */
    initialize() {
        console.log('Initializing neural network visualization');
        this._initNetwork();
        this._createUI();
        this._setupEventListeners();
    }
    
    /**
     * Show the neural network visualization and overlay
     */
    show() {
        console.log("Showing neural network visualization");
        
        // Store original camera settings
        this.cameraSettings.original = {
            position: this.camera.position.clone(),
            quaternion: this.camera.quaternion.clone(),
            rotation: this.camera.rotation.clone()
        };
        
        console.log("Original camera position:", this.cameraSettings.original.position);
        console.log("Target camera position:", this.cameraSettings.network.position);
        
        // Make network group visible immediately
        this.networkGroup.visible = true;
        
        // Start camera transition using SceneManager's transitionCamera method
        const cameraParams = {
            position: this.cameraSettings.network.position,
            rotation: this.cameraSettings.network.rotation,
            lookAt: this.cameraSettings.network.lookAt,
            transitionDuration: this.config.camera.transitionDuration
        };
        
        this.sceneManager.transitionCamera(cameraParams, () => {
            // Show UI overlay after camera transition completes
            if (this.ui.overlayContainer) {
                console.log("Showing UI overlay");
                this.ui.overlayContainer.style.display = 'block';
            }
        });
        
        this.isActive = true;
    }
    
    /**
     * Hide the neural network visualization and overlay
     */
    hide() {
        console.log("Hiding neural network visualization");
        
        // Hide UI overlay immediately
        if (this.ui.overlayContainer) {
            this.ui.overlayContainer.style.display = 'none';
        }
        
        // Transition camera back to original position using SceneManager's transitionCamera method
        const cameraParams = {
            position: this.cameraSettings.original.position,
            // Use stored rotation or quaternion
            rotation: this.sceneManager.config.camera.rotation,
            lookAt: this.sceneManager.config.camera.lookAt,
            transitionDuration: this.config.camera.transitionDuration
        };
        
        this.sceneManager.transitionCamera(cameraParams, () => {
            // Hide network group after camera transition completes
            this.networkGroup.visible = false;
            
            // Notify SceneManager to complete the transition back to card view
            if (this.sceneManager) {
                console.log("Notifying SceneManager to complete transition to card view");
                this.sceneManager.showCardView();
            }
        });
        
        this.isActive = false;
    }
    
    /**
     * Process the drawing and animate the neural network
     */
    processDrawing() {
        console.log('Processing drawing...');
        
        // Get pixel data from canvas
        const inputData = this._getPixelData();
        
        // Simulate network weights
        const weights = this._simulateWeights();
        
        // Simulate forward pass
        const activations = this._simulateForwardPass(inputData, weights);
        
        // Visualize input layer activations immediately
        this._updateInputLayer(inputData);
        
        // Animate data flow
        this._scheduleLayerAnimation(activations, weights);
        
        // Show result at the end of animation
        const predictedDigit = activations.output.indexOf(Math.max(...activations.output));
        setTimeout(() => {
            this.ui.resultText.textContent = predictedDigit;
            this.ui.resultContainer.style.display = 'block';
        }, this.config.animation.resultDelay);
    }
    
    /**
     * Create UI elements for drawing and interaction
     * @private
     */
    _createUI() {
        // Create overlay container
        const overlayContainer = document.createElement('div');
        overlayContainer.id = 'nn-overlay';
        overlayContainer.style.position = 'absolute';
        overlayContainer.style.top = '20px';
        overlayContainer.style.left = '20px';
        overlayContainer.style.width = '300px';
        overlayContainer.style.padding = '15px';
        overlayContainer.style.backgroundColor = 'rgba(20, 20, 40, 0.7)';
        overlayContainer.style.borderRadius = '10px';
        overlayContainer.style.zIndex = '10';
        overlayContainer.style.color = 'white';
        overlayContainer.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
        overlayContainer.style.display = 'none';
        document.body.appendChild(overlayContainer);
        
        // Add heading
        const heading = document.createElement('h2');
        heading.textContent = 'Draw a digit (0-9)';
        heading.style.marginTop = '0';
        heading.style.marginBottom = '10px';
        heading.style.fontSize = '18px';
        overlayContainer.appendChild(heading);
        
        // Add drawing canvas
        const drawingCanvas = document.createElement('canvas');
        drawingCanvas.width = 280;
        drawingCanvas.height = 280;
        drawingCanvas.style.width = '100%';
        drawingCanvas.style.height = '280px';
        drawingCanvas.style.backgroundColor = 'black';
        drawingCanvas.style.cursor = 'crosshair';
        drawingCanvas.style.border = '1px solid #666';
        drawingCanvas.style.borderRadius = '5px';
        drawingCanvas.style.marginBottom = '10px';
        overlayContainer.appendChild(drawingCanvas);
        
        // Button container
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginBottom = '15px';
        overlayContainer.appendChild(buttonContainer);
        
        // Clear button
        const clearBtn = document.createElement('button');
        clearBtn.textContent = 'Clear';
        clearBtn.style.flex = '1';
        clearBtn.style.padding = '8px 15px';
        clearBtn.style.fontSize = '14px';
        clearBtn.style.border = 'none';
        clearBtn.style.borderRadius = '5px';
        clearBtn.style.cursor = 'pointer';
        clearBtn.style.backgroundColor = '#3498db';
        clearBtn.style.color = 'white';
        buttonContainer.appendChild(clearBtn);
        
        // Recognize button
        const recognizeBtn = document.createElement('button');
        recognizeBtn.textContent = 'Recognize';
        recognizeBtn.style.flex = '1';
        recognizeBtn.style.padding = '8px 15px';
        recognizeBtn.style.fontSize = '14px';
        recognizeBtn.style.border = 'none';
        recognizeBtn.style.borderRadius = '5px';
        recognizeBtn.style.cursor = 'pointer';
        recognizeBtn.style.backgroundColor = '#2ecc71';
        recognizeBtn.style.color = 'white';
        buttonContainer.appendChild(recognizeBtn);
        
        // Result container
        const resultContainer = document.createElement('div');
        resultContainer.style.backgroundColor = '#2c3e50';
        resultContainer.style.padding = '10px';
        resultContainer.style.borderRadius = '5px';
        resultContainer.style.textAlign = 'center';
        resultContainer.style.fontWeight = 'bold';
        resultContainer.style.fontSize = '18px';
        resultContainer.style.display = 'none';
        resultContainer.style.marginBottom = '15px';
        overlayContainer.appendChild(resultContainer);
        
        // Result text
        const resultSpan = document.createElement('span');
        resultContainer.innerHTML = 'Digit: ';
        resultContainer.appendChild(resultSpan);
        
        // Back button
        const backBtn = document.createElement('button');
        backBtn.textContent = 'Back to Card';
        backBtn.style.width = '100%';
        backBtn.style.padding = '8px 15px';
        backBtn.style.fontSize = '14px';
        backBtn.style.border = 'none';
        backBtn.style.borderRadius = '5px';
        backBtn.style.cursor = 'pointer';
        backBtn.style.backgroundColor = '#e74c3c';
        backBtn.style.color = 'white';
        overlayContainer.appendChild(backBtn);
        
        // Store references
        this.ui.overlayContainer = overlayContainer;
        this.ui.drawingCanvas = drawingCanvas;
        this.ui.drawingContext = drawingCanvas.getContext('2d');
        this.ui.clearBtn = clearBtn;
        this.ui.recognizeBtn = recognizeBtn;
        this.ui.backBtn = backBtn;
        this.ui.resultContainer = resultContainer;
        this.ui.resultText = resultSpan;
        
        // Clear canvas with black background
        this.ui.drawingContext.fillStyle = 'black';
        this.ui.drawingContext.fillRect(0, 0, this.ui.drawingCanvas.width, this.ui.drawingCanvas.height);
    }
    
    /**
     * Set up event listeners for UI
     * @private
     */
    _setupEventListeners() {
        // Drawing events
        this.ui.drawingCanvas.addEventListener('mousedown', this._startDrawing.bind(this));
        this.ui.drawingCanvas.addEventListener('mousemove', this._draw.bind(this));
        this.ui.drawingCanvas.addEventListener('mouseup', this._stopDrawing.bind(this));
        this.ui.drawingCanvas.addEventListener('mouseleave', this._stopDrawing.bind(this));
        
        // Touch events
        this.ui.drawingCanvas.addEventListener('touchstart', this._handleTouch.bind(this));
        this.ui.drawingCanvas.addEventListener('touchmove', this._handleTouch.bind(this));
        this.ui.drawingCanvas.addEventListener('touchend', this._stopDrawing.bind(this));
        
        // Button events
        this.ui.clearBtn.addEventListener('click', this._clearCanvas.bind(this));
        
        this.ui.recognizeBtn.addEventListener('click', () => {
            console.log("Recognize button clicked");
            this.processDrawing();
        });
        
        this.ui.backBtn.addEventListener('click', () => {
            console.log("Back button clicked");
            this.hide(); // This will now properly transition back to card view
        });
    }
    
    /**
     * Initialize the neural network visualization
     * @private
     */
    _initNetwork() {
        // Create layers
        this._createInputLayer();
        this._createHiddenLayer();
        this._createOutputLayer();
        
        // Add labels
        const labelConfig = this.config.labels;
        const layerPositions = this.config.layerPositions;
        
        this._addTextLabel(
            "Input Layer", 
            new THREE.Vector3(0, labelConfig.offsetY, layerPositions.input)
        );
        this._addTextLabel(
            "Hidden Layer", 
            new THREE.Vector3(0, labelConfig.offsetY, layerPositions.hidden)
        );
        this._addTextLabel(
            "Output Layer", 
            new THREE.Vector3(0, labelConfig.offsetY, layerPositions.output)
        );
    }
    
    /**
     * Create the input layer (28x28 grid)
     * @private
     */
    _createInputLayer() {
        const layerConfig = this.config.inputLayer;
        const neuronSize = layerConfig.neuronSize;
        const gridSize = 28;
        const hSpacing = layerConfig.horizontalSpacing;
        const vSpacing = layerConfig.verticalSpacing;
        const totalWidth = gridSize * hSpacing;
        const zPosition = this.config.layerPositions.input;
        
        // Create neuron geometry
        const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
        
        // Create neurons in a grid
        for (let i = 0; i < this.config.structure.inputLayer; i++) {
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
            
            this.networkGroup.add(neuron);
        }
    }
    
    /**
     * Create the hidden layer
     * @private
     */
    _createHiddenLayer() {
        const layerConfig = this.config.hiddenLayer;
        const neuronSize = layerConfig.neuronSize;
        const gridSize = Math.ceil(Math.sqrt(this.config.structure.hiddenLayer));
        const hSpacing = layerConfig.horizontalSpacing;
        const vSpacing = layerConfig.verticalSpacing;
        const totalSize = gridSize * hSpacing;
        const zPosition = this.config.layerPositions.hidden;
        
        // Create neurons in a grid
        const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
        
        for (let i = 0; i < this.config.structure.hiddenLayer; i++) {
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
            
            this.networkGroup.add(neuron);
        }
    }
    
    /**
     * Create the output layer
     * @private
     */
    _createOutputLayer() {
        const layerConfig = this.config.outputLayer;
        const neuronSize = layerConfig.neuronSize;
        const spacing = layerConfig.verticalSpacing;
        const zPosition = this.config.layerPositions.output;
        
        // Create neurons in a vertical arrangement
        const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
        const totalHeight = (this.config.structure.outputLayer - 1) * spacing;
        
        for (let i = 0; i < this.config.structure.outputLayer; i++) {
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
            
            this.networkGroup.add(neuron);
            
            // Add digit label
            this._addTextLabel(
                i.toString(), 
                new THREE.Vector3(x + 0.6, y, zPosition)
            );
        }
    }
    
    /* Other methods omitted for brevity - they remain unchanged except for using config values */
    
    /**
     * Add text label to a 3D position
     * @private
     */
    _addTextLabel(text, position) {
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
        
        const labelScale = this.config.labels.scale;
        sprite.scale.set(labelScale.x, labelScale.y, labelScale.z);
        this.networkGroup.add(sprite);
    }
    
    /**
     * Start drawing on canvas
     * @private
     */
    _startDrawing(e) {
        this.drawingState.isDrawing = true;
        this.drawingState.lastPosition = null;
        this._draw(e);
    }
    
    /**
     * Handle drawing
     * @private
     */
    _draw(e) {
        if (!this.drawingState.isDrawing) return;
        
        const rect = this.ui.drawingCanvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.ui.drawingContext.strokeStyle = 'white';
        this.ui.drawingContext.lineWidth = 15;
        this.ui.drawingContext.lineCap = 'round';
        this.ui.drawingContext.lineJoin = 'round';
        
        if (!this.drawingState.lastPosition) {
            this.ui.drawingContext.beginPath();
            this.ui.drawingContext.moveTo(x, y);
        } else {
            this.ui.drawingContext.lineTo(x, y);
            this.ui.drawingContext.stroke();
        }
        
        this.drawingState.lastPosition = { x, y };
    }
    
    /**
     * Handle touch events
     * @private
     */
    _handleTouch(e) {
        e.preventDefault();
        
        if (e.type === 'touchstart') {
            this.drawingState.isDrawing = true;
            this.drawingState.lastPosition = null;
        }
        
        if (this.drawingState.isDrawing) {
            const rect = this.ui.drawingCanvas.getBoundingClientRect();
            const touch = e.touches[0];
            const x = touch.clientX - rect.left;
            const y = touch.clientY - rect.top;
            
            this.ui.drawingContext.strokeStyle = 'white';
            this.ui.drawingContext.lineWidth = 15;
            this.ui.drawingContext.lineCap = 'round';
            this.ui.drawingContext.lineJoin = 'round';
            
            if (!this.drawingState.lastPosition) {
                this.ui.drawingContext.beginPath();
                this.ui.drawingContext.moveTo(x, y);
            } else {
                this.ui.drawingContext.lineTo(x, y);
                this.ui.drawingContext.stroke();
            }
            
            this.drawingState.lastPosition = { x, y };
        }
    }
    
    /**
     * Stop drawing
     * @private
     */
    _stopDrawing() {
        this.drawingState.isDrawing = false;
    }
    
    /**
     * Clear the canvas
     * @private
     */
    _clearCanvas() {
        this.ui.drawingContext.fillStyle = 'black';
        this.ui.drawingContext.fillRect(0, 0, this.ui.drawingCanvas.width, this.ui.drawingCanvas.height);
        this.ui.resultContainer.style.display = 'none';
        
        // Reset network visualization
        this._resetNetwork();
    }
    
    /**
     * Reset network visualization
     * @private
     */
    _resetNetwork() {
        // Clear animations
        this._clearAnimations();
        
        // Reset neurons
        Object.keys(this.neurons).forEach(layer => {
            this.neurons[layer].forEach(neuron => {
                neuron.activation = 0;
                neuron.mesh.material.color.setHex(this.config.colors.neuron);
                neuron.mesh.material.opacity = 0.5;
            });
        });
    }
    
    /**
     * Get pixel data from canvas
     * @private
     * @returns {Array} Array of pixel values (0-1)
     */
    _getPixelData() {
        const imageData = this.ui.drawingContext.getImageData(0, 0, 280, 280);
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
    
    /**
     * Schedule animations between layers with proper timing
     * @private
     */
    _scheduleLayerAnimation(activations, weights) {
        // First animate input to hidden
        setTimeout(() => {
            this.animationPhase = 1;
            this._animateInputToHidden(activations.input, weights.inputToHidden);
        }, 0);
        
        // Then animate hidden layer activations
        setTimeout(() => {
            this.animationPhase = 2;
            this._updateHiddenLayer(activations.hidden);
        }, this.config.animation.hiddenLayerDelay);
        
        // Then animate hidden to output
        setTimeout(() => {
            this.animationPhase = 3;
            this._animateHiddenToOutput(activations.hidden, weights.hiddenToOutput);
        }, this.config.animation.outputLayerDelay);
        
        // Finally show output layer activations
        setTimeout(() => {
            this.animationPhase = 4;
            this._updateOutputLayer(activations.output);
        }, this.config.animation.resultDelay - 450); // Show results a bit before the final result appears
    }
    
    /**
     * Simulate weights for the neural network
     * @private
     * @returns {Object} Weights object with inputToHidden and hiddenToOutput
     */
    _simulateWeights() {
        return {
            inputToHidden: Array(this.config.structure.inputLayer)
                .fill()
                .map(() => Array(this.config.structure.hiddenLayer)
                    .fill()
                    .map(() => Math.random() * 2 - 1)),
            hiddenToOutput: Array(this.config.structure.hiddenLayer)
                .fill()
                .map(() => Array(this.config.structure.outputLayer)
                    .fill()
                    .map(() => Math.random() * 2 - 1))
        };
    }
    
    /**
     * Simulate forward pass through network
     * @private
     * @param {Array} inputData - Input data (0-1)
     * @param {Object} weights - Weights object
     * @returns {Object} Activations object with input, hidden, and output
     */
    _simulateForwardPass(inputData, weights) {
        // Layer activations
        const activations = {
            input: inputData,
            hidden: Array(this.config.structure.hiddenLayer).fill(0),
            output: Array(this.config.structure.outputLayer).fill(0)
        };
        
        // Input to hidden
        for (let i = 0; i < this.config.structure.inputLayer; i++) {
            for (let j = 0; j < this.config.structure.hiddenLayer; j++) {
                activations.hidden[j] += activations.input[i] * weights.inputToHidden[i][j];
            }
        }
        
        // Apply ReLU
        activations.hidden = activations.hidden.map(x => Math.max(0, x));
        
        // Hidden to output
        for (let i = 0; i < this.config.structure.hiddenLayer; i++) {
            for (let j = 0; j < this.config.structure.outputLayer; j++) {
                activations.output[j] += activations.hidden[i] * weights.hiddenToOutput[i][j];
            }
        }
        
        // Apply softmax
        const expSum = activations.output.reduce((sum, val) => sum + Math.exp(val), 0);
        activations.output = activations.output.map(val => Math.exp(val) / expSum);
        
        return activations;
    }
    
    /**
     * Update input layer visualization
     * @private
     */
    _updateInputLayer(activations) {
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
    
    /**
     * Update hidden layer visualization
     * @private
     */
    _updateHiddenLayer(activations) {
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
    
    /**
     * Update output layer visualization
     * @private
     */
    _updateOutputLayer(activations) {
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
    
    /**
     * Animate data flow from input to hidden layer
     * @private
     */
    _animateInputToHidden(inputActivations, weights) {
        this._clearAnimations();
        
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
            const targetCount = this.config.animation.connectionsPerNeuron;
            const targetIndices = [];
            
            while (targetIndices.length < targetCount) {
                const rand = Math.floor(Math.random() * this.config.structure.hiddenLayer);
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
                    
                    this._createDataCube(
                        sourceNeuron.position,
                        targetNeuron.position,
                        weight,
                        Math.random() * this.config.animation.randomDelayFactor
                    );
                }
            }
        }
    }
    
    /**
     * Animate data flow from hidden to output layer
     * @private
     */
    _animateHiddenToOutput(hiddenActivations, weights) {
        this._clearAnimations();
        
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
            for (let outputIdx = 0; outputIdx < this.config.structure.outputLayer; outputIdx++) {
                const weight = weights[hiddenIdx][outputIdx];
                const contribution = hiddenActivations[hiddenIdx] * weight;
                
                // Only show significant contributions
                if (Math.abs(contribution) > 0.05) {
                    const sourceNeuron = this.neurons.hidden[hiddenIdx];
                    const targetNeuron = this.neurons.output[outputIdx];
                    
                    this._createDataCube(
                        sourceNeuron.position,
                        targetNeuron.position,
                        weight,
                        Math.random() * (this.config.animation.randomDelayFactor / 2) // Less delay for output layer
                    );
                }
            }
        }
    }
    
    /**
     * Create an animated data cube
     * @private
     */
    _createDataCube(sourcePos, targetPos, weight, delay = 0) {
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
        this.networkGroup.add(cube);
        
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
    
    /**
     * Clear all animations
     * @private
     */
    _clearAnimations() {
        for (const anim of this.animations) {
            if (anim.cube) {
                this.networkGroup.remove(anim.cube);
            }
        }
        
        this.animations = [];
    }
    
    /**
     * Update animations
     */
    updateAnimations() {
        if (!this.isActive) return;
        
        // Update data cube animations
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
                this.networkGroup.remove(anim.cube);
                anim.complete = true;
            } else {
                // Update position
                const progress = elapsed / anim.duration;
                
                // Cubic easing
                const easedProgress = this._easeInOutCubic(progress);
                
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
    
    /**
     * Cubic easing function
     * @private
     */
    _easeInOutCubic(t) {
        return t < 0.5
            ? 4 * t * t * t
            : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    /**
     * Cleanup resources and event listeners
     */
    dispose() {
        console.log('Disposing neural network manager');
        
        // Remove event listeners
        if (this.ui.drawingCanvas) {
            this.ui.drawingCanvas.removeEventListener('mousedown', this._startDrawing);
            this.ui.drawingCanvas.removeEventListener('mousemove', this._draw);
            this.ui.drawingCanvas.removeEventListener('mouseup', this._stopDrawing);
            this.ui.drawingCanvas.removeEventListener('mouseleave', this._stopDrawing);
            
            this.ui.drawingCanvas.removeEventListener('touchstart', this._handleTouch);
            this.ui.drawingCanvas.removeEventListener('touchmove', this._handleTouch);
            this.ui.drawingCanvas.removeEventListener('touchend', this._stopDrawing);
        }
        
        if (this.ui.clearBtn) {
            this.ui.clearBtn.removeEventListener('click', this._clearCanvas);
        }
        
        // Remove UI elements
        if (this.ui.overlayContainer && this.ui.overlayContainer.parentNode) {
            this.ui.overlayContainer.parentNode.removeChild(this.ui.overlayContainer);
        }
        
        // Clear animations
        this._clearAnimations();
        
        // Remove all meshes
        Object.keys(this.neurons).forEach(layer => {
            this.neurons[layer].forEach(neuron => {
                if (neuron.mesh) {
                    neuron.mesh.geometry.dispose();
                    neuron.mesh.material.dispose();
                    this.networkGroup.remove(neuron.mesh);
                }
            });
        });
        
        // Remove network group
        this.scene.remove(this.networkGroup);
    }
}