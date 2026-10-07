# Portfolio

Astro, static. Tokens exported from the Figma file `Design` (key L3sLFKv4hbHbhLBiqvEBGF).

    npm install
    npm run dev

Cloudflare Pages: build `npm run build`, output `dist`.

## Where things live

- `src/styles/tokens.css` — variables exported from Figma. Single source of truth for color, space, radius.
- `src/styles/base.css` — type scale, grid, shared blocks.
- `src/content/cases/en/*.yaml` — case copy, English (canonical).
- `src/content/cases/pt/*.yaml` — same shape, Portuguese.
- `src/i18n/ui.ts` — interface strings (nav, footer, labels).

## Rules baked in

- Narrative translates, artefacts do not: screenshots, token names, UI labels stay English in both versions.
- Every block is sized against the Portuguese string, which runs 15-25% longer.
- The case `description` is written once and used twice: full in the hero, clamped to 3 lines in the project card.
