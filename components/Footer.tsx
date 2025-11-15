import React, { useEffect } from 'react';
import Container from './ui/Container';

const Logo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="currentColor"></path>
    <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="white" fillOpacity="0.3"></path>
  </svg>
);

const Footer: React.FC = () => {
    useEffect(() => {
        console.log("Hey developer! 👋 You found the easter egg. Looking for a high-performance marketing system? You're in the right place.");
    }, []);

  return (
    <footer className="border-t border-zinc-200/80 bg-zinc-100/80 dark:bg-zinc-900/80">
      <Container className="py-8">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <Logo />
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} ViziGrowth. A system, not a tactic.
              </p>
            </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;