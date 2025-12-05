# Gemify Website

Marketing website for Gemify Shopify apps, built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS 4** - Styling
- **React Router 7** - Client-side routing
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/          # Shared components
│   ├── header.tsx      # Site header
│   ├── footer.tsx      # Site footer
│   └── layout.tsx      # Page layout wrapper
├── pages/              # Page components
│   ├── home-page.tsx   # Landing page
│   ├── faq-page.tsx    # FAQ page
│   ├── privacy-policy-page.tsx  # Privacy policy
│   └── default-address-lock-page.tsx  # App details page
├── App.tsx             # Root component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
public/
└── resources/          # Static assets (images, icons)
```

## Routes

- `/` - Home page
- `/faq` - FAQ page
- `/privacy-policy` - Privacy policy
- `/apps/default-address-lock` - Default Address Lock app details

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Apps Featured

1. **Bulk Delete Orders** - Efficiently delete multiple Shopify orders at once
2. **Default Address Lock** - Prevent Shopify from overwriting customer default addresses (Coming Soon)
