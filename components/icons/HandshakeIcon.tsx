import React from 'react';

const HandshakeIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6.75a5.25 5.25 0 0 1-1.353 3.596l-3.324 3.324a1.875 1.875 0 0 0-2.651 0l-.636.636a1.875 1.875 0 0 1-2.651 0l-3.42-3.42a1.875 1.875 0 0 1 0-2.651l.636-.636a1.875 1.875 0 0 0 0-2.651L4.146 4.146a1.875 1.875 0 0 0-2.651 0L.636 4.905a1.875 1.875 0 0 0 0 2.651l3.42 3.42" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.75 13.5 6.75" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 5.25-1.838-1.837a3.375 3.375 0 0 0-4.773 0l-1.42 1.42" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5 15 15" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M22.5 7.5 18 12" />
    </svg>
  );
};

export default HandshakeIcon;