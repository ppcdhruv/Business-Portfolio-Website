import React from 'react';

const WrenchIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.83-5.83M11.42 15.17l2.496-3.03c.317-.384.73-.664 1.192-.832l-2.496-3.03L11.42 15.17Zm-2.828 0L3 21A2.652 2.652 0 0 1 3 17.25l5.83-5.83M8.592 15.17l-2.496-3.03c-.317.384-.73.664-1.192.832l2.496 3.03Z" />
    </svg>
  );
};

export default WrenchIcon;