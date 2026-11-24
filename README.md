# Karibu Mtaani — Location-Based Dating for Kenya

A modern location-based matchmaking website for people in Kenya. Match by county, distance, interests, tribe, religion, and more.

**Stack:** Next.js (App Router) + Tailwind CSS + Netlify

## Live / Deploy

- GitHub: https://github.com/gachiesamuel14/karibu-mtaani-ke
- Connect this repo to Netlify for automatic deploys (build command: `npm run build`)

## Features (MVP)

1. **Landing page** — Kenya-focused branding
2. **Discover** — Filter by county and age, swipe-style cards with mock profiles
3. **Matching** — Like / pass (client-side demo)
4. Roadmap: Auth, real profiles, GPS, chat, photo uploads, reports, M-Pesa premium

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Next steps for full functionality

- Add Supabase (or Firebase) for Auth, Database, Storage, Realtime chat
- Implement real GPS (store only approximate, never expose exact coords)
- Photo uploads via Supabase Storage
- Safety: report/block system
- M-Pesa for premium features

Built for Kenyans who want to meet people near them.
