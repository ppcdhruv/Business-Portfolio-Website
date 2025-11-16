import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PlusMinusIcon from '../icons/PlusMinusIcon';

interface AccordionItemProps {
    question: string;
    answer: React.ReactNode;
}

// FIX: Created variants to handle animations and fix prop errors.
const contentVariants = {
    open: { opacity: 1, height: 'auto', y: 0 },
    collapsed: { opacity: 0, height: 0, y: -10 },
};

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-zinc-200/80 dark:border-zinc-800/80">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center text-left py-5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-950 rounded-lg"
                aria-expanded={isOpen}
            >
                <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-200">
                    {question}
                </span>
                <PlusMinusIcon isOpen={isOpen} className="w-6 h-6 flex-shrink-0 text-zinc-500 dark:text-zinc-400" />
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    // FIX: Refactored motion props to use variants to resolve TS errors.
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={contentVariants}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-base text-zinc-600 dark:text-zinc-400 prose prose-zinc dark:prose-invert max-w-none">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;
