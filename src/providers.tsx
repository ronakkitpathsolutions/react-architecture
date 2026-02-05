import { TooltipProvider } from '@/components/ui/tooltip';
import { DirectionProvider } from '@/components/ui/direction';
import { Toaster } from '@/components/ui/sonner';
import type { ReactNode } from 'react';

type AppProvidersProps = {
  children: ReactNode;
};

const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <DirectionProvider dir="ltr" direction="ltr">
      <TooltipProvider delayDuration={100}>
        {children}
        <Toaster position="top-right" />
      </TooltipProvider>
    </DirectionProvider>
  );
};

export default AppProviders;
