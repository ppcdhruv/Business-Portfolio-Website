import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, className }) => {
  const baseStyles = 'inline-flex items-center font-medium px-3 py-1 rounded-full text-sm bg-stone-100 text-stone-700 border border-stone-200/80 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-700/80';
  
  return (
    <span className={`${baseStyles} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;