import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PageWedge from './components/PageWedge';
import Footer from './components/Footer';
import Container from './components/ui/Container';
import Chatbot from './components/Chatbot';

// Lazy load components for better initial page load performance
const ProblemSolution = lazy(() => import('./components/ProblemSolution'));
const ServiceModules = lazy(() => import('./components/ServiceModules'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const About = lazy(() => import('./components/About'));
const FitCheck = lazy(() => import('./components/FitCheck'));
const Investment = lazy(() => import('./components/Investment'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));

export type Theme = 'light' | 'dark';

const Loader: React.FC = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-zinc-200 dark:border-zinc-700 border-t-zinc-900 dark:border-t-zinc-300 rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }

    const mainElement = document.querySelector('main');
    if (!mainElement) return;
  
    const handleScroll = () => {
      // Show footer when user has scrolled down a bit
      setIsFooterVisible(mainElement.scrollTop > 200);
    };
    
    mainElement.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Use useCallback to prevent re-creating functions on every render,
  // which optimizes child components that depend on them (e.g., Header).
  const toggleTheme = useCallback(() => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  const handleHeroMouseEnter = useCallback(() => setIsHeroHovered(true), []);
  const handleHeroMouseLeave = useCallback(() => setIsHeroHovered(false), []);

  return (
    <>
      <div 
        className="fixed inset-0 -z-50 h-full w-full bg-white dark:bg-zinc-950"
        aria-hidden="true"
      >
        <div className={`fixed inset-0 -z-40 h-full w-full bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] ${isHeroHovered ? 'opacity-40 dark:opacity-50' : 'opacity-10 dark:opacity-10'} transition-opacity duration-500`}></div>
      </div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="h-screen overflow-y-auto no-scrollbar pb-16">
        <Hero 
          onMouseEnter={handleHeroMouseEnter}
          onMouseLeave={handleHeroMouseLeave}
        />
        <PageWedge />
        <Suspense fallback={<Loader />}>
          <Container>
            <ProblemSolution />
            <CaseStudies />
            <ServiceModules />
          </Container>
          <Container>
            <About />
            <FitCheck />
            <Investment />
            <FinalCTA />
          </Container>
        </Suspense>
      </main>
      <Footer isVisible={isFooterVisible} />
      <Chatbot />
    </>
  );
};

export default App;