import React from 'react';
import { motion } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import SectionHeader from './ui/SectionHeader';
import InfoIcon from './icons/InfoIcon';
import CheckIcon from './icons/CheckIcon';
import Button from './ui/Button';
import ArrowRightIcon from './icons/ArrowRightIcon';

const services = [
  {
    title: "Traffic",
    description: "Deploying high-performance landing pages and user flows engineered for a single purpose: converting traffic into revenue.",
    keyActivities: [
      { name: "Conversion Copywriting", tooltip: "Writing direct-response copy using proven frameworks like AIDA and PAS to drive action." },
      { name: "UI/UX Wireframing", tooltip: "Designing user-centric layouts focused on clarity, simplicity, and reducing friction." },
      { name: "A/B Testing Framework Setup", tooltip: "Implementing tools and processes to systematically test and validate changes for continuous improvement." },
      { name: "Pixel-Perfect Implementation", tooltip: "Clean, responsive code that ensures a flawless experience on every device." },
    ]
  },
  {
    title: "Leads",
    description: "Building and managing data-driven paid acquisition systems that generate predictable, scalable, and profitable lead flow.",
    keyActivities: [
      { name: "Multi-platform Ad Management", tooltip: "Managing campaigns across platforms like Google, LinkedIn, and Meta to reach your ideal customer." },
      { name: "Audience Segmentation", tooltip: "Defining and targeting precise customer segments to maximize ad relevance and ROAS." },
      { name: "ROAS Tracking & Optimization", tooltip: "Setting up robust tracking to measure Return On Ad Spend and continuously optimize for profitability." },
      { name: "Creative Asset Production", tooltip: "Developing ad creatives (images, videos, copy) that capture attention and drive clicks." },
    ]
  },
  {
    title: "Nurture",
    description: "Architecting automated email and in-app messaging sequences that guide users from signup to 'aha!' moment to conversion.",
     keyActivities: [
      { name: "Customer Journey Mapping", tooltip: "Visually mapping out every touchpoint a user has to identify opportunities for automated engagement." },
      { name: "Behavior-triggered Sequences", tooltip: "Creating email flows that are triggered by specific user actions (or inaction) for maximum relevance." },
      { name: "Email Template Design & Code", tooltip: "Building responsive, high-deliverability email templates that look great in every inbox." },
      { name: "CRM Integration", tooltip: "Syncing all email and user activity with your CRM for a unified view of the customer." },
    ]
  },
  {
    title: "AI Stuff",
    description: "Designing and deploying custom AI agents and internal tools to automate qualification, support, and sales tasks.",
     keyActivities: [
      { name: "LLM Prompt Engineering", tooltip: "Crafting precise instructions for Large Language Models to ensure reliable and accurate outputs for your business tasks." },
      { name: "Internal Knowledge Base Setup", tooltip: "Structuring your company's internal data so AI agents can access it to provide accurate, context-aware responses." },
      { name: "API Integration with Existing Tools", tooltip: "Connecting AI models to your current software stack (CRM, Slack, etc.) to create seamless workflows." },
      { name: "Automated Lead Scoring", tooltip: "Using AI to analyze lead data and automatically prioritize the highest-value prospects for your sales team." },
    ]
  },
];

const ServiceModules: React.FC = () => {
  return (
    <section id="system" className="py-24 sm:py-32">
      <SectionHeader
        title="Core Capabilities"
        description="These are the four core disciplines I use to build growth systems. Each project is a focused application of these disciplines."
      />
      <div className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8">
        <div
          className="flex overflow-x-auto space-x-8 px-4 sm:px-6 lg:px-8 pb-8 no-scrollbar"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="flex-shrink-0 w-[90vw] max-w-md md:w-[450px]"
            >
              <BentoCard className="group text-left flex flex-col items-start p-8 h-full">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{service.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-2 flex-grow text-base">{service.description}</p>
                  
                  <hr className="my-6 w-full border-zinc-200/80 dark:border-zinc-800/80" />

                  <div>
                    <p className="text-sm font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider mb-4">Key Activities</p>
                    <ul className="space-y-3">
                      {service.keyActivities.map(activity => (
                        <li
                          key={activity.name}
                          className="group flex items-center justify-between text-base"
                        >
                          <div className="flex items-center">
                            <CheckIcon className="w-5 h-5 mr-3 flex-shrink-0 text-zinc-400 dark:text-zinc-500" />
                            <span className="font-medium text-zinc-800 dark:text-zinc-200">
                              {activity.name}
                            </span>
                          </div>
                          <div className="relative flex items-center">
                            <div className="peer opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <InfoIcon className="w-5 h-5 text-zinc-400 dark:text-zinc-500 cursor-help" />
                            </div>
                            <div className="absolute bottom-full mb-2 w-64 bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-200 text-xs font-medium rounded-md p-3 shadow-lg opacity-0 peer-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 left-1/2 -translate-x-1/2">
                              {activity.tooltip}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-zinc-900 dark:border-t-zinc-800"></div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
              </BentoCard>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <a href="#final-cta" className="group block max-w-3xl mx-auto rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-zinc-400 dark:focus:ring-offset-zinc-950">
          <BentoCard className="p-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                  <div className="text-left">
                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Ready to Build Your System?</h3>
                      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                          These are the building blocks. Let's combine them into a custom system that solves your specific revenue leak.
                      </p>
                  </div>
                  <Button as="div" variant="primary" size="lg" className="flex-shrink-0 w-full sm:w-auto">
                      Get Your Free Funnel Audit
                      <ArrowRightIcon />
                  </Button>
              </div>
          </BentoCard>
        </a>
      </div>
    </section>
  );
};

export default ServiceModules;