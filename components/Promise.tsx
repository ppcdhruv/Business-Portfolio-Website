import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import ShieldIcon from './icons/ShieldIcon';
import AnimatedCheckCircleIcon from './icons/AnimatedCheckCircleIcon';

const takeaways = [
    { text: "Single Point of Contact", tooltip: "You work directly with the founder. No account managers, no handoffs." },
    { text: "Focus on Signal KPIs", tooltip: "We track MQLs, session quality, and CAC—metrics that matter, not vanity." },
    { text: "Guaranteed Performance Uplift", tooltip: "We agree on KPIs before starting. If we don't hit them, I work for free until we do." }
];


const Promise: React.FC = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
    
    return (
        <section id="guarantee" className="py-24 sm:py-32" ref={sectionRef}>
            <div className="max-w-4xl mx-auto">
                <BentoCard className="p-8 sm:p-12">
                    <div className="text-center">
                        <div className="inline-block bg-zinc-100 dark:bg-zinc-800/50 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-700/80">
                            <ShieldIcon className="w-10 h-10" animate={isInView} />
                        </div>
                        <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                            Your ROI is Guaranteed
                        </h3>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                           Every project comes with a simple, no-nonsense performance guarantee. If we don't hit the mutually agreed-upon KPIs, I will continue working for free until we do.
                        </p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto mt-12">
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
                            {takeaways.map((item, index) => (
                                <motion.li 
                                    key={item.text} 
                                    className="flex items-start gap-3 text-left"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: index * 0.15 }}
                                >
                                    <AnimatedCheckCircleIcon className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mt-0.5 flex-shrink-0" isInView={isInView} />
                                    <div>
                                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{item.text}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </BentoCard>
            </div>
        </section>
    );
};

export default Promise;