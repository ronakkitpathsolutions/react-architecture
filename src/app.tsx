import { TooltipProvider } from '@/components/ui/tooltip';
import { Analytics } from '@vercel/analytics/react';
import { GlobalErrorBoundary } from '@/components/error-boundary';
import { RouterProvider } from 'react-router';
import { DirectionProvider } from '@/components/ui/direction';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import router from './routes';
import AuthProvider from './auth/provider';

const AppProviders = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DirectionProvider dir="ltr" direction="ltr">
        <TooltipProvider delayDuration={100}>
          <GlobalErrorBoundary>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </GlobalErrorBoundary>

          {/* Global UI utilities */}
          <Toaster position="top-right" />
          <Analytics />
        </TooltipProvider>
      </DirectionProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
