// card.frag
precision highp float;

varying vec3 vNormal;
varying vec2 vUv;

void main() {
    // Create color from normal direction
    vec3 baseColor = vec3(0.1, 0.2, 0.3);
    vec3 tiltColor = vec3(
        abs(vNormal.x), // Red increases with x tilt
        abs(vNormal.y), // Green increases with y tilt
        abs(vNormal.z)  // Blue increases with z alignment
    );
    
    // Add a subtle edge effect
    float edge = smoothstep(0.0, 0.1, vUv.x) * 
                 smoothstep(0.0, 0.1, vUv.y) *
                 smoothstep(0.0, 0.1, 1.0 - vUv.x) *
                 smoothstep(0.0, 0.1, 1.0 - vUv.y);
                 
    gl_FragColor = vec4(mix(baseColor, tiltColor, 0.8) * edge, 1.0);
}