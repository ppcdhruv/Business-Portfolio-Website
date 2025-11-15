import React from 'react';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';
import BentoCard from './ui/BentoCard';
import SectionHeader from './ui/SectionHeader';

const goodFit = [
  { text: "You're a B2B/SaaS founder with a validated product ($100k+ ARR)." },
  { text: "You have a consistent traffic source (5k+ visitors/mo or an ad budget)." },
  { text: "You are a decisive leader who trusts data over committee-led design." },
  { text: "You see this as a system build, not just a 'website redesign'." }
];

const badFit = [
  { text: "You are pre-product or pre-revenue." },
  { text: "You require multiple stakeholder approvals for copy and design." },
  { text: "You're looking for a 'quick hack' instead of a sustainable system." },
  { text: "You don't have analytics or user data to inform decisions." }
];

const FitCheck: React.FC = () => {
  return (
    <section id="fit-check" className="py-24 sm:py-32">
      <SectionHeader
        title="Who This Is For (And Who It's Not For)"
        description="This is a partnership. To guarantee results, we need to be fully aligned on process and goals. Here’s what a successful partnership looks like."
      />
      <BentoCard className="mt-16 max-w-4xl mx-auto p-8 sm:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-6">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center ring-4 ring-green-500/10">
                        <CheckIcon className="w-5 h-5 text-green-700 dark:text-green-500" />
                    </span>
                    We're a great fit if...
                </h3>
                <ul className="space-y-3">
                    {goodFit.map((item) => (
                        <li key={item.text} className="flex items-start text-base text-neutral-600 dark:text-neutral-300">
                           <span className="font-semibold text-green-600 dark:text-green-500 mr-2 mt-0.5">✓</span>
                           <span>{item.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <div className="space-y-6 md:border-l border-neutral-200/80 dark:border-neutral-800/80 md:pl-12">
                 <h3 className="text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center ring-4 ring-red-500/10">
                        <XIcon className="w-5 h-5 text-red-700 dark:text-red-500" />
                    </span>
                    We might not be a fit if...
                </h3>
                <ul className="space-y-3">
                    {badFit.map((item) => (
                         <li key={item.text} className="flex items-start text-base text-neutral-600 dark:text-neutral-300">
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