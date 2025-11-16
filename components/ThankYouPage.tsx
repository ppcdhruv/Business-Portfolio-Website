import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import InboxIcon from './icons/InboxIcon';
import { motion } from 'framer-motion';

interface ThankYouPageProps {
  applicantName: string;
  onBack: () => void;
}

// FIX: Created variants to handle animations and fix prop errors.
const thankYouVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const ThankYouPage: React.FC<ThankYouPageProps> = ({ applicantName, onBack }) => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar flex items-center justify-center bg-white dark:bg-zinc-950">
      <Container>
        {/* FIX: Refactored motion props to use variants to resolve TS errors. */}
        <motion.div 
            className="max-w-md mx-auto text-center p-8 bg-stone-50 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 rounded-2xl"
            variants={thankYouVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="inline-block bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 mx-auto">
                <InboxIcon className="w-12 h-12 text-zinc-600 dark:text-zinc-400" />
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Thank you, {applicantName}!
            </h1>
            <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                Your free funnel audit request has been received. We're reviewing your details and will get back to you with the next steps at your provided email address within 24 hours.
            </p>
            <p className="mt-4 font-semibold text-zinc-800 dark:text-zinc-200">Please check your inbox (and spam folder, just in case!).</p>
            <div className="mt-8">
                <Button onClick={onBack} variant="secondary">Back to Site</Button>
            </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default ThankYouPage;
