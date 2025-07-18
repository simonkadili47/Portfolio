import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this is set correctly
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
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  preview: {
    port: 3000,
  },
});