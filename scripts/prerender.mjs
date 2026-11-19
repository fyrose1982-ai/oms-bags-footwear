// Runs after `vite build`: renders the React app to static HTML inside dist/index.html
// so Google (and anything without JavaScript) sees the real content.
import fs from 'node:fs'
const SITE = (process.env.VITE_SITE_URL || 'https://YOUR-DOMAIN.vercel.app').replace(/\/$/, '')
// Uses the production SSR bundle (built by `vite build --ssr`) so image URLs are the hashed /assets/... paths.
const { render } = await import('../.ssr/entry-server.js')
const html = fs.readFileSync('dist/index.html', 'utf8')
if (!html.includes('<!--app-html-->')) throw new Error('Placeholder missing in dist/index.html')
fs.writeFileSync('dist/index.html', html.replace('<!--app-html-->', render()))
for (const f of ['sitemap.xml', 'robots.txt']) {
  const p = `dist/${f}`
  fs.writeFileSync(p, fs.readFileSync(p, 'utf8').replaceAll('https://YOUR-DOMAIN.vercel.app', SITE))
}
fs.rmSync('.ssr', { recursive: true, force: true })
console.log('Prerendered dist/index.html for', SITE)
