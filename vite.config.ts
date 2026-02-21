import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr(), visualizer({ open: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;

          if (id.includes('react')) return 'react-core';
          if (id.includes('react-router')) return 'router';
          if (id.includes('@tanstack')) return 'tanstack';
          if (id.includes('react-hook-form') || id.includes('@hookform'))
            return 'forms';
          if (
            id.includes('@base-ui') ||
            id.includes('radix-ui') ||
            id.includes('vaul') ||
            id.includes('cmdk')
          )
            return 'ui-system';
          if (id.includes('zod')) return 'validation';
          if (id.includes('date-fns')) return 'date-utils';
          if (id.includes('lucide-react')) return 'icons';

          return 'vendor';
        },
      },
    },
  },
});
