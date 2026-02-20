import ThemeHeader from '@/components/ui/theme-header';
import { Outlet } from 'react-router';

const WebLayout = () => {
  return (
    <div className="w-full">
      <ThemeHeader />
      <div className="w-full border-dashed border-t">
        <div className="w-full max-w-7xl mx-auto border-dashed border-l border-r">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default WebLayout;
