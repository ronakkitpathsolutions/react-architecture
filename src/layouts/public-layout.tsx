import ThemeHeader from '@/components/ui/theme-header';
import { Outlet } from 'react-router';

const PublicLayout = () => {
  return (
    <div className="w-full">
      <ThemeHeader />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
