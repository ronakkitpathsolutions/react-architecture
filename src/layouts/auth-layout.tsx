import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className="w-full min-h-screen h-full flex">
      <div className="hidden md:flex md:w-2/3 items-center justify-center p-8 bg-primary">
        <div className="text-white text-center max-w-md">
          <h1 className="text-4xl font-bold mb-4">Primary Header</h1>
          <p className="text-lg opacity-90">Feature Header</p>
        </div>
      </div>
      <div className="w-full md:w-1/3 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-8">BRAND LOGO</div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
