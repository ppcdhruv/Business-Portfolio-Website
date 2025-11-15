import React, { useState, useEffect, useCallback, Suspense, lazy, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Container from './components/ui/Container';
import Chatbot from './components/Chatbot';
import InteractiveBackground from './components/InteractiveBackground';
import PrivacyPolicy from './components/PrivacyPolicy';

// Lazy load components for better initial page load performance
const ProblemSolution = lazy(() => import('./components/ProblemSolution'));
const ServiceModules = lazy(() => import('./components/ServiceModules'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const About = lazy(() => import('./components/About'));
const FitCheck = lazy(() => import('./components/FitCheck'));
const Investment = lazy(() => import('./components/Investment'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));

export type Theme = 'light' | 'dark';
export type View = 'main' | 'privacy';

const Loader: React.FC = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="w-16 h-16 border-4 border-zinc-200 dark:border-zinc-700 border-t-zinc-900 dark:border-t-zinc-300 rounded-full animate-spin"></div>
  </div>
);

const MainContent: React.FC<{ 
  setHeroRect: (rect: DOMRect | null) => void;
  setHasScrolled: (scrolled: boolean) => void; 
}> = ({ setHeroRect, setHasScrolled }) => {
    const mainRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = mainRef.current;
        if (!el) return;
        
        const handleScroll = () => {
            setHasScrolled(true);
        };
        
        el.addEventListener('scroll', handleScroll, { once: true });
        
        return () => {
            el.removeEventListener('scroll', handleScroll);
        };
    }, [setHasScrolled]);
    
    return (
        <main ref={mainRef} className="h-screen overflow-y-auto no-scrollbar pb-16">
            <Hero setHeroRect={setHeroRect} />
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
    );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [view, setView] = useState<View>('main');
  const [heroRect, setHeroRect] = useState<DOMRect | null>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
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

  return (
    <>
      <InteractiveBackground theme={theme} heroRect={heroRect} />
      <Header theme={theme} toggleTheme={toggleTheme} />
      {view === 'main' ? (
        <MainContent setHeroRect={setHeroRect} setHasScrolled={setHasScrolled} />
      ) : (
        <PrivacyPolicy onBack={() => setView('main')} />
      )}
      <AnimatePresence>
        {hasScrolled && <Footer setView={setView} />}
      </AnimatePresence>
      <Chatbot />
    </>
  );
};

export default App;