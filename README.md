# O.M.S Bags & Footwear – React + Vite website (Vercel)

## Run locally
1. Install Node.js LTS from nodejs.org.
2. In this folder: `npm install`
3. `npm run dev` → open the address shown (usually http://localhost:5173)

## Production build
`npm run build` – builds into `dist/` and then pre-renders the real page content into `dist/index.html`
(so Google sees the text without running JavaScript). Check that `dist/` has `index.html`, `sitemap.xml`, `robots.txt`.

## Set your production URL (one place)
In Vercel: Project > Settings > Environment Variables > add `VITE_SITE_URL` = `https://your-real-url` (no trailing slash), then redeploy.
This fills the canonical URL, Open Graph URL/image, JSON-LD URL, `sitemap.xml` and the `robots.txt` sitemap line in the build.
For local checking: `VITE_SITE_URL=https://your-real-url npm run build` (Windows PowerShell: `$env:VITE_SITE_URL="https://your-real-url"; npm run build`).
Also edit the `<loc>` in `public/sitemap.xml` and the Sitemap line in `public/robots.txt` if you want the source files correct too, and update `<lastmod>` when you change the site.

## To-do before going live
- Add the shop's own photos (WebP, descriptive names such as `school-bags-tambaram.webp`) to `src/assets/` and use them in `src/App.jsx`. The site currently uses icon panels because no usable photos were supplied.
- Add `public/og-image.jpg` (1200x630) for social sharing; it is referenced by the Open Graph tags.
- Google Search Console tag: uncomment and fill the line in `index.html`.
- Verify opening hours, then add them to the page/JSON-LD only if confirmed.

## Verify after deploy
Open `/sitemap.xml` (XML shows) and `/robots.txt` (plain text shows). Neither should show the website page.
