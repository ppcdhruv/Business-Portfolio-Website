import React from 'react';
import BentoCard from './ui/BentoCard';
import LinkedInIcon from './icons/LinkedInIcon';
import AnimatedNumber from './ui/AnimatedNumber';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28">
      <BentoCard className="max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-stretch md:h-96">
            <div className="md:col-span-2 h-full w-full min-h-[300px]">
                 <img 
                    src="https://raw.githubusercontent.com/ppcdhruv/Business-Portfolio-Website/0804a6475591177194d8b625e684123dd72a820a/data/about-picture"
                    alt="Dhruv, Founder of ViziGrowth"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover rounded-xl grayscale transition-all duration-500 ease-in-out hover:grayscale-0"
                    style={{ objectPosition: 'center 45%' }}
                />
            </div>
            <div className="md:col-span-3 flex flex-col justify-between">
                <div>
                  <a 
                      href="https://www.linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label="Dhruv's LinkedIn Profile"
                      className="block ml-auto text-stone-400 dark:text-stone-500 hover:text-blue-600 dark:hover:text-blue-500 transition-colors"
                  >
                      <LinkedInIcon className="w-6 h-6" />
                  </a>
                </div>
                
                <div>
                    <div>
                        <h3 className="text-3xl font-bold tracking-tight text-stone-900 dark:text-white">Founder → founder</h3>
                        <p className="mt-4 text-base text-stone-600 dark:text-stone-400">
                           I’m Dhruv — 8 years in growth, ex-Google Ads, <strong className="text-stone-800 dark:text-stone-200">building conversion systems</strong> for founder-led businesses.
                        </p>
                        <p className="mt-4 text-stone-600 dark:text-stone-400">
                            I personally build every system. This isn't an agency hand-off; it's a <strong className="text-stone-800 dark:text-stone-200">direct partnership</strong> focused on a single goal: building a <strong className="text-stone-800 dark:text-stone-200">predictable revenue system</strong> for your business.
                        </p>
                    </div>

                    <div className="pt-8">
                        <div className="flex items-baseline gap-x-6 gap-y-2 flex-wrap border-t border-stone-200/80 dark:border-stone-800/80 pt-6">
                            <div className="text-center flex-1 group">
                                <p className="text-3xl font-bold tracking-tighter text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                                    <AnimatedNumber value={47} suffix="+" />
                                </p>
                                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 whitespace-nowrap">Funnels Built</p>
                            </div>
                            <div className="text-center flex-1 group">
                                <p className="text-3xl font-bold tracking-tighter text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                                    <AnimatedNumber value={2.3} decimals={1} prefix="$" suffix="M" />
                                </p>
                                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 whitespace-nowrap">Tracked Revenue</p>
                            </div>
                            <div className="text-center flex-1 group">
                                <p className="text-3xl font-bold tracking-tighter text-stone-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors duration-300">
                                    <AnimatedNumber value={4.2} decimals={1} suffix="x" />
                                </p>
                                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5 whitespace-nowrap">Avg. Lead Lift</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </BentoCard>
    </section>
  );
};

export default About;