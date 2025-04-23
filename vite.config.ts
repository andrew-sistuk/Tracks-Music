import { defineConfig } from 'vite';
import path from 'path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000, // будь-який бажаний порт
  },
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      pages: '/src/pages',
      components: '/src/components',
      containers: '/src/layouts',
      myRedux: '/src/myRedux',
      helpers: '/src/helpers',
      assets: '/src/assets',
      types: '/src/types',
      '@': path.resolve(__dirname, './src'),
    },
  },
});
