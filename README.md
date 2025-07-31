#TODO alter the physics body annihilation from animateText to allow for physics based generation to occur in the cannon physics world at the same time as long processes (like card selection)
for duplication, simply animateText at a call for card selection:
case 'particles':
    console.log('Particle scene not implemented yet');
    sceneManager.animateText("Coming Soon!");  // <--
    break;
under main ~200 method assignment
ts pmo fr

change scenemanager to not have config control, we don't need to merge here

make cards not get stuck when selected and hovered and moved off