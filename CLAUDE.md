# Project: 打包清單 (Packing Checklist PWA)

## Build & Deploy

- Build: `npm run build` (output to `docs/`)
- Deploy: `git push` (GitHub Pages via `docs/`)

## Version Bumping

Every time you run `npm run build`, you MUST bump the version number (patch version) beforehand:

1. `package.json` — update `"version"` field
2. `src/components/ProfileView.jsx` — update the version display string

Use semver patch increment (e.g. 1.0.0 → 1.0.1 → 1.0.2).

## Tech Stack

- React + Vite + Tailwind CSS
- Firebase (Auth, Realtime Database, Storage)
- PWA with vite-plugin-pwa (registerType: 'prompt')
- Hosted on GitHub Pages with Cloudflare CDN
- Firebase auth proxied via Cloudflare Worker (authDomain: packing.kkleekk.com)
