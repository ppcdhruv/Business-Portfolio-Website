import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import ArrowRightIcon from './icons/ArrowRightIcon';
import AnimatedNumber from './ui/AnimatedNumber';
import WebsitePerformanceViz from './WebsitePerformanceViz';
import ChevronDownIcon from './icons/ChevronDownIcon';

const phrases = [
  { prefix: "Site looks good, but ", suffix: "no leads." },
  { prefix: "Site looks good, but ", suffix: "no traffic." },
  { prefix: "Site looks good, but ", suffix: "no sales." },
  { prefix: "Site looks good, but ", suffix: "no bookings." },
];

const stats = [
    { value: 187, label: "Avg. Conversion Lift", suffix: "%", prefix: "+" },
    { value: 45, label: "CPL Reduction", suffix: "%", prefix: "-" },
    { value: 3.2, label: "First-Month ROI", suffix: "x", decimals: 1 },
];

const TYPING_SPEED = 120;
const DELETING_SPEED = 50;
const PAUSE_DURATION = 2000;

interface HeroProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const useInView = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, options);

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, options]);

  return [ref, isInView] as const;
};

const Hero: React.FC<HeroProps> = ({ onMouseEnter, onMouseLeave }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [statsRef, statsInView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const dynamicText = `${currentPhrase.suffix}`;

    let timeoutId;

    if (isDeleting) {
      if (typedText.length > 0) {
        timeoutId = setTimeout(() => {
          setTypedText(t => t.slice(0, -1));
        }, DELETING_SPEED);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    } else {
      if (typedText.length < dynamicText.length) {
        timeoutId = setTimeout(() => {
          setTypedText(t => dynamicText.slice(0, t.length + 1));
        }, TYPING_SPEED);
      } else {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DURATION);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative pt-24 sm:pt-32 pb-20 overflow-hidden min-h-screen flex flex-col justify-center items-center snap-start"
    >
       <div 
        className="absolute inset-0 top-0 left-0 w-full h-full bg-white dark:bg-zinc-950 [mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_80%)]"
        aria-hidden="true"
      ></div>
      
      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
            {/* Headline & Subheadline */}
            <div className="h-20 sm:h-24 flex items-center justify-center pt-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-zinc-800 dark:text-zinc-200">
                <span>{phrases[phraseIndex].prefix}</span>
                <span>{typedText}</span>
                <span className="animate-pulse ml-1 text-zinc-400 dark:text-zinc-600">|</span>
              </h1>
            </div>

            <p className="mt-4 text-lg font-semibold text-zinc-600 dark:text-zinc-400 max-w-2xl">
                Your marketing looks busy. I make it actually work for you.
            </p>
            
            {/* Visualization - Central Element */}
            <div className="my-8 w-full">
              <WebsitePerformanceViz />
            </div>
            
            {/* CTAs - Directly Below */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <motion.div
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button href="#final-cta" size="lg" variant="primary">
                  Get Your Free Funnel Audit
                  <motion.span
                    variants={{ hover: { x: 4 } }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                    className="inline-block"
                  >
                    <ArrowRightIcon />
                  </motion.span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Button href="#results" variant="secondary" size="lg">
                  See The Results
                </Button>
              </motion.div>
            </div>
            
            {/* Stats Bar */}
            <div ref={statsRef} className="w-full mt-8">
                <div className="max-w-xl mx-auto">
                    <div className="flex items-stretch justify-around divide-x divide-zinc-200/80 dark:divide-zinc-800/80 py-2">
                        {stats.map((stat) => (
                            <div key={stat.label} className="flex-1 text-center px-2">
                                <p className="text-lg sm:text-xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-200">
                                    {statsInView ? (
                                        <AnimatedNumber 
                                            value={stat.value} 
                                            prefix={stat.prefix}
                                            suffix={stat.suffix}
                                            decimals={stat.decimals}
                                        />
                                    ) : (
                                        <span>{stat.prefix || ''}0{stat.suffix || ''}</span>
                                    )}
                                </p>
                                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 whitespace-nowrap">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      </div>
      
      <div className="relative z-10 w-full mt-auto">
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <motion.a
                  href="#problem"
                  aria-label="Scroll to next section"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  className="opacity-60 hover:opacity-100"
              >
                  <ChevronDownIcon className="w-6 h-6 text-zinc-400 dark:text-zinc-600" />
              </motion.a>
          </div>
      </div>
    </section>
  );
};

export default Hero;