import React, { useState } from 'react';
import { CaseStudy } from '../data/case-studies';
import BentoCard from './ui/BentoCard';
import Badge from './ui/Badge';
import { motion, AnimatePresence } from 'framer-motion';
import KPIBlock from './ui/KPIBlock';

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button
        onClick={onClick}
        className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
            active
                ? 'bg-stone-200/80 dark:bg-stone-800/80 text-stone-900 dark:text-white'
                : 'text-stone-500 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50'
        }`}
    >
        {children}
    </button>
);

const CaseStudyCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
    const [activeTab, setActiveTab] = useState<'Problem' | 'Solution' | 'Outcome'>('Problem');

    const contentVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    };

    const renderParagraph = (paragraph: string, index: number) => {
        if (paragraph.startsWith('**')) {
            const [title, ...list] = paragraph.split('\n• ');
            return (
                <div key={index}>
                    <h4 className="font-bold text-stone-800 dark:text-stone-200 mt-3">{title.replace(/\*\*/g, '')}</h4>
                    <ul className="list-disc pl-5 mt-1 space-y-1">
                        {list.map((item, i) => <li key={i}>{item.trim()}</li>)}
                    </ul>
                </div>
            );
        }
        return <p key={index}>{paragraph}</p>;
    };

    return (
        <>
            <BentoCard className="!p-6 h-full flex flex-col group">
                <div className="flex justify-between items-start gap-2 flex-wrap">
                    <Badge>{study.industry}</Badge>
                    <Badge>{study.budgetContext}</Badge>
                </div>
                <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-white mt-4">{study.company}</h3>
                
                <div className="my-6 border-b border-stone-200/80 dark:border-stone-800/80 flex-shrink-0">
                    <div className="flex items-center gap-2">
                        <TabButton active={activeTab === 'Problem'} onClick={() => setActiveTab('Problem')}>Problem</TabButton>
                        <TabButton active={activeTab === 'Solution'} onClick={() => setActiveTab('Solution')}>Solution</TabButton>
                        <TabButton active={activeTab === 'Outcome'} onClick={() => setActiveTab('Outcome')}>Outcome</TabButton>
                    </div>
                </div>

                <div className="flex-grow text-base text-stone-600 dark:text-stone-400 relative min-h-[140px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute w-full prose prose-base dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:my-2 prose-ul:my-2 prose-li:my-1 whitespace-pre-wrap"
                        >
                            {activeTab === 'Problem' && study.problem.split('\n\n').map(renderParagraph)}
                            {activeTab === 'Solution' && study.solution.split('\n\n').map(renderParagraph)}
                            {activeTab === 'Outcome' && study.outcome.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
                        </motion.div>
                    </AnimatePresence>
                </div>
                
                <div className="mt-auto pt-4">
                    <h4 className="text-sm font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-4 text-left">
                        Key Results
                    </h4>
                    <div className="pt-4 border-t border-stone-200/80 dark:border-stone-800/80">
                        <KPIBlock kpis={study.kpis} />
                    </div>
                </div>

                <div className="mt-4 pt-4 border-t border-stone-200/80 dark:border-stone-800/80">
                    <blockquote className="relative text-sm italic text-stone-600 dark:text-stone-400 border-l-2 border-stone-300 dark:border-stone-700 pl-4">
                        <p>"{study.quote}"</p>
                    </blockquote>
                </div>
            </BentoCard>
        </>
    );
};

export default React.memo(CaseStudyCard);