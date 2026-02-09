import { cn } from '@/utils/functions';

const Icon = ({ icon, className }: { icon: string; className?: string }) => {
  return (
    <span
      dangerouslySetInnerHTML={{ __html: icon || '' }}
      className={cn('flex text-black size-4', className)}
    />
  );
};

export default Icon;
