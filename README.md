# chase-international

## Deploying on Netlify (Next.js runtime)

This project is configured for Netlify's Next.js runtime/plugin (SSR-capable mode).

### Netlify settings

- Build command: `npm run build`
- Node version: `20`
- Framework preset: **Next.js**
- Publish directory: prefer default/empty for Next.js runtime

### If the deployed page shows unstyled HTML

Some Netlify setups publish `.next` directly. In that mode, Next assets are requested under `/_next/static/*`, but only `/static/*` may exist unless mirrored.

To make this resilient, the build now runs a `postbuild` step that mirrors:

- `.next/static` → `.next/_next/static`

This ensures CSS/JS chunk URLs still resolve even when `.next` is used as the published directory.
