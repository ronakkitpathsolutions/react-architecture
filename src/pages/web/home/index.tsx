import { useNavigate } from 'react-router';
import { Button } from '@/components/ui';
import ICONS from '@/assets/icons';
import useT from '@/hooks/use-translation';

const Home = () => {
  const navigate = useNavigate();
  const t = useT('translation');

  return (
    <div className="w-full flex items-center justify-center h-[calc(100vh-66px)]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-8">
          {t('welcome_message')}
          <span className="ml-2 dark:text-cyan-600 text-cyan-500">2.0</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <Button size="lg" onClick={() => navigate('/ui-kit')}>
            {t('explore_components')}
            <ICONS.ArrowRight className="size-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate('/error-boundary')}
          >
            {t('explore_error_boundry')}
            <ICONS.ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
