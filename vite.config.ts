import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
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