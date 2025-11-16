import { useState, useEffect } from 'react';

const pricingTiers: { [key: string]: { symbol: string; multiplier: number; locale: string } } = {
    'IN': { symbol: '₹', multiplier: 35, locale: 'en-IN' },
    'GB': { symbol: '£', multiplier: 0.85, locale: 'en-GB' },
    'DE': { symbol: '€', multiplier: 0.9, locale: 'de-DE' },
    'FR': { symbol: '€', multiplier: 0.9, locale: 'fr-FR' },
    'ES': { symbol: '€', multiplier: 0.9, locale: 'es-ES' },
    'IT': { symbol: '€', multiplier: 0.9, locale: 'it-IT' },
    'CA': { symbol: '$', multiplier: 1.1, locale: 'en-CA' },
    'AU': { symbol: '$', multiplier: 1.2, locale: 'en-AU' },
    'default': { symbol: '$', multiplier: 1, locale: 'en-US' },
};

const basePrices: { [key: string]: number } = {
    "Funnel Repair": 2500,
    "Full Engine Build": 7500,
};

interface Plan {
    name: string;
    price: string;
    deliverables: string[];
    guarantee: string;
    whoFor: string;
    cta: string;
    variant: string;
    popular: boolean;
}

export const useLocalizedPricing = (initialPlans: Plan[]) => {
    const [localizedPlans, setLocalizedPlans] = useState(initialPlans);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchPricing = async () => {
            try {
                const response = await fetch('https://ip-api.com/json/?fields=status,countryCode');
                if (!response.ok) throw new Error('Failed to fetch geo IP data');
                const data = await response.json();

                if (data.status !== 'success' || !data.countryCode) {
                    throw new Error('Could not determine country');
                }

                const countryCode = data.countryCode;
                const tier = pricingTiers[countryCode] || pricingTiers.default;
                
                const newPlans = initialPlans.map(plan => {
                    const basePrice = basePrices[plan.name];
                    if (basePrice) {
                        const localizedPrice = basePrice * tier.multiplier;
                        const formattedPrice = new Intl.NumberFormat(tier.locale, {
                           minimumFractionDigits: 0,
                           maximumFractionDigits: 0,
                        }).format(localizedPrice);

                        return {
                            ...plan,
                            price: `From ${tier.symbol}${formattedPrice}`
                        };
                    }
                    return plan;
                });
                setLocalizedPlans(newPlans);

            } catch (error) {
                console.warn("Could not fetch location-based pricing. Defaulting to USD.", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPricing();
    }, [initialPlans]);

    return { localizedPlans, isLoading };
};
