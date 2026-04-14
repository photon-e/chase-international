# chase-international

## Deploying on Netlify

This repo includes a `netlify.toml` with the Netlify build command and Node version.

### Steps

1. Push this repository to GitHub.
2. In Netlify, click **Add new site** → **Import an existing project**.
3. Select this repo.
4. Netlify will read `netlify.toml` and use:
   - Build command: `npm run build`
   - Node version: `20`
5. Deploy.

Netlify will detect this as a Next.js project and run it with the Netlify Next.js runtime.
