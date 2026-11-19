import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Set VITE_SITE_URL in Vercel (Settings > Environment Variables) to your real https URL.
export const SITE_URL = (process.env.VITE_SITE_URL || 'https://oms-bags-footwear-rkcy.vercel.app').replace(/\/$/, '')
export default defineConfig({
  plugins: [react(), { name: 'site-url', transformIndexHtml: h => h.replaceAll('__SITE_URL__', SITE_URL) }]
})
