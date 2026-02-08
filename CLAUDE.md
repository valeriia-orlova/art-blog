# Art Blog Project — Progress Notes

## Status: Fully implemented and building successfully

Stack: Astro 5.17 + Decap CMS + Netlify Forms + plain CSS
Node: v24.13.0 (installed via winget)

## What's done

- All pages: Home, Gallery (JS category filtering), Blog listing, Blog post, About, Contact
- Content collections (Astro v5 glob loader): `artwork` and `blog` in `src/content/`
- 4 sample artwork entries (Digital, Traditional, Photography, Mixed Media) with placeholder images
- 1 sample blog post ("Finding Beauty in Texture")
- Decap CMS at `public/admin/` (git-gateway backend, needs Netlify Identity)
- Contact form with Netlify Forms markup + honeypot spam protection
- Global CSS with custom properties, responsive design, mobile nav toggle
- `npm run build` succeeds — 6 static pages to `dist/`

## Key Astro v5 details (important if editing)

- Content config is at `src/content.config.ts` (NOT `src/content/config.ts`)
- Uses `glob()` loader from `astro/loaders` (not `type: 'content'`)
- Collection entries use `.id` not `.slug`
- `render()` is imported from `astro:content` as standalone function (not `entry.render()`)

## Not yet done

- Not deployed to Netlify
- No real artwork — using placehold.co placeholder images
- Social links in Footer are generic placeholders
- About page uses placeholder photo
- Site name is "Studio" — user may want to customize
