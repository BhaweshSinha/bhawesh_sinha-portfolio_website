# Bhawesh Sinha — Portfolio

A single-page portfolio site styled as an executable data-science notebook — a nod to being a Kaggle Notebook Expert. Sections are laid out as notebook cells (`In [ ]:` / `Out [ ]:`), with a code-cell skills table, a pandas-style experience "dataframe," and a Run All button that replays the cell-execution animation.

**Live site (after deployment):** `https://<your-github-username>.github.io/<repo-name>/` 

## Tech stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no framework, no dependencies to install. The only external resource is a Google Fonts stylesheet (Space Grotesk, Inter, JetBrains Mono).

## Project structure

```
.
├── index.html          # All page content and structure
├── css/
│   └── style.css       # Design system: colors, type, layout, responsive rules
├── js/
│   └── script.js        # Cell execution-count animation + "Run All" button
├── assets/
│   ├── README.md                     # How to swap in your photo/résumé
│   ├── profile-placeholder.svg       # Placeholder shown until you add profile.jpg
│   ├── Bhawesh_Sinha_Resume.pdf      # Résumé served by the download buttons
│   └── favicon.svg                   # Browser-tab icon
└── README.md            # You are here
```

## Running locally

No build tools needed. Either:

- Open `index.html` directly in a browser, or
- Serve it locally so relative paths behave exactly like production:
  ```bash
  python3 -m http.server 8000
  # then visit http://localhost:8000
  ```

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `portfolio`) and push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
5. After a minute, your site will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

If you want the site at the root of `https://<your-username>.github.io/` (no repo name in the URL), name the repository exactly `<your-username>.github.io`.

## Customizing

- **Photo & résumé:** see [`assets/README.md`](assets/README.md).
- **Content:** all text lives directly in `index.html`, organized into clearly commented sections (`<!-- CELL 0 — HERO -->`, etc.) — edit in place.
- **Colors & type:** all design tokens are CSS custom properties at the top of `css/style.css` under `:root`.
- **Links:** social and project links appear inline in `index.html`; search for the old URL and replace it.

## Responsiveness

The layout is fluid by default (`clamp()`, percentage widths, flex-wrap) and reinforced with breakpoints for large desktops, laptops, tablets, and phones down to ~320px width, including a touch-target safety pass for coarse-pointer devices and support for `prefers-reduced-motion`.

## License

Personal portfolio content (résumé data, project descriptions, photo) belongs to Bhawesh Sinha. Feel free to fork the code/design as a template for your own portfolio.
