import { AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Dedicated error page for route-level error states.
 *
 * Can be used as a standalone page (e.g. `/error`) when redirecting
 * from a caught error or when the router itself encounters an issue.
 */
const ErrorPage = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background px-4">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-destructive/10">
          <AlertCircle className="size-8 text-destructive" />
        </div>

        <div>
          <h1 className="text-4xl font-bold">Error</h1>
          <h2 className="mt-2 text-xl font-semibold">
            Oops! Something went wrong
          </h2>
          <p className="mt-3 text-muted-foreground">
            We encountered an unexpected error. Please try refreshing the page
            or return to the home page.
          </p>
        </div>

        <div className="flex gap-3">
          <Button variant="outline" onClick={() => window.location.reload()}>
            Refresh page
          </Button>
          <Button onClick={() => (window.location.href = '/')}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
