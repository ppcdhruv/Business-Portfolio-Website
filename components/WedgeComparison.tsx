import React from 'react';
import { motion } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import SectionHeader from './ui/SectionHeader';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';

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
    <li className="flex items-start text-base">
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

const WedgeComparison: React.FC = () => {
    return (
        <section id="wedge" className="py-24 sm:py-32">
            <SectionHeader
                title="Pages don’t convert. Funnels do."
                description="A beautiful website is a starting point. A conversion funnel is a system designed to turn visitors into revenue. Here's the difference."
            />
            <BentoCard className="mt-16 max-w-5xl mx-auto p-8 sm:p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Before */}
                    <div className="p-6 rounded-lg">
                        <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">Your Site Today</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">A collection of pages that informs visitors but fails to guide them toward a specific business outcome.</p>
                        <ul className="mt-6 space-y-4 text-left">
                            {yourSiteFeatures.map(item => <FeatureItem key={item.text} {...item} />)}
                        </ul>
                    </div>
                    {/* After */}
                    <div className="p-6 rounded-lg bg-zinc-50/80 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/80">
                         <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">What We Build</h3>
                         <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">An integrated system where every element is designed to move a qualified prospect from click to conversion.</p>
                         <ul className="mt-6 space-y-4 text-left">
                            {weBuildFeatures.map(item => <FeatureItem key={item.text} {...item} />)}
                         </ul>
                    </div>
                </div>
            </BentoCard>
        </section>
    );
};

export default WedgeComparison;