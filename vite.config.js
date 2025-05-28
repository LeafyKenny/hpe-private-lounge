// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/hpe-private-lounge/', // Important for GitHub Pages
  plugins: [react()],
});
