# tuCalma

tuCalma is a Vite and React website hosted on Netlify. Editable website content is managed through Decap CMS at `/admin/`.

## Local development

Use Node.js 20, matching Netlify's build environment.

```bash
npm ci
npm run dev
```

`npm run build` writes the production site to `dist/` and regenerates the sitemap.

## CMS publishing flow

Decap CMS publishes edits directly to the `master` branch through Netlify Git Gateway. Netlify then builds and deploys the committed change.

The CMS is configured in `public/admin/config.yml`. Editable data is in `src/data/`; images uploaded through the CMS are stored in `public/uploads/`.

## Netlify setup

1. Enable **Identity** for the Netlify site.
2. Set registration to **Invite only** and invite every editor.
3. Enable **Git Gateway** under Identity services.
4. Leave Git Gateway roles unset so each invited Identity user can publish changes.
5. Use a GitHub token scoped to the `rockandbit/tuCalma` repository with **Contents: Read and write** for Git Gateway.

The site-wide Identity widget handles invitation and password-reset links, and takes successful logins to `/admin/`. The admin page is public to load, but editing and publishing require a Netlify Identity login.
