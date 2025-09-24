import * as THREE from 'three';
import BaseScene from './BaseScene';

/**
 * Neural Network visualization scene
 */
export default class NeuralNetworkScene extends BaseScene {
    constructor(sceneController, config) {
        super(sceneController, {
            camera: {
                position: new THREE.Vector3(-10, 2, 15),
                rotation: new THREE.Euler(0.2, 0.2, 0),
                lookAt: new THREE.Vector3(0, 0, 0),
                transitionDuration: 1200
            },
            ...config
        });
        
        this.neurons = {
            input: [],
            hidden: [],
            output: []
        };
        
        this.animations = [];
        this.animationPhase = 0;
        
        // Network structure
        this.structure = {
            inputLayer: 784, // 28x28
            hiddenLayer: 64,
            outputLayer: 10,
            ...config.networkStructure
        };
        
        // Drawing state
        this.drawingState = {
            isDrawing: false,
            lastPosition: null,
            canvas: null,
            context: null
        };
    }
    
    async _createSceneContent() {
        // Create neural network layers
        this._createInputLayer();
        this._createHiddenLayer();
        this._createOutputLayer();
        
        // Add layer labels
        this._addLayerLabels();
        
        // Create UI
        this._createDrawingUI();
    }
    
    _createInputLayer() {
        const neuronSize = 0.08;
        const spacing = 0.15;
        const gridSize = 28;
        const totalWidth = gridSize * spacing;
        const zPosition = -5;
        
        const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
        
        for (let i = 0; i < this.structure.inputLayer; i++) {
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;
            
            const x = (col * spacing) - (totalWidth / 2);
            const y = (row * spacing) - (totalWidth / 2);
            
            const material = new THREE.MeshPhongMaterial({
                color: 0x3498db,
                transparent: true,
                opacity: 0.5
            });
            
            const neuron = new THREE.Mesh(geometry.clone(), material);
            neuron.position.set(x, y, zPosition);
            
            this.neurons.input.push({
                mesh: neuron,
                position: { x, y, z: zPosition },
                index: i,
                activation: 0
            });
            
            this.add(neuron);
        }
    }
    
    _createHiddenLayer() {
        const neuronSize = 0.15;
        const spacing = 0.5;
        const gridSize = Math.ceil(Math.sqrt(this.structure.hiddenLayer));
        const totalSize = gridSize * spacing;
        const zPosition = 2;
        
        const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
        
        for (let i = 0; i < this.structure.hiddenLayer; i++) {
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;
            
            const x = (col * spacing) - (totalSize / 2);
            const y = (row * spacing) - (totalSize / 2);
            
            const material = new THREE.MeshPhongMaterial({
                color: 0x3498db,
                transparent: true,
                opacity: 0.5
            });
            
            const neuron = new THREE.Mesh(geometry.clone(), material);
            neuron.position.set(x, y, zPosition);
            
            this.neurons.hidden.push({
                mesh: neuron,
                position: { x, y, z: zPosition },
                index: i,
                activation: 0
            });
            
            this.add(neuron);
        }
    }
    
    _createOutputLayer() {
        const neuronSize = 0.25;
        const spacing = 0.8;
        const zPosition = 9;
        const totalHeight = (this.structure.outputLayer - 1) * spacing;
        
        const geometry = new THREE.BoxGeometry(neuronSize, neuronSize, neuronSize);
        
        for (let i = 0; i < this.structure.outputLayer; i++) {
            const x = 0;
            const y = (i * spacing) - (totalHeight / 2);
            
            const material = new THREE.MeshPhongMaterial({
                color: 0x3498db,
                transparent: true,
                opacity: 0.5
            });
            
            const neuron = new THREE.Mesh(geometry.clone(), material);
            neuron.position.set(x, y, zPosition);
            
            this.neurons.output.push({
                mesh: neuron,
                position: { x, y, z: zPosition },
                index: i,
                activation: 0
            });
            
            this.add(neuron);
            
            // Add digit label
            this._addTextLabel(i.toString(), new THREE.Vector3(x + 0.6, y, zPosition));
        }
    }
    
