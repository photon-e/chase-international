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

## Troubleshooting stale deploys

If a deploy succeeds but the site still looks old:

1. Confirm Netlify is building the correct branch.
2. In Netlify, run **Clear cache and deploy site**.
3. Hard refresh your browser (`Ctrl/Cmd + Shift + R`).
4. Check the footer `Deploy:` value on the homepage:
   - On Netlify this should match the latest `COMMIT_REF` short SHA.
   - On Vercel this should match `VERCEL_GIT_COMMIT_SHA` short SHA.

If the `Deploy:` value is old, the latest commit was not deployed yet.
