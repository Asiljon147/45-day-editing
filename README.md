# CUTCRAFT — 45-Day Premiere Pro Training Tracker

A desktop-first React + Vite application for tracking a practical 45-day Adobe Premiere Pro curriculum. It uses browser LocalStorage; there is no backend, account, or paid API.

## Requirements

- Windows 10/11
- Node.js 20.19+ or 22.12+
- Google Chrome (or another modern browser)

## Run locally

1. Install Node.js from https://nodejs.org/ if it is not already installed.
2. Extract the CUTCRAFT project folder.
3. Open PowerShell in that folder.
4. Install dependencies:

   ```powershell
   npm install
   ```

5. Start the development server:

   ```powershell
   npm run dev
   ```

6. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```powershell
npm run build
npm run preview
```

The production website is generated in `dist/`. Upload the contents of `dist/` to Netlify, or connect the repository to Netlify with build command `npm run build` and publish directory `dist`.

## Install as a desktop app

After deploying or running the production preview, open the site in Chrome. Use the install icon in the address bar (or Chrome menu → Cast, save, and share → Install page as app, depending on Chrome version). This is a PWA, not an Android APK or Electron application.

## Data and offline use

- Progress, mastery, notes, sessions, and portfolio details are saved in LocalStorage for the current browser profile.
- Use Settings → Export JSON to create a backup before clearing browser data or moving to another computer.
- Use Settings → Import backup to restore a previously exported JSON file. Import replaces current local data.
- The service worker caches the app shell for repeat visits. The tracker does not need a network connection for its core features once the app has loaded and been cached. The optional Google Fonts import is decorative; system sans-serif fonts remain available offline.
- LocalStorage is browser-specific. Backups are recommended before reinstalling Windows, clearing site data, or switching browsers.

## Project structure

```text
cutcraft/
├── public/
│   └── cutcraft.svg
├── src/
│   ├── curriculum.js    # 45 assignments, phases, and project milestones
│   ├── main.jsx         # App state, navigation, pages, and interactions
│   └── style.css        # Responsive dark desktop-first design system
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js       # Vite + PWA configuration
```
