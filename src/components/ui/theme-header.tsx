import { useTheme } from 'next-themes';
import { Button } from './button';
import ICONS from '@/assets/icons';
import { cn } from '@/utils/functions';

type ThemeHeaderProps = {
  className?: string;
};

const ThemeHeader = ({ className }: ThemeHeaderProps) => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={cn(
        'w-full min-h-16 border-s border-e max-w-7xl mx-auto border-dashed flex justify-between items-center px-4',
        className,
      )}
    >
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
