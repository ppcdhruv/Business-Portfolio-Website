import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative bg-white/70 dark:bg-zinc-900/70 backdrop-blur-lg border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-6 sm:p-8 transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-zinc-200/50 dark:hover:shadow-black/20 hover:dark:bg-zinc-800/60 hover:dark:border-zinc-700/80 ${className}`}>
      {children}
    </div>
  );
};

export default BentoCard;