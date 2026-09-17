# summit-demo

A website demo built for Falcon Roofing, a local roofing company, to showcase its services and projects and help visitors get in touch.

Most of the skeleton components were pre-built by Relume. I made the styling choices to match the Falcon Roofing logo and give the website a consistent visual identity.

## Tech stack

- React 18 with Vite
- Tailwind CSS and Relume UI components
- React Router for navigation
- Framer Motion and Embla Carousel Autoplay for animations and carousels
- ESLint for code checks

## Getting started

### Prerequisites

- Node.js 24.x (Node.js 22.13.0 or newer within the 22.x release line also meets the tooling requirements).
- npm, included with Node.js.
- Git to clone your fork.

### Install and run

1. Fork this repository, then clone your fork. Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` with your fork's GitHub owner and repository name:

   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git summit-demo
   cd summit-demo
   ```

2. Install all application and development dependencies using the committed lockfile:

   ```bash
   npm ci
   ```

   This installs the dependencies automatically; you do not need to install React, Relume, Tailwind, Vite, or other project tools globally.

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the local URL printed in your terminal.

No environment variables or API keys are required to run the demo locally. Some images load from Cloudinary, and fonts load from Google Fonts, so an internet connection is needed for those assets.

On Windows, if PowerShell blocks `npm.ps1`, use `npm.cmd` in place of `npm` in the commands above and below.

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server. |
| `npm run build` | Build the production site into `dist/`. |
| `npm run preview` | Preview the production build locally after running `npm run build`. |
| `npm run lint` | Run ESLint checks. |
| `npm run deploy` | Build and deploy to Cloudflare using Wrangler. Requires Cloudflare authentication and configuration for your own deployment in `wrangler.jsonc`. |

## Demo notes

The contact form currently simulates a submission and does not send messages to a backend. If you adapt this demo for another business, update the branding, images, contact details, and links, and connect the form to your chosen submission service.
