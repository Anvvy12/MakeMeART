import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
      svgrOptions: {
        ref: true,
      },
    }),
  ],
  publicDir: path.resolve(__dirname, './public'),
  build: {
    outDir: path.resolve(__dirname, './build'),
  },
  resolve: {
    alias: {
      styles: path.resolve(__dirname, './src/styles'),
      ui: path.resolve(__dirname, './src/ui'),
    },
  },

  server: {
    port: 3000,
  },
});
