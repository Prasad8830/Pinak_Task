# Pinak — Prompt Engineering Assignment Website

A modern, responsive front-end built with React + Vite + Tailwind CSS created for a prompt-engineering front-end intern assignment. This project demonstrates five required website sections (Navbar, Hero, Services, Contact form, Footer) and is designed to be reused with AI-generated prompts.

## What this repo contains
- `src/` — React components and main app
  - `components/` — `Navbar`, `Hero`, `Services`, `Contact`, `Footer`
- `index.html` — Vite entry
- `package.json` — scripts and dependencies
- `tailwind.config.cjs` / `postcss.config.js` — Tailwind setup

## Tech Stack
- React 18 (with Vite)
- Tailwind CSS
- PostCSS

## Quick Start (Development)
1. Install dependencies

```powershell
cd c:\DtoC\IIC\Pinak\pinak-website
npm install
```

2. Run development server

```powershell
npm run dev
# Open http://localhost:5173/
```

## Build / Preview

```powershell
npm run build
npm run preview
# Preview serves the `dist` build locally
```

## Recommended Deployment Options
- Vercel (fast, integrates with GitHub)
- Netlify (drag-and-drop or GitHub integration)
- GitHub Pages (static hosting; requires `dist` deployment via `gh-pages` or manual upload)

Example quick deploy using Netlify CLI:

```powershell
npm run build
npm i -g netlify-cli
netlify login
netlify deploy --dir=dist --prod
```

Example quick deploy using Vercel (recommended):

```powershell
npm i -g vercel
vercel login
vercel --prod
```

## Assignment Deliverables Checklist
- [x] Navbar component
- [x] Hero section
- [x] Services / Features section
- [x] Contact / Lead Form (with basic validation)
- [x] Footer
- [ ] Host the page and provide a live link
- [ ] Vidyard/Loom 10-minute screen recording (prompts + iteration)
- [ ] One-page summary document with prompts and notes

## Notes on `.gitignore` and `node_modules`
If `node_modules/` was accidentally committed before `.gitignore` existed, run the following to untrack it (keeps local files intact):

```powershell
# in repo root (c:\DtoC\IIC\Pinak)
git rm -r --cached node_modules
git add .gitignore
git commit -m "Remove node_modules from repo and add to .gitignore"
git push origin main
```

## Next steps I can help with
- Draft the five detailed, reusable prompts (meta + section prompts) for use with ChatGPT/Gemini/Claude.
- Prepare the one-page summary doc (Google Doc ready-to-share).
- Deploy the site to Vercel/Netlify/GitHub Pages and provide live URL.
- Prepare the 10-minute recording checklist and script outline.

---

If you want, I can now deploy the site to Vercel (fastest) and push the repo to GitHub for you — tell me whether to create a new GitHub repo from the workspace and push, or give me an existing repo to use.
