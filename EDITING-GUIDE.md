# Editing Guide — Mental Wellness Connection Website

This guide is for editing this website using **Visual Studio Code** (a free code editor) and publishing changes using **GitHub Desktop**. You don't need to know how to code — you just need to find the right text and carefully replace it.

**Tools you'll want installed (both free):**
- [Visual Studio Code](https://code.visualstudio.com/) — for opening and editing files
- [GitHub Desktop](https://desktop.github.com/) — for publishing your changes to the live website

---

## Before You Start: How This Site Is Organized

```
Mental-Wellness-Connection/
├── index.html              ← Homepage
├── about.html               ← About Us
├── our-focus-areas.html      ← Our Focus Areas (Awareness, Active Living, Access to Care)
├── get-help.html             ← Get Help
├── provider-partners.html    ← Provider Partners
├── internships.html          ← Internships
├── volunteer.html            ← Volunteer
├── events.html               ← Events
├── donate.html                ← Donate
├── resources.html            ← Resources
├── contact.html               ← Contact
├── faq.html                    ← FAQ
├── privacy.html                ← Privacy Policy
├── css/                     ← Controls colors, fonts, spacing (don't need to touch this for text/photo edits)
├── js/                      ← Controls small behaviors like animations (don't need to touch this either)
├── images/
│   ├── logo/                ← Your official logo files
│   ├── hero/                ← Homepage/banner photos go here
│   ├── team/                ← Staff/board photos go here
│   ├── events/               ← Volunteer/community event photos go here
│   ├── partners/             ← Partner and university logos go here
│   └── icons/                ← Site icon graphics (don't need to touch this)
├── EDITING-GUIDE.md         ← This file
└── README.md                ← Technical overview
```

**Important:** Every page (`index.html`, `about.html`, etc.) is a complete, self-contained file. The navigation menu and footer are copied into every single page — there's no "master" file that controls them. If you change the menu, you need to make the same change on **all 13 pages**. Instructions for that are below.

---

## How to Change Homepage Wording

1. Open **Visual Studio Code**.
2. Open the whole `Mental-Wellness-Connection` folder (**File → Open Folder**).
3. In the file list on the left, click `index.html` (or whichever page you want to edit).
4. Use **Ctrl+F** (Windows) or **Cmd+F** (Mac) to search for the exact words you want to change — for example, search for `Breaking Barriers` to jump straight to the hero headline.
5. Look for comments like this in the code — they mark the sections you're safe to edit:
   ```html
   <!-- EDIT HERE: homepage headline and subheading -->
   ...text you can change...
   <!-- END EDIT HERE -->
   ```
6. Carefully type your new wording **between the HTML tags**, without deleting the tags themselves (the bits in `< >` brackets). For example:
   ```html
   <h1 class="mb-3">Breaking Barriers. Building Hope. Connecting Care.</h1>
   ```
   You can safely change the sentence, but leave `<h1 class="mb-3">` and `</h1>` exactly as they are.
7. Save the file (**Ctrl+S** / **Cmd+S**).
8. Preview your change — see "How to Preview Changes" below.

**Tip:** Every page has similar `<!-- EDIT HERE -->` comments around its title and intro paragraph, near the top of the file, to make this easy.

---

## How to Preview Changes Before Publishing

Because this site uses a few modern features, double-clicking `index.html` to open it in your browser mostly works, but the safest way to preview is:

1. In VS Code, install the free **"Live Server"** extension (Extensions icon in the left sidebar → search "Live Server" → Install).
2. Right-click `index.html` in the file list → **"Open with Live Server."**
3. Your browser opens the site, and it updates automatically every time you save a file.

---

## How to Replace Photos

The site currently uses soft colored illustration graphics as stand-ins for real photography (you'll see rounded panels with soft colors and a small plant icon — that's intentional design, not a placeholder mistake). To swap one in for a real photo:

1. **Save your photo** into the right folder:
   - Homepage/banner photos → `images/hero/`
   - Staff or founder photos → `images/team/`
   - Event/volunteer photos → `images/events/`
   - Partner or university logos → `images/partners/`
   - Keep file names simple: lowercase, no spaces (use dashes) — e.g. `counseling-session.jpg`
2. In VS Code, open the page with the photo you want to replace.
3. Find the illustration block. It looks like this:
   ```html
   <!-- Swap for real photography: warm, candid counseling or community moment, 1200x900px -->
   <div class="hero-image-slot illustration-panel illustration-warm float-accent" aria-hidden="true">
     <span class="blob"></span><span class="blob"></span>
     <svg class="mwc-mark" viewBox="0 0 120 120"><use href="images/icons/icons.svg#mark-connect"></use></svg>
   </div>
   ```
   The comment directly above tells you what the photo should show and its suggested size.
4. Replace the whole `<div class="hero-image-slot ...">...</div>` block with a plain image tag:
   ```html
   <img src="images/hero/counseling-session.jpg" alt="A counselor and client talking in a warm, private office" class="rounded-xl w-100" loading="lazy">
   ```
   Always fill in the `alt="..."` text with a short, accurate description of the photo — this is read aloud by screen readers for visually impaired visitors, and it's required for accessibility.
5. Save and preview.

---

## How to Change the Logo

Your official logo files already live in `images/logo/`:

| File | What it is |
|---|---|
| `mwc-main-logo.png` | Full logo (icon + horizontal wordmark) — used in the navigation menu on **every page** |
| `mwc-icon.png` | Icon only (sprout in bowl) — not currently used in navigation, kept for other uses (e.g. favicon source) |
| `mwc-wordmark-horizontal-gray.png` | Text only, horizontal, gray |
| `MWC-WordmarkHorizontal-Blue.png` | Text only, horizontal, blue |
| `mwc-wordmark-stacked-blue.png` | Text only, stacked, light blue |
| `mwc-wordmark-stacked-gray.png` | Text only, stacked, dark gray |

Every page's navigation bar uses the same line:
```html
<img src="images/logo/mwc-main-logo.png" alt="Mental Wellness Connection" class="brand-logo">
```
To use a different version, replace the file name in that line — you'll need to make the same change across **all 13 pages** (see "How to Update the Navigation Menu" below for the easiest way to do a change like this everywhere at once, since the logo line is now identical on every page).

To replace a logo file itself with an updated version: just save the new file into `images/logo/` using the **exact same file name** as the one you're replacing, and it will update everywhere automatically.

---

## How to Update the Navigation Menu

The navigation menu is repeated at the top of all 13 pages (there's no shared file — see "Before You Start" above for why). To add, rename, or remove a menu item:

1. Open any page and find the navigation block. It's marked clearly:
   ```html
   <!-- ============================================================
        SITE NAVIGATION MENU
        ...
        ============================================================ -->
   ```
2. Most items are simple links, which look like this:
   ```html
   <li class="nav-item"><a class="nav-link" data-nav="about" href="about.html">About</a></li>
   ```
   To **rename** one, just change the visible text (`About` in the example above) — leave everything else the same. To **add** one, copy an existing `<li class="nav-item">...</li>` line and update its `href="..."` and visible text. To **remove** one, delete its whole `<li class="nav-item">...</li>` line.
3. **"How We Help" and "Get Involved" are dropdown menus**, not simple links. Each one looks like this:
   ```html
   <li class="nav-item dropdown">
     <a class="nav-link dropdown-toggle" href="#" id="howWeHelpDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-nav="focus-areas">How We Help</a>
     <ul class="dropdown-menu" aria-labelledby="howWeHelpDropdown">
       <li><a class="dropdown-item" href="our-focus-areas.html#awareness">Awareness</a></li>
       <li><a class="dropdown-item" href="our-focus-areas.html#active-living">Active Living</a></li>
       <li><a class="dropdown-item" href="our-focus-areas.html#access">Access to Care</a></li>
     </ul>
   </li>
   ```
   To add, rename, or remove a submenu item, edit the `<li><a class="dropdown-item" ...>...</a></li>` lines the same way you would a regular link. The dropdown opens and closes automatically — that behavior comes from Bootstrap's own JavaScript (already loaded at the bottom of every page), so you never need to touch any `.js` file to edit menu text or links.
4. **Repeat the exact same edit on all 13 pages.** This is tedious but the safest method for a non-developer. The easiest way to do this in VS Code:
   - Press **Ctrl+Shift+F** (Windows) or **Cmd+Shift+F** (Mac) to open "Search across all files."
   - Type the exact old text you want to replace, and the new text, and use **"Replace All"**.
   - Double-check each result before confirming — this affects every file at once.

---

## How to Add a New Page

1. In VS Code, right-click an existing page that's visually similar to what you want (e.g. `resources.html`) and choose **"Copy."** Then right-click the folder and choose **"Paste,"** and rename the new copy — for example, `events.html`.
2. Open your new page and:
   - Update the `<title>` tag and the meta description near the top
   - Update the `<h1>` and body content in the main sections
   - Update the `data-page="..."` attribute on the `<body>` tag to a new unique name (e.g. `data-page="events"`) — this controls the navigation-menu highlight
3. Add a link to your new page in the navigation menu **and** the footer, on all 13 pages (see "How to Update the Navigation Menu" above).
4. Add the new page to `sitemap.xml` (copy an existing `<url>...</url>` line and update it) so search engines find it.

---

## How to Update the Zeffy Giving Form

Online giving runs through **Zeffy** (a free donation platform). There are two places that reference your Zeffy campaign, and they use two different URL formats — both need to match if you ever start a new campaign:

1. **The "Give Now" button in the navigation menu** — appears on all 13 pages. Search for `zeffy-form-link=` (Ctrl+Shift+F / Cmd+Shift+F to search across all files) and you'll find two attributes on the same button:
   - `href="https://www.zeffy.com/en-US/donation-form/..."` — a plain link, used as a backup in case the popup script doesn't load
   - `zeffy-form-link="https://www.zeffy.com/embed/donation-form/...?modal=true"` — used by Zeffy's script to open the popup
2. **The embedded giving form** on `donate.html` — look for `data-zeffy-embed data-form-url="/embed/donation-form/..."` (a short path, not the full `https://www.zeffy.com/...` URL), plus a matching `data-zeffy-embed-src="https://www.zeffy.com/embed/donation-form/..."` a few lines below it (used only if the embed script fails to load).

All of these currently point to Mental Wellness Connection's `make-a-donation-110` campaign on Zeffy. If you ever create a new Zeffy campaign, get its link from your Zeffy dashboard and swap it into all four spots above (find-and-replace across all files, then double-check `donate.html` separately for its two embed-related lines).

You do not need to touch any `.js` file — the popup and embed behavior are both powered by Zeffy's own scripts, which are already loaded on every page (or, for the embed, only on `donate.html`).

---

## How to Publish Changes Through GitHub Desktop

Once you've saved your edits in VS Code:

1. Open **GitHub Desktop**.
2. It will automatically detect the files you changed, listed on the left with checkmarks.
3. In the bottom-left box, type a short description of what you changed (e.g. "Updated homepage headline" or "Added new event photos").
4. Click **"Commit to main"** (the blue button).
5. Click **"Push origin"** at the top to send your changes to GitHub.
6. GitHub Pages automatically rebuilds the live site — your changes will appear at your website's address within a minute or two.

**If something looks broken after publishing:** GitHub Desktop keeps a full history. Click **"History"** at the top, find the commit right before your change, right-click it, and choose **"Revert this commit"** to safely undo it.

---

## Quick Reference: Common Tasks

| I want to... | Do this |
|---|---|
| Change a sentence on a page | Open the page in VS Code, find the text with Ctrl+F/Cmd+F, edit it, save |
| Add a real photo | Save it in the right `images/` subfolder, then swap the illustration `<div>` for an `<img>` tag (see above) |
| Update the logo | Replace the file in `images/logo/` with the same file name, or update the `<img src="...">` path |
| Add/remove a menu item | Edit the navigation block on all 13 pages the same way |
| Add a whole new page | Copy a similar page, rename it, update its content and links |
| Publish my changes | Save in VS Code → Commit + Push in GitHub Desktop |

If you get stuck, it's always safe to close VS Code **without saving** — nothing changes on the live site until you commit and push in GitHub Desktop.
