# EHINOVA Portfolio Website

A personal portfolio experience for **EHIAGWINA ANTHONY**, built to present selected work, profile depth, and contact channels with a calm, intentional visual system.

This project follows the EHINOVA brand direction:
- clear and strategic presentation
- editorial-inspired composition
- restrained use of accent color for emphasis

## Brand Alignment

The UI and content are structured around the EHINOVA design system:

- Primary Black: `#0B0F10`
- Insight Teal: `#0F8B8D`
- White: `#FFFFFF`
- Soft Grey: `#DDE5E8`
- Neutral Grey: `#6F7F87`

Typography strategy:
- Primary: **Sage Grotesk** for brand-led headings and key statements
- Secondary: **Poppins** for body copy and supporting information

Implementation references:
- Tokens and global design rules: `src/styles/base.css`
- Main stylesheet/font entry: `src/index.css`

## Tech Stack

- React 18
- Vite 8
- Framer Motion
- Lucide React
- Emotion (installed)

## Site Sections

- **Header**: sticky navigation with desktop/mobile behavior and animated entry
- **Hero**: positioning statement and availability status
- **Work**: selected projects and live links
- **About**: profile, experience snapshot, and capabilities
- **Clients**: looping collaborator marquee
- **Contact**: direct email CTA and social links

## Project Structure

```text
src/
	components/
		Header.jsx
		Hero.jsx
		Work.jsx
		About.jsx
		Clients.jsx
		Contact.jsx
	content/
		siteContent.js
	styles/
		base.css
		header.css
		hero.css
		work.css
		about.css
		clients.css
		contact.css
	App.jsx
	index.css
	index.jsx
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - run local development server
- `npm run build` - create production build output
- `npm run preview` - serve the production build locally
- `npm run lint` - run ESLint across `.js` and `.jsx` files

## Content Notes

- Core portfolio copy, project entries, nav links, clients, and socials are centralized in `src/content/siteContent.js`
- Section components in `src/components/` now render from the shared content module
- Brand tokens and theme rules remain in `src/styles/base.css`

## Deployment

This is a standard Vite app and can be deployed to platforms such as Vercel, Netlify, or any static hosting provider that supports SPA routing.

Recommended production flow:
1. Run `npm run lint`
2. Run `npm run build`
3. Deploy the generated `dist/` directory
