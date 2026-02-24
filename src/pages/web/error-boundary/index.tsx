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
import ICONS from '@/assets/icons';
import useT from '@/hooks/use-translation';

// ─── Buggy component that throws on demand ─────────────────
const BuggyCounter = () => {
  const t = useT();
  const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error(t('errorBoundary.buggyCounter.errorMessage'));
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ICONS.Bug className="size-5 text-destructive" />
          {t('errorBoundary.buggyCounter.title')}
        </CardTitle>
        <CardDescription>
          {t('errorBoundary.buggyCounter.descriptionPrefix')} <strong>3</strong>
          {t('errorBoundary.buggyCounter.descriptionSuffix')}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-between">
        <p className="text-2xl font-bold tabular-nums">{count}</p>
        <Button variant="destructive" onClick={() => setCount((c) => c + 1)}>
          {t('errorBoundary.buggyCounter.increment', { count })}
        </Button>
      </CardFooter>
    </Card>
  );
};

// ─── Safe component ─────────────────────────────────────────
const SafeWidget = () => {
  const t = useT();
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ICONS.ShieldCheck className="size-5 text-green-600" />
          {t('errorBoundary.safeWidget.title')}
        </CardTitle>
        <CardDescription>
          {t('errorBoundary.safeWidget.description')}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          {t('errorBoundary.safeWidget.footer')}
        </p>
      </CardFooter>
    </Card>
  );
};

// ─── Page ───────────────────────────────────────────────────
const ErrorBoundaryDemo = () => {
  const t = useT();
  return (
    <div className="flex w-full flex-col h-[calc(100vh-66px)] border-t border-dashed">
      <div className="mx-auto w-full max-w-7xl border border-t-0 border-b-0 border-dashed">
        <div className="w-full max-w-3xl space-y-6 px-4 py-12 mx-auto">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight">
              {t('errorBoundary.title')}
            </h1>
            <p className="text-muted-foreground">
              {t('errorBoundary.descriptionPrefix')}{' '}
              <code
                onClick={() =>
                  window.open(
                    'https://www.npmjs.com/package/react-error-boundary',
                  )
                }
                className="text-sm font-semibold cursor-pointer text-cyan-500 dark:text-cyan-600"
              >
                {t('errorBoundary.descriptionLib')}
              </code>{' '}
              {t('errorBoundary.descriptionSuffix')}
            </p>
          </div>

          {/* How it works */}
          <Alert>
            <ICONS.ShieldAlert className="size-4" />
            <AlertTitle>{t('errorBoundary.howItWorks')}</AlertTitle>
            <AlertDescription className="mt-1 space-y-1 text-sm">
              <p>
                <strong>{t('errorBoundary.globalBoundary')}</strong> —{' '}
                {t('errorBoundary.globalBoundaryPrefix')}{' '}
                <code>{t('errorBoundary.globalBoundaryFile')}</code>
                {t('errorBoundary.globalBoundarySuffix')}
              </p>
              <p>
                <strong>{t('errorBoundary.componentBoundary')}</strong> —{' '}
                {t('errorBoundary.componentBoundaryDesc')}
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
            <ICONS.AlertCircle className="size-4" />
            <AlertTitle>{t('errorBoundary.tryItOut')}</AlertTitle>
            <AlertDescription className="mt-1 text-sm">
              {t('errorBoundary.tryItOutPrefix')}{' '}
              <strong>{t('errorBoundary.tryItOutIncrement')}</strong>{' '}
              {t('errorBoundary.tryItOutMiddle')}{' '}
              <strong>{t('errorBoundary.tryItOutTryAgain')}</strong>{' '}
              {t('errorBoundary.tryItOutSuffix')}
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
