import react from '@vitejs/plugin-react';
import path from 'path'; // 👈 importa path para manejar rutas
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👈 define el alias "@"
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
})
