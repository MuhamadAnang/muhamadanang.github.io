# muhamadanang.github.io

Personal portfolio built with [Magic Portfolio](https://github.com/once-ui-system/magic-portfolio)
(Next.js 14 + Once UI), configured as a **static export** and deployed to **GitHub Pages**.

## Local development

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

## Production build

```bash
pnpm build    # outputs a static site to ./out
```

Preview the export:

```bash
npx serve out
```

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
static site and publishes `./out` to GitHub Pages.

One-time setup: **Repository → Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Notes for GitHub Pages compatibility

- `next.config.mjs` sets `output: "export"`, `images.unoptimized`, and `trailingSlash: true`.
- Server-only features from the original template were removed: the `/api` password
  routes, the on-demand `/og` image route, and the password gate in `RouteGuard`.
- Content and configuration live in `src/app/resources/`.
