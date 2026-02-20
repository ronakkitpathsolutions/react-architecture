import { TooltipProvider } from '@/components/ui/tooltip';
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
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
          <Toaster position="top-right" />
        </TooltipProvider>
      </DirectionProvider>
    </ThemeProvider>
  );
};

export default AppProviders;
