# replit.md

## Overview

This is a personal portfolio website built with Next.js 16. It showcases a developer's projects, skills, and contact information through a modern, animated single-page application. The site features a dark theme with smooth scroll animations powered by Framer Motion, presenting the developer as a "Lead Engineer & Digital Architect" specializing in full-stack development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 16** with the App Router pattern (using the `app/` directory structure)
- **React 19** with client-side components for interactive sections
- TypeScript for type safety throughout the codebase

### Styling Approach
- **Tailwind CSS v4** with PostCSS integration
- Custom CSS variables for theming (dark theme with `#050505` background)
- Utility function `cn()` combining `clsx` and `tailwind-merge` for conditional class handling
- Google Inter font loaded via `next/font`

### Animation System
- **Framer Motion** (alpha v12) for scroll-based animations and transitions
- Uses `useScroll` and `useTransform` hooks for parallax effects

### Component Structure
- Single-page application with all content in `app/page.tsx`
- Client-side rendering directive (`'use client'`) for interactive components
- Lucide React for iconography

### Project Organization
- `app/` - Next.js App Router pages and layouts
- `lib/` - Shared utilities (currently just the `cn` helper)
- Path alias `@/*` configured for clean imports from project root

## External Dependencies

### UI Libraries
- **lucide-react** - Icon library for visual elements
- **framer-motion** - Animation and gesture library
- **clsx** + **tailwind-merge** - Utility class management

### External Assets
- Images loaded from Unsplash CDN for project showcases
- No database or backend services currently configured
- No authentication system in place
- No external API integrations

### Build & Development
- ESLint with Next.js config for code quality
- TypeScript strict mode enabled
- Development server runs on port 3000