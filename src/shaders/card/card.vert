// card.vert
precision highp float;

uniform vec3 tiltNormal;  // renamed from 'normal' to avoid conflict

varying vec3 vNormal;
varying vec2 vUv;

void main() {
    vNormal = tiltNormal;  // pass through the tilt normal
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}