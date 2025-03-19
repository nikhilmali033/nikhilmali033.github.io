// vite.config.js
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
    // Use the repository name as the base path for GitHub Pages
    // If your repository is named "username.github.io", then use "/"
    // If your repository is named anything else, use "/repository-name/"
    base: '/nikhilmali033.github.io/',
    
    // Define build output directory
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        sourcemap: false
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
        })
    ],
    
    // Server configuration for development
    server: {
        host: true,
        port: 3000
    }
});