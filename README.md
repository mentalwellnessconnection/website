# Mental Wellness Connection — Website

A production-ready, static, accessible, SEO-optimized website for Mental Wellness Connection (MWC), built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript. No frameworks, build tools, or backend required.

**New to editing this site?** See **[EDITING-GUIDE.md](./EDITING-GUIDE.md)** for step-by-step, non-developer instructions on changing wording, photos, the logo, adding pages, and publishing through GitHub Desktop. This README is the technical overview.

---

## What Kind of Website Is This?

This website is a **static HTML website** hosted through **GitHub Pages**. That means:

- There is no database and no server-side code (no PHP, no Node, no WordPress admin panel).
- Every page is a plain `.html` file that a web browser can read directly.
- Changes are made by editing these files with a text/code editor — this project is set up for **Visual Studio Code**.
- Changes are published to the live site by committing and pushing them to GitHub — this project is set up for **GitHub Desktop**, so no command-line experience is required.
- GitHub Pages automatically rebuilds the live site within a minute or two of every push.

This setup keeps hosting costs at $0 and makes the site easy to maintain long-term without needing a developer for routine content updates.

---

## Project Structure

```
Mental-Wellness-Connection/
├── index.html
├── about.html
├── our-focus-areas.html
├── get-help.html
├── provider-partners.html
├── internships.html
├── volunteer.html
├── events.html
├── donate.html
├── resources.html
├── contact.html
├── faq.html
├── privacy.html
├── manifest.json
├── robots.txt
├── sitemap.xml
├── EDITING-GUIDE.md
├── css/
│   ├── style.css          (brand colors, typography, components)
│   └── animations.css     (scroll-reveal and motion effects)
├── js/
│   ├── main.js             (nav highlighting, footer year, back-to-top, scroll reveal, counters)
│   └── forms.js            (Google Form embed handling, newsletter signup)
└── images/
    ├── logo/                (official logo files — see below)
    ├── hero/                (homepage/banner photos — currently empty, ready for real photography)
    ├── team/                (staff/board photos — currently empty)
    ├── events/              (volunteer/community event photos — currently empty)
    ├── partners/            (partner & university logos — currently empty)
    └── icons/               (icon sprite + favicon — no need to touch)
```

### No partials system

Earlier versions of this site loaded a shared navigation menu and footer from a `partials/` folder using JavaScript (`fetch()`). That system has been **removed** for maintainability: the complete navigation menu and complete footer are now written directly into every one of the 13 HTML pages. There is no `partials/` folder anymore, and `main.js` no longer performs any `fetch()` calls.

**Trade-off to know about:** because the nav/footer are duplicated across files instead of loaded from one shared source, updating the menu or footer requires editing all 13 pages identically. EDITING-GUIDE.md explains the fastest way to do that (VS Code's "Search and Replace across files").

### Logo files

Official logo assets live in `images/logo/`:
- `mwc-icon.png` — icon only, used in the navigation bar and as the site favicon (`images/icons/favicon.png`)
- `mwc-main-logo.png` — full lockup (icon + horizontal wordmark), used in the homepage structured data (SEO)
- `mwc-wordmark-horizontal-gray.png`, `mwc-wordmark-stacked-blue.png`, `mwc-wordmark-stacked-gray.png` — text-only wordmark variants, available for future use (letterhead-style pages, print exports, etc.)

---

## Deployment

### GitHub Pages (current host)
This site is already deployed via GitHub Pages. To publish future changes:
- **Non-developers:** use GitHub Desktop — see EDITING-GUIDE.md.
- **Command line:**
  ```bash
  git add .
  git commit -m "Describe your change"
  git push origin main
  ```
GitHub Pages rebuilds automatically after every push to the branch configured in **Settings → Pages**.

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
3. Leave the build command blank; set the output directory to `/`
4. Deploy

---

## Local Preview

Because forms and some behaviors rely on standard browser features, the simplest local preview is the VS Code **Live Server** extension (see EDITING-GUIDE.md), or:

```bash
# Python 3
python3 -m http.server 8000

# or Node
npx serve .
```
Then visit `http://localhost:8000`.

---

## Giving & Donations (Zeffy)

Online giving is powered by [Zeffy](https://www.zeffy.com/) (a free-for-nonprofits donation platform), integrated in two places:

1. A **"Give Now" button** in the navigation menu on every page — opens the Zeffy donation form in a popup. If Zeffy's popup script fails to load, the button's plain `href` link takes the visitor to the same form as a normal page instead.
2. An **inline embedded giving form** on `donate.html` — renders directly on the page via Zeffy's embed script, with a plain `<iframe>` fallback that only activates if the embed script itself fails to load.

Both currently point to the `make-a-donation-110` campaign. See EDITING-GUIDE.md > "How to Update the Zeffy Giving Form" for how to change this later.

---

## Still To Do Before Full Launch

1. **Photos** — `images/hero/`, `images/team/`, `images/events/`, and `images/partners/` are currently empty. Each contains a short README.txt with suggested sizes. See EDITING-GUIDE.md > "How to Replace Photos."
2. **Google Forms** — Get Help, Provider Partners, Internships, Volunteer, and Contact each have a placeholder form embed (`PASTE_GOOGLE_FORM_EMBED_URL_HERE`). Build each form at forms.google.com under `info@mentalwellnessconnection.com` and paste in the real embed URL — no other code changes needed. (Giving/donations on `donate.html` are already live via Zeffy — see below, not a placeholder.)
3. **Legal review** — `privacy.html` is a starting framework, not legal advice; have it reviewed by counsel before publishing.
4. **Google Map** — `contact.html` has a "Find Us" panel ready to be swapped for a live embedded map once you're ready (see the HTML comment in that file).

---

## Accessibility & SEO Notes

- Every page includes a skip-to-content link, visible focus states, and `prefers-reduced-motion` support.
- Heading hierarchy is consistent (one `<h1>` per page).
- Each page has a unique title tag, meta description, Open Graph tags, and canonical URL. `index.html` and `faq.html` include JSON-LD structured data (Organization and FAQPage schema).
- Run a Lighthouse audit after adding real photos (compressed, appropriately sized) — large uncompressed images are the most common thing that hurts performance scores.
