import React from 'react';
import { motion } from 'framer-motion';

const ShieldIcon: React.FC<{ className?: string; animate?: boolean }> = ({ className = 'w-10 h-10', animate = false }) => {
  const pathData = "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008H12v-.008z";

  return (
    <svg 
      className={className} 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={1.5} 
    >
      <defs>
        <clipPath id="shieldFillClip">
          <motion.rect
            x="0"
            y="24"
            width="24"
            height="24"
            initial={{ y: 24 }}
            animate={animate ? { y: 0 } : { y: 24 }}
            transition={{ duration: 1, ease: 'circOut' }}
          />
        </clipPath>
      </defs>
      {/* Base outline */}
      <path strokeLinecap="round" strokeLinejoin="round" d={pathData} className="stroke-zinc-600 dark:stroke-zinc-400" />
      
      {/* Animated fill layer */}
      <g clipPath="url(#shieldFillClip)">
        <path
          d={pathData}
          className="fill-green-500/20 stroke-green-600 dark:stroke-green-500"
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default ShieldIcon;