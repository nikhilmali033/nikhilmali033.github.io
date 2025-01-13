// card.frag
precision highp float;

uniform float time;
uniform float hover;
uniform float selected;
uniform vec3 highlightColor;
uniform vec3 cardColor;

varying vec2 vUv;
varying vec3 vPosition;
varying float vFresnel;

// Noise function for texture
float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main() {
    // Create base color with gradient
    vec3 baseColor = mix(cardColor, cardColor * 0.8, vUv.y);
    
    // Add subtle noise texture
    float noiseValue = noise(vUv * 50.0 + time * 0.1) * 0.05;
    baseColor += vec3(noiseValue);
    
    // Create highlight effect for hover and selection
    float highlight = 0.0;
    if (hover > 0.0 || selected > 0.0) {
        // Animated highlight sweep
        float sweep = mod(time * 2.0 + vUv.x * 2.0, 4.0) - 2.0;
        float sweepHighlight = smoothstep(0.5, 0.0, abs(sweep));
        
        // Edge highlight based on fresnel
        float edgeHighlight = smoothstep(0.2, 1.0, vFresnel);
        
        highlight = max(sweepHighlight * 0.3, edgeHighlight) * (hover + selected);
    }
    
    // Combine all effects
    vec3 finalColor = mix(baseColor, highlightColor, highlight);
    
    // Add edge glow
    finalColor += highlightColor * (1.0 - vFresnel) * 0.2;
    
    // Calculate alpha for soft edges
    float alpha = smoothstep(0.0, 0.1, 1.0 - length(vUv * 2.0 - 1.0));
    
    gl_FragColor = vec4(finalColor, alpha);
}