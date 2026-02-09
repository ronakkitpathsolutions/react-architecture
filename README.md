# React Architecture

An opinionated Vite + React + TypeScript starter with Tailwind v4, shadcn-style UI primitives, and a clean, scalable `src/` layout.

## Tech Stack

- React 19 + TypeScript
- Vite (rolldown-vite)
- Tailwind CSS v4 via `@tailwindcss/vite`
- TanStack Query + TanStack Table
- React Router
- React Hook Form + Zod
- UI primitives and utilities: Base UI, Radix, Vaul, cmdk, Sonner, Lucide

## Project Structure

```text
src/
  app.tsx
  main.tsx
  providers.tsx
  assets/
    icons/
    images/
    svgs/
  components/
    ui/
  hooks/
  layouts/
  services/
  utils/
    constants/
    functions/
    validations/
```

## Aliases

- `@` maps to `src` (see `vite.config.ts`)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` starts the dev server
- `npm run dev:stag` starts dev server in staging mode
- `npm run dev:prod` starts dev server in production mode
- `npm run build` runs type-check and builds for production
- `npm run preview` previews the production build
- `npm run lint` runs ESLint
- `npm run lint:fix` runs ESLint with auto-fix
- `npm run format` runs Prettier on the codebase
- `npm run format:check` checks formatting without writing

## Environment

Environment variables are defined in `.env` files. Use `.env.example` as a reference:

- `VITE_APP_ENV`
- `VITE_DEBUG_MODE`
- `VITE_PORT`
- `VITE_API_URL`

## Code Quality and Git Hooks

- ESLint and Prettier are configured for linting and formatting.
- Husky runs `lint-staged` on pre-commit.
- Commit messages are enforced with commitlint (Conventional Commits).
