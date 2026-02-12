import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <div className="w-full h-screen border border-destructive p-4">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
