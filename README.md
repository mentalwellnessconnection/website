# Mental Wellness Connection — Website

A production-ready, static, accessible, SEO-optimized website for Mental Wellness Connection (MWC), built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript. No frameworks, build tools, or backend required.

## Project Structure

```
Mental-Wellness-Connection/
├── index.html
├── about.html
├── programs.html
├── get-help.html
├── provider-partners.html
├── internships.html
├── volunteer.html
├── donate.html
├── resources.html
├── contact.html
├── faq.html
├── privacy.html
├── manifest.json
├── robots.txt
├── sitemap.xml
├── css/
│   ├── style.css
│   └── animations.css
├── js/
│   ├── main.js
│   └── forms.js
├── partials/
│   ├── nav.html          (shared navigation, injected via fetch)
│   └── footer.html       (shared footer, injected via fetch)
└── images/
    ├── icons/favicon.svg (placeholder mark — swap for your logo)
    └── assets/           (add photography here)
```

Nav and footer live in one place (`partials/`) and are injected into every page by `js/main.js`, so there's no duplicated markup to maintain across 12 pages.

---

## 1. Before You Launch — Required Steps

### A. Add your logo and photography
The site currently uses styled placeholder blocks (dashed borders, labeled) everywhere a real photo or logo belongs, so the layout is fully visible without real assets. Once you upload files:

1. Drop images into `images/assets/`
2. Replace each `<div class="hero-image-slot">` / `<div class="img-slot">` with an `<img>` tag, e.g.:
   ```html
   <img src="images/assets/hero-counseling-session.jpg" alt="A counselor and client in a warm, private counseling session" class="rounded-xl w-100" loading="lazy">
   ```
3. Replace `images/icons/favicon.svg` with your real logo mark (SVG preferred), and update the `<span class="brand-mark">` in `partials/nav.html` if you have a horizontal logo lockup instead.

**Suggested image list:**

| Image | Suggested dimensions | Used on |
|---|---|---|
| Homepage hero photo | 1200×900px | index.html |
| "Why We Exist" photo | 1000×800px | index.html |
| Volunteer event photo | 900×700px | index.html |
| Founder / team photo | 1000×900px | about.html |
| Counseling session photo | 900×700px | programs.html, get-help.html |
| Supervision / training photo | 900×700px | programs.html, internships.html |
| Provider network / clinic photo | 900×700px | programs.html |
| Community outreach photo | 900×700px | programs.html |
| Open Graph share image | 1200×630px | all pages (`og:image`) |
| Favicon / logo mark | SVG, square | all pages |
| Partner & university logos | 200×80px, transparent PNG/SVG | index.html, resources.html, internships.html |

### B. Build and connect your Google Forms
Every form on the site (Get Help, Provider Partners, Internships, Volunteer, Donate, Contact) is a placeholder `<iframe>`:

```html
<iframe class="form-embed-frame" src="PASTE_GOOGLE_FORM_EMBED_URL_HERE" ...>
```

To connect a real form under `info@mentalwellnessconnection.com`:
1. Build the form at [forms.google.com](https://forms.google.com)
2. Click **Send** → the **Embed** tab (`<>`) → copy the URL inside `src="..."`
3. Replace `PASTE_GOOGLE_FORM_EMBED_URL_HERE` in that page's `<iframe src="...">` with the copied URL

No JavaScript changes are needed — `js/forms.js` automatically hides the placeholder notice once a real URL is in place.

### C. Update the Google Map
`contact.html` has a placeholder map block. Once your office address is finalized, get an embed `<iframe>` from Google Maps ("Share" → "Embed a map") and drop it into the marked section.

### D. Update domain references
`index.html` (JSON-LD), all `<link rel="canonical">` tags, `og:url` tags, and `sitemap.xml` currently reference `https://www.mentalwellnessconnection.org/`. Update these to your actual domain once it's live.

### E. Legal review
`privacy.html` is a starting framework, not legal advice — have it reviewed by counsel before publishing.

---

## 2. Deployment

### GitHub Pages (primary target)
1. Create a new GitHub repository, e.g. `mental-wellness-connection`
2. Push this folder's contents to the repository root (or to a `/docs` folder if you prefer)
3. In the repo: **Settings → Pages → Source** → select the branch (`main`) and folder (`/root` or `/docs`)
4. GitHub will publish at `https://<username>.github.io/mental-wellness-connection/`
5. To use a custom domain (e.g. `mentalwellnessconnection.org`):
   - Add a file named `CNAME` at the repo root containing just your domain, e.g. `mentalwellnessconnection.org`
   - Add the DNS records GitHub specifies (A records for an apex domain, or a CNAME record for a subdomain) at your domain registrar

```bash
git init
git add .
git commit -m "Initial site launch"
git branch -M main
git remote add origin https://github.com/<your-username>/mental-wellness-connection.git
git push -u origin main
```

### Firebase Hosting (alternative)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting   # choose this folder as your public directory
firebase deploy
```

### Cloudflare Pages (alternative)
1. Push the project to a GitHub repository (as above)
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**
3. Select the repository; leave the build command blank and set the output directory to `/` (or wherever `index.html` lives)
4. Deploy

---

## 3. Local Preview

Because nav/footer are injected via `fetch()`, opening `index.html` directly from your file system (`file://...`) will fail silently in most browsers due to CORS restrictions on local files. Serve the folder locally instead:

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

---

## 4. Accessibility & SEO Notes

- Every page includes a skip-to-content link, visible focus states, and `prefers-reduced-motion` support.
- Heading hierarchy is consistent (one `<h1>` per page, nested `<h2>`/`<h3>`).
- All interactive form embeds include a descriptive `title` attribute; add real `alt` text to every photo you add.
- Each page has a unique title tag, meta description, Open Graph tags, and canonical URL. `index.html` and `faq.html` include JSON-LD structured data (Organization and FAQPage schema).
- Run a Lighthouse audit after adding real images (compressed, appropriately sized) to confirm you're hitting the 95+ performance target — large uncompressed photos are the most common thing that drags this down.

---

## 5. What to Send Claude Next (optional)

If you'd like a follow-up pass, it's most efficient to provide:
- Final logo files (SVG + PNG) and brand photography
- Real testimonials/quotes with permission to publish
- Verified impact statistics (once available)
- Your finalized Google Form embed URLs
- Final office address for the map embed
