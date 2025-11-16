import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DocumentIcon from './icons/DocumentIcon';
import Button from './ui/Button';
import XIcon from './icons/XIcon';
import AtSymbolIcon from './icons/AtSymbolIcon';
import AnimatedCheckCircleIcon from './icons/AnimatedCheckCircleIcon';

interface ExitIntentPopupProps {
    onClose: () => void;
    onSubmit: (email: string) => Promise<void>;
}

const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    // FIX: Explicitly cast 'spring' to its literal type to fix TypeScript error.
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 25 } },
    exit: { opacity: 0, scale: 0.9, y: 20, transition: { duration: 0.2 } },
};

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ onClose, onSubmit }) => {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);
        try {
            await onSubmit(email);
            setIsSuccess(true);
            setTimeout(() => {
                onClose();
            }, 2500);
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
        >
            <motion.div
                className="relative w-full max-w-md bg-stone-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl p-8"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-500 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                    aria-label="Close popup"
                >
                    <XIcon className="w-5 h-5" />
                </button>
                
                <AnimatePresence mode="wait">
                    {isSuccess ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <AnimatedCheckCircleIcon className="w-16 h-16 text-green-500 mx-auto" isInView={true} />
                            <h3 className="mt-4 text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                Success!
                            </h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                Your free guide is on its way. Check your inbox!
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div key="form">
                            <div className="text-center">
                                <div className="inline-block bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 mx-auto">
                                    <DocumentIcon className="w-10 h-10 text-zinc-600 dark:text-zinc-400" />
                                </div>
                                <h3 className="mt-6 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                    Before you go...
                                </h3>
                                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                                    Grab a free copy of <strong className="text-zinc-800 dark:text-zinc-200">"5 Simple Fixes to Stop Revenue Leaks"</strong>—a no-fluff PDF with actionable tips you can implement today.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="mt-6">
                                <fieldset disabled={isSubmitting}>
                                    <label htmlFor="exit-email" className="sr-only">Email address</label>
                                    <div className="relative">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <AtSymbolIcon className="h-5 w-5 text-zinc-400" />
                                        </div>
                                        <input 
                                            id="exit-email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full rounded-lg border border-zinc-300/80 bg-white dark:bg-zinc-900 dark:border-zinc-700/80 px-4 py-3 pl-10 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-amber-500/50"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                                    <Button type="submit" size="lg" className="w-full mt-4" disabled={isSubmitting}>
                                        {isSubmitting ? 'Sending...' : 'Get The Free PDF'}
                                    </Button>
                                </fieldset>
                            </form>
                            <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-400 text-center">No spam, just value. Unsubscribe anytime.</p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
};

export default ExitIntentPopup;