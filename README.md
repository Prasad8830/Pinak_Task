# Pinak

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