    _addLayerLabels() {
        this._addTextLabel("Input Layer", new THREE.Vector3(0, 5, -5));
        this._addTextLabel("Hidden Layer", new THREE.Vector3(0, 5, 2));
        this._addTextLabel("Output Layer", new THREE.Vector3(0, 5, 9));
    }
    
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
        sprite.scale.set(2, 0.5, 1);
        
        this.add(sprite);
    }
    
    _createDrawingUI() {
        // Create drawing panel
        const panel = document.createElement('div');
        panel.style.position = 'absolute';
        panel.style.top = '20px';
        panel.style.left = '20px';
        panel.style.width = '300px';
        panel.style.padding = '15px';
        panel.style.backgroundColor = 'rgba(20, 20, 40, 0.85)';
        panel.style.borderRadius = '10px';
        panel.style.color = 'white';
        panel.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.5)';
        panel.style.fontFamily = 'Arial, sans-serif';
        
        // Title
        const title = document.createElement('h2');
        title.textContent = 'Draw a digit (0-9)';
        title.style.margin = '0 0 10px 0';
        title.style.fontSize = '18px';
        panel.appendChild(title);
        
        // Canvas
        const canvas = document.createElement('canvas');
        canvas.width = 280;
        canvas.height = 280;
        canvas.style.width = '100%';
        canvas.style.height = '280px';
        canvas.style.backgroundColor = 'black';
        canvas.style.cursor = 'crosshair';
        canvas.style.border = '1px solid #666';
        canvas.style.borderRadius = '5px';
        canvas.style.marginBottom = '10px';
        panel.appendChild(canvas);
        
        this.drawingState.canvas = canvas;
        this.drawingState.context = canvas.getContext('2d');
        
        // Buttons
        const buttonContainer = document.createElement('div');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.gap = '10px';
        buttonContainer.style.marginBottom = '15px';
        panel.appendChild(buttonContainer);
        
        // Clear button
        const clearBtn = this._createButton('Clear', '#3498db', () => {
            this._clearCanvas();
        });
        buttonContainer.appendChild(clearBtn);
        
        // Recognize button
        const recognizeBtn = this._createButton('Recognize', '#2ecc71', () => {
            this._processDrawing();
        });
        buttonContainer.appendChild(recognizeBtn);
        
        // Result display
        const resultDiv = document.createElement('div');
        resultDiv.id = 'result-display';
        resultDiv.style.display = 'none';
        resultDiv.style.backgroundColor = '#2c3e50';
        resultDiv.style.padding = '10px';
        resultDiv.style.borderRadius = '5px';
        resultDiv.style.textAlign = 'center';
        resultDiv.style.fontWeight = 'bold';
        resultDiv.style.fontSize = '18px';
        resultDiv.style.marginBottom = '15px';
        panel.appendChild(resultDiv);
        
        // Back button
        const backBtn = this._createButton('Back to Cards', '#e74c3c', () => {
            this.sceneController.transitionTo('cards', {
                fromScene: 'neural'
            });
        });
        backBtn.style.width = '100%';
        panel.appendChild(backBtn);
        
        // Add to UI container
        this.uiContainer.appendChild(panel);
        
        // Set up drawing events
        this._setupDrawingEvents(canvas);
        
        // Clear canvas initially
        this._clearCanvas();
    }
    
    _createButton(text, color, onClick) {
        const button = document.createElement('button');
        button.textContent = text;
        button.style.flex = '1';
        button.style.padding = '8px 15px';
        button.style.fontSize = '14px';
        button.style.border = 'none';
        button.style.borderRadius = '5px';
        button.style.cursor = 'pointer';
        button.style.backgroundColor = color;
        button.style.color = 'white';
        button.style.transition = 'all 0.3s ease';
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-2px)';
            button.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = 'none';
        });
        
        button.addEventListener('click', onClick);
        
        return button;
    }
    
    _setupDrawingEvents(canvas) {
        // Mouse events
        canvas.addEventListener('mousedown', (e) => this._startDrawing(e));
        canvas.addEventListener('mousemove', (e) => this._draw(e));
        canvas.addEventListener('mouseup', () => this._stopDrawing());
        canvas.addEventListener('mouseleave', () => this._stopDrawing());
        
        // Touch events
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        });
        
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        });
        
        canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            canvas.dispatchEvent(new MouseEvent('mouseup'));
        });
    }
    
    _startDrawing(e) {
        this.drawingState.isDrawing = true;
        this.drawingState.lastPosition = this._getMousePos(e);
    }
    
    _draw(e) {
        if (!this.drawingState.isDrawing) return;
        
        const pos = this._getMousePos(e);
        const ctx = this.drawingState.context;
        
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 15;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        ctx.beginPath();
        if (this.drawingState.lastPosition) {
            ctx.moveTo(this.drawingState.lastPosition.x, this.drawingState.lastPosition.y);
        }
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
        
        this.drawingState.lastPosition = pos;
    }
    
    _stopDrawing() {
        this.drawingState.isDrawing = false;
        this.drawingState.lastPosition = null;
    }
    
    _getMousePos(e) {
        const rect = this.drawingState.canvas.getBoundingClientRect();
        return {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
    }
    
    _clearCanvas() {
        const ctx = this.drawingState.context;
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, this.drawingState.canvas.width, this.drawingState.canvas.height);
        
        // Hide result
        const resultDiv = this.uiContainer.querySelector('#result-display');
        if (resultDiv) {
            resultDiv.style.display = 'none';
        }
        
        // Reset network
        this._resetNetwork();
    }
    
    _resetNetwork() {
        // Clear animations
        this._clearAnimations();
        
        // Reset all neurons
        Object.keys(this.neurons).forEach(layer => {
            this.neurons[layer].forEach(neuron => {
                neuron.activation = 0;
                neuron.mesh.material.color.setHex(0x3498db);
                neuron.mesh.material.opacity = 0.5;
            });
        });
    }
    
    _clearAnimations() {
        this.animations.forEach(anim => {
            if (anim.cube) {
                this.remove(anim.cube);
                anim.cube.geometry.dispose();
                anim.cube.material.dispose();
            }
        });
        this.animations = [];
    }
    
    _processDrawing() {
        console.log('Processing drawing...');
        
        // Get pixel data
        const inputData = this._getPixelData();
        
        // Simulate network processing
        const weights = this._simulateWeights();
        const activations = this._simulateForwardPass(inputData, weights);
        
        // Visualize the processing
        this._updateInputLayer(inputData);
        
        // Animate through the network
        this._animateNetworkFlow(activations, weights);
        
        // Show result after animation
        const predictedDigit = activations.output.indexOf(Math.max(...activations.output));
        setTimeout(() => {
            const resultDiv = this.uiContainer.querySelector('#result-display');
            if (resultDiv) {
                resultDiv.textContent = `Predicted: ${predictedDigit}`;
                resultDiv.style.display = 'block';
            }
        }, 3000);
    }
    
    _getPixelData() {
        const imageData = this.drawingState.context.getImageData(0, 0, 280, 280);
        const downsampledData = [];
        const cellSize = 10; // 280 / 28
        
        for (let y = 0; y < 28; y++) {
            for (let x = 0; x < 28; x++) {
                let sum = 0;
                for (let dy = 0; dy < cellSize; dy++) {
                    for (let dx = 0; dx < cellSize; dx++) {
                        const pixelX = x * cellSize + dx;
                        const pixelY = y * cellSize + dy;
                        const idx = (pixelY * 280 + pixelX) * 4;
                        sum += imageData.data[idx] / 255;
                    }
                }
                downsampledData.push(sum / (cellSize * cellSize));
            }
        }
        
        return downsampledData;
    }
    
    _simulateWeights() {
        // Generate random weights for visualization
        return {
            inputToHidden: Array(this.structure.inputLayer).fill().map(() =>
                Array(this.structure.hiddenLayer).fill().map(() => Math.random() * 2 - 1)
            ),
            hiddenToOutput: Array(this.structure.hiddenLayer).fill().map(() =>
                Array(this.structure.outputLayer).fill().map(() => Math.random() * 2 - 1)
            )
        };
    }
    
    _simulateForwardPass(inputData, weights) {
        const activations = {
            input: inputData,
            hidden: Array(this.structure.hiddenLayer).fill(0),
            output: Array(this.structure.outputLayer).fill(0)
        };
        
        // Input to hidden
        for (let i = 0; i < this.structure.inputLayer; i++) {
            for (let j = 0; j < this.structure.hiddenLayer; j++) {
                activations.hidden[j] += activations.input[i] * weights.inputToHidden[i][j];
            }
        }
        
        // ReLU activation
        activations.hidden = activations.hidden.map(x => Math.max(0, x));
        
        // Hidden to output
        for (let i = 0; i < this.structure.hiddenLayer; i++) {
            for (let j = 0; j < this.structure.outputLayer; j++) {
                activations.output[j] += activations.hidden[i] * weights.hiddenToOutput[i][j];
            }
        }
        
        // Softmax
        const expSum = activations.output.reduce((sum, val) => sum + Math.exp(val), 0);
        activations.output = activations.output.map(val => Math.exp(val) / expSum);
        
        return activations;
    }
    
    _updateInputLayer(activations) {
        this.neurons.input.forEach((neuron, i) => {
            const activation = activations[i] || 0;
            if (activation > 0.1) {
                neuron.mesh.material.color.setHSL(0.6, 0.8, 0.5);
                neuron.mesh.material.opacity = activation;
            }
        });
    }
    
    _animateNetworkFlow(activations, weights) {
        // First wave: input to hidden
        setTimeout(() => {
            this._animateInputToHidden(activations.input, weights.inputToHidden);
        }, 0);
        
        // Update hidden layer
        setTimeout(() => {
            this._updateHiddenLayer(activations.hidden);
        }, 1500);
        
        // Second wave: hidden to output
        setTimeout(() => {
            this._animateHiddenToOutput(activations.hidden, weights.hiddenToOutput);
        }, 2000);
        
        // Update output layer
        setTimeout(() => {
            this._updateOutputLayer(activations.output);
        }, 2800);
    }
    
    _updateHiddenLayer(activations) {
        this.neurons.hidden.forEach((neuron, i) => {
            const activation = activations[i] || 0;
            if (activation > 0) {
                neuron.mesh.material.color.setHSL(0.1, 0.8, 0.5);
                neuron.mesh.material.opacity = 0.3 + activation * 0.7;
            }
        });
    }
    
    _updateOutputLayer(activations) {
        const maxIndex = activations.indexOf(Math.max(...activations));
        
        this.neurons.output.forEach((neuron, i) => {
            const activation = activations[i] || 0;
            if (i === maxIndex) {
                neuron.mesh.material.color.setHex(0xff5722);
                neuron.mesh.material.opacity = 1.0;
            } else if (activation > 0.1) {
                neuron.mesh.material.color.setHSL(0.3, 0.8, 0.5);
                neuron.mesh.material.opacity = 0.3 + activation * 0.7;
            }
        });
    }
    
    _animateInputToHidden(inputActivations, weights) {
        this._clearAnimations();
        
        // Find active inputs
        const activeInputs = [];
        inputActivations.forEach((activation, i) => {
            if (activation > 0.2) activeInputs.push(i);
        });
        
        // Create data flow animations
        for (const inputIdx of activeInputs.slice(0, 20)) { // Limit for performance
            const targets = this._getRandomTargets(5, this.structure.hiddenLayer);
            
            for (const hiddenIdx of targets) {
                this._createDataFlow(
                    this.neurons.input[inputIdx].position,
                    this.neurons.hidden[hiddenIdx].position,
                    weights[inputIdx][hiddenIdx]
                );
            }
        }
    }
    
    _animateHiddenToOutput(hiddenActivations, weights) {
        this._clearAnimations();
        
        // Find active hidden neurons
        const activeHidden = [];
        hiddenActivations.forEach((activation, i) => {
            if (activation > 0.1) activeHidden.push(i);
        });
        
        // Create data flow to all outputs
        for (const hiddenIdx of activeHidden) {
            for (let outputIdx = 0; outputIdx < this.structure.outputLayer; outputIdx++) {
                this._createDataFlow(
                    this.neurons.hidden[hiddenIdx].position,
                    this.neurons.output[outputIdx].position,
                    weights[hiddenIdx][outputIdx]
                );
            }
        }
    }
    
    _getRandomTargets(count, max) {
        const targets = new Set();
        while (targets.size < count) {
            targets.add(Math.floor(Math.random() * max));
        }
        return Array.from(targets);
    }
    
    _createDataFlow(startPos, endPos, weight) {
        const geometry = new THREE.BoxGeometry(0.08, 0.08, 0.08);
        const color = weight >= 0 ? 0x2ecc71 : 0xe74c3c;
        const material = new THREE.MeshPhongMaterial({
            color,
            transparent: true,
            opacity: 0.8 * Math.min(1, Math.abs(weight) * 2)
        });
        
        const cube = new THREE.Mesh(geometry, material);
        cube.position.copy(startPos);
        this.add(cube);
        
        this.animations.push({
            cube,
            startTime: Date.now() + Math.random() * 500,
            duration: 1000,
            startPos: new THREE.Vector3().copy(startPos),
            endPos: new THREE.Vector3().copy(endPos),
            complete: false
        });
    }
    
    update(deltaTime) {
        // Update data flow animations
        const currentTime = Date.now();
        
        this.animations.forEach(anim => {
            if (anim.complete) return;
            
            const elapsed = currentTime - anim.startTime;
            
            if (elapsed < 0) {
                anim.cube.visible = false;
            } else if (elapsed > anim.duration) {
                this.remove(anim.cube);
                anim.complete = true;
            } else {
                anim.cube.visible = true;
                const progress = elapsed / anim.duration;
                const eased = this._easeInOutCubic(progress);
                
                anim.cube.position.lerpVectors(
                    anim.startPos,
                    anim.endPos,
                    eased
                );
                
                // Add arc
                anim.cube.position.y += Math.sin(progress * Math.PI) * 0.5;
                
                // Fade
                anim.cube.material.opacity = Math.sin(progress * Math.PI) * 0.8;
                
                // Rotate
                anim.cube.rotation.x += 0.05;
                anim.cube.rotation.y += 0.05;
            }
        });
        
        // Remove completed animations
        this.animations = this.animations.filter(anim => !anim.complete);
    }
    
    _easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
    
    async _playEnterTransition(transitionData) {
        // Fade in network
        const neurons = [
            ...this.neurons.input,
            ...this.neurons.hidden,
            ...this.neurons.output
        ];
        
        neurons.forEach(neuron => {
            neuron.mesh.material.opacity = 0;
        });
        
        return new Promise(resolve => {
            const duration = 1000;
            const startTime = Date.now();
            
            const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                neurons.forEach((neuron, i) => {
                    const delay = i / neurons.length;
                    const localProgress = Math.max(0, (progress - delay) / (1 - delay));
                    neuron.mesh.material.opacity = localProgress * 0.5;
                });
                
                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    resolve();
                }
            };
            
            animate();
        });
    }
}