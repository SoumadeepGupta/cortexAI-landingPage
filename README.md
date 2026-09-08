# triobrain-landing

Standalone marketing landing page for CortexAI, extracted from the main app so it can be built and deployed independently — no chat app, no backend dependency for rendering.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `dist/`.

## Deploy

The `.github/workflows/deploy.yml` workflow builds and publishes `dist/` to GitHub Pages, with a `CNAME` for `triobrain.com`. It only runs when triggered manually from the **Actions** tab (`Run workflow`).

Before running it, make sure:
1. **Settings → Pages → Source** is set to **GitHub Actions**.
2. DNS for `triobrain.com` points at GitHub Pages.

## Notes

- CTA buttons ("Get Started Free", "Sign In", etc.) currently link to relative paths (`/`, `/pricing`) inherited from the main app — they won't resolve to anything real until pointed at the actual app's deployed URL.
- `useAuth`'s calls to `/v1/...` will fail silently (by design) since there's no backend behind this deployment — login state just stays signed-out.
