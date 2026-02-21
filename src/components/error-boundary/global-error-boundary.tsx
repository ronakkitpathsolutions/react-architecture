import type { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { GlobalErrorFallback } from './global-error-fallback';
import { logError } from './error-logger';

/**
 * Global error boundary.
 *
 * Wraps the entire application (typically in `main.tsx` or `app.tsx`).
 * Catches any unhandled error that bubbles past component-level boundaries.
 *
 * @example
 * ```tsx
 * <GlobalErrorBoundary>
 *   <App />
 * </GlobalErrorBoundary>
 * ```
 */
const GlobalErrorBoundary = ({ children }: PropsWithChildren) => {
  return (
    <ErrorBoundary
      FallbackComponent={GlobalErrorFallback}
      onError={(error, info) => logError({ error, info, level: 'global' })}
    >
      {children}
    </ErrorBoundary>
  );
};

export { GlobalErrorBoundary };
