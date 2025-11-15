import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudy } from '../data/case-studies';
import BentoCard from './ui/BentoCard';
import Badge from './ui/Badge';
import ImageCarousel from './ImageCarousel';

const TabContent: React.FC<{ content: string }> = ({ content }) => {
    const lines = content.trim().split('\n');

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="prose prose-sm prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400"
        >
            {lines.map((line, index) => {
                if (line.startsWith('•')) {
                    return <p key={index} className="!mt-1 !mb-1 ml-4">{line}</p>;
                }
                if (line.startsWith('**')) {
                    return <h4 key={index} className="!text-sm !font-bold !text-zinc-800 dark:!text-zinc-200 !mt-4 !mb-1">{line.replace(/\*\*/g, '')}</h4>;
                }
                return <p key={index} className="!my-1">{line}</p>;
            })}
        </motion.div>
    );
};


const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
    const [activeTab, setActiveTab] = useState('Problem');
    const tabs = ['Problem', 'Solution', 'Results'];

    const tabContentMap: { [key: string]: string } = {
        'Problem': study.problem,
        'Solution': study.solution,
        'Results': study.results,
    };

    return (
        <BentoCard className="flex flex-col p-6 sm:p-8 h-full">
            {/* Top Section */}
            <div className="flex justify-between items-start gap-4">
                <div className="h-8 flex items-center">{study.logo}</div>
                <Badge>{study.industry}</Badge>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-4">{study.company}</h3>
            
            {/* Main Content: Carousel + Tabs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-6 flex-grow">
                <div className="md:col-span-1">
                    <ImageCarousel images={study.screenshots} />
                </div>
                <div className="md:col-span-1 flex flex-col">
                    {/* Tab Buttons */}
                    <div className="flex border-b border-zinc-200/80 dark:border-zinc-800/80 mb-4">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`relative w-full py-2.5 text-sm font-semibold transition-colors focus:outline-none ${
                                    activeTab === tab 
                                    ? 'text-zinc-900 dark:text-white' 
                                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                                }`}
                            >
                                <span className="relative z-10">{tab}</span>
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="case-study-tab-pill"
                                        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-zinc-900 dark:bg-white"
                                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="relative flex-grow min-h-[150px]">
                        <AnimatePresence mode="wait">
                            <TabContent key={activeTab} content={tabContentMap[activeTab]} />
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
                <div className="relative">
                    <blockquote className="text-base text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                        “{study.quote}”
                    </blockquote>
                    <div className="mt-4 flex items-center gap-3">
                        <p className="font-bold text-zinc-900 dark:text-white text-sm">{study.author}, <span className="text-zinc-500 dark:text-zinc-400 font-normal">{study.title}</span></p>
                    </div>
                </div>
            </div>
        </BentoCard>
    );
};

export default CaseStudyCard;