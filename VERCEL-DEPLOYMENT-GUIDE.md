# Vercel deployment guide (Windows, beginner)

1. **Vercel account**: go to vercel.com > Sign Up > "Continue with GitHub" (create a GitHub account first at github.com if needed).
2. **Upload to GitHub**: install Git for Windows and GitHub Desktop. In GitHub Desktop: File > Add local repository > choose this folder > "Create repository" > Commit > Publish repository (a private repo is fine).
3. **Connect GitHub to Vercel**: in Vercel, Add New > Project > "Adjust GitHub App Permissions" and allow the repository.
4. **Import**: click Import next to the repository.
5. **Build settings**: Framework Preset **Vite**; Build Command `npm run build`; Output Directory `dist`; Install Command `npm install`. Add environment variable `VITE_SITE_URL` (your final https URL; if you don't know it yet, deploy once, then set it).
6. **Deploy**: click Deploy and wait for the build.
7. **Production URL**: shown on the success screen (e.g. `https://project-name.vercel.app`). Use the production domain, not a preview URL with random characters.
8. **Check sitemap**: open `https://YOUR-URL/sitemap.xml`.
9. **Check robots**: open `https://YOUR-URL/robots.txt`.
10. **Custom domain later**: Project > Settings > Domains > Add, then follow the DNS instructions at your domain registrar.
11. **Update SEO URLs**: change `VITE_SITE_URL` to the custom domain, edit `<loc>` in `public/sitemap.xml` and the Sitemap line in `public/robots.txt`, then redeploy.
12. **Redeploy after changes**: commit and push in GitHub Desktop; Vercel redeploys automatically.

`vercel.json` only sets the Vite build options. This is a one-page site, so no rewrite to `index.html` is needed and `sitemap.xml` / `robots.txt` are served as static files. If you add routes later, use a rewrite that excludes real files.
