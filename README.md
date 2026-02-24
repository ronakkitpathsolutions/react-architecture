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
- Error boundaries (global + component-level) with ShadCN fallback UI
- Internationalization (i18n) with English, French, and Arabic (RTL) support
- Scalable, clean project structure
- Pre-configured ESLint, Prettier, Husky, lint-staged, and commitlint
- Environment variable support

---

## 🛠️ Tech Stack

| Category       | Stack/Library                              |
| -------------- | ------------------------------------------ |
| Framework      | React 19, TypeScript                       |
| Build Tool     | Vite (rolldown-vite)                       |
| Styling        | Tailwind CSS v4, shadcn/ui                 |
| UI Primitives  | Radix, Base UI, Sonner, Lucide, Vaul, cmdk |
| Data Fetching  | TanStack Query                             |
| Tables         | TanStack Table                             |
| Routing        | React Router                               |
| Forms          | React Hook Form, Zod                       |
| Error Handling | react-error-boundary                       |
| i18n           | i18next, react-i18next, HTTP backend       |
| Lint/Format    | ESLint, Prettier                           |
| Git Hooks      | Husky, lint-staged, commitlint             |

---

## 📁 Project Structure

```text
public/
  locales/
    en/
    fr/
    ar/
src/
  app.tsx
  main.tsx
  vite-env.d.ts
  assets/
    icons/
    images/
  auth/
  components/
    error-boundary/
      index.ts
      global-error-boundary.tsx
      component-error-boundary.tsx
      error-fallback.tsx
      global-error-fallback.tsx
      error-logger.ts
    language-selector/
    ui/
  hooks/
  i18n/
    index.ts
    types.d.ts
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
    error/
    web/
      error-boundary/
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

## 🛡️ Error Handling

The project includes a two-tier error boundary system powered by [`react-error-boundary`](https://github.com/bvaughn/react-error-boundary):

### Global Error Boundary

Wraps the entire application in `main.tsx`. Catches any unhandled error and renders a full-page fallback UI.

```tsx
// main.tsx
<GlobalErrorBoundary>
  <AppProviders />
</GlobalErrorBoundary>
```

### Component Error Boundary

Isolate errors at the section/widget level so one broken component doesn't crash the whole app:

```tsx
import { ComponentErrorBoundary } from '@/components/error-boundary';

<ComponentErrorBoundary name="Revenue Chart">
  <RevenueChart />
</ComponentErrorBoundary>;
```

### Files

| File                           | Purpose                                                         |
| ------------------------------ | --------------------------------------------------------------- |
| `global-error-boundary.tsx`    | Root-level boundary (wraps entire app)                          |
| `component-error-boundary.tsx` | Reusable boundary for sections/widgets                          |
| `error-fallback.tsx`           | Compact Card-based ShadCN fallback for component errors         |
| `global-error-fallback.tsx`    | Full-page ShadCN fallback for critical/global errors            |
| `error-logger.ts`              | Centralized `onError` handler (plug in Sentry, LogRocket, etc.) |
| `pages/error/index.tsx`        | Standalone error page for route-level error states              |

> In development mode, error details (name + message) are displayed in the fallback UI for easier debugging.

---

## 🌐 Internationalization (i18n)

The project ships with full internationalization powered by [i18next](https://www.i18next.com/) and [react-i18next](https://react.i18next.com/).

### Supported Languages

| Language | Code | Direction |
| -------- | ---- | --------- |
| English  | `en` | LTR       |
| Français | `fr` | LTR       |
| العربية  | `ar` | RTL       |

### How It Works

1. **Translation files** live in `public/locales/{lng}/{ns}.json` and are loaded at runtime via `i18next-http-backend`.
2. **Language detection** uses `i18next-browser-languagedetector` (checks `localStorage` → browser language → `<html lang>`).
3. **RTL support** — When the language changes, the `dir` and `lang` attributes on `<html>` are updated automatically, so Tailwind's `rtl:` / `ltr:` utilities work out of the box.
4. **Type-safe keys** — `src/i18n/types.d.ts` augments i18next's `CustomTypeOptions` to infer key types from the English JSON files, giving full autocompletion in `t()` calls.

### Namespaces

| Namespace     | File               | Purpose                         |
| ------------- | ------------------ | ------------------------------- |
| `translation` | `translation.json` | Default — all page/UI strings   |
| `common`      | `common.json`      | Shared strings (logo, app name) |

### Usage

```tsx
import useT from '@/hooks/use-translation';

const MyComponent = () => {
  const t = useT(); // default namespace
  // const t = useT('common') // explicit namespace

  return <h1>{t('uiKit.title')}</h1>;
};
```

### Language Selector

A ready-made `<LanguageSelector />` dropdown (shadcn `DropdownMenu`) is provided at `src/components/language-selector/`. It lists all configured languages and highlights the active one.

### i18n Configuration Files

| File / Folder                       | Purpose                                              |
| ----------------------------------- | ---------------------------------------------------- |
| `public/locales/{en,fr,ar}/*.json`  | Translation JSON files per language and namespace    |
| `src/i18n/index.ts`                 | i18next initialization and configuration             |
| `src/i18n/types.d.ts`               | TypeScript module augmentation for type-safe keys    |
| `src/hooks/use-translation.ts`      | `useT()` — type-safe wrapper around `useTranslation` |
| `src/utils/constants/languages.ts`  | Language list, RTL list, namespace constants         |
| `src/components/language-selector/` | Language switcher UI component                       |

### Adding a New Language

1. Create a new folder under `public/locales/` (e.g. `es/`) with `translation.json` and `common.json`.
2. Add the language entry to the `LANGUAGES` and `SUPPORTED_LANGS` arrays in `src/utils/constants/languages.ts`.
3. If the language is RTL, add its code to the `RTL_LANGS` array.

---

## 🧹 Code Quality and Git Hooks

- ESLint and Prettier for linting and formatting
- Husky runs lint-staged on pre-commit
- Commit messages enforced with commitlint (Conventional Commits)
