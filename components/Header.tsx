import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Button from './ui/Button';
import { Theme } from '../App';
import ThemeToggle from './ui/ThemeToggle';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';
import YoutubeIcon from './icons/YoutubeIcon';

const Logo = () => (
  <svg 
    className="w-8 h-8 transition-transform duration-500 ease-in-out"
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="currentColor"></path>
    <path d="M12 2L22 7L12 12L2 7L12 2Z" fill="white" fillOpacity="0.3"></path>
  </svg>
);

const HamburgerIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// Animation variants for the mobile menu
const navContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.25,
    },
  },
};

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 15 },
  },
};

const socialContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
const socialItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const navLinks = [
    { href: '#problem', label: 'Problem' },
    { href: '#solution', label: 'Solution' },
    { href: '#services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#fit-check', label: 'Is It For You?' },
];

const socialLinks = [
    { href: 'https://instagram.com', label: 'Instagram', icon: InstagramIcon, hoverColor: 'hover:text-pink-600' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: LinkedInIcon, hoverColor: 'hover:text-blue-600' },
    { href: 'https://youtube.com', label: 'YouTube', icon: YoutubeIcon, hoverColor: 'hover:text-red-600' }
];

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Logic for IntersectionObserver to detect active section
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -60% 0px' });

    const sections = document.querySelectorAll('main [id]');
    sections.forEach(section => observer.current?.observe(section));

    return () => {
      sections.forEach(section => observer.current?.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      // Special case for scrolling to top
      if (targetId === 'root') {
          const mainElement = document.querySelector('main');
          if (mainElement) {
              mainElement.scrollTo({ top: 0, behavior: 'smooth' });
          }
      } else {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      }
    }
    if (isOpen) {
        setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-zinc-950 border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#root" onClick={(e) => handleNavClick(e, '#root')} className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white flex items-center gap-2" aria-label="ViziGrowth home">
              <Logo />
              ViziGrowth
            </a>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <nav className="flex items-baseline space-x-6">
              {navLinks.map(link => (
                <a 
                    key={link.href} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm font-medium hover:font-semibold transition-all duration-200 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-zinc-900 dark:after:bg-white after:transition-transform after:duration-300 after:origin-center ${activeSection === link.href.substring(1) ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
                >
                    <motion.span
                        className="inline-block"
                        whileHover={{ y: -2 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    >
                        {link.label}
                    </motion.span>
                </a>
              ))}
            </nav>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              <Button href="#final-cta" onClick={(e) => handleNavClick(e, '#final-cta')}>Get Free Audit</Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
             <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500"
            >
              <HamburgerIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ y: '-100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="fixed inset-0 z-[100] bg-zinc-950 dark:bg-zinc-50 md:hidden"
                role="dialog"
                aria-modal="true"
            >
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between h-16 px-4 sm:px-6 border-b border-zinc-800 dark:border-zinc-200">
                        <a href="#root" onClick={(e) => handleNavClick(e, '#root')} className="text-xl font-bold tracking-tighter text-white dark:text-zinc-900 flex items-center gap-2" aria-label="ViziGrowth home">
                            <Logo />
                            ViziGrowth
                        </a>
                        <button
                            onClick={() => setIsOpen(false)}
                            aria-label="Close navigation menu"
                            className="p-2 rounded-md text-zinc-400 dark:text-zinc-600 hover:text-white dark:hover:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200"
                        >
                            <XIcon className="w-6 h-6" />
                        </button>
                    </div>
                    
                    <nav className="flex-grow flex items-center justify-center">
                        <motion.ul 
                            className="flex flex-col items-center space-y-8"
                            variants={navContainerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {navLinks.map(link => (
                                <motion.li key={link.href} variants={navItemVariants}>
                                    <a 
                                        href={link.href} 
                                        onClick={(e) => handleNavClick(e, link.href)} 
                                        className={`relative text-3xl font-bold tracking-tight text-zinc-200 dark:text-zinc-800 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-white dark:after:bg-zinc-900 after:transition-transform after:duration-300 ${activeSection === link.href.substring(1) ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100'}`}
                                    >
                                        {link.label}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </nav>
                    
                    <motion.div 
                        className="p-6 border-t border-zinc-800 dark:border-zinc-200 text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.4 } }}
                    >
                        <Button href="#final-cta" size="lg" className="w-full max-w-xs mx-auto" onClick={(e) => handleNavClick(e, '#final-cta')}>Get Free Audit</Button>
                        <motion.div 
                            className="mt-8 flex justify-center items-center gap-8"
                            variants={socialContainerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                           {socialLinks.map(link => (
                                <motion.a 
                                    key={link.label}
                                    href={link.href} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label={`ViziGrowth on ${link.label}`}
                                    className={`text-zinc-400 dark:text-zinc-500 transition-colors ${link.hoverColor}`}
                                    variants={socialItemVariants}
                                    whileHover={{ scale: 1.15, transition: { type: 'spring', stiffness: 300 } }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <link.icon className="w-6 h-6" />
                                </motion.a>
                           ))}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default React.memo(Header);