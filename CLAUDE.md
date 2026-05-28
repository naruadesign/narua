# Narua — Claude Operating Manual

Read this file at the start of every session before making any changes.

## Stack

- **Astro 5** (static site generator) + **TypeScript** + **Tailwind CSS v4** + **MDX**
- **Node 22** required — use `export PATH="/opt/homebrew/opt/node@22/bin:$PATH"` before npm commands
- Deployed on **Cloudflare Pages** via git push to `main`

## Architecture Rules

- **`src/content/`** — ALL editable content lives here. This is the safe workspace for routine updates.
  - `src/content/pages/` — page copy (MDX with YAML frontmatter)
  - `src/content/blog/` — blog posts (MDX, named `YYYY-MM-DD-slug.mdx`)
  - `src/content/config/` — typed TS config files (site, nav, pricing)
- **`src/pages/`** — Astro page shells. Only touch for structural/routing changes.
- **`src/components/`** — Reusable components. Only touch for design changes.

## Dev Server

```bash
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
npm run dev
# Site is at http://localhost:4321
```

## Common Tasks

### Update page copy
Edit the MDX file in `src/content/pages/`:
- Home: `src/content/pages/home.mdx` — prose in body, hero/features in frontmatter
- About: `src/content/pages/about.mdx`
- Contact: `src/content/pages/contact.mdx`

### Add a blog post
Create `src/content/blog/YYYY-MM-DD-post-slug.mdx`:
```yaml
---
title: "Post Title"
date: "2026-05-28"
description: "One-sentence summary shown on the blog index"
author: "Narua Team"
draft: false
---
```
Set `draft: true` to hide from the blog index without deleting.

### Update pricing tiers
Edit `src/content/config/pricing.ts` — array of `PricingTier` objects.
Run `npx astro check` after to verify types.

### Update navigation
Edit `src/content/config/navigation.ts` — `navLinks` and `footerLinks` arrays.

### Update site name, tagline, or social links
Edit `src/content/config/site.ts`.

### Add or replace images
Copy the file into `public/`. Reference it in MDX as `/filename.png`.

## Verification (run before every commit)

```bash
export PATH="/opt/homebrew/opt/node@22/bin:$PATH"
npx astro check   # Type-check all .astro files and content collections
npm run build     # Full production build — must succeed with 0 errors
```

Never commit if either command fails.

## Deploy

Every `git push origin main` auto-deploys via Cloudflare Pages (no CLI needed after initial setup).

```bash
git add src/content/path/to/changed/file
git commit -m "content: describe what changed"
git push origin main
```

Monitor deploy: Cloudflare Pages dashboard → narua project.

## Commit Message Convention

| Prefix | When to use |
|--------|-------------|
| `content:` | Copy, blog posts, pricing, navigation changes |
| `feat:` | New page or component |
| `fix:` | Bug fix |
| `style:` | Visual/CSS-only changes |
| `chore:` | Config, deps, tooling |

Example: `content: update homepage hero headline and add Pro pricing tier`

## Adding a New Page

1. Create `src/content/pages/new-page.mdx` with `title` and `description` frontmatter
2. Create `src/pages/new-page.astro` — import `BaseLayout`, call `getEntry('pages', 'new-page')`
3. Add to `src/content/config/navigation.ts` if it should appear in nav
4. Run verification, then commit and push

## Contact Form

The form in `src/components/sections/ContactForm.astro` needs a real endpoint.
Recommended free options:
- **Web3Forms** (web3forms.com) — free, open source, no backend needed
- **Formspree** (formspree.io) — free tier: 50 submissions/month

Update the `action` attribute in ContactForm.astro with your endpoint URL.

## File Ownership Table

| What to change | File to edit |
|----------------|-------------|
| Hero headline | `src/content/pages/home.mdx` (frontmatter) |
| Feature list | `src/content/pages/home.mdx` (frontmatter) |
| About copy | `src/content/pages/about.mdx` |
| Pricing tiers | `src/content/config/pricing.ts` |
| Nav links | `src/content/config/navigation.ts` |
| Site name/tagline | `src/content/config/site.ts` |
| Blog post | `src/content/blog/YYYY-MM-DD-slug.mdx` |
| Logo | `public/narua64x64.png` (replace file, keep filename) |
| Brand colors | `src/styles/global.css` (`@theme` block) |
| Global styles | `src/styles/global.css` |

## Scheduled Content Updates

Use `/schedule` to create recurring Claude Code tasks. A weekly blog post update:
1. `git pull origin main`
2. Create `src/content/blog/YYYY-MM-DD-slug.mdx` per CLAUDE.md instructions
3. `npx astro check && npm run build`
4. `git commit -m "content: weekly post YYYY-MM-DD" && git push origin main`
