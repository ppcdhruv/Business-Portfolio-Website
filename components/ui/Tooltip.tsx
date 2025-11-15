import React from 'react';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  return (
    <div className="relative group flex items-center">
      {children}
      <div className="absolute bottom-full mb-2 w-64 bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-200 text-xs font-medium rounded-md p-3 shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 pointer-events-none z-10 left-1/2 -translate-x-1/2">
        {content}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-zinc-900 dark:border-t-zinc-800"></div>
      </div>
    </div>
  );
};

export default Tooltip;