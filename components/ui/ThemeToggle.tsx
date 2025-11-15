import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SunIcon from '../icons/SunIcon';
import MoonIcon from '../icons/MoonIcon';
import { Theme } from '../../App';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Activate dark mode' : 'Activate light mode'}
      className="relative w-9 h-9 flex items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 focus:outline-none transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          <motion.div
            key="moon"
            initial={{ y: -15, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
            exit={{ y: 15, opacity: 0, rotate: -90, transition: { duration: 0.3, ease: "easeInOut" } }}
            className="absolute"
          >
            <MoonIcon className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: -15, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0, transition: { duration: 0.3, ease: "easeInOut" } }}
            exit={{ y: 15, opacity: 0, rotate: -90, transition: { duration: 0.3, ease: "easeInOut" } }}
            className="absolute"
          >
            <SunIcon className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;