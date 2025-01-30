import { initScene, cleanup } from './card-scene';

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('app');
    if (container) {
        initScene(container);
    }
});

// Optional: cleanup on page unload
window.addEventListener('unload', cleanup);