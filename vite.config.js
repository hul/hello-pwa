import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/hello-pwa/',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Moja Aplikacja PWA',
        short_name: 'MojaApp',
        start_url: '/hello-pwa/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#4DBA87',
        icons: [
          {
            src: 'icons/web-app-manifest-192x192',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/web-app-manifest-512x512',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      // Opcje Workbox - w jaki sposób pliki będą cache'owane
      workbox: {
        // W zależności od potrzeb możesz tu ustawić strategie cache
      }
    })
  ],
  // (Opcjonalnie) Dodatkowe opcje Vite
})
