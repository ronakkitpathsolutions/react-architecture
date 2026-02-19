import { TooltipProvider } from '@/components/ui/tooltip';
import { RouterProvider } from 'react-router';
import { DirectionProvider } from '@/components/ui/direction';
import { Toaster } from '@/components/ui/sonner';
import router from './routes';
import AuthProvider from './auth/provider';

const AppProviders = () => {
  return (
    <DirectionProvider dir="ltr" direction="ltr">
      <TooltipProvider delayDuration={100}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
        <Toaster position="top-right" />
      </TooltipProvider>
    </DirectionProvider>
  );
};

export default AppProviders;
