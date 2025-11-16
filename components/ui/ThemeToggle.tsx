import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SunIcon from '../icons/SunIcon';
import MoonIcon from '../icons/MoonIcon';
import { Theme } from '../../types';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

// FIX: Created variants to handle animations and fix prop errors.
const iconVariants = {
    initial: { y: -15, opacity: 0, rotate: 90 },
    // FIX: Explicitly cast 'ease' value to its literal type to fix TypeScript error.
    animate: { y: 0, opacity: 1, rotate: 0, transition: { duration: 0.3, ease: "easeInOut" as const } },
    // FIX: Explicitly cast 'ease' value to its literal type to fix TypeScript error.
    exit: { y: 15, opacity: 0, rotate: -90, transition: { duration: 0.3, ease: "easeInOut" as const } },
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Activate dark mode' : 'Activate light mode'}
      className="relative w-9 h-9 flex items-center justify-center rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:focus:ring-offset-zinc-950 transition-colors"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'light' ? (
          // FIX: Refactored motion props to use variants to resolve TS errors.
          <motion.div
            key="moon"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute"
          >
            <MoonIcon className="w-5 h-5" />
          </motion.div>
        ) : (
          // FIX: Refactored motion props to use variants to resolve TS errors.
          <motion.div
            key="sun"
            variants={iconVariants}
            initial="initial"
            animate="animate"
            exit="exit"
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