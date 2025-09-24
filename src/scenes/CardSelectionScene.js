import * as THREE from 'three';
import BaseScene from './BaseScene';
import InteractiveCard from '../InteractiveCard';
import ConfirmButton from '../ConfirmButton';
import TextPhysics from '../TextPhysics';
import * as CANNON from 'cannon';

/**
 * Card selection scene - the main menu
 * Now acts as a manager, delegating interaction logic to the interactive objects themselves.
 */
export default class CardSelectionScene extends BaseScene {
    constructor(sceneController, config) {
        super(sceneController, {
            camera: {
                position: new THREE.Vector3(0, 0, 8),
                rotation: new THREE.Euler(0, 0, 0),
                lookAt: new THREE.Vector3(0, 0, 0),
                transitionDuration: 1000
            },
            ...config
        });

        this.cards = new Map();
        this.buttons = new Map();
        this.selectedCards = new Set();
        this.interactiveObjects = [];

        this.world = null;
        this.textPhysics = null;

        this.draggedObject = null;
        this.hoveredObject = null;

        // --- DEBUG ---
        this._debug = true;
    }

    async _createSceneContent() {
        if (this._debug) console.log('Creating card scene content...');

        this._initPhysics();

        const groundGeometry = new THREE.PlaneGeometry(20, 20);
        const groundMaterial = new THREE.ShadowMaterial({ opacity: 0.5 });
        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
        groundMesh.rotation.x = -Math.PI / 2;
        groundMesh.position.y = -2;
        groundMesh.receiveShadow = true;
        this.add(groundMesh);

        // This is a placeholder for loading textures.
        // In a real app, you would load an actual texture.
        const textureLoader = new THREE.TextureLoader();
        const placeholderTexture = textureLoader.load(
            'https://placehold.co/200x300/000000/FFFFFF?text=Card',
            (texture) => {
                if (this._debug) console.log('Placeholder texture loaded.');
                // Placeholder for card creation after texture loads
                this._createCards(texture);
            },
            undefined,
            (error) => {
                console.error('An error occurred loading the texture:', error);
            }
        );

        // Create the "Confirm" button
        this.confirmButton = new ConfirmButton({
            position: { x: 0, y: -2, z: 0.1 },
            onClick: this._onConfirm.bind(this)
        });
        this.add(this.confirmButton);
        this.buttons.set('confirm', this.confirmButton);
        this.interactiveObjects.push(this.confirmButton);
    }
    
    _createCards(texture) {
        const cardConfigs = [
            { id: 'card1', position: { x: -3, y: 0, z: 0 }, data: { name: 'Card 1', value: 'scene1' } },
            { id: 'card2', position: { x: 0, y: 0, z: 0 }, data: { name: 'Card 2', value: 'scene2' } },
            { id: 'card3', position: { x: 3, y: 0, z: 0 }, data: { name: 'Card 3', value: 'scene3' } }
        ];

        cardConfigs.forEach(config => {
            const card = new InteractiveCard({
                texture: texture,
                position: config.position,
                dragBehavior: { enabled: true, returnSpeed: 0.1, dampingFactor: 0.95 },
                selectionBehavior: { enabled: true, onSelect: this._onCardSelected.bind(this), onDeselect: this._onCardDeselected.bind(this) },
                hoverBehavior: { enabled: true }
            });
            this.add(card);
            this.cards.set(config.id, card);
            this.interactiveObjects.push(card);
        });
    }

    _initPhysics() {
        this.world = new CANNON.World();
        this.world.gravity.set(0, -9.82, 0); // Standard gravity
        this.world.broadphase = new CANNON.NaiveBroadphase();
    }

    /**
     * The scene's update loop. Calls update on all managed objects.
     */
    update(deltaTime) {
        if (!this.isActive) return;

        // Update physics world
        if (this.world) {
            this.world.step(1 / 60, deltaTime, 3);
        }

        // Update all interactive objects (cards, buttons, etc.)
        this.interactiveObjects.forEach(obj => obj.update(deltaTime));
    }
    
    /**
     * Scene-level handler for a card being selected.
     * This is called by the InteractiveCard itself.
     * @param {InteractiveCard} card - The card that was just selected.
     */
    _onCardSelected(card) {
        if (this._debug) console.log(`Card selected: ${card.uuid}`);
        
        // Deselect all other cards
        this.cards.forEach(c => {
            if (c !== card && c._state.isSelected) {
                c.toggleSelected();
            }
        });

        // Clear and add the new selected card
        this.selectedCards.clear();
        this.selectedCards.add(card);
        
        this.confirmButton.enable();
    }
    
    /**
     * Scene-level handler for a card being deselected.
     * This is called by the InteractiveCard itself.
     * @param {InteractiveCard} card - The card that was just deselected.
     */
    _onCardDeselected(card) {
        if (this._debug) console.log(`Card deselected: ${card.uuid}`);
        this.selectedCards.delete(card);
        
        if (this.selectedCards.size === 0) {
            this.confirmButton.disable();
        }
    }

    _onConfirm() {
        if (this.selectedCards.size > 0) {
            const selectedCard = Array.from(this.selectedCards)[0];
            const cardData = selectedCard.cardData; // Assuming cardData exists on the card
            if (cardData && cardData.value) {
                if (this._debug) console.log(`Confirming selection. Transitioning to scene: ${cardData.value}`);
                // this.sceneController.transitionTo(cardData.value);
                // Placeholder: For now, we'll just log the action
                console.log(`Transitioning to scene: ${cardData.value}`);
            } else {
                if (this._debug) console.warn('Selected card has no associated data for scene transition.');
            }
        }
    }

    /**
     * Find the top-most interactive object under the pointer.
     * The raycaster is passed from the SceneController's global resources.
     * @param {THREE.Raycaster} raycaster
     * @returns {InteractiveObject|ConfirmButton|null}
     */
    _getInteractiveObjectAtPointer(raycaster) {
        const intersects = raycaster.intersectObjects(this.interactiveObjects.map(obj => obj.interactiveMesh));

        if (intersects.length === 0) return null;

        const sorted = [...intersects].sort((a, b) => a.distance - b.distance);

        // Find the interactive object corresponding to the intersected mesh
        const topmostIntersect = sorted[0];
        return this._findParentObject(topmostIntersect.object);
    }

    _findParentObject(mesh) {
        let current = mesh;
        while(current) {
            if (this.interactiveObjects.includes(current)) {
                return current;
            }
            current = current.parent;
        }
        return null;
    }
}