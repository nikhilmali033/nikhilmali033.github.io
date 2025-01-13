// card.vert
precision highp float;

uniform float time;
uniform float hover;
uniform float selected;

varying vec2 vUv;
varying vec3 vPosition;
varying float vFresnel;

void main() {
    vUv = uv;
    vPosition = position;
    
    // Calculate position with slight hover animation
    vec3 pos = position;
    
    // Add subtle floating animation when hovered or selected
    if (hover > 0.0 || selected > 0.0) {
        float floatAnim = sin(time * 2.0) * 0.02 * (hover + selected);
        pos.y += floatAnim;
    }
    
    // For 2D cards, we can simplify the fresnel effect
    // Calculate a basic edge fade instead
    vec2 centered = uv * 2.0 - 1.0;
    vFresnel = 1.0 - length(centered);
    vFresnel = pow(vFresnel, 2.0);
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}