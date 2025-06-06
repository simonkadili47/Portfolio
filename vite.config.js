import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    force: true,
    include: ['react', 'react-dom', 'react-type-animation', 'framer-motion'], 
  },
  server: {
    watch: {
      usePolling: true,
    },
    hmr: {
      timeout: 60000,
    },
  },
});