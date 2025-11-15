import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, className = '' }) => {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;