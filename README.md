# chase-international

## Deploying on Netlify

This project is configured as a static Next.js export for Netlify.

### Netlify settings (from `netlify.toml`)

- Build command: `npm run build`
- Publish directory: `out`
- Node version: `20`

### Why this fixes missing CSS/JS

Netlify serves static files from the configured publish directory. This repo now exports the site to `out/` and Netlify publishes that folder, so `/_next/static/*` assets (CSS/JS) are included in the deployment.
