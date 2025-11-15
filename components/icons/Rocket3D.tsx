import React from 'react';

const Rocket3D: React.FC<{ className?: string }> = ({ className = 'w-16 h-16' }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="rocketBodyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'rgb(241, 245, 249)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgb(203, 213, 225)', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="rocketBodyGradientDark" x1="0%" y1="0%" x2="100%" y2="0%">
           <stop offset="0%" stopColor="#4a5568" />
           <stop offset="100%" stopColor="#2d3748" />
        </linearGradient>
        <style>
          {`
            .flame {
              animation: flicker 0.5s ease-in-out infinite alternate;
              transform-origin: 50% 100%;
            }
            .smoke {
              animation: smoke-plume 2s ease-out infinite;
              opacity: 0;
            }
            @keyframes flicker {
              0% { transform: scaleY(1) skewX(0); opacity: 1; }
              50% { transform: scaleY(1.1) skewX(5deg); opacity: 0.8; }
              100% { transform: scaleY(0.95) skewX(-5deg); opacity: 1; }
            }
            @keyframes smoke-plume {
              0% { transform: translateY(0) scale(0.5); opacity: 0.5; }
              100% { transform: translateY(20px) scale(1.5); opacity: 0; }
            }
            .smoke-1 { animation-delay: 0s; }
            .smoke-2 { animation-delay: 0.5s; }
            .smoke-3 { animation-delay: 1s; }
            .dark .light-gradient { fill: url(#rocketBodyGradientDark); }
            .dark .light-color { fill: #4a5568; }
            .dark .window-color { fill: #a0aec0; }
            .dark .fin-color { fill: #718096; }
          `}
        </style>
      </defs>

      {/* Smoke */}
      <g>
        <circle cx="50" cy="95" r="5" fill="#e2e8f0" className="smoke smoke-1 dark:fill-zinc-700" />
        <circle cx="45" cy="98" r="4" fill="#e2e8f0" className="smoke smoke-2 dark:fill-zinc-700" />
        <circle cx="55" cy="98" r="4" fill="#e2e8f0" className="smoke smoke-3 dark:fill-zinc-700" />
      </g>
      
      {/* Flames */}
      <g className="flame">
        <path d="M40 85 C 45 95, 55 95, 60 85 L 50 100 Z" fill="#f59e0b" />
        <path d="M44 85 C 47 92, 53 92, 56 85 L 50 95 Z" fill="#fca5a5" />
      </g>
      
      {/* Rocket Body */}
      <g>
        {/* Left Fin */}
        <path d="M30 60 L15 85 L35 85 Z" fill="#cbd5e1" className="fin-color" />
        {/* Right Fin */}
        <path d="M70 60 L85 85 L65 85 Z" fill="#cbd5e1" className="fin-color" />
        {/* Main Body */}
        <path d="M35 85 C 35 90, 65 90, 65 85 V 30 C 65 10, 35 10, 35 30 Z" fill="url(#rocketBodyGradient)" className="light-gradient" />
        {/* Nose Cone */}
        <path d="M35 30 C 35 15, 65 15, 65 30 L 50 5 Z" fill="#ef4444" />
        {/* Window */}
        <circle cx="50" cy="45" r="8" fill="#e0f2fe" className="window-color" stroke="#94a3b8" strokeWidth="1.5" />
      </g>
    </svg>
  );
};
export default Rocket3D;
