import React from 'react';
import BentoCard from './ui/BentoCard';
import LinkedInIcon from './icons/LinkedInIcon';
import AnimatedNumber from './ui/AnimatedNumber';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-zinc-900 dark:text-white">Founder → founder</h2>
      </div>
      <BentoCard className="mt-16 max-w-5xl mx-auto p-4 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 items-center">
            <div className="md:col-span-1 h-full w-full">
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800/80">
                     <img 
                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
                        alt="Dhruv, Founder of ViziGrowth"
                        className="w-full h-full object-cover grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
                    />
                </div>
            </div>
            <div className="md:col-span-2 p-4">
                <div className="group inline-flex items-center gap-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    <h3 className="hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">Dhruv, 32</h3>
                    <a 
                        href="https://www.linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Dhruv's LinkedIn Profile"
                        className="text-zinc-400 dark:text-zinc-500 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                    >
                        <LinkedInIcon className="w-5 h-5" />
                    </a>
                </div>
                <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
                   I’m Dhruv — 8 years in growth, ex-Google Ads, building conversion systems for founder-led businesses.
                </p>

                <p className="mt-6 text-zinc-600 dark:text-zinc-400">
                    I personally build every system. This isn't an agency hand-off; it's a direct partnership focused on a single goal: building a predictable revenue system for your business.
                </p>

                 <div className="mt-6 flex items-baseline gap-x-6 gap-y-2 flex-wrap border-y border-zinc-200/80 dark:border-zinc-800/80 py-4">
                    <div className="text-center flex-1">
                        <p className="text-3xl font-black tracking-tighter text-zinc-800 dark:text-zinc-200">
                            <AnimatedNumber value={47} />
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 whitespace-nowrap">Funnels Built</p>
                    </div>
                    <div className="text-center flex-1">
                        <p className="text-3xl font-black tracking-tighter text-zinc-800 dark:text-zinc-200">
                            <AnimatedNumber value={2.3} decimals={1} prefix="$" suffix="M" />
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 whitespace-nowrap">Tracked Revenue</p>
                    </div>
                    <div className="text-center flex-1">
                        <p className="text-3xl font-black tracking-tighter text-zinc-800 dark:text-zinc-200">
                            <AnimatedNumber value={4.2} decimals={1} suffix="x" />
                        </p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 whitespace-nowrap">Avg. Lead Lift</p>
                    </div>
                </div>
            </div>
        </div>
      </BentoCard>
    </section>
  );
};

export default About;