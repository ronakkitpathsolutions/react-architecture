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
  vite-env.d.ts
  assets/
    icons/
    images/
  auth/
  components/
    ui/
  hooks/
  layouts/
  pages/
    404/
    admin/
      dashboard/
      product-management/
      profile/
      user-management/
    auth/
      forgot-password/
      login/
      register/
      reset-password/
    web/
      home/
      privacy-policy/
      terms-of-services/
      ui-kit/
  routes/
  services/
  styles/
  types/
  utils/
    configs/
    constants/
    functions/
    validations/
```

## 🏷️ Aliases

- `@` maps to `src` (see vite.config.ts)

---

## 🏁 Getting Started

```bash
bun install
bun run dev
```

---

## 📜 Scripts

- `bun run dev` — start the dev server
- `bun run dev:stag` — dev server in staging mode
- `bun run dev:prod` — dev server in production mode
- `bun run build` — type-check and build for production
- `bun run preview` — preview the production build
- `bun run lint` — run ESLint
- `bun run lint:fix` — ESLint with auto-fix
- `bun run format` — run Prettier
- `bun run format:check` — check formatting

---

## 🌱 Environment

Environment variables are defined in `.env` files. Use `.env.example` as a reference:

- `VITE_APP_ENV`
- `VITE_DEBUG_MODE`
- `VITE_PORT`
- `VITE_API_URL`

---

## 📦 Bun Configuration

This project uses [Bun](https://bun.sh) as the JavaScript runtime and package manager. Configuration is defined in `bunfig.toml`:

```toml
[install]
# Use the lockfile for deterministic installs
saveTextLockfile = true

[install.cache]
# Enable global cache for faster installs
disable = false

[run]
# Silence lifecycle scripts output
silent = false
```

**Key options:**

| Option                          | Description                                                  |
| ------------------------------- | ------------------------------------------------------------ |
| `install.saveTextLockfile`      | Generates a human-readable text lockfile for reproducibility |
| `install.cache.disable = false` | Leverages Bun's global cache to speed up repeated installs   |
| `run.silent`                    | Controls whether lifecycle script output is printed          |

> Use `bun install` to install dependencies and `bun run dev` to start the dev server.

---

## ⚡ Build Optimization

### Bundle Visualization

The build pipeline includes [`rollup-plugin-visualizer`](https://github.com/btd/rollup-plugin-visualizer) to generate an interactive treemap of your production bundle. After running a build, a report is automatically opened in your browser:

```ts
// vite.config.ts
visualizer({
  open: true, // Automatically opens browser
  gzipSize: true, // Shows gzip size
  brotliSize: true, // Shows brotli size
  filename: 'dist/stats.html', // Output file
});
```

Run `bun run build` and inspect `dist/stats.html` to identify large dependencies and optimize accordingly.

### Manual Chunks

To keep bundle sizes predictable and leverage browser caching, vendor dependencies are split into logical chunks via `rollupOptions.output.manualChunks`:

| Chunk Name   | Includes                                         |
| ------------ | ------------------------------------------------ |
| `react-core` | `react`, `react-dom`                             |
| `router`     | `react-router`                                   |
| `tanstack`   | `@tanstack/react-query`, `@tanstack/react-table` |
| `forms`      | `react-hook-form`, `@hookform/resolvers`         |
| `ui-system`  | `@base-ui`, `radix-ui`, `vaul`, `cmdk`           |
| `validation` | `zod`                                            |
| `date-utils` | `date-fns`                                       |
| `icons`      | `lucide-react`                                   |
| `vendor`     | All other `node_modules` dependencies            |

The chunk size warning limit is set to **800 kB** (`chunkSizeWarningLimit: 800`).

```ts
// vite.config.ts (simplified)
build: {
  chunkSizeWarningLimit: 800,
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (!id.includes('node_modules')) return;

        if (id.includes('react'))          return 'react-core';
        if (id.includes('react-router'))   return 'router';
        if (id.includes('@tanstack'))      return 'tanstack';
        if (id.includes('react-hook-form') || id.includes('@hookform'))
                                           return 'forms';
        if (id.includes('@base-ui') || id.includes('radix-ui')
            || id.includes('vaul') || id.includes('cmdk'))
                                           return 'ui-system';
        if (id.includes('zod'))            return 'validation';
        if (id.includes('date-fns'))       return 'date-utils';
        if (id.includes('lucide-react'))   return 'icons';

        return 'vendor';
      },
    },
  },
}
```

**Benefits:**

- **Better caching** — Rarely-changing vendors (React, Radix) are cached separately from frequently-changing app code.
- **Parallel loading** — Smaller, named chunks can be fetched in parallel by the browser.
- **Easier debugging** — The visualizer report makes it straightforward to spot bloated dependencies.

---

## 🧹 Code Quality and Git Hooks

- ESLint and Prettier for linting and formatting
- Husky runs lint-staged on pre-commit
- Commit messages enforced with commitlint (Conventional Commits)
