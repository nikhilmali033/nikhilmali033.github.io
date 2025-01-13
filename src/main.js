// src/main.js
import { StateEngine } from './core/StateEngine';

async function init() {
    const container = document.getElementById('app');
    if (!container) {
        throw new Error('No container element found');
    }

    const stateEngine = new StateEngine(container);
    await stateEngine.initialize();
    stateEngine.createGameObjects();

    // Start game loop
    function animate(time) {
        stateEngine.update(time);
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

init().catch(console.error);