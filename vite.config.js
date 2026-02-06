import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'prompt',
      includeAssets: ['icon-192.png', 'icon-512.png'],
      manifest: {
        name: '打包清單',
        short_name: '打包清單',
        description: '出門前確認隨身物品的清單工具',
        theme_color: '#4F46E5',
        background_color: '#F8FAFC',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '.',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/.*firebasedatabase\.app/,
            handler: 'NetworkOnly'
          },
          {
            urlPattern: /^https:\/\/.*googleapis\.com/,
            handler: 'NetworkOnly'
          }
        ]
      }
    })
  ],
  server: {
    allowedHosts: ['.trycloudflare.com']
  },
  base: '/packing-checklist/',
  build: {
    outDir: 'docs',
    emptyDirFirst: true
  }
})
