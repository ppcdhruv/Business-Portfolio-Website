import React from 'react';
import Container from './ui/Container';
import { View } from '../App';
import { motion } from 'framer-motion';

const Logo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="currentColor"></path>
    <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="white" fillOpacity="0.3"></path>
  </svg>
);

interface FooterProps {
    setView: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <motion.footer 
      className="border-t border-zinc-200/80 bg-stone-50 dark:bg-zinc-900"
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Container className="py-4">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <Logo />
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} ViziGrowth. A system, not a tactic.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm font-medium">
                <button onClick={() => setView('privacy')} className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">Privacy Policy</button>
                <button onClick={() => setView('privacy')} className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">GDPR</button>
            </div>
        </div>
      </Container>
    </motion.footer>
  );
};

export default Footer;