# Stratford Accounting

Business website for Stratford Accounting, rebuilt as a React + TypeScript + Vite project.

## Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **pnpm** (package manager)

## Getting Started

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Deploy

Works out of the box with **Cloudflare Pages** or **GitHub Pages** (point to the `dist/` folder after `pnpm build`).

## Project Structure

```
src/
  components/
    Nav.tsx        # Fixed navigation with scroll effect + mobile menu
    Hero.tsx       # Full-viewport hero section
    About.tsx      # Company profile with image
    Services.tsx   # Three service cards
    Clients.tsx    # Client roster grid
    Quote.tsx      # CEO quote + image
    Contact.tsx    # Contact details + form with submit state
    Footer.tsx     # Footer links
  App.tsx
  main.tsx
  index.css        # CSS variables & global reset
```
