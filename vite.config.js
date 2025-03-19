// vite.config.js
import { defineConfig } from 'vite';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
    base: '/nikhilmali033.github.io/', // Updated to match your repository name
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
    ]
});