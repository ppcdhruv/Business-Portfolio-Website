import React from 'react';
import Container from './ui/Container';
import { View } from '../types';
import { motion } from 'framer-motion';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import YoutubeIcon from './icons/YoutubeIcon';

const Logo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="currentColor"></path>
    <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="white" fillOpacity="0.3"></path>
  </svg>
);

interface FooterProps {
    setView: (view: View) => void;
    mainRef: React.RefObject<HTMLElement>;
}

const socialLinks = [
    { href: 'https://instagram.com', label: 'Instagram', icon: InstagramIcon, hoverColor: 'hover:text-pink-600' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: LinkedInIcon, hoverColor: 'hover:text-blue-600' },
    { href: 'https://youtube.com', label: 'YouTube', icon: YoutubeIcon, hoverColor: 'hover:text-red-600' }
];

// FIX: Created variants to handle animations and fix prop errors.
const footerVariants = {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
};

const Footer: React.FC<FooterProps> = ({ setView, mainRef }) => {
  const handleLogoClick = () => {
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    // FIX: Refactored motion props to use variants to resolve TS errors.
    <motion.footer 
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-zinc-200/80 bg-stone-50/80 dark:bg-zinc-900/80 backdrop-blur-sm"
      variants={footerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Container className="py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <button 
                onClick={handleLogoClick} 
                aria-label="ViziGrowth home, scroll to top"
                className="p-1 -m-1 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 dark:focus:ring-offset-zinc-950"
              >
                <Logo />
              </button>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} ViziGrowth. A system, not a tactic.
              </p>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 text-sm font-medium">
                    <button onClick={() => setView('faq')} className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">FAQ</button>
                    <button onClick={() => setView('privacy')} className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">Privacy Policy</button>
                </div>
                 <div className="flex items-center gap-4">
                    {socialLinks.map(link => (
                        <a 
                            key={link.label}
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={`ViziGrowth on ${link.label}`}
                            className={`text-zinc-400 dark:text-zinc-500 transition-colors ${link.hoverColor}`}
                        >
                            <link.icon className="w-5 h-5" />
                        </a>
                   ))}
                </div>
            </div>
        </div>
      </Container>
    </motion.footer>
  );
};

export default React.memo(Footer);