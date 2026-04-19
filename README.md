# InspireHope Foundation

Frontend project for the InspireHope Foundation website and platform landing experience.

## Current Progress

The project currently includes:

- A React + Vite single-page frontend
- A polished landing page for InspireHope Foundation
- Responsive hero, impact, programs, members, events, FAQ, and contact sections
- A sticky navbar
- A mobile hamburger menu with a slide-down navigation panel
- Improved mobile nav spacing and layout, including a full-width `Get Involved` item
- Netlify deployment configuration for the app folder

## Project Structure

- `inspireHope-frontend/` - main frontend application
- `netlify.toml` - root Netlify configuration pointing to the frontend app

## Tech Stack

- React
- Vite
- CSS

## Local Development

From the frontend folder:

```bash
cd inspireHope-frontend
npm install
npm run dev
```

To enable the contact form, create `inspireHope-frontend/.env` and add:

```bash
VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
VITE_PAYSTACK_PUBLIC_KEY=pk_test_your_public_key
```

You can copy the value from `inspireHope-frontend/.env.example` after creating a Formspree form.

## Production Build

```bash
cd inspireHope-frontend
npm run build
```

## Netlify Deployment

This repository is configured for Netlify.

Important settings:

- Base directory: `inspireHope-frontend`
- Build command: `npm run build`
- Publish directory: `dist`

Also included:

- `inspireHope-frontend/public/_redirects` for SPA routing
- root `netlify.toml` for repo-level Netlify setup

## Main Frontend Files

- `inspireHope-frontend/src/App.jsx` - page content and navigation behavior
- `inspireHope-frontend/src/App.css` - component/page styling and responsive layout
- `inspireHope-frontend/src/index.css` - global theme and base styles
