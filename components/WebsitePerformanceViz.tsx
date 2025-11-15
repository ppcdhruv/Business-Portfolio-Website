import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import XIcon from './icons/XIcon';
import CheckIcon from './icons/CheckIcon';
import MouseCursorIcon from './icons/MouseCursorIcon';

type VizState = 'before' | 'after';

const NothingFoundScreen: React.FC = () => (
    <motion.div
        className="absolute inset-0 z-10 p-4 flex flex-col items-center justify-center font-mono text-center"
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
        className="absolute inset-0 z-10 p-4 flex flex-col items-center justify-center font-mono text-center"
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
            className="relative w-full max-w-4xl mx-auto aspect-[1.6/1] sm:aspect-[2.2/1] bg-white/10 dark:bg-zinc-900/10 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50 rounded-xl flex flex-col shadow-2xl shadow-zinc-900/10 dark:shadow-black/20"
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
             <motion.div id="cursor" className="absolute z-20 pointer-events-none" style={{ opacity: 0, x: 150, y: -30 }}>
                <MouseCursorIcon className="w-5 h-5 text-zinc-500 dark:text-zinc-400 drop-shadow-lg" />
            </motion.div>
            <div className="flex-none px-3 py-2 border-b border-zinc-200/50 dark:border-zinc-800/50 flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 dark:bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 dark:bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 dark:bg-green-500"></div>
                </div>
                <div className="flex items-center gap-1">
                    <button id="viz-tab-before" onClick={() => handleToggle('before')} className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${isBefore ? 'bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'}`}>
                        <div className="flex items-center gap-2">
                            <XIcon className="w-4 h-4 text-red-500" />
                            <span>Old Site</span>
                        </div>
                    </button>
                    <button id="viz-tab-after" onClick={() => handleToggle('after')} className={`px-4 py-1.5 text-xs font-semibold rounded-md transition-colors ${isAfter ? 'bg-zinc-200/80 dark:bg-zinc-800/80 text-zinc-900 dark:text-white' : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/50'}`}>
                         <div className="flex items-center gap-2">
                            <CheckIcon className="w-4 h-4 text-green-500" />
                            <span>ViziGrowth Funnel</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="relative flex-grow">
                <AnimatePresence mode="wait">
                    {isBefore ? <NothingFoundScreen key="before" /> : <ConversionsRecordingScreen key="after" />}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default WebsitePerformanceViz;