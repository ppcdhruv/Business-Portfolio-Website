import React from 'react';
import { motion } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import SectionHeader from './ui/SectionHeader';
import InfoIcon from './icons/InfoIcon';
import CheckIcon from './icons/CheckIcon';
import Button from './ui/Button';
import ArrowRightIcon from './icons/ArrowRightIcon';
import Rocket3D from './icons/Rocket3D';

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
    title: "AI",
    description: "Custom AI-powered chatbots and agents that engage visitors, qualify leads, and book meetings 24/7.",
    keyActivities: [
      { name: "Conversational Flow Design", tooltip: "Scripting natural, non-robotic conversations that guide users to a desired outcome." },
      { name: "Knowledge Base Integration", tooltip: "Training the AI on your documentation, website, and support data for accurate answers." },
      { name: "Lead Handoff Automation", tooltip: "Setting up rules to automatically escalate high-intent conversations to your sales team." },
      { name: "API & Tool Integration", tooltip: "Connecting the AI to your existing tools (e.g., calendar, CRM) to perform actions on behalf of the user." },
    ]
  }
];

const ActivityTooltip: React.FC<{ content: string; children: React.ReactNode }> = ({ content, children }) => (
  <div className="relative group flex items-center">
    {children}
    <div className="absolute bottom-full mb-2 w-60 bg-stone-900 text-white text-xs font-medium rounded-md p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 left-1/2 -translate-x-1/2">
      {content}
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-stone-900"></div>
    </div>
  </div>
);


const ServiceModules: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28">
      <SectionHeader
        title="The Four Core Systems of Growth"
        description="We install a complete, end-to-end conversion engine. Each system works together to turn clicks into predictable revenue."
      />
      
      <motion.div 
        className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {services.map((service) => (
          <motion.div
            key={service.title}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <BentoCard className="h-full flex flex-col p-8">
              <h3 className="text-xl font-bold tracking-tight text-stone-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 flex-grow">{service.description}</p>
              <div className="mt-6 pt-6 border-t border-stone-200/80 dark:border-stone-800/80">
                <p className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider mb-3">Key Activities</p>
                <ul className="space-y-2.5">
                  {service.keyActivities.map(activity => (
                    <li key={activity.name} className="flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300">
                      <CheckIcon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{activity.name}</span>
                      <ActivityTooltip content={activity.tooltip}>
                        <InfoIcon className="w-4 h-4 text-stone-400 dark:text-stone-500 cursor-help" />
                      </ActivityTooltip>
                    </li>
                  ))}
                </ul>
              </div>
            </BentoCard>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 text-center">
        <BentoCard className="max-w-4xl mx-auto p-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
                <h3 className="text-2xl font-bold tracking-tight text-stone-900 dark:text-white">Ready to Install Your Growth Engine?</h3>
                <p className="mt-2 text-stone-600 dark:text-stone-400">Get a free, no-obligation audit of your current funnel. We'll show you exactly where you're leaking revenue and how we can fix it.</p>
            </div>
            <div className="flex-shrink-0">
                <Button href="#final-cta" size="lg" variant="primary">
                    Get Free Funnel Audit
                    <ArrowRightIcon />
                </Button>
            </div>
        </BentoCard>
      </div>
    </section>
  );
};

export default ServiceModules;
