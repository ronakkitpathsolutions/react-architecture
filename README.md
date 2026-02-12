# React Architecture

An opinionated Vite + React + TypeScript starter with Tailwind v4, shadcn-style UI primitives, and a clean, scalable `src/` layout.

---

## 🚀 Features

- Modern React 19 with TypeScript
- Vite for fast development and builds
- Tailwind CSS v4 for utility-first styling
- shadcn-style UI primitives (Radix, Base UI, Sonner, Lucide, Vaul, cmdk)
- TanStack Query & Table for data fetching and tables
- React Router for routing
- React Hook Form & Zod for forms and validation
- Scalable, clean project structure
- Pre-configured ESLint, Prettier, Husky, lint-staged, and commitlint
- Environment variable support

---

## 🛠️ Tech Stack

| Category      | Stack/Library                              |
| ------------- | ------------------------------------------ |
| Framework     | React 19, TypeScript                       |
| Build Tool    | Vite (rolldown-vite)                       |
| Styling       | Tailwind CSS v4, shadcn/ui                 |
| UI Primitives | Radix, Base UI, Sonner, Lucide, Vaul, cmdk |
| Data Fetching | TanStack Query                             |
| Tables        | TanStack Table                             |
| Routing       | React Router                               |
| Forms         | React Hook Form, Zod                       |
| Lint/Format   | ESLint, Prettier                           |
| Git Hooks     | Husky, lint-staged, commitlint             |

---

## 📁 Project Structure

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

## 🏷️ Aliases

- `@` maps to `src` (see vite.config.ts)

---

## 🏁 Getting Started

```bash
npm install
npm run dev
```

---

## 📜 Scripts

- `npm run dev` — start the dev server
- `npm run dev:stag` — dev server in staging mode
- `npm run dev:prod` — dev server in production mode
- `npm run build` — type-check and build for production
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint
- `npm run lint:fix` — ESLint with auto-fix
- `npm run format` — run Prettier
- `npm run format:check` — check formatting

---

## 🌱 Environment

Environment variables are defined in `.env` files. Use `.env.example` as a reference:

- `VITE_APP_ENV`
- `VITE_DEBUG_MODE`
- `VITE_PORT`
- `VITE_API_URL`

---

## 🧹 Code Quality and Git Hooks

- ESLint and Prettier for linting and formatting
- Husky runs lint-staged on pre-commit
- Commit messages enforced with commitlint (Conventional Commits)
