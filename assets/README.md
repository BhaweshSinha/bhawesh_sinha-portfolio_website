# assets/

This folder holds everything the site links to: your photo, résumé, icons, and (optionally) a file for your social links.

| File | Purpose | Action needed |
|---|---|---|
| `profile.jpg` | Your real profile photo, shown in the hero section | Already in place — replace with a new file of the same name any time you want to update it |
| `profile-placeholder.svg` | The old placeholder graphic, kept here only as a fallback reference | No longer used by `index.html` — safe to delete |
| `Bhawesh_Sinha_Resume.pdf` | The résumé served by the "Download Résumé" buttons | Swap in a new PDF whenever you update your résumé (keep the same filename, or update the two links in `index.html`) |
| `favicon.svg` | Small `[ ]` browser-tab icon matching the notebook theme | Optional — replace with your own icon if you like |

## Updating your profile photo later

1. Replace `assets/profile.jpg` with a new photo of the same filename (square crop, roughly 500×500px, works best — the site will auto-crop to a square either way).
2. That's it — `index.html` already points at `assets/profile.jpg`, so no code changes are needed.

If you ever want to rename the file instead, update the `src="assets/profile.jpg"` line inside the hero (`#hero`) section of `index.html` to match.

## Updating your résumé

Replace `Bhawesh_Sinha_Resume.pdf` with your latest export, keeping the same filename — the download buttons in `index.html` will pick it up automatically. If you rename the file, update the two `href="assets/Bhawesh_Sinha_Resume.pdf"` links in `index.html` to match.

## Social links

All social/contact links (GitHub, LinkedIn, Kaggle, LeetCode, email) are set directly in `index.html` inside the `.social-row` lists in the hero and contact sections, so there's no separate config file to maintain — just search for your old link and replace it there if it ever changes.
