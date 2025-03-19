// vite.config.js
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';
import { resolve } from 'path';

export default defineConfig({
    // Use the repository name as the base path for GitHub Pages
    // Since your repository is named "username.github.io", use "/"
    base: '/',
    
    // Define build output directory
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: false,
        // Ensure assets are properly copied
        assetsInlineLimit: 0, // Don't inline any assets as base64
    },
    
    // Configure plugins
    plugins: [
        glsl({
            include: [
                '**/*.glsl',
                '**/*.vert',
                '**/*.frag'
            ],
            defaultExtension: 'glsl',
            warnDuplicatedImports: true,
            compress: false
        }),
    ],
    
    // Server configuration for development
    server: {
        host: true,
        port: 3000
    },
    
    // Handle static assets explicitly
    publicDir: 'public', // This directory will be copied as-is to dist
    
    // Configure asset resolution
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    }
});