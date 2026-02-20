import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
} from '@/components/ui';
import ThemeHeader from '@/components/ui/theme-header';
import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <SidebarProvider className="w-full">
      <Sidebar collapsible="icon">
        <SidebarHeader className="border-b border-dashed min-h-16">
          Header
        </SidebarHeader>
        <SidebarContent className="h-[calc(100vh-130px)]">
          Content
        </SidebarContent>
        <SidebarFooter className="border-t border-dashed min-h-16">
          Footer
        </SidebarFooter>
      </Sidebar>
      <div className="w-full">
        <ThemeHeader className="border-b max-w-full border-l-0 border-r-0" />
        <div className="w-full h-[calc(100vh-65px)] max-w-7xl mx-auto">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
