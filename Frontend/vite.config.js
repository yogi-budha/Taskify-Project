import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),

  ]
})

  // VitePWA({
  //     registerType: 'autoUpdate',
  //     workbox: {
  //       globDirectory: 'dist', 
  //       globPatterns: ['**/*.{js,css,html,wasm}'], 
  //       globIgnores: ['sw.js', 'workbox-*.js'], 
  //     },
  //       manifest: {
  //       name: 'Taskify',
  //       short_name: 'Taskify',
  //       description: 'Taskify is a simple task manager app that helps you manage your tasks and stay organized.',
  //       theme_color: '#ffffff',
  //       icons: [
  //          {
  //     "src": "/pwa-192x192.png",
  //     "sizes": "192x192",
  //     "type": "image/png",
  //     "purpose": "any"
  //   },
  //   {
  //     "src": "/pwa-512x512.png",
  //     "sizes": "512x512",
  //     "type": "image/png",
  //     "purpose": "any"
  //   },
  //   {
  //     "src": "/pwa-maskable-192x192.png",
  //     "sizes": "192x192",
  //     "type": "image/png",
  //     "purpose": "maskable"
  //   },
  //   {
  //     "src": "/pwa-maskable-512x512.png",
  //     "sizes": "512x512",
  //     "type": "image/png",
  //     "purpose": "maskable"
  //   }
  //       ],
  //       "screenshots": [
  // {
  //   "src": "/screenshots/mob.png",
  //   "sizes": "1280x720",
  //   "type": "image/png",
  //   "form_factor": "wide"
  // },
  //       ]
  //     }
  //   })