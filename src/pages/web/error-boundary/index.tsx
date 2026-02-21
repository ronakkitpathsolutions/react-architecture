import { useState } from 'react';
import { ComponentErrorBoundary } from '@/components/error-boundary';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle, Bug, ShieldAlert, ShieldCheck } from 'lucide-react';

// ─── Buggy component that throws on demand ─────────────────
const BuggyCounter = () => {
  const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error(
      'Counter crashed! The component threw an error when count reached 3.',
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bug className="size-5 text-destructive" />
          Buggy Counter
        </CardTitle>
        <CardDescription>
          Click the button below. The component will crash when the count
          reaches <strong>3</strong>.
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <p className="text-2xl font-bold tabular-nums">{count}</p>
        <Button variant="destructive" onClick={() => setCount((c) => c + 1)}>
          Increment ({count}/3)
        </Button>
      </CardFooter>
    </Card>
  );
};

// ─── Safe component ─────────────────────────────────────────
const SafeWidget = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShieldCheck className="size-5 text-green-600" />
          Safe Widget
        </CardTitle>
        <CardDescription>
          This component is unaffected by the crash above. It continues working
          because it lives outside the errored boundary.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Component-level error boundaries isolate failures so the rest of the
          page still works.
        </p>
      </CardFooter>
    </Card>
  );
};

// ─── Page ───────────────────────────────────────────────────
const ErrorBoundaryDemo = () => {
  return (
    <div className="flex w-full flex-col h-[calc(100vh-66px)] border-t border-dashed">
      <div className="mx-auto w-full max-w-7xl border border-t-0 border-b-0 border-dashed">
        <div className="w-full max-w-3xl space-y-6 px-4 py-12 mx-auto">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              Error Boundary Demo
            </h1>
            <p className="text-muted-foreground">
              See how{' '}
              <code
                onClick={() =>
                  window.open(
                    'https://www.npmjs.com/package/react-error-boundary',
                  )
                }
                className="text-sm font-semibold cursor-pointer text-cyan-500 dark:text-cyan-600"
              >
                react-error-boundary
              </code>{' '}
              catches component errors without crashing the entire application.
            </p>
          </div>

          {/* How it works */}
          <Alert>
            <ShieldAlert className="size-4" />
            <AlertTitle>How it works</AlertTitle>
            <AlertDescription className="mt-1 space-y-1 text-sm">
              <p>
                <strong>Global Error Boundary</strong> — wraps the entire app in{' '}
                <code>main.tsx</code>. Catches any unhandled error and shows a
                full-page fallback.
              </p>
              <p>
                <strong>Component Error Boundary</strong> — wraps individual
                sections. Only the wrapped section shows a fallback; the rest of
                the page keeps working.
              </p>
            </AlertDescription>
          </Alert>

          {/* Demo grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Wrapped in ComponentErrorBoundary — will recover */}
            <ComponentErrorBoundary name="BuggyCounter">
              <BuggyCounter />
            </ComponentErrorBoundary>

            {/* Not wrapped — always renders fine */}
            <SafeWidget />
          </div>

          {/* Instructions */}
          <Alert variant="destructive">
            <AlertCircle className="size-4" />
            <AlertTitle>Try it out</AlertTitle>
            <AlertDescription className="mt-1 text-sm">
              Click <strong>"Increment"</strong> until the counter reaches 3.
              The left card will crash and show a fallback with a{' '}
              <strong>"Try again"</strong> button, while the right card remains
              untouched.
            </AlertDescription>
          </Alert>
        </div>
      </div>
      <div className="w-full flex-1 border-dashed border-t">
        <div className="mx-auto h-full max-w-7xl border border-t-0 border-b-0 border-dashed"></div>
      </div>
    </div>
  );
};

export default ErrorBoundaryDemo;
