import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/case-studies';
import CaseStudyCard from './CaseStudyCard';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
);

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

const CaseStudies: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const caseStudyIndex = ((page % caseStudies.length) + caseStudies.length) % caseStudies.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };
  
  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0,
      };
    },
  };

  return (
    <section id="results" className="py-24 sm:py-32 overflow-x-hidden">
      <SectionHeader
        title="Real Results for Founders Like You"
        description="An interactive library of real-world results. Each came from a better funnel, not more ad spend."
      />
      
      <div className="mt-16 max-w-4xl mx-auto relative h-[880px] sm:h-[750px] md:h-[600px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
          >
            <CaseStudyCard study={caseStudies[caseStudyIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Button variant="secondary" onClick={() => paginate(-1)} aria-label="Previous case study">
          <ChevronLeftIcon className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-3">
            {caseStudies.map((study, index) => (
                <button 
                    key={study.company}
                    onClick={() => setPage([index, index > caseStudyIndex ? 1 : -1])}
                    className={`h-12 w-12 flex items-center justify-center rounded-lg transition-all duration-300
                        ${index === caseStudyIndex 
                            ? 'bg-white dark:bg-zinc-800 scale-110 shadow-lg' 
                            : 'bg-zinc-100/70 dark:bg-zinc-900 scale-90 opacity-60 hover:opacity-100 hover:scale-100'}
                    `}
                    aria-label={`Go to case study for ${study.company}`}
                >
                   <div className="grayscale contrast-[0] brightness-200 dark:grayscale-0 dark:contrast-100 dark:brightness-100">
                     {/* FIX: Cast study.logo to React.ReactElement<any> to resolve a type inference issue with React.cloneElement, allowing the 'className' prop to be passed correctly. */}
                     {React.cloneElement(study.logo as React.ReactElement<any>, { className: 'h-6' })}
                   </div>
                </button>
            ))}
        </div>
        <Button variant="secondary" onClick={() => paginate(1)} aria-label="Next case study">
           <ChevronRightIcon className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default CaseStudies;