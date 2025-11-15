import React from 'react';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';
import BentoCard from './ui/BentoCard';
import SectionHeader from './ui/SectionHeader';

const goodFit = [
  { text: "You have validated product-market fit and an existing offer that converts." },
  { text: "Your business generates between $10k - $100k in monthly revenue." },
  { text: "As a founder, you are still directly involved in sales and marketing." },
  { text: "You're ready to commit a test budget of $500 - $1k to validate the new system." }
];

const badFit = [
  { text: "You are pre-revenue or haven't validated your core offer." },
  { text: "Your process requires design and copy decisions by a large committee." },
  { text: "You're focused on 'going viral' instead of building a predictable growth system." },
  { text: "You're unwilling to grant analytics access for data-driven decisions." }
];

const FitCheck: React.FC = () => {
  return (
    <section id="fit-check" className="py-20 sm:py-28">
      <SectionHeader
        title="Who gets the best results"
        description={<>This system is built for a specific type of founder. Maximum results are achieved when there's a <strong className="text-stone-800 dark:text-stone-200">strong alignment</strong> on goals, process, and mindset from day one.</>}
      />
      <BentoCard className="mt-16 max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-stone-900 dark:text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center ring-4 ring-green-500/10">
                        <CheckIcon className="w-5 h-5 text-green-700 dark:text-green-500" />
                    </span>
                    We're a great fit if...
                </h3>
                <ul className="space-y-3">
                    {goodFit.map((item) => (
                        <li key={item.text} className="flex items-start text-base text-stone-600 dark:text-stone-300">
                           <span className="font-semibold text-green-600 dark:text-green-500 mr-2 mt-0.5">✓</span>
                           <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <div className="space-y-6 md:border-l border-stone-200/80 dark:border-stone-800/80 md:pl-12">
                 <h3 className="text-xl font-bold text-stone-900 dark:text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center ring-4 ring-red-500/10">
                        <XIcon className="w-5 h-5 text-red-700 dark:text-red-500" />
                    </span>
                    We might not be a fit if...
                </h3>
                <ul className="space-y-3">
                    {badFit.map((item) => (
                         <li key={item.text} className="flex items-start text-base text-stone-600 dark:text-stone-300">
                            <span className="font-semibold text-red-600 dark:text-red-500 mr-2 mt-0.5">✗</span>
                            <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      </BentoCard>
    </section>
  );
};

export default FitCheck;