import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'



export default defineConfig({
  plugins: [vue(), tailwindcss(),   VitePWA({
      registerType: 'autoUpdate',
      workbox: {
            maximumFileSizeToCacheInBytes: 50 * 1024 * 1024,
              globPatterns: ['**/*.{js,css,html}'],
      },
      manifest: {
        name: 'Egyptify',
        short_name: 'Travel',
        description: 'A modern travel web application that allows users to explore destinations, view detailed information, check reviews, and book experiences. The platform features an intuitive interface, stunning visuals, and responsive design for a seamless experience across devices. Whether planning a family vacation, a honeymoon, or an adventure trip, users can easily find the perfect package and discover must-visit places with interactive maps and curated recommendations.',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icon/android-launchericon-192-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon/android-launchericon-512-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })],
})

