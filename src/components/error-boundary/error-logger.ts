/**
 * Centralized error logger for error boundaries.
 *
 * Replace the console calls with your preferred error-tracking service
 * (e.g. Sentry, LogRocket, Datadog) in production.
 */

interface ErrorLogPayload {
  error: unknown;
  info: React.ErrorInfo;
  level?: 'global' | 'component';
  componentName?: string;
}

const logError = ({
  error,
  info,
  level = 'component',
  componentName,
}: ErrorLogPayload): void => {
  const context = {
    level,
    componentName,
    componentStack: info.componentStack,
    timestamp: new Date().toISOString(),
  };

  if (import.meta.env.DEV) {
    console.group(`[ErrorBoundary] ${level} error`);
    console.error(error);
    console.info(context);
    console.groupEnd();
    return;
  }

  // TODO: Send to your error-tracking service in production
  // Example:
  // Sentry.captureException(error, { extra: context });
  // LogRocket.captureException(error, { extra: context });
};

export { logError, type ErrorLogPayload };
