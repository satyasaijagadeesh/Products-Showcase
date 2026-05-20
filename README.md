# Main Dark Centered

A modern Next.js + Tailwind CSS project with a dark-centered layout, a custom component library, and multiple app pages for products, cart, account, contact, and authentication.

## Project Overview

This repository is built with:

- `Next.js` 16
- `React` 19
- `Tailwind CSS` 4
- `TypeScript`
- `Radix UI` for accessible UI primitives
- `react-hook-form` for form handling
- `next-themes` for theme support
- `sonner` for toast notifications
- `recharts` for charts

## Key Features

- Multi-page application using the App Router
- Responsive dark-centered layout components
- Custom UI component library in `components/ui`
- Pages for products, cart, account, login, contact
- Shared context providers for authentication and cart state
- Tailwind + custom global styling

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production app
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint across the project

## Folder Structure

- `app/`
  - `globals.css` - Global styles for the app
  - `layout.tsx` - Root layout wrapper
  - `page.tsx` - Homepage
  - `about/page.tsx` - About page
  - `account/page.tsx` - Account page
  - `account/account-content.tsx` - Account content component
  - `cart/page.tsx` - Cart page
  - `cart/cart-content.tsx` - Cart content component
  - `contact/page.tsx` - Contact page
  - `contact/contact-form.tsx` - Contact form component
  - `login/page.tsx` - Login page
  - `login/login-form.tsx` - Login form component
  - `products/page.tsx` - Products list page
  - `products/products-content.tsx` - Products content component
  - `products/[id]/page.tsx` - Product detail page
  - `products/[id]/product-detail.tsx` - Product detail component

- `components/`
  - `header.tsx` - Site header
  - `footer.tsx` - Site footer
  - `product-card.tsx` - Product card component
  - `theme-provider.tsx` - Theme context provider
  - `ui/` - Reusable UI primitives and components

- `context/`
  - `auth-context.tsx` - Authentication context
  - `cart-context.tsx` - Cart state and context

- `hooks/`
  - `use-mobile.ts` - Mobile detection hook
  - `use-toast.ts` - Toast helper hook

- `lib/`
  - `products.ts` - Product data and helpers
  - `types.ts` - Shared type definitions
  - `utils.ts` - Utility helper functions

- `public/` - Static assets
- `styles/`
  - `globals.css` - Shared CSS styles

## Dependencies

Major dependencies used in this repo:

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `@tailwindcss/postcss`
- `@radix-ui/react-*`
- `clsx`
- `class-variance-authority`
- `react-hook-form`
- `zod`
- `recharts`
- `sonner`
- `next-themes`
- `date-fns`
- `lucide-react`
- `react-day-picker`
- `input-otp`
- `embla-carousel-react`
- `react-resizable-panels`

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open `http://localhost:3000` in your browser.

## Notes

- This project uses the Next.js App Router layout conventions.
- The `components/ui` folder contains reusable UI components based on Radix UI patterns.
- The `context` folder provides global state management for auth and cart.
- Adjust styles and theme handling in `components/theme-provider.tsx` and `app/globals.css`.

---

Generated README for the current project structure.
