import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import Button from './ui/Button';
import ArrowRightIcon from './icons/ArrowRightIcon';
import CheckIcon from './icons/CheckIcon';
import Tooltip from './ui/Tooltip';
import ShieldIcon from './icons/ShieldIcon';

const Label: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300 mb-2">
    {children}
  </label>
);

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className="block w-full rounded-lg border border-zinc-300/80 bg-white dark:bg-zinc-900 dark:border-zinc-700/80 px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-500/50 transition-colors"
  />
);

const Select: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
    <div className="relative">
        <select
            {...props}
            className="appearance-none block w-full rounded-lg border border-zinc-300/80 bg-white dark:bg-zinc-900 dark:border-zinc-700/80 px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-blue-500/50 transition-colors"
        >
            {props.children}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-400">
            <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
        </div>
    </div>
);

const takeaways = [
    { text: "Single Expert", tooltip: "You deal with one founder — no account managers, no handoffs." },
    { text: "Signal KPIs", tooltip: "MQLs, session quality, CAC — the metrics that matter, not vanity." },
    { text: "Clear Guarantee", tooltip: "Measurable uplift or I keep working until we hit it." }
];

const FinalCTA: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section id="final-cta" className="py-24 sm:py-32">
        <BentoCard className="relative overflow-hidden max-w-4xl mx-auto p-8 sm:p-12">
            <motion.svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                fill="transparent"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
            >
                <motion.rect
                    x="1" y="1"
                    width="calc(100% - 2px)"
                    height="calc(100% - 2px)"
                    rx="15"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-zinc-300/80 dark:text-zinc-700/80"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
                />
            </motion.svg>

            <div className="relative z-10 text-center">
                 <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">Ready to build a system that works?</h3>
                 <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    Let's have a 15-minute chat. No pressure, no sales pitch—just a frank conversation about your growth potential.
                 </p>
            </div>

            <form action="https://example.com/submit" method="POST" className="relative z-10 mt-10 space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="full-name">Full Name</Label>
                        <Input type="text" name="full-name" id="full-name" placeholder="Jane Doe" required autoComplete="name" />
                    </div>
                    <div>
                        <Label htmlFor="email">Work Email</Label>
                        <Input type="email" name="email" id="email" placeholder="jane@company.com" required autoComplete="email" />
                    </div>
                </div>
                <div>
                    <Label htmlFor="website-url">Website URL</Label>
                    <Input type="url" name="website-url" id="website-url" placeholder="https://company.com" required autoComplete="url" />
                </div>
                <div>
                    <Label htmlFor="biggest-problem">What's the #1 revenue leak you're trying to fix?</Label>
                    <Input type="text" name="biggest-problem" id="biggest-problem" placeholder="e.g., Low demo bookings from our pricing page" required />
                </div>
                 <div className="pt-2">
                    <div className="flex items-start">
                        <div className="flex-shrink-0">
                            <input id="consent" name="consent" type="checkbox" className="h-4 w-4 rounded border-zinc-300/80 dark:border-zinc-700 text-blue-600 focus:ring-blue-500 dark:bg-zinc-800" required />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="consent" className="text-zinc-500 dark:text-zinc-400">
                                You agree to receive a one-time response to your application. No spam, ever.
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <Button type="submit" size="lg" variant="primary" className="w-full">
                        Let's Chat
                        <ArrowRightIcon />
                    </Button>
                </div>
            </form>
        </BentoCard>
        <div className="mt-12 flex items-center justify-center gap-4 sm:gap-6 flex-wrap px-4">
            {takeaways.map((item) => (
            <Tooltip key={item.text} content={item.tooltip}>
                <div className="flex items-center gap-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider cursor-help">
                <CheckIcon className="w-4 h-4 text-green-500" />
                <span>{item.text}</span>
                </div>
            </Tooltip>
            ))}
        </div>
        
        <div id="guarantee" ref={ref} className="max-w-4xl mx-auto mt-16">
            <BentoCard className="p-8 sm:p-12 text-center">
                <div className="inline-block bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-700/80">
                    <ShieldIcon className="w-10 h-10" animate={isInView} />
                </div>
                <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    A Simple Guarantee
                </h3>
                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    Before we start, we establish a clear performance baseline. The project is successful only when we beat it. Simple as that.
                </p>
                <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500 max-w-2xl mx-auto">
                    This isn't an agency retainer where you hope for the best. It's a clear, deliverable-focused project with a simple guarantee.
                </p>
            </BentoCard>
        </div>
    </section>
  );
};

export default FinalCTA;