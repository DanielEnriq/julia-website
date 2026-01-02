# Copilot / AI Agent Instructions — julia-website

This file contains concise, repository-specific guidance to help AI coding agents be productive in this project.

## Quick summary
- Framework: Next.js (app dir) + TypeScript + TailwindCSS
- Dev server: `npm run dev` (also: yarn/pnpm/bun per README)
- Build: `npm run build` / `npm run start`
- Lint: `npm run lint` (uses repository `eslint` config)

## Project layout & conventions
- app/
  - Uses the Next.js App Router. Global layout is in `app/layout.tsx` (RootLayout).
  - Routes are file-based; dynamic routes use bracket syntax, e.g. `app/portfolio/[slug]/page.tsx`.
- components/
  - Reusable UI components live here (PascalCase filenames). Example: `Navbar.tsx`, `StoryCard.tsx`, `StoryGrid.tsx`.
  - Components should be small and focused; prefer props with TypeScript types.
- content/stories/
  - Story content is kept as MDX files (`*.mdx`) — add new stories here and wire them into the portfolio route.
- public/images/
  - Static assets (images, icons) belong here and should be referenced as `/images/<file>`.
- styles/globals.css
  - Global design tokens (colors, spacing, typography) and helper classes (e.g. `.container`, `.card`) live here. Preserve tokens when changing visual styles.

## Patterns & important details
- Server vs Client components: This is an App Router project — add `"use client"` at the top of a component that uses state or browser-only APIs.
- Styling: TailwindCSS is configured but the project also relies on CSS variables and a small set of semantic classes (see `styles/globals.css`). Use Tailwind utilities for layout and the semantic classes for tokens (`.container`, `.card`).
- Accessibility: Keep semantic HTML (nav, main, header). Use descriptive alt text for images in `public/images/`.
- Naming and types: Components use PascalCase and are typed with TypeScript props. Keep interfaces/cohesive prop shapes for reuse.
- Small design primitive: `.card` is a used primitive; try to reuse it for story previews.

## Scripts & workflows
- Start development: `npm run dev` — hot reloads the `app/` directory.
- Build for production: `npm run build`, then `npm run start`.
- Linting: `npm run lint` (configured via `eslint.config.mjs` and `eslint-config-next`). Run `npx eslint .` for targeted runs.
- Deployment: Vercel is the intended platform (standard Next.js deployment). See `README.md` for basic guidance.

## When changing content/routes
- Adding a story: create an MDX file in `content/stories/`, then ensure the portfolio listing route and the dynamic `[slug]` page resolve it (update any data loader or content index you add).
- Adding a route: add files under `app/` (prefer small co-located components). For interactive UI, remember to add `"use client"`.

## Examples (explicit references)
- Root layout: `app/layout.tsx` uses `<Navbar />` and wraps content in `<main className="container">`.
- Styling tokens: `styles/globals.css` defines `--color-*` variables and `.container`, `.card` helpers to match.
- Scripts: `package.json` — `dev`, `build`, `start`, `lint`.

## Editor/PR guidance for agents
- Keep changes minimal and focused. When adding UI, update CSS tokens in `styles/globals.css` rather than scattering hardcoded colors.
- Add TypeScript types for new components and update `eslint`-fixable issues (`npm run lint -- --fix`) before PR.
- If adding content-driven features (parsing MDX, generating slugs), make the content directory the single source of truth and update routes to reflect it.

---

If anything above is unclear or you want more examples (e.g., a sample `StoryCard` implementation or a content-to-route loader), tell me which part to expand and I will add a short example or code snippet.