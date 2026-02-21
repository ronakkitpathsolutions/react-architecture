import { useNavigate } from 'react-router';
import { Button } from '@/components/ui';
import ICONS from '@/assets/icons';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex items-center justify-center h-[calc(100vh-66px)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">
          Welcome to the React Architecture
          <span className="ml-2 dark:text-cyan-600 text-cyan-500">2.0</span>
        </h1>
        <div className="flex items-center justify-center gap-3">
          <Button size="lg" onClick={() => navigate('/ui-kit')}>
            Explore UI Components
            <ICONS.ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/error-boundary')}
          >
            Explore Error Boundary
            <ICONS.ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
