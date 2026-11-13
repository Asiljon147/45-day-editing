import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({ plugins: [react(), VitePWA({ registerType: 'autoUpdate', includeAssets: ['cutcraft.svg'], manifest: { name: 'CUTCRAFT', short_name: 'CUTCRAFT', description: '45-day Premiere Pro training workspace', theme_color: '#101114', background_color: '#101114', display: 'standalone', start_url: '/', icons: [{ src: '/cutcraft.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any maskable' }] } })] })
