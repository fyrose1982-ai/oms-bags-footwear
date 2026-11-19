# Google indexing guide

1. Deploy on Vercel (see VERCEL-DEPLOYMENT-GUIDE.md).
2. Open the live site and confirm it loads over HTTPS.
3. Open `https://YOUR-URL/sitemap.xml` – it should show XML.
4. Open `https://YOUR-URL/robots.txt` – it should show text.
5. Go to https://search.google.com/search-console/
6. Add a property: **URL prefix** for HTML-tag verification, or **Domain** for DNS verification.
7. Verify: for HTML tag, paste Google's meta tag into `index.html` (marked spot), redeploy, click Verify.
8. Open **Sitemaps**.
9. Submit `sitemap.xml`.
10. Use **URL Inspection** on the homepage.
11. Click **Request Indexing**.
12. Check the indexing status in Search Console over the following days.

Submitting a sitemap or requesting indexing does not guarantee fast or certain indexing. Also claim and update the Google Business Profile (it still lists the old number 098846 09304; change it to 9884609304).
