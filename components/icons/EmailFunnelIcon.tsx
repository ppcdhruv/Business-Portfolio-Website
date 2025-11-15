import React from 'react';

const EmailFunnelIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.86-1.113-6.478 3.488m0 0a2.25 2.25 0 0 1-2.356 0l-6.478-3.488m15.212-9.243L12 3.45m0 0L2.25 9h19.5z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75V21" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21h7.5" />
    </svg>
  );
};

export default EmailFunnelIcon;