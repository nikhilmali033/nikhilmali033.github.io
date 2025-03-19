// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
    base: '/nikhilmali033.github.io/',
    build: {
        // Ensure assets are copied during build
        assetsInlineLimit: 0
    }
});