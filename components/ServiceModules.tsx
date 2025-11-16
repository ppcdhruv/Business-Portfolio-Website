import React, { useState, useRef, useEffect, useCallback } from 'react';
// FIX: Removed 'Variants' type which was not found and caused errors.
import { motion } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import SectionHeader from './ui/SectionHeader';
import InfoIcon from './icons/InfoIcon';
import Button from './ui/Button';
import ArrowRightIcon from './icons/ArrowRightIcon';
import Rocket3D from './icons/Rocket3D';
import AnimatedCheckmark from './icons/AnimatedCheckmark';
import Tooltip from './ui/Tooltip';

const services = [
  {
    title: "Traffic",
    description: "High-performance landing pages and user flows engineered to convert traffic into revenue.",
    keyActivities: [
      { name: "Conversion Copywriting", tooltip: "Writing direct-response copy using proven frameworks like AIDA and PAS to drive action." },
      { name: "UI/UX Wireframing", tooltip: "Designing user-centric layouts focused on clarity, simplicity, and reducing friction." },
      { name: "A/B Testing Framework Setup", tooltip: "Implementing tools and processes to systematically test and validate changes for continuous improvement." },
      { name: "Pixel-Perfect Implementation", tooltip: "Clean, responsive code that ensures a flawless experience on every device." },
    ]
  },
  {
    title: "Leads",
    description: "Data-driven paid acquisition systems that generate predictable, scalable, and profitable lead flow.",
    keyActivities: [
      { name: "Multi-platform Ad Management", tooltip: "Managing campaigns across platforms like Google, LinkedIn, and Meta to reach your ideal customer." },
      { name: "Audience Segmentation", tooltip: "Defining and targeting precise customer segments to maximize ad relevance and ROAS." },
      { name: "ROAS Tracking & Optimization", tooltip: "Setting up robust tracking to measure Return On Ad Spend and continuously optimize for profitability." },
      { name: "Creative Asset Production", tooltip: "Developing ad creatives (images, videos, copy) that capture attention and drive clicks." },
    ]
  },
  {
    title: "Nurture",
    description: "Automated email and messaging sequences that guide users from signup to conversion.",
     keyActivities: [
      { name: "Customer Journey Mapping", tooltip: "Visually mapping out every touchpoint a user has to identify opportunities for automated engagement." },
      { name: "Behavior-triggered Sequences", tooltip: "Creating email flows that are triggered by specific user actions (or inaction) for maximum relevance." },
      { name: "Email Template Design & Code", tooltip: "Building responsive, high-deliverability email templates that look great in every inbox." },
      { name: "CRM Integration", tooltip: "Syncing all email and user activity with your CRM for a unified view of the customer." },
    ]
  },
  {
    title: "AI Stuff",
    description: "Custom AI agents and internal tools to automate qualification, support, and sales tasks.",
     keyActivities: [
      { name: "LLM Prompt Engineering", tooltip: "Crafting precise instructions for Large Language Models to ensure reliable and accurate outputs for your business tasks." },
      { name: "Internal Knowledge Base Setup", tooltip: "Structuring your company's internal data so AI agents can access it to provide accurate, context-aware responses." },
      { name: "API Integration with Existing Tools", tooltip: "Connecting AI models to your current software stack (CRM, Slack, etc.) to create seamless workflows." },
      { name: "Automated Lead Scoring", tooltip: "Using AI to analyze lead data and automatically prioritize the highest-value prospects for your sales team." },
    ]
  },
];

const listContainerVariants = {
  visible: { transition: { staggerChildren: 0.08 } }
};

const listItemVariants = {
  hidden: { opacity: 0, x: -15 },
  // FIX: Explicitly cast 'ease' value to its literal type to fix TypeScript error.
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } }
};

const serviceCardVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
};

const rocketIconVariants = {
    hover: { 
        y: -8, 
        rotate: -3,
        // FIX: Explicitly cast 'spring' to its literal type to fix TypeScript error.
        transition: { type: 'spring' as const, stiffness: 300, damping: 10 }
    }
};

const ServiceModules: React.FC = () => {
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollContainerRef.current;
    if (el) {
      const isScrollable = el.scrollWidth > el.clientWidth;
      setShowLeftFade(el.scrollLeft > 5);
      setShowRightFade(isScrollable && el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      checkScroll();
      el.addEventListener('scroll', checkScroll, { passive: true });
      window.addEventListener('resize', checkScroll);
      const timeoutId = setTimeout(checkScroll, 300);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
        clearTimeout(timeoutId);
      };
    }
  }, [checkScroll]);

  return (
    <section id="services" className="pt-20 sm:pt-28 pb-20 sm:pb-28">
      <SectionHeader
        title="Core Capabilities"
        description={<>Each project is a focused application of these disciplines.</>}
      />
       <div className="mt-16 text-center text-xs text-zinc-500 dark:text-zinc-400 font-semibold tracking-wider mb-4 md:hidden">
          ‹ SCROLL FOR MORE ›
      </div>
      <div className="relative mt-8 -mx-4 sm:-mx-6 lg:-mx-8">
        <div className={`absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-zinc-950 pointer-events-none transition-opacity duration-300 ${showLeftFade ? 'opacity-100' : 'opacity-0'}`}></div>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-8 px-4 sm:px-6 lg:px-8 pb-8 no-scrollbar"
        >
          {services.map((service, index) => (
            // FIX: Refactored motion props to use variants to resolve TS errors.
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              variants={serviceCardVariants}
              className="flex-shrink-0 w-[calc(100vw-48px)] sm:w-[380px] md:w-[420px] max-w-full"
            >
              <BentoCard className="group text-left flex flex-col items-start p-8 h-full">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-2 flex-grow text-base">{service.description}</p>
                  
                  <hr className="my-6 w-full border-zinc-200/80 dark:border-zinc-800/80" />

                  <div>
                    <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">Key Activities</p>
                    {/* FIX: Refactored motion props to use variants to resolve TS errors. */}
                    <motion.ul className="space-y-3" variants={listContainerVariants}>
                      {service.keyActivities.map(activity => {
                        const tooltipId = `${service.title}-${activity.name}`;
                        return (
                          // FIX: Refactored motion props to use variants to resolve TS errors.
                          <motion.li
                            key={activity.name}
                            className="flex items-center justify-between text-base"
                            variants={listItemVariants}
                          >
                            <div className="flex items-center">
                              <AnimatedCheckmark className="w-5 h-5 mr-3 flex-shrink-0 text-green-600 dark:text-green-500" />
                              <span className="font-medium text-zinc-800 dark:text-zinc-200">
                                {activity.name}
                              </span>
                            </div>
                            <Tooltip
                              content={activity.tooltip}
                              isOpen={openTooltip === tooltipId}
                            >
                              <button
                                type="button"
                                aria-label={`More info about ${activity.name}`}
                                className="cursor-help p-1 -m-1 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                                onClick={() => setOpenTooltip(prev => prev === tooltipId ? null : tooltipId)}
                              >
                                  <InfoIcon className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
                              </button>
                            </Tooltip>
                          </motion.li>
                        )
                      })}
                    </motion.ul>
                  </div>
              </BentoCard>
            </motion.div>
          ))}
        </div>
        <div className={`absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-zinc-950 pointer-events-none transition-opacity duration-300 ${showRightFade ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
      <div className="mt-12 text-center">
        <a 
          href="#final-cta" 
          className="group block max-w-4xl mx-auto rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-zinc-400 dark:focus:ring-offset-zinc-950"
        >
          {/* FIX: Refactored motion props to use variants to resolve TS errors. */}
          <motion.div whileHover="hover">
            <BentoCard className="p-8 hover:scale-[1.01]">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4">
                        {/* FIX: Refactored motion props to use variants to resolve TS errors. */}
                        <motion.div
                          variants={rocketIconVariants}
                        >
                          <Rocket3D className="w-12 h-12 sm:w-16 sm:h-16 text-zinc-900 dark:text-white" />
                        </motion.div>
                        <div className="text-left">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Ready to Build Your System?</h3>
                            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                                These are the building blocks. Let's combine them into a custom system that solves your specific revenue leak.
                            </p>
                        </div>
                    </div>
                    <Button as="div" variant="primary" size="lg" className="flex-shrink-0 w-full sm:w-auto">
                        Get Your Free Funnel Audit
                        <ArrowRightIcon />
                    </Button>
                </div>
            </BentoCard>
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default ServiceModules;