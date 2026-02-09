import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <div className="w-full h-screen border border-dashed p-4">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
