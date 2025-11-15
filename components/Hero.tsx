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

  // FIX: Completed the truncated handleNavClick function
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

  // FIX: Added the missing return statement with JSX for the component
  return (
    <section id="hero" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 text-center" ref={vizRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter text-stone-900 dark:text-white">
            <span className="text-stone-600 dark:text-stone-400">{phrases[phraseIndex].prefix}</span>
            <span className="text-amber-500 dark:text-amber-400">{typedText}</span>
            <span className="animate-pulse">_</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-stone-600 dark:text-stone-400">
            We build high-performance conversion funnels that turn your existing traffic into a predictable revenue engine.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button href="#final-cta" size="lg" onClick={(e) => handleNavClick(e, '#final-cta')}>
              Get Your Free Audit
              <ArrowRightIcon />
            </Button>
            <Button href="#results" variant="secondary" size="lg" onClick={(e) => handleNavClick(e, '#results')}>
              See The Results
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          ref={statsRef}
          className="mt-16 w-full max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={statsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map(stat => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center text-3xl sm:text-4xl font-bold tracking-tighter text-stone-900 dark:text-white">
                  {stat.icon === 'plus' ? <PlusIcon className="w-6 h-6 mr-1 text-green-500" /> : <MinusIcon className="w-6 h-6 mr-1 text-red-500" />}
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                </div>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <WebsitePerformanceViz />
        </motion.div>
      </div>
    </section>
  );
};

// FIX: Added the missing default export to resolve the import error.
export default Hero;
