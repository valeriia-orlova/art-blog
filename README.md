# Studio — Personal Art Blog

A minimal portfolio and blog site for showcasing mixed-media artwork and writing about inspiration.

**Stack:** Astro 5 + Decap CMS + Netlify Forms + plain CSS

## Getting Started

```bash
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static output to dist/
npm run preview    # preview the production build
```

## Project Structure

```
src/
├── components/        # Header, Footer, ArtCard, BlogCard, GalleryGrid, ContactForm
├── content/
│   ├── artwork/       # Artwork .md entries
│   └── blog/          # Blog post .md files
├── content.config.ts  # Astro content collection schemas
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro    # Home — hero + recent work + recent posts
│   ├── gallery.astro  # Full gallery with category filtering
│   ├── blog/
│   │   ├── index.astro
│   │   └── [...slug].astro
│   ├── about.astro
│   └── contact.astro
└── styles/
    └── global.css
public/
├── admin/             # Decap CMS admin UI + config
├── uploads/           # Image uploads
└── favicon.svg
```

## Adding Artwork

Create a markdown file in `src/content/artwork/`:

```markdown
---
title: "Piece Title"
image: "/uploads/your-image.jpg"
category: "Digital"        # Digital | Traditional | Photography | Mixed Media
date: 2026-02-08
description: "Short description of the piece."
---

Optional longer notes about the piece.
```

Place the image in `public/uploads/`.

## Adding Blog Posts

Create a markdown file in `src/content/blog/`:

```markdown
---
title: "Post Title"
date: 2026-02-08
featuredImage: "/uploads/post-image.jpg"
excerpt: "A short preview of the post."
tags: ["process", "inspiration"]
---

Post body in markdown.
```

## Deploying to Netlify

1. Push to a GitHub repository
2. Connect the repo in Netlify (build command: `npm run build`, publish directory: `dist`)
3. Enable **Netlify Identity** in site settings
4. Enable **Git Gateway** under Identity > Services
5. Invite yourself under Identity > Invite users
6. Visit `yoursite.netlify.app/admin/` to manage content through the CMS

## Contact Form

The contact page uses Netlify Forms. It works automatically when deployed to Netlify — no configuration needed. Submissions appear in the Netlify dashboard under Forms.
