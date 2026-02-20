import { useNavigate } from 'react-router';
import { NotFound } from '@/assets/images';
import { Button } from '@/components/ui/button';
import { WEB_ROUTES } from '@/routes/routes';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen">
      <div className="flex flex-col items-center justify-center h-full gap-6">
        <NotFound className="w-64 h-64" />
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">404</h1>
          <h2 className="text-2xl font-semibold mb-3">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-sm">
            The page you are looking for does not exist or has been moved.
            Please return to the home page to continue.
          </p>
        </div>
        <Button
          onClick={() => navigate(WEB_ROUTES.landing.path)}
          size="lg"
          className="px-8"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
