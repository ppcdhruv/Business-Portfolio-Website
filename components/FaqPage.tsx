import React from 'react';
import Container from './ui/Container';
import Button from './ui/Button';
import SectionHeader from './ui/SectionHeader';
import AccordionItem from './ui/AccordionItem';

interface FaqPageProps {
  onBack: () => void;
}

const faqs = [
  {
    question: "What exactly is a 'conversion funnel'?",
    answer: <>A conversion funnel is the complete system—from ad click to thank you page—that guides a potential customer toward a specific business goal, like booking a demo or making a purchase. Unlike a static website that just provides information, a funnel is an <strong className="text-zinc-800 dark:text-zinc-200">engineered path designed for one outcome: revenue.</strong></>,
  },
  {
    question: "Who is this service for?",
    answer: <>This service is designed for B2B/SaaS founders with a validated product (typically $10k+ MRR) who have a traffic source but are struggling with low conversion rates. It's a great fit if you see this as a <strong className="text-zinc-800 dark:text-zinc-200">system build</strong>, not just a 'website redesign', and are ready to make data-driven decisions.</>,
  },
  {
    question: "What's the difference between 'Funnel Repair' and 'Full Engine Build'?",
    answer: <><strong>Funnel Repair</strong> is a surgical fix for one specific, high-impact part of your existing funnel, like a landing page or an email sequence. <strong>Full Engine Build</strong> is a complete, end-to-end system build, typically for a new launch or a full website overhaul where the entire user journey is engineered for conversion from the ground up.</>,
  },
  {
    question: "What does the process look like?",
    answer: <>It's a focused, collaborative sprint. We start with a deep-dive diagnosis of your current system. From there, I build the necessary assets (copy, wireframes, ads). I then implement everything, set up tracking, and validate the performance. You get a <strong className="text-zinc-800 dark:text-zinc-200">fully operational system, not just a list of recommendations.</strong></>,
  },
  {
    question: "What is the ROI guarantee?",
    answer: <>It's simple: we agree on the key performance indicators (KPIs) that matter to your business before we start. This could be Cost Per Lead, Demo Book Rate, etc. If the new system doesn't meet or beat those agreed-upon KPIs, <strong className="text-zinc-800 dark:text-zinc-200">I continue working for free until it does.</strong> This aligns my incentives directly with your results.</>,
  },
  {
    question: "Do you handle my ad spend?",
    answer: <>No, you retain full control over your ad accounts and spending. I operate within your existing ad platforms (like Google Ads or Meta) as a strategist and operator. You pay the ad platforms directly. My fee is for <strong className="text-zinc-800 dark:text-zinc-200">building and managing the conversion system,</strong> not for media buying markups.</>,
  },
];


const FaqPage: React.FC<FaqPageProps> = ({ onBack }) => {
  return (
    <div className="h-screen overflow-y-auto no-scrollbar pb-16 pt-24 bg-white dark:bg-zinc-950">
      <Container>
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            title="Frequently Asked Questions"
            description="Got questions? I've got answers. If you don't find what you're looking for, feel free to reach out."
          />

          <div className="mt-16 space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button onClick={onBack}>Back to Site</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FaqPage;