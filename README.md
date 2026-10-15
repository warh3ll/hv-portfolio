# Henrik Vårhäll · UX/UI Designer

My personal UX/UI design portfolio: case projects, work experience and CV.

Built with Vite, React, TypeScript, Tailwind CSS and shadcn-ui. There is no backend: all content
lives in `src/data/` and the site is deployed as static files to GitHub Pages.

## Local development

```sh
npm ci
npm run dev    # http://localhost:8080
```

## Updating content

- Case projects: `src/data/projects.ts`
- Work experience and education: `src/data/timeline.ts`
- Intro, about and expertise: `src/data/hero.ts`, `src/data/about.ts`, `src/data/expertise.ts`
- Images: `public/images/`, referenced as `` `${import.meta.env.BASE_URL}images/<file>` ``

## How it deploys

- `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages on every push to
  `main`.
- `scripts/prerender-routes.mjs` runs after `vite build` and writes an HTML copy of the app for each
  case page (`/case/<id>`), since GitHub Pages has no single-page-app fallback. Anything else falls
  through to `404.html`.
- Until a custom domain is set, GitHub Pages serves the site under `/hv-portfolio/`. The workflow
  passes that path to Vite as `BASE_PATH`, so links and images work either way.

## Setup (one time)

1. **GitHub Pages:** Settings → Pages → Source: **GitHub Actions**.
2. **Custom domain (optional):** add it under Settings → Pages, add a `public/CNAME` file containing
   the domain, and point the domain's DNS at GitHub Pages.
