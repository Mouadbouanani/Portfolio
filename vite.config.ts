import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,ttf}'],
      },
      manifest: {
        name: 'Mouad El Bouanani - Portfolio',
        short_name: 'Mouad Portfolio',
        description: 'Portfolio of Mouad El Bouanani, a Software Engineer and Full-Stack Developer',
        theme_color: '#00C2FF',
        background_color: '#0D1117',
        display: 'standalone',
        icons: [
          {
            src: 'mouad-pwa-icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'mouad-pwa-icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
    // Custom plugin to copy projects.json to dist
    {
      name: 'copy-projects-json',
      closeBundle() {
        const source = path.resolve(__dirname, 'public/projects.json');
        const dest = path.resolve(__dirname, 'dist/projects.json');

        if (fs.existsSync(source)) {
          fs.copyFileSync(source, dest);
          console.log(' Copied projects.json to dist folder');
        } else {
          console.warn('⚠ public/projects.json not found - create empty array');
          fs.writeFileSync(dest, '[]');
        }
      }
    }
  ],
  base: '/Portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})