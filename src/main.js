// src/main.js
import { StateEngine } from './core/StateEngine';

// In main.js
async function init() {
    const container = document.getElementById('app');
    const stateEngine = new StateEngine(container);
    
    await stateEngine.initialize();
    stateEngine.createGameObjects();
    
    function animate(time) {
        stateEngine.update(time);
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

init().catch(console.error);