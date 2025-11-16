import React from 'react';
// FIX: Removed 'Variants' type which was not found and caused errors.
import { motion } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import SectionHeader from './ui/SectionHeader';

const pillars = [
  {
    title: "Experience",
    subtitle: "Qualified prospects won’t convert if the page works against them.",
    problems: [
      "Unclear promise or value proposition",
      "Generic messaging that blends in",
      "Weak or confusing Call-To-Action",
      "High-friction forms and user flows",
    ],
    result: "You have traffic, but no conversions worth talking about."
  },
  {
    title: "Targeting",
    subtitle: "Clicks aren’t the problem — the wrong clicks are.",
    problems: [
      "Broad or irrelevant audiences",
      "Ad creative that misaligns with the offer",
      "Low-intent traffic from search/social",
      "Rising spend with falling quality",
    ],
    result: "You pay for attention that never becomes pipeline."
  },
  {
    title: "Data",
    subtitle: "If the data is wrong, everything else is luck.",
    problems: [
      "Missing or broken conversion tracking",
      "Wrong attribution models hide what's working",
      "No clear visibility into what’s profitable",
      "Decisions made from vanity metrics, not signal",
    ],
    result: "You can’t scale because you can’t trust the numbers."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  // FIX: Explicitly cast 'spring' to its literal type to fix TypeScript error.
  visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } },
};

const ProblemSolution: React.FC = () => {
  return (
    <section id="solution" className="pt-20 sm:pt-28 pb-20 sm:pb-28">
       <SectionHeader
        title="The 3 Pillars That Decide Whether Your Marketing Works"
        description="If your acquisition is underperforming, it’s always one (or more) of these breaking."
      />

      <div className="relative mt-16 -mx-4 sm:mx-0 after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-16 after:bg-gradient-to-r after:from-transparent after:to-white dark:after:to-zinc-950 after:pointer-events-none md:after:hidden">
        {/* FIX: Refactored motion props to use variants to resolve TS errors. */}
        <motion.div 
            className="md:grid md:grid-cols-3 md:gap-8 max-w-7xl mx-auto flex overflow-x-auto space-x-8 md:space-x-0 px-4 sm:px-0 pb-8 md:pb-0 no-scrollbar"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {pillars.map((pillar, index) => (
            // FIX: Refactored motion props to use variants to resolve TS errors.
            <motion.div key={index} variants={itemVariants} className="flex-shrink-0 w-[calc(100vw-48px)] sm:w-80 md:w-auto">
                <BentoCard className="flex flex-col h-full p-8 text-left">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{pillar.title}</h3>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">
                        { pillar.title === 'Experience' && <>Qualified prospects won’t convert if the page <strong className="text-zinc-800 dark:text-zinc-200">works against them.</strong></> }
                        { pillar.title === 'Targeting' && <>Clicks aren’t the problem — <strong className="text-zinc-800 dark:text-zinc-200">the wrong clicks are.</strong></> }
                        { pillar.title === 'Data' && <>If the data is wrong, <strong className="text-zinc-800 dark:text-zinc-200">everything else is luck.</strong></> }
                    </p>
                    
                    <hr className="my-4 border-zinc-200/80 dark:border-zinc-800/80" />
                    
                    <ul className="space-y-1 flex-grow">
                        {pillar.problems.map(problem => (
                        <li key={problem} className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            {problem}
                        </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-sm font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800/50 p-3 rounded-lg">
                        <span className="text-red-600 dark:text-red-500 font-bold">Result:</span> {pillar.result}
                    </p>
                </BentoCard>
            </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;