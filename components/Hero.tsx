import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import ArrowRightIcon from './icons/ArrowRightIcon';
import AnimatedNumber from './ui/AnimatedNumber';
import WebsitePerformanceViz from './WebsitePerformanceViz';
import PlusIcon from './icons/PlusIcon';
import MinusIcon from './icons/MinusIcon';

const phrases = [
  { prefix: "Site looks good but,\u00A0", suffix: "no leads." },
  { prefix: "Site looks good but,\u00A0", suffix: "no traffic." },
  { prefix: "Site looks good but,\u00A0", suffix: "no sales." },
  { prefix: "Site looks good but,\u00A0", suffix: "no bookings." },
];

const stats = [
    { value: 187, label: "Avg. Conversion Lift", suffix: "%", icon: "plus" as const },
    { value: 45, label: "CPL Reduction", suffix: "%", icon: "minus" as const },
    { value: 3.2, label: "First-Month ROI", suffix: "x", decimals: 1, icon: "plus" as const },
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_DURATION = 1500;

interface HeroProps {
  setHeroRect: (rect: DOMRect | null) => void;
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

const Hero: React.FC<HeroProps> = ({ setHeroRect }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const inViewOptions = useMemo(() => ({ threshold: 0.5 }), []);
  const [statsRef, statsInView] = useInView(inViewOptions);
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = vizRef.current;
    if (!element) return;

    const observer = new ResizeObserver(() => {
        setHeroRect(element.getBoundingClientRect());
    });

    observer.observe(element);
    setHeroRect(element.getBoundingClientRect());

    return () => {
        observer.disconnect();
        setHeroRect(null); 
    };
  }, [setHeroRect]);

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

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
  }, []);

  return (
    <section 
      className="relative py-16 sm:py-24 overflow-hidden min-h-screen flex flex-col justify-center items-center"
    >
       <div 
        className="absolute inset-0 top-0 left-0 w-full h-full bg-white/0 dark:bg-zinc-950/0 [mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_80%)]"
        aria-hidden="true"
      ></div>
      
      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
            {/* Headline & Subheadline */}
            <h1 className="text-[28px] leading-tight sm:text-5xl lg:text-6xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-200 flex items-center h-24 sm:h-auto">
              <span>
                <span>{phrases[phraseIndex].prefix}</span>
                <span>{typedText}</span>
                <motion.span 
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="ml-1 text-zinc-800 dark:text-zinc-200"
                >
                  |
                </motion.span>
              </span>
            </h1>

            <p className="mt-4 text-base sm:text-xl font-semibold text-zinc-600 dark:text-zinc-400 max-w-2xl">
                Your marketing looks busy. Let's make it <strong className="text-zinc-800 dark:text-zinc-200">actually work for you.</strong>
            </p>
            
            {/* Visualization - Central Element */}
            <div ref={vizRef} className="my-8 w-full">
              <WebsitePerformanceViz />
            </div>

            {/* Stats Bar */}
            <div
              ref={statsRef}
              className="w-full max-w-xl mx-auto mt-8 py-4 border-y border-zinc-200/80 dark:border-zinc-800/80"
            >
              <div className="flex items-stretch justify-center gap-8 sm:gap-16">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center px-2">
                      <p className="text-lg sm:text-xl font-bold tracking-tighter text-zinc-800 dark:text-zinc-200 flex items-center justify-center gap-1">
                        {statsInView && (
                          <motion.span
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                          >
                            {stat.icon === 'plus' && <PlusIcon className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />}
                            {stat.icon === 'minus' && <MinusIcon className="w-4 h-4 text-zinc-500 dark:text-zinc-400" />}
                          </motion.span>
                        )}
                        {statsInView ? (
                          <AnimatedNumber
                            value={stat.value}
                            suffix={stat.suffix}
                            decimals={stat.decimals}
                          />
                        ) : (
                          <span>0{stat.suffix || ''}</span>
                        )}
                      </p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 whitespace-nowrap">{stat.label}</p>
                    </div>
                  ))}
              </div>
            </div>
            
            {/* CTAs - Directly Below */}
            <div className="mt-10 w-full sm:w-auto flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="relative w-full sm:w-auto"
              >
                <Button href="#final-cta" size="lg" variant="primary" className="w-full sm:w-auto" onClick={(e) => handleNavClick(e as any, '#final-cta')}>
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
                className="relative w-full sm:w-auto"
              >
                <Button href="#results" variant="secondary" size="lg" className="w-full sm:w-auto" onClick={(e) => handleNavClick(e as any, '#results')}>
                  See The Results
                </Button>
              </motion.div>
            </div>
      </div>
    </section>
  );
};

export default Hero;