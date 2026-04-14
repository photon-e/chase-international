# chase-international

## Deploying on Netlify (Next.js runtime)

This project should be deployed with Netlify's Next.js runtime/plugin (SSR-capable mode), not static export mode.

### Netlify settings

- Build command: `npm run build`
- Node version: `20`
- Framework preset: **Next.js**
- Publish directory in Netlify UI: leave empty/default for Next.js runtime (do not force `out`)

### Why this change

If `output: 'export'` is mixed with dynamic Next.js behavior or Netlify runtime settings, builds can fail (for example `force-dynamic` export errors) or deploy with missing assets. Keeping standard Next.js build output lets Netlify's Next.js runtime serve JS/CSS correctly.
