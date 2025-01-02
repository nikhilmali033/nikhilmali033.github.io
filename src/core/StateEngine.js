// src/core/StateEngine.js
export class StateEngine {
    constructor(sceneEngine) {
        this.sceneEngine = sceneEngine;
        
        // Define UI elements with their callbacks
        this.button1 = {
            clicked: () => this.handleButton1Click(),
            hover: (isHovered) => this.handleButton1Hover(isHovered)
        };

        console.log('📦 StateEngine created');
    }

    initialize() {
        // Create test button
        this.sceneEngine.createButton({
            id: 'button1',
            position: [0, 0],
            color: [0.2, 0.8, 1.0],
            callbacks: this.button1
        });
    }

    handleButton1Click() {
        console.log('Button 1 clicked!');
        // Add any button-specific logic here
    }

    handleButton1Hover(isHovered) {
        console.log('Button 1 hover:', isHovered);
        // Add any hover-specific logic here
    }
}