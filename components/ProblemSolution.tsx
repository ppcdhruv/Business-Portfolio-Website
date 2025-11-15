import React from 'react';
import { motion, Variants } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import SectionHeader from './ui/SectionHeader';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';

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

const yourSiteFeatures = [
    { text: "Focuses on aesthetics over action", isPositive: false },
    { text: "Lacks a clear, single conversion path", isPositive: false },
    { text: "Generates vanity metrics (traffic, clicks)", isPositive: false },
    { text: "Acts as a static digital brochure", isPositive: false },
];

const weBuildFeatures = [
    { text: "Engineered for a single business outcome", isPositive: true },
    { text: "Guides visitors through a deliberate journey", isPositive: true },
    { text: "Generates signal metrics (leads, ROI)", isPositive: true },
    { text: "Acts as an automated sales engine", isPositive: true },
];

const FeatureItem: React.FC<{ text: string; isPositive: boolean }> = ({ text, isPositive }) => (
    <li className="flex items-start text-base transition-colors duration-200 p-2 -m-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
        <div className="flex-shrink-0 w-5 h-5 mr-3 mt-0.5">
            {isPositive ? (
                <CheckIcon className="text-green-600 dark:text-green-500" />
            ) : (
                <XIcon className="text-red-600 dark:text-red-500" />
            )}
        </div>
        <span className="text-zinc-700 dark:text-zinc-300">{text}</span>
    </li>
);

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

      <div className="relative mt-16 -mx-4 sm:mx-0 after:content-[''] after:absolute after:inset-y-0 after:right-0 after:w-16 after:bg-gradient-to-r after:from-transparent after:to-white dark:after:to-zinc-950 after:pointer-events-none md:after:hidden">
        <motion.div 
            className="md:grid md:grid-cols-3 md:gap-8 max-w-7xl mx-auto flex overflow-x-auto space-x-8 md:space-x-0 px-4 sm:px-0 pb-8 md:pb-0 no-scrollbar"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {pillars.map((pillar, index) => (
            <motion.div key={index} variants={itemVariants} className="flex-shrink-0 w-[calc(100vw-48px)] sm:w-80 md:w-auto">
                <BentoCard className="flex flex-col h-full p-8 text-left">
                    <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">{pillar.title}</h3>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">{pillar.subtitle}</p>
                    
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
      
      <div id="wedge" className="mt-20">
         <BentoCard className="max-w-5xl mx-auto p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {/* Before */}
                <div className="p-6 rounded-lg">
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Your site today</h3>
                    <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">A collection of pages that informs visitors but fails to guide them toward a specific business outcome.</p>
                    <ul className="mt-6 space-y-4 text-left">
                        {yourSiteFeatures.map(item => <FeatureItem key={item.text} {...item} />)}
                    </ul>
                </div>
                {/* After */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="p-6 rounded-lg bg-zinc-50/80 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/80"
                >
                     <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">What we build</h3>
                     <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">An integrated system where every element is designed to move a qualified prospect from click to conversion.</p>
                     <ul className="mt-6 space-y-4 text-left">
                        {weBuildFeatures.map(item => <FeatureItem key={item.text} {...item} />)}
                     </ul>
                </motion.div>
            </div>
         </BentoCard>
      </div>
    </section>
  );
};

export default ProblemSolution;