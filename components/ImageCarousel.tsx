import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChevronLeftIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
);

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
);

interface ImageCarouselProps {
    images: string[];
    onImageClick: (imageUrl: string) => void;
}

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 10 : -10,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 10 : -10,
        opacity: 0,
    }),
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, onImageClick }) => {
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = ((page % images.length) + images.length) % images.length;

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-800/80 group">
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    loading="lazy"
                    decoding="async"
                    className="absolute h-full w-full object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    alt={`Case study screenshot ${imageIndex + 1}`}
                    onClick={() => onImageClick(images[imageIndex])}
                />
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white bg-black/40 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Click to expand
            </div>
            {images.length > 1 && (
                <>
                    <button
                        className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white/80 backdrop-blur-sm hover:bg-black/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white transition z-10"
                        onClick={(e) => { e.stopPropagation(); paginate(-1); }}
                        aria-label="Previous image"
                    >
                        <ChevronLeftIcon className="h-5 w-5" />
                    </button>
                    <button
                        className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-black/40 p-1.5 text-white/80 backdrop-blur-sm hover:bg-black/60 hover:text-white focus:outline-none focus:ring-2 focus:ring-white transition z-10"
                        onClick={(e) => { e.stopPropagation(); paginate(1); }}
                        aria-label="Next image"
                    >
                        <ChevronRightIcon className="h-5 w-5" />
                    </button>
                </>
            )}
             <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                    <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-colors ${i === imageIndex ? 'bg-white' : 'bg-white/40'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;