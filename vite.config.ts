import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      // --- HEMOS QUITADO LA SECCIÓN 'server' PARA QUE SEA AUTOMÁTICO ---
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
          manifest: {
            name: 'Zona FIBA - Juez Virtual',
            short_name: 'Zona FIBA',
            description: 'Asistente arbitral y trivia de reglamento FIBA',
            theme_color: '#020617',
            background_color: '#020617',
            display: 'standalone',
            orientation: 'portrait',
            icons: [
              {
                src: 'https://i.postimg.cc/hPLX3zVD/download.jpg',
                sizes: '192x192',
                type: 'image/jpeg'
              },
              {
                src: 'https://i.postimg.cc/hPLX3zVD/download.jpg',
                sizes: '512x512',
                type: 'image/jpeg'
              },
              {
                src: 'https://i.postimg.cc/hPLX3zVD/download.jpg',
                sizes: '512x512',
                type: 'image/jpeg',
                purpose: 'any maskable'
              }
            ]
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});