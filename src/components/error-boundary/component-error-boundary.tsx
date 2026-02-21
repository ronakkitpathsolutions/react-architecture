import type { PropsWithChildren } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './error-fallback';
import { logError } from './error-logger';

interface ComponentErrorBoundaryProps extends PropsWithChildren {
  /** Optional name to identify which section errored in logs. */
  name?: string;
  /** Called after the boundary resets — useful for clearing stale state. */
  onReset?: () => void;
}

/**
 * Component-level error boundary.
 *
 * Wrap individual sections, pages, or widgets with this component to
 * isolate failures without crashing the entire application.
 *
 * @example
 * ```tsx
 * <ComponentErrorBoundary name="Dashboard Chart">
 *   <RevenueChart />
 * </ComponentErrorBoundary>
 * ```
 */
const ComponentErrorBoundary = ({
  children,
  name,
  onReset,
}: ComponentErrorBoundaryProps) => {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, info) =>
        logError({ error, info, level: 'component', componentName: name })
      }
      onReset={onReset}
    >
      {children}
    </ErrorBoundary>
  );
};

export { ComponentErrorBoundary, type ComponentErrorBoundaryProps };
