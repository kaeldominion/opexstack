# OpexStack Website

A modern single-page website for OpexStack, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Terminal/code block aesthetic throughout
- 🌓 Light and dark mode with smooth transitions
- ✨ Parallax scrolling effects
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🖼️ Optimized images with Next.js Image

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

The development server runs on port 3004:

```bash
npm run dev
```

Open [http://localhost:3004](http://localhost:3004) in your browser.

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

## Deployment to Vercel

This project is configured for easy deployment to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Project Structure

- `app/` - Next.js app directory with pages and layouts
- `components/` - React components for each section
- `contexts/` - React context providers (Theme)
- `public/images/` - Static images and assets
- `app/globals.css` - Global styles with Tailwind CSS
- `tailwind.config.ts` - Tailwind configuration with brand colors
