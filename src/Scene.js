import { Scene } from './Scene';

function init() {
    const container = document.getElementById('app');
    if (!container) {
        console.error('No container element found');
        return;
    }

    const scene = new Scene(container);
    scene.start();
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
//testingcomment