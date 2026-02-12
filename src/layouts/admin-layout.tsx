import { Outlet } from 'react-router';

const AdminLayout = () => {
  return (
    <div className="w-full h-screen">
      <Outlet />
    </div>
  );
};

export default AdminLayout;
