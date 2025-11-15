import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import Container from './components/ui/Container';
import FitCheck from './components/FitCheck';
import Chatbot from './components/Chatbot';
import ServiceModules from './components/ServiceModules';
import About from './components/About';
import Investment from './components/Investment';
import FinalCTA from './components/FinalCTA';
import ProblemSolution from './components/ProblemSolution';
import WedgeComparison from './components/WedgeComparison';

export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isHeroHovered, setIsHeroHovered] = useState(false);

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

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div 
        className="fixed inset-0 -z-50 h-full w-full bg-white dark:bg-zinc-950"
        aria-hidden="true"
      >
        <div className={`fixed inset-0 -z-40 h-full w-full bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] ${isHeroHovered ? 'opacity-40 dark:opacity-50' : 'opacity-10 dark:opacity-10'} transition-opacity duration-500`}></div>
      </div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="h-screen overflow-y-auto snap-y snap-mandatory no-scrollbar">
        <Hero 
          onMouseEnter={() => setIsHeroHovered(true)}
          onMouseLeave={() => setIsHeroHovered(false)}
        />
        <Container>
          <ProblemSolution />
          <WedgeComparison />
          <ServiceModules />
          <CaseStudies />
        </Container>
        <Container>
          <About />
          <FitCheck />
          <Investment />
          <FinalCTA />
        </Container>
      </main>
      <Footer />
      <Chatbot />
    </>
  );
};

export default App;