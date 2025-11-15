import React from 'react';

interface SectionHeaderProps {
  title: React.ReactNode;
  description: React.ReactNode;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, className = '' }) => {
  return (
    <div className={`text-center max-w-3xl mx-auto ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-stone-900 dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-lg text-stone-600 dark:text-stone-400">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;