// texture.frag
uniform sampler2D mainTexture;
uniform float opacity;
uniform vec2 textureScale;
uniform vec2 textureOffset;
uniform float time;

varying vec2 vUv;

void main() {
    // Scale and offset UV coordinates
    vec2 scaledUv = (vUv - 0.5) * textureScale + 0.5;
    vec2 finalUv = scaledUv + textureOffset;
    
    // Sample texture with transformed UVs
    vec4 texColor = texture2D(mainTexture, finalUv);
    
    // Apply opacity
    gl_FragColor = vec4(texColor.rgb, texColor.a * opacity);
}