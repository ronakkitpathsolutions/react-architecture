import { TooltipProvider } from '@/components/ui/tooltip';
import { RouterProvider } from 'react-router';
import { DirectionProvider } from '@/components/ui/direction';
import { Toaster } from '@/components/ui/sonner';
import router from './routes';

const AppProviders = () => {
  return (
    <DirectionProvider dir="ltr" direction="ltr">
      <TooltipProvider delayDuration={100}>
        <RouterProvider router={router} />
        <Toaster position="top-right" />
      </TooltipProvider>
    </DirectionProvider>
  );
};

export default AppProviders;
