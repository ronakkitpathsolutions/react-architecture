import { useTheme } from 'next-themes';
import { Button } from './button';
import ICONS from '@/assets/icons';

const ThemeHeader = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="w-full min-h-16 border-b border-dashed flex justify-between items-center px-4">
      <div className="text-base font-medium">Logo</div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? (
          <ICONS.Sun className="size-4" />
        ) : (
          <ICONS.Moon className="size-4" />
        )}
      </Button>
    </div>
  );
};

export default ThemeHeader;
