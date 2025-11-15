import React from 'react';
import { motion, Variants } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import SectionHeader from './ui/SectionHeader';

const pillars = [
  {
    title: "Data",
    subtitle: "If the data is wrong, everything else is luck.",
    problems: [
      "Missing or broken tracking",
      "Wrong attribution",
      "No idea what’s profitable",
      "Decisions made from screenshots, not signal",
    ],
    result: "You can’t scale because you can’t trust the numbers."
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
    title: "Experience",
    subtitle: "Even qualified prospects won’t convert if the page works against them.",
    problems: [
      "Unclear promise",
      "Generic, competitor-copy messaging",
      "Weak CTA",
      "Friction before booking/contact",
    ],
    result: "You have traffic, but no conversions worth talking about."
  }
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

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
};

const ProblemSolution: React.FC = () => {
  return (
    <section id="problem" className="py-24 sm:py-32">
       <SectionHeader
        title="The 3 Pillars That Decide Whether Your Marketing Works"
        description="If your acquisition is underperforming, it’s always one (or more) of these breaking. Fix them, and revenue follows."
      />

      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {pillars.map((pillar, index) => (
          <motion.div key={index} variants={itemVariants}>
            <BentoCard className="flex flex-col h-full p-8 text-left">
              <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{pillar.title}</h3>
              <p className="text-base font-semibold text-zinc-500 dark:text-zinc-400 mt-1">{pillar.subtitle}</p>
              
              <hr className="my-6 border-zinc-200/80 dark:border-zinc-800/80" />
              
              <ul className="space-y-3">
                {pillar.problems.map(problem => (
                  <li key={problem} className="flex items-start text-sm text-zinc-700 dark:text-zinc-300">
                    <span className="mr-2.5 mt-1 text-zinc-400 dark:text-zinc-500">-</span>
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                <span className="text-red-600 dark:text-red-500">Result:</span> {pillar.result}
              </p>
            </BentoCard>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-20">
        <div className="max-w-3xl mx-auto text-center p-8 bg-zinc-50/50 dark:bg-zinc-900/50 rounded-2xl">
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Most Sites Look Fine. Very Few Perform.
            </h3>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                Founders think they have a “website problem.” They actually have a <strong>performance stack problem</strong>: tracking → traffic → landing experience must work together.
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;