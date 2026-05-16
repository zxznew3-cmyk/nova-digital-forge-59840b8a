# Nova Digital Forge

A modern web application built with TanStack Start, React, and TypeScript. This project is deployed on Cloudflare Pages.

## Features

- ⚡ Fast development with Vite
- 🎨 Beautiful UI components from Radix UI
- 🎭 Smooth animations with Framer Motion
- 📱 Responsive design with Tailwind CSS
- 🗺️ Type-safe routing with TanStack Router
- 📊 Data visualization with Recharts
- 🔐 Form handling with React Hook Form & Zod validation
- ☁️ Deployed on Cloudflare Pages

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd nova-digital-forge

# Install dependencies
bun install
# or
npm install
# or
yarn install
```

### Development

```bash
bun run dev
# or
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Building

```bash
bun run build
# or
npm run build
```

### Preview Production Build

```bash
bun run preview
# or
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── nova/          # Page components
│   └── ui/            # Reusable UI components
├── routes/            # TanStack Router routes
├── hooks/             # Custom React hooks
├── lib/               # Utilities and helpers
├── server.ts          # Server configuration
├── router.tsx         # Router setup
└── styles.css         # Global styles
```

## Deployment

This project is configured for deployment on Cloudflare Pages.

### Configuration Files

- `wrangler.jsonc` - Cloudflare configuration
- `vite.config.ts` - Vite and build configuration
- `tsconfig.json` - TypeScript configuration

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build with development mode
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## License

MIT
