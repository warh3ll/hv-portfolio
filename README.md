# Henrik Vårhäll · UX/UI Designer

My personal UX/UI design portfolio: case projects, work experience and CV. Live at
[henrikvarhall.com](https://henrikvarhall.com).

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
- The workflow asks GitHub Pages for the site's base path and passes it to Vite as `BASE_PATH`:
  `/` on henrikvarhall.com, `/hv-portfolio/` if the custom domain is ever removed.

## Setup (one time)

1. **GitHub Pages:** Settings → Pages → Source: **GitHub Actions**.
2. **Custom domain:** Settings → Pages → Custom domain: `henrikvarhall.com`, then tick
   **Enforce HTTPS** once the certificate is issued. (With Actions deploys the domain lives in this
   setting, not in a `CNAME` file.)
3. **DNS at IONOS** for henrikvarhall.com: remove any existing A/AAAA records on `@` and the
   `www` record, then add
   - `A` records on `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `AAAA` records on `@`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`,
     `2606:50c0:8003::153`
   - `CNAME` on `www`: `warh3ll.github.io`
