import { TooltipProvider } from '@/components/ui/tooltip';
import { Analytics } from '@vercel/analytics/react';
import { GlobalErrorBoundary } from '@/components/error-boundary';
import { RouterProvider } from 'react-router';
import { DirectionProvider } from '@/components/ui/direction';
import { Toaster } from '@/components/ui/sonner';
import { ThemeProvider } from 'next-themes';
import { useTranslation } from 'react-i18next';
import { getDirection } from '@/i18n';
import router from './routes';
import AuthProvider from './auth/provider';

const AppProviders = () => {
  const { i18n } = useTranslation();
  const dir = getDirection(i18n.language);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <DirectionProvider dir={dir}>
        <TooltipProvider delayDuration={100}>
          <GlobalErrorBoundary>
            <AuthProvider>
              <RouterProvider router={router} />
            </AuthProvider>
          </GlobalErrorBoundary>

          {/* Global UI utilities */}
          <Toaster
            position={dir === 'rtl' ? 'top-left' : 'top-right'}
            dir={dir}
          />
          <Analytics />
        </TooltipProvider>
      </DirectionProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
