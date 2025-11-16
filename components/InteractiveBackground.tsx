import React, { useRef, useEffect } from 'react';
// FIX: Changed import path for Theme type from '../App' to '../types' to resolve module export error.
import { Theme } from '../types';

interface InteractiveBackgroundProps {
  theme: Theme;
  heroRect: DOMRect | null;
}

const InteractiveBackground: React.FC<InteractiveBackgroundProps> = ({ theme, heroRect }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const easedMouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current = { x: event.clientX, y: event.clientY };
    };
    const handleMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const gridSpacing = 100; // Wider grid spacing
    const highlightRadius = 300; // Area of focus around the cursor
    
    const baseColor = theme === 'light' ? '0, 0, 0' : '255, 255, 255';
    const restAlpha = 0.04; // Fainter, more subtle resting state
    const hoverAlpha = 0.15; // Gentle hover state

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.width / dpr;
      const height = canvas.height / dpr;
      
      // Easing for a smoother, more gentle follow animation
      const easeFactor = 0.07;
      easedMouse.current.x += (mouse.current.x - easedMouse.current.x) * easeFactor;
      easedMouse.current.y += (mouse.current.y - easedMouse.current.y) * easeFactor;
      
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 1;

      const mouseX = easedMouse.current.x;
      const mouseY = easedMouse.current.y;

      let startX = 0;
      let startY = 0;
      if (heroRect) {
        startX = heroRect.left % gridSpacing;
        startY = heroRect.top % gridSpacing;
      }

      // Draw vertical lines
      for (let x = -startX; x <= width + gridSpacing; x += gridSpacing) {
        const distToMouse = Math.abs(x - mouseX);
        const intensity = Math.max(0, 1 - distToMouse / highlightRadius);
        // Using intensity squared for a nicer falloff effect
        const alpha = restAlpha + (hoverAlpha - restAlpha) * Math.pow(intensity, 2);
        
        ctx.strokeStyle = `rgba(${baseColor}, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Draw horizontal lines
      for (let y = -startY; y <= height + gridSpacing; y += gridSpacing) {
        const distToMouse = Math.abs(y - mouseY);
        const intensity = Math.max(0, 1 - distToMouse / highlightRadius);
        // Using intensity squared for a nicer falloff effect
        const alpha = restAlpha + (hoverAlpha - restAlpha) * Math.pow(intensity, 2);

        ctx.strokeStyle = `rgba(${baseColor}, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [theme, heroRect]);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-50 w-full h-full bg-white dark:bg-zinc-950 transition-colors duration-300"></canvas>;
};

export default InteractiveBackground;