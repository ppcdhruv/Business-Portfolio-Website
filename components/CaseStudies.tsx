import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { CaseStudy } from '../data/case-studies';
import CaseStudyCard from './CaseStudyCard';
import SectionHeader from './ui/SectionHeader';
import { client } from '../sanity/client';

const CaseStudies: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('All');
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (client.config().projectId === 'your-project-id') {
          throw new Error("Sanity projectId is not configured. Please update sanity/client.ts");
        }
        const data = await client.fetch<CaseStudy[]>(`*[_type == "caseStudy"]`);
        setCaseStudies(data);
      } catch (err: any) {
        console.error('Failed to fetch case studies:', err);
        setError(`Failed to load case studies. Please ensure your Sanity Project ID is configured correctly in sanity/client.ts.`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCaseStudies();
  }, []);

  const industries = useMemo(() => {
    if (caseStudies.length === 0) return ['All'];
    return ['All', ...Array.from(new Set(caseStudies.map(study => study.industry)))];
  }, [caseStudies]);

  const filteredStudies = useMemo(() => activeIndustry === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === activeIndustry), [activeIndustry, caseStudies]);

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
    if (isLoading) {
      return (
        <div className="w-full flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-zinc-200 dark:border-zinc-700 border-t-zinc-900 dark:border-t-zinc-300 rounded-full animate-spin"></div>
        </div>
      );
    }
    
    if (error) {
        return (
            <div className="w-full flex items-center justify-center p-8 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-lg text-red-700 dark:text-red-300 text-sm">
                <p className="text-center">{error}</p>
            </div>
        );
    }

    if (filteredStudies.length === 0 && !isLoading) {
        return (
            <div className="w-full flex items-center justify-center p-8 text-zinc-500 dark:text-zinc-400">
                <p>No case studies found for this category.</p>
            </div>
        );
    }

    return filteredStudies.map((study, index) => (
      <motion.div
        key={study._id || `${study.company}-${activeIndustry}`}
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