// fragment shader
uniform float time;
uniform vec3 glowColor;
uniform float glowIntensity;
uniform float pulseSpeed;

varying vec2 vUv;
varying vec3 vPosition;

void main() {
    float pulse = (sin(time * pulseSpeed) + 1.0) * 0.5;
    float dist = length(vUv - vec2(0.5));
    float glow = smoothstep(0.5, 0.1, dist) * glowIntensity;
    glow = glow * (0.8 + pulse * 0.2);
    
    vec3 color = glowColor * glow;
    float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233))) * 43758.5453);
    color = color + noise * 0.05;
    
    gl_FragColor = vec4(color, glow);
}