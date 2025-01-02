// vertex shader
varying vec2 vUv;
varying vec3 vPosition;

void main() {
    // Using position, modelMatrix, viewMatrix, and projectionMatrix directly
    // since they're provided by Three.js ShaderMaterial
    vec4 modelPos = modelMatrix * vec4(position, 1.0);
    vec4 viewPos = viewMatrix * modelPos;
    gl_Position = projectionMatrix * viewPos;
    
    // Using uv directly since it's provided by Three.js
    vUv = uv;
    vPosition = position;
}