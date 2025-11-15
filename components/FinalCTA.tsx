import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import Button from './ui/Button';
import ArrowRightIcon from './icons/ArrowRightIcon';
import UserIcon from './icons/UserIcon';
import AtSymbolIcon from './icons/AtSymbolIcon';
import LinkIcon from './icons/LinkIcon';
import QuestionMarkCircleIcon from './icons/QuestionMarkCircleIcon';
import ShieldIcon from './icons/ShieldIcon';
import AnimatedCheckCircleIcon from './icons/AnimatedCheckCircleIcon';

const Label: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
    {children}
  </label>
);

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className={`block w-full rounded-lg border border-zinc-300/80 bg-white dark:bg-zinc-900 dark:border-zinc-700/80 px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-amber-500/50 transition-colors ${props.className}`}
  />
);

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = (props) => (
  <textarea
    {...props}
    className="block w-full rounded-lg border border-zinc-300/80 bg-white dark:bg-zinc-900 dark:border-zinc-700/80 pl-10 pr-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-amber-500/50 transition-colors"
  />
);

const promiseTakeaways = [
    "Single Point of Contact",
    "Focus on Signal KPIs",
    "A Clear Path to ROI",
];

const FinalCTA: React.FC = () => {
  const promiseRef = useRef(null);
  const isPromiseInView = useInView(promiseRef, { once: true, amount: 0.5 });

  return (
    <section id="final-cta" className="py-20 sm:py-28">
        <BentoCard className="relative overflow-hidden max-w-4xl mx-auto p-8">
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

            <div className="relative z-10 max-w-2xl mx-auto text-center">
                {/* --- Merged Header --- */}
                <div ref={promiseRef} className="flex flex-col items-center">
                    <div className="inline-block bg-zinc-100 dark:bg-zinc-800/50 p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 mx-auto">
                        <ShieldIcon className="w-12 h-12" animate={isPromiseInView} />
                    </div>
                    <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Ready to stop leaking revenue?
                    </h3>
                     <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                        Let's have a 15-minute chat. No pressure, no sales pitch—just a <strong className="text-zinc-800 dark:text-zinc-200">frank conversation</strong> about your <strong className="text-zinc-800 dark:text-zinc-200">growth potential.</strong>
                     </p>
                </div>

                {/* --- The Form --- */}
                <div className="mt-8">
                    <form action="https://example.com/submit" method="POST" className="space-y-5 mt-8 text-left">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                            <div>
                                <Label htmlFor="full-name">Full Name</Label>
                                <div className="relative mt-2">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <UserIcon className="h-5 w-5 text-zinc-400" />
                                    </div>
                                    <Input type="text" name="full-name" id="full-name" placeholder="Jane Doe" required autoComplete="name" className="!pl-10" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="email">Work Email</Label>
                                <div className="relative mt-2">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <AtSymbolIcon className="h-5 w-5 text-zinc-400" />
                                    </div>
                                    <Input type="email" name="email" id="email" placeholder="jane@company.com" required autoComplete="email" className="!pl-10" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="website-url">Website URL</Label>
                            <div className="relative mt-2">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <LinkIcon className="h-5 w-5 text-zinc-400" />
                                </div>
                                <Input type="url" name="website-url" id="website-url" placeholder="https://company.com" required autoComplete="url" className="!pl-10" />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="biggest-problem">What's the #1 revenue leak you're trying to fix?</Label>
                             <div className="relative mt-2">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <QuestionMarkCircleIcon className="h-5 w-5 text-zinc-400" />
                                </div>
                                <Input type="text" name="biggest-problem" id="biggest-problem" placeholder="e.g., Low demo bookings from pricing page" required className="!pl-10" />
                            </div>
                        </div>
                         <div className="pt-2">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <input id="consent" name="consent" type="checkbox" className="h-4 w-4 rounded border-zinc-300/80 bg-zinc-100 dark:bg-zinc-800 text-amber-600 focus:ring-amber-500 focus:ring-offset-white dark:focus:ring-offset-zinc-950 dark:border-zinc-700/80" required />
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
                                Get Your Free Funnel Audit
                                <ArrowRightIcon />
                            </Button>
                        </div>
                    </form>
                </div>
                
                 <ul className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-3">
                    {promiseTakeaways.map((item, index) => (
                        <motion.li 
                            key={item} 
                            className="flex items-center gap-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={isPromiseInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                        >
                            <AnimatedCheckCircleIcon className="w-4 h-4 text-zinc-500 dark:text-zinc-400 flex-shrink-0" isInView={isPromiseInView} />
                            <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{item}</p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </BentoCard>
    </section>
  );
};

export default FinalCTA;