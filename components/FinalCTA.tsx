import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import BentoCard from './ui/BentoCard';
import Button from './ui/Button';
import ArrowRightIcon from './icons/ArrowRightIcon';
import UserIcon from './icons/UserIcon';
import AtSymbolIcon from './icons/AtSymbolIcon';
import LinkIcon from './icons/LinkIcon';
import QuestionMarkCircleIcon from './icons/QuestionMarkCircleIcon';
import ShieldIcon from './icons/ShieldIcon';
import AnimatedCheckCircleIcon from './icons/AnimatedCheckCircleIcon';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

const Label: React.FC<{ htmlFor: string; children: React.ReactNode }> = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-semibold text-zinc-700 dark:text-zinc-300">
    {children}
  </label>
);

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
  <input
    {...props}
    className={`block w-full rounded-lg border border-zinc-300/80 bg-white dark:bg-zinc-900 dark:border-zinc-700/80 px-4 py-3 text-sm text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 dark:focus:ring-amber-500/50 transition-colors disabled:opacity-50 ${props.className}`}
  />
);

const promiseTakeaways = [
    "Single Point of Contact",
    "Focus on Signal KPIs",
    "A Clear Path to ROI",
];

const takeawayVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
};

interface FinalCTAProps {
    onSubmit: (data: { [key: string]: string }) => Promise<void>;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onSubmit }) => {
  const promiseRef = React.useRef(null);
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const isPromiseInView = useInView(promiseRef, { once: true, amount: 0.5 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState('');

  useEffect(() => {
    const renderRecaptcha = () => {
      if (recaptchaRef.current && window.grecaptcha) {
        window.grecaptcha.render(recaptchaRef.current, {
          // ===================================================================
          // IMPORTANT: REPLACE WITH YOUR RECAPTCHA v2 SITE KEY
          // You can get this from https://www.google.com/recaptcha/admin
          // ===================================================================
          sitekey: '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI', // This is Google's test key
        });
      }
    };

    if (window.grecaptcha) {
      renderRecaptcha();
    } else {
      // If the script hasn't loaded yet, we can wait for it.
      // This is a simple way, a more robust solution might use a callback.
      const script = document.querySelector('script[src^="https://www.google.com/recaptcha/api.js"]');
      if (script) {
        script.addEventListener('load', renderRecaptcha);
        return () => script.removeEventListener('load', renderRecaptcha);
      }
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setRecaptchaError('');

    const recaptchaToken = window.grecaptcha?.getResponse();
    if (!recaptchaToken) {
        setRecaptchaError('Please complete the reCAPTCHA verification.');
        setIsSubmitting(false);
        return;
    }
    
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data: { [key: string]: string } = {};
    formData.forEach((value, key) => {
        data[key] = value as string;
    });
    data['g-recaptcha-response'] = recaptchaToken;
    
    try {
        await onSubmit(data);
    } catch (error) {
        console.error("Form submission error caught in FinalCTA:", error);
        setIsSubmitting(false);
        // Reset reCAPTCHA on failed submission attempt
        window.grecaptcha?.reset();
    }
  };

  return (
    <section id="final-cta" className="pt-20 sm:pt-28 pb-20 sm:pb-28">
        <BentoCard className="relative overflow-hidden max-w-4xl mx-auto p-8">
            <div className="relative z-10 max-w-2xl mx-auto text-center">
                {/* --- Merged Header --- */}
                <div ref={promiseRef} className="flex flex-col items-center">
                    <div className="inline-block bg-zinc-100 dark:bg-zinc-800/50 p-3 rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 mx-auto">
                        <ShieldIcon className="w-12 h-12" animate={isPromiseInView} />
                    </div>
                    <h3 className="mt-6 text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
                        Ready to stop leaking revenue?
                    </h3>
                     <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
                        Let's have a 15-minute chat. No pressure, no sales pitch—just a <strong className="text-zinc-800 dark:text-zinc-200">frank conversation</strong> about your <strong className="text-zinc-800 dark:text-zinc-200">growth potential.</strong>
                     </p>
                </div>

                {/* --- The Form --- */}
                <div className="mt-8">
                    <form onSubmit={handleSubmit} className="space-y-5 mt-8 text-left">
                        <fieldset disabled={isSubmitting} className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                                <div>
                                    <Label htmlFor="full-name">Full Name</Label>
                                    <div className="relative mt-2">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <UserIcon className="h-5 w-5 text-zinc-400" />
                                        </div>
                                        <Input type="text" name="full-name" id="full-name" placeholder="Jane Doe" required autoComplete="name" className="!pl-10" />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="email">Work Email</Label>
                                    <div className="relative mt-2">
                                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                            <AtSymbolIcon className="h-5 w-5 text-zinc-400" />
                                        </div>
                                        <Input type="email" name="email" id="email" placeholder="jane@company.com" required autoComplete="email" className="!pl-10" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="website-url">Website URL</Label>
                                <div className="relative mt-2">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <LinkIcon className="h-5 w-5 text-zinc-400" />
                                    </div>
                                    <Input type="text" name="website-url" id="website-url" placeholder="company.com" required autoComplete="url" className="!pl-10" />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="biggest-problem">What's the #1 revenue leak you're trying to fix?</Label>
                                 <div className="relative mt-2">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <QuestionMarkCircleIcon className="h-5 w-5 text-zinc-400" />
                                    </div>
                                    <Input type="text" name="biggest-problem" id="biggest-problem" placeholder="e.g., Low demo bookings from pricing page" required className="!pl-10" />
                                </div>
                            </div>
                             <div className="pt-2">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <input id="consent" name="consent" type="checkbox" className="h-4 w-4 rounded border-zinc-300/80 bg-zinc-100 dark:bg-zinc-800 text-amber-600 focus:ring-amber-500 focus:ring-offset-white dark:focus:ring-offset-zinc-950 dark:border-zinc-700/80 disabled:opacity-50" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="consent" className="text-zinc-500 dark:text-zinc-400">
                                            You agree to receive a one-time response to your application. No spam, ever.
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div ref={recaptchaRef} className="recaptcha-container"></div>
                            </div>
                            {recaptchaError && <p className="text-sm text-red-600 dark:text-red-500 text-center">{recaptchaError}</p>}
                        </fieldset>
                        <div>
                            <Button type="submit" size="lg" variant="primary" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    <>
                                        Get Your Free Funnel Audit
                                        <ArrowRightIcon />
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </div>
                
                 <ul className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-3">
                    {promiseTakeaways.map((item, index) => (
                        <motion.li 
                            key={item} 
                            className="flex items-center gap-2"
                            variants={takeawayVariants}
                            initial="initial"
                            animate={isPromiseInView ? "animate" : "initial"}
                            transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                        >
                            <AnimatedCheckCircleIcon className="w-4 h-4 text-zinc-500 dark:text-zinc-400 flex-shrink-0" isInView={isPromiseInView} />
                            <p className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">{item}</p>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </BentoCard>
    </section>
  );
};

export default FinalCTA;