import React from 'react';
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
      className="p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500 transition-colors"
    >
      {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;