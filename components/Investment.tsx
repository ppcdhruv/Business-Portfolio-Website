import React from 'react';
import BentoCard from './ui/BentoCard';
import Button from './ui/Button';
import CheckIcon from './icons/CheckIcon';
import SectionHeader from './ui/SectionHeader';

const plans = [
    {
        name: "Funnel Repair",
        price: "From $2,500",
        deliverables: [
            "1 intent-focused landing page",
            "Lead magnet & opt-in form",
            "3-part email nurture sequence",
            "Tracking & performance dashboard"
        ],
        guarantee: "Performance Promise",
        whoFor: "For fixing a single, high-impact conversion point.",
        cta: "Get A Quote",
        variant: 'secondary',
        popular: false,
    },
    {
        name: "Full Engine Build",
        price: "From $7,500",
        deliverables: [
            "5-page conversion-focused website",
            "Lead capture & demo booking funnels",
            "CRM integration & setup",
            "Post-launch performance validation"
        ],
        guarantee: "System-Wide Lift Promise",
        whoFor: "For launching or relaunching your core web presence.",
        cta: "Get Your Free Audit",
        variant: 'primary',
        popular: true,
    },
    {
        name: "Growth Partnership",
        price: "Custom Retainer",
        deliverables: [
            "Monthly conversion rate optimization",
            "2+ A/B tests per month",
            "Web ops & analytics support",
            "Performance reporting & strategy"
        ],
        guarantee: "Continuous Improvement",
        whoFor: "For compounding gains after a successful project (clients only).",
        cta: "Discuss Partnership",
        variant: 'secondary',
        popular: false,
    }
]

const Investment: React.FC = () => {
    const handleCTAClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

  return (
    <section id="pricing" className="py-20 sm:py-28">
        <SectionHeader
            title="Investment & Deliverables"
            description={<>Transparent, fixed-scope projects designed to install a <strong className="text-zinc-800 dark:text-zinc-200">durable conversion asset</strong> into your business. <strong className="text-zinc-800 dark:text-zinc-200">No retainers, no surprises.</strong></>}
        />
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto">
        {plans.map(plan => (
            <BentoCard 
                key={plan.name} 
                className={`flex flex-col h-full p-8 hover:!scale-[1.01] ${plan.popular ? 'bg-white dark:bg-zinc-800' : ''}`}
            >
                {plan.popular && (
                    <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                        <div className="px-3 py-1 text-xs font-semibold tracking-wider text-zinc-900 bg-white dark:text-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-full whitespace-nowrap">
                            Most Popular
                        </div>
                    </div>
                )}
                <div className="flex justify-between items-start gap-4">
                    <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{plan.name}</h3>
                    <div className="px-3 py-1 text-xs font-semibold tracking-wider text-zinc-600 bg-zinc-100 dark:text-zinc-300 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800/80 rounded-full whitespace-nowrap">
                        {plan.price}
                    </div>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">{plan.whoFor}</p>
                
                <ul className="space-y-3 flex-grow my-8 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-8">
                    {plan.deliverables.map((feature) => (
                        <li key={feature} className="flex items-start text-sm text-zinc-600 dark:text-zinc-400">
                           <CheckIcon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-zinc-500 dark:text-zinc-400" />
                           <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-auto">
                    <Button 
                        size="lg" 
                        href="#final-cta"
                        className="w-full"
                        variant={plan.variant as 'primary' | 'secondary'}
                        onClick={(e) => handleCTAClick(e as any, '#final-cta')}
                    >
                        {plan.cta}
                    </Button>
                     <p className="text-center text-xs font-semibold text-zinc-500 dark:text-zinc-400 mt-4">
                        Includes: {plan.guarantee}
                    </p>
                </div>
            </BentoCard>
        ))}
      </div>
    </section>
  );
};

export default Investment;