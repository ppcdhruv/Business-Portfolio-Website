import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CaseStudy, caseStudies } from '../data/case-studies';
import CaseStudyCard from './CaseStudyCard';
import SectionHeader from './ui/SectionHeader';

const CaseStudies: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const industries = useMemo(() => {
    return ['All', ...Array.from(new Set(caseStudies.map(study => study.industry)))];
  }, []);

  const filteredStudies = useMemo(() => activeIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeIndustry), [activeIndustry]);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const isScrollable = el.scrollWidth > el.clientWidth;
      setShowLeftFade(el.scrollLeft > 5);
      setShowRightFade(isScrollable && el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      const timeoutId = setTimeout(checkScroll, 300);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(timeoutId);
      };
    }
  }, [checkScroll, filteredStudies]);

  const renderContent = () => {
    if (filteredStudies.length === 0) {
        return (
            <div className="w-full flex items-center justify-center p-8 text-zinc-500 dark:text-zinc-400">
                <p>No case studies found for this category.</p>
            </div>
        );
    }

    return filteredStudies.map((study, index) => (
      <motion.div
        key={study.company}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
        className="flex-shrink-0 w-[calc(100vw-48px)] sm:w-[400px] md:w-[450px] max-w-full"
      >
        <CaseStudyCard study={study} />
      </motion.div>
    ));
  };

  return (
    <section id="results" className="py-24 sm:py-32">
      <SectionHeader
        title="Real Results for Founders Like You"
        description={<>Real-world results. Each came from a <strong className="text-zinc-800 dark:text-zinc-200">better funnel, not more ad spend.</strong></>}
      />

      <div className="mt-12 mb-8 flex justify-center flex-wrap gap-2 px-4">
        {industries.map(industry => (
            <button
                key={industry}
                onClick={() => {
                  setActiveIndustry(industry);
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollLeft = 0;
                  }
                }}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400 dark:focus:ring-offset-zinc-950 ${
                    activeIndustry === industry
                        ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
                }`}
            >
                {industry}
            </button>
        ))}
      </div>
      
      <div className="text-center text-xs text-zinc-500 dark:text-zinc-400 font-semibold tracking-wider mb-4 md:hidden">
          ‹ SCROLL FOR MORE ›
      </div>

      <div className="relative mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className={`absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-zinc-950 pointer-events-none transition-opacity duration-300 ${showLeftFade ? 'opacity-100' : 'opacity-0'}`}></div>

        <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-8 px-4 sm:px-6 lg:px-8 pb-8 no-scrollbar min-h-[400px]">
          {renderContent()}
        </div>
        
        <div className={`absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-zinc-950 pointer-events-none transition-opacity duration-300 ${showRightFade ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
    </section>
  );
};

export default CaseStudies;