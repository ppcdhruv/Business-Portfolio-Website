import React, { useState, useEffect } from 'react';

interface AnimatedNumberProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  currency?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, prefix = '', suffix = '', decimals = 0, currency = false }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0; // Always start from 0 for a clean animation on view
    const end = value;
    if (start === end) return;

    const duration = 1200; // A smoother, fixed duration
    let startTime: number | null = null;
    
    // Easing function for a smoother animation curve
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      const nextValue = start + (end - start) * easedProgress;
      setDisplayValue(nextValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(end); // Ensure it ends on the exact value
      }
    };
    
    const animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value]); // Rerun only when the target `value` changes

  const formatValue = (val: number) => {
    if (currency) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(val);
    }

     const formatted = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(val);

    return `${prefix}${formatted}${suffix}`;
  }

  return <span>{formatValue(displayValue)}</span>;
};

export default AnimatedNumber;