import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import XIcon from './icons/XIcon';
import CheckIcon from './icons/CheckIcon';
import MouseCursorIcon from './icons/MouseCursorIcon';

type VizState = 'before' | 'after';

const NothingFoundScreen: React.FC = () => (
    <motion.div
        className="absolute inset-0 z-10 p-4 flex flex-col items-center justify-center font-mono text-center bg-black/10 dark:bg-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        exit={{ opacity: 0 }}
    >
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">SCANNING FOR CONVERSIONS...</p>
        <p className="text-lg sm:text-xl text-red-500 mt-4">
            NOTHING FOUND<span className="animate-pulse">_</span>
        </p>
    </motion.div>
);

const ConversionsRecordingScreen: React.FC = () => (
    <motion.div
        className="absolute inset-0 z-10 p-4 flex flex-col items-center justify-center font-mono text-center bg-black/10 dark:bg-black/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        exit={{ opacity: 0 }}
    >
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400">ANALYZING FUNNEL...</p>
        <p className="text-lg sm:text-xl text-green-500 mt-4">
            CONVERSIONS RECORDING<span className="animate-pulse">_</span>
        </p>
    </motion.div>
);

const WebsitePerformanceViz: React.FC = () => {
    const [vizState, setVizState] = useState<VizState>('before');
    const [scope, animate] = useAnimate();
    
    const handleToggle = (newState: VizState) => {
        if (vizState !== newState) {
            setVizState(newState);
        }
    };

     useEffect(() => {
        const sequence = async () => {
            if (!scope.current) return;
            
            const nextState = vizState === 'before' ? 'after' : 'before';
            const targetTab = scope.current.querySelector(nextState === 'after' ? '#viz-tab-after' : '#viz-tab-before');
            
            if (targetTab) {
                const rect = targetTab.getBoundingClientRect();
                const containerRect = scope.current.getBoundingClientRect();
                
                const x = rect.left - containerRect.left + rect.width / 2;
                const y = rect.top - containerRect.top + rect.height / 2;

                // Animate cursor to tab
                await animate(
                    '#cursor',
                    { x, y, opacity: 1 },
                    { type: 'spring', stiffness: 500, damping: 30, duration: 0.8 }
                );

                // Click animation
                await animate('#cursor', { scale: 0.8 }, { duration: 0.1 });
                handleToggle(nextState);
                await animate('#cursor', { scale: 1 }, { duration: 0.1 });
                
                // Hide cursor
                await animate('#cursor', { opacity: 0 }, { duration: 0.3, delay: 0.5 });
            }
        };
        
        const intervalId = setInterval(sequence, 4000);
        return () => clearInterval(intervalId);
    }, [vizState, animate, scope]);

    const isBefore = vizState === 'before';
    const isAfter = vizState === 'after';
    
    return (
        <motion.div 
            ref={scope}
            whileHover={{ scale: 1.02 }}
            className="relative w-full max-w-4xl mx-auto aspect-[2.2/1] bg-transparent border border-zinc-200/80 dark:border-zinc-800 rounded-xl flex flex-col"
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
             <motion.div id="cursor" className="absolute z-20 pointer-events-none" style={{ opacity: 0, x: 150, y: -30 }}>
                <MouseCursorIcon className="w-5 h-5 text-zinc-900 dark:text-white drop-shadow-lg" />
            </motion.div>
            {/* Browser-style Header */}
            <div className="flex-shrink-0 px-4 pt-3 flex items-end border-b border-zinc-200/80 dark:border-zinc-800">
                {/* Tabs */}
                <button
                    id="viz-tab-before"
                    onClick={() => handleToggle('before')}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg border text-sm transition-colors focus:outline-none -mb-px ${
                        isBefore
                        ? 'bg-zinc-50/70 dark:bg-zinc-900/70 border-zinc-200/80 dark:border-zinc-800 border-b-transparent text-red-500 font-semibold z-10'
                        : 'bg-transparent border-transparent text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40'
                    }`}
                >
                    <XIcon className="w-4 h-4" />
                    <span>Your Funnel</span>
                </button>
                <button
                    id="viz-tab-after"
                    onClick={() => handleToggle('after')}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-t-lg border text-sm transition-colors focus:outline-none -mb-px ${
                        isAfter
                        ? 'bg-zinc-50/70 dark:bg-zinc-900/70 border-zinc-200/80 dark:border-zinc-800 border-b-transparent text-green-500 font-semibold z-10'
                        : 'bg-transparent border-transparent text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40'
                    }`}
                >
                    <CheckIcon className="w-4 h-4" />
                    <span>ViziGrowth Funnel</span>
                </button>
            </div>
            
            <div className="flex-grow relative w-full h-full overflow-hidden">
                <AnimatePresence mode="wait">
                    {isBefore ? <NothingFoundScreen key="before" /> : <ConversionsRecordingScreen key="after" />}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default WebsitePerformanceViz;