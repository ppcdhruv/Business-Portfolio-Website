import React from 'react';
// FIX: Removed 'Variants' type which was not found and caused errors.
import { motion } from 'framer-motion';

const checkVariants = {
    hidden: { pathLength: 0 },
    visible: {
        pathLength: 1,
        // FIX: Explicitly cast 'ease' value to its literal type to fix TypeScript error.
        transition: { duration: 0.4, ease: 'easeInOut' as const }
    }
};

const svgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

const AnimatedCheckmark: React.FC<{ className?: string }> = ({ className }) => {
    return (
        // FIX: Refactored motion props to use variants to resolve TS errors.
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className={className}
            variants={svgVariants}
        >
            <motion.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
                variants={checkVariants}
            />
        </motion.svg>
    );
};
export default AnimatedCheckmark;