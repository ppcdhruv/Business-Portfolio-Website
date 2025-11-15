import React from 'react';
import StarIcon from './StarIcon';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
    <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className={`w-5 h-5 ${i < rating ? 'text-neutral-900 dark:text-yellow-400' : 'text-neutral-300 dark:text-neutral-700'}`} />
        ))}
    </div>
);

export default StarRating;