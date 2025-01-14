// src/core/InputManager.js

export class InputManager {
    constructor() {
        // Normalized coordinates between -1 and 1
        this.position = { x: 0, y: 0 };
        
        // Raw screen coordinates
        this.screen = { x: 0, y: 0 };
        
        // Input state
        this.state = {
            isPressed: false,
            wasPressed: false,
            isDragging: false,
            dragStart: { x: 0, y: 0 },
            dragDelta: { x: 0, y: 0 }
        };
        
        // Track time for double-click and long press
        this.lastPressTime = 0;
        this.pressStartTime = 0;
        
        // Configuration
        this.config = {
            dragThreshold: 3, // Pixels before drag starts
            doubleClickTime: 300, // Ms between clicks
            longPressTime: 500 // Ms before long press
        };
    }

    initialize(domElement) {
        this.domElement = domElement;
        this.setupEventListeners();
    }

    setupEventListeners() {
        if (!this.domElement) return;

        this.domElement.addEventListener('mousemove', (e) => this.handleMouseMove(e));
        this.domElement.addEventListener('mousedown', (e) => this.handleMouseDown(e));
        this.domElement.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        this.domElement.addEventListener('mouseleave', () => this.handleMouseLeave());
        
        // Prevent default drag behavior
        this.domElement.addEventListener('dragstart', (e) => e.preventDefault());
    }

    handleMouseMove(event) {
        const rect = this.domElement.getBoundingClientRect();
        
        // Update raw screen coordinates
        this.screen.x = event.clientX - rect.left;
        this.screen.y = event.clientY - rect.top;
        
        // Update normalized coordinates (-1 to 1)
        this.position.x = (this.screen.x / rect.width) * 2 - 1;
        this.position.y = -(this.screen.y / rect.height) * 2 + 1;

        // Update drag state
        if (this.state.isPressed) {
            // Calculate drag delta
            this.state.dragDelta.x = this.screen.x - this.state.dragStart.x;
            this.state.dragDelta.y = this.screen.y - this.state.dragStart.y;
            
            // Check if drag has started
            if (!this.state.isDragging && 
                (Math.abs(this.state.dragDelta.x) > this.config.dragThreshold || 
                 Math.abs(this.state.dragDelta.y) > this.config.dragThreshold)) {
                this.state.isDragging = true;
            }
        }
    }

    handleMouseDown(event) {
        // Store previous press state
        this.state.wasPressed = this.state.isPressed;
        
        // Update current state
        this.state.isPressed = true;
        
        // Record press times
        const now = performance.now();
        this.lastPressTime = this.pressStartTime;
        this.pressStartTime = now;
        
        // Initialize drag tracking
        this.state.dragStart.x = this.screen.x;
        this.state.dragStart.y = this.screen.y;
        this.state.dragDelta.x = 0;
        this.state.dragDelta.y = 0;
        this.state.isDragging = false;
    }

    handleMouseUp(event) {
        this.state.wasPressed = true;
        this.state.isPressed = false;
        this.state.isDragging = false;
    }

    handleMouseLeave() {
        this.state.isPressed = false;
        this.state.isDragging = false;
    }

    getInputData() {
        const now = performance.now();
        
        return {
            // Normalized position (-1 to 1)
            position: { ...this.position },
            
            // Screen position (pixels)
            screen: { ...this.screen },
            
            // Input states
            isPressed: this.state.isPressed,
            wasPressed: this.state.wasPressed,
            isDragging: this.state.isDragging,
            
            // Drag information
            dragStart: { ...this.state.dragStart },
            dragDelta: { ...this.state.dragDelta },
            
            // Timing information
            isDoubleClick: (now - this.lastPressTime) < this.config.doubleClickTime,
            pressTime: this.state.isPressed ? now - this.pressStartTime : 0,
            isLongPress: this.state.isPressed && (now - this.pressStartTime) > this.config.longPressTime
        };
    }
}