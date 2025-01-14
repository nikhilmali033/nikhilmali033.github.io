// card.frag
uniform vec3 normal;
varying vec3 vNormal;
varying vec2 vUv;

void main() {
    // Create an interesting pattern based on UV and normal
    float pattern = sin(vUv.x * 10.0) * cos(vUv.y * 10.0) * 0.5 + 0.5;
    
    // Create color from normal direction
    vec3 baseColor = vec3(0.1, 0.2, 0.3);  // Dark base
    vec3 tiltColor = vec3(
        abs(vNormal.x), // Red increases with x tilt
        abs(vNormal.y), // Green increases with y tilt
        abs(vNormal.z)  // Blue increases with z alignment
    );
    
    // Mix pattern with normal-based color
    vec3 finalColor = mix(baseColor, tiltColor, pattern);
    
    // Add a subtle edge effect based on UV coordinates
    float edge = smoothstep(0.0, 0.1, vUv.x) * 
                 smoothstep(0.0, 0.1, vUv.y) *
                 smoothstep(0.0, 0.1, 1.0 - vUv.x) *
                 smoothstep(0.0, 0.1, 1.0 - vUv.y);
                 
    gl_FragColor = vec4(finalColor * edge, 1.0);
}