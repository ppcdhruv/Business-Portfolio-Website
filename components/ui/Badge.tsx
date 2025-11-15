import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  const baseStyles = 'inline-flex items-center font-medium px-3 py-1 rounded-full text-sm bg-zinc-100 text-zinc-700 border border-zinc-200/80 dark:bg-zinc-800 dark:text-zinc-200 dark:border-zinc-700/80';
  
  return (
    <span className={`${baseStyles} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;