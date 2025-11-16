import React from 'react';

const SectionDivider: React.FC = () => {
  return (
    <div className="py-20 sm:py-28" aria-hidden="true">
      <div className="w-24 h-px bg-zinc-200 dark:bg-zinc-800 mx-auto" />
    </div>
  );
};

export default SectionDivider;
