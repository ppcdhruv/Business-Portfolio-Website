import React from 'react';
import { motion } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import SectionHeader from './ui/SectionHeader';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';

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
    <li className="flex items-start text-base gap-3">
        <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${isPositive ? 'bg-green-100 dark:bg-green-900/40' : 'bg-red-100 dark:bg-red-900/40'}`}>
            {isPositive ? (
                <CheckIcon className="w-4 h-4 text-green-600 dark:text-green-500" />
            ) : (
                <XIcon className="w-4 h-4 text-red-600 dark:text-red-500" />
            )}
        </div>
        <span className="text-zinc-700 dark:text-zinc-300">{text}</span>
    </li>
);

// FIX: Created variants to handle animations and fix prop errors.
const afterCardVariants = {
    initial: { opacity: 0, y: 15 },
    whileInView: { opacity: 1, y: 0 },
};

const WedgeComparison: React.FC = () => {
    return (
        <section id="problem" className="pt-16 sm:pt-24 pb-20 sm:pb-28">
            <SectionHeader
                title={<>Most sites look fine. <span className="text-zinc-700 dark:text-zinc-300">Almost none perform.</span></>}
                description={<>Your problem isn’t the website — it’s the system behind it. A beautiful site is a starting point. A conversion funnel is an engine. <strong className="text-zinc-800 dark:text-zinc-200">Here's the difference.</strong></>}
            />
            <BentoCard className="max-w-5xl mx-auto p-8 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Before */}
                    <div className="p-6 rounded-lg">
                        <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Your site today</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-base">
                            A collection of pages that informs visitors but <strong className="text-zinc-800 dark:text-zinc-200">fails to guide them</strong> toward a specific business outcome.
                        </p>
                        <ul className="mt-6 space-y-4 text-left">
                            {yourSiteFeatures.map(item => <FeatureItem key={item.text} {...item} />)}
                        </ul>
                    </div>
                    {/* After */}
                    {/* FIX: Refactored motion props to use variants to resolve TS errors. */}
                    <motion.div
                      variants={afterCardVariants}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="p-6 rounded-lg bg-stone-100 dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80"
                    >
                         <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">What we build</h3>
                         <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-base">
                            An integrated system where every element is designed to <strong className="text-zinc-800 dark:text-zinc-200">move a qualified prospect</strong> from click to conversion.
                        </p>
                         <ul className="mt-6 space-y-4 text-left">
                            {weBuildFeatures.map(item => <FeatureItem key={item.text} {...item} />)}
                         </ul>
                    </motion.div>
                </div>
            </BentoCard>
        </section>
    );
};

export default WedgeComparison;
