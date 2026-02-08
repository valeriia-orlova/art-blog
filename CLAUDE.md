# Art Blog Project — Progress Notes

## Status: Deployed and live

Site: https://valeriia-art-blog.netlify.app
GitHub: https://github.com/valeriia-orlova/art-blog
Stack: Astro 5.17 + Decap CMS + Netlify Forms + plain CSS
Node: v24.13.0 (installed via winget)

## What's done

- All pages: Home, Gallery (JS category filtering), Blog listing, Blog post, About, Contact
- Content collections (Astro v5 glob loader): `artwork` and `blog` in `src/content/`
- 1 real artwork entry ("Highland Gaze") — placeholder content removed
- Decap CMS at `public/admin/` (git-gateway backend + Netlify Identity)
- CMS login works via Netlify Identity (email/password, auto-confirm enabled)
- Git Gateway enabled for CMS commits
- GitHub webhook triggers Netlify auto-rebuild on push
- Contact form with Netlify Forms markup + honeypot spam protection
- Global CSS with custom properties, responsive design, mobile nav toggle
- Playwright MCP plugin configured for browser testing
- `npm run build` succeeds — 6 static pages to `dist/`

## Deployment setup

- Netlify site ID: `8ef94ed2-6f3e-4fea-8327-677f5e36ad88`
- Netlify Identity enabled with auto-confirm (no email verification needed)
- Git Gateway enabled for Decap CMS
- GitHub webhook auto-triggers Netlify rebuild on push
- Build command: `npm run build`, publish dir: `dist`

## Key Astro v5 details (important if editing)

- Content config is at `src/content.config.ts` (NOT `src/content/config.ts`)
- Uses `glob()` loader from `astro/loaders` (not `type: 'content'`)
- Collection entries use `.id` not `.slug`
- `render()` is imported from `astro:content` as standalone function (not `entry.render()`)

## Content management

- **CMS admin**: https://valeriia-art-blog.netlify.app/admin/
- Login with Netlify Identity (email/password)
- Publishing from CMS auto-commits to GitHub and triggers rebuild
- Can also add content manually: put images in `public/uploads/`, create `.md` files in `src/content/artwork/` or `src/content/blog/`

## Still to do

- Social links in Footer are generic placeholders
- About page uses placeholder photo
- Site name is "Studio" — user may want to customize
- Blog section is empty (ready for real posts)
