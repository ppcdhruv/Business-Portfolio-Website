import React, { useState, useEffect, useRef } from 'react';
import Button from './ui/Button';
import { Theme } from '../App';
import ThemeToggle from './ui/ThemeToggle';

const Logo = ({ isScrolled }: { isScrolled: boolean }) => (
  <svg 
    className={`w-8 h-8 transition-transform duration-500 ease-in-out ${isScrolled ? 'rotate-180' : ''}`}
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

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const navLinks = [
    { href: '#problem', label: 'Problem' },
    { href: '#wedge', label: 'Solution' },
    { href: '#system', label: 'System' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#fit-check', label: 'Is It For You?' },
];

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    const handleScroll = () => {
      setIsScrolled(mainElement.scrollTop > 20);
    };
    mainElement.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Logic for IntersectionObserver to detect active section
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-40% 0px -60% 0px' });

    const sections = document.querySelectorAll('main section[id]');
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
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (isOpen) {
        setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#root" onClick={(e) => handleNavClick(e, '#root')} className="text-xl font-black tracking-tighter text-zinc-900 dark:text-white flex items-center gap-2" aria-label="ViziGrowth home">
              <Logo isScrolled={isScrolled} />
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
                    className={`relative text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white text-sm font-medium transition-colors after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-zinc-900 dark:after:bg-white after:transition-transform after:duration-300 ${activeSection === link.href.substring(1) ? 'after:scale-x-100' : 'after:scale-x-0'}`}
                >
                    {link.label}
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
              className="p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-zinc-500"
            >
              {isOpen ? <XIcon className="w-6 h-6" /> : <HamburgerIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[100] bg-white dark:bg-zinc-950 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="pt-24 pb-12 px-6 h-full flex flex-col">
            <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
                {navLinks.map(link => (
                    <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="text-2xl font-bold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">{link.label}</a>
                ))}
            </nav>
            <Button href="#final-cta" size="lg" className="w-full mt-8" onClick={(e) => handleNavClick(e, '#final-cta')}>Get Free Audit</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;