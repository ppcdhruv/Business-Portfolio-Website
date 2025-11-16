import React from 'react';

interface KPIBlockProps {
    kpis: string;
}

const KPIBlock: React.FC<KPIBlockProps> = ({ kpis }) => {
    const kpiItems = kpis.split('\n').filter(line => line.includes('→'));

    return (
        <div className="flex w-full items-start justify-around">
            {kpiItems.map(item => {
                const parts = item.split(': ');
                if (parts.length < 2) return null;
                const label = parts[0];
                const values = parts.slice(1).join(': ');
                const [before, after] = values.split(' → ').map(s => s.trim());

                // Attempt to parse numbers, removing currency symbols, commas, etc.
                const beforeNum = parseFloat(before?.replace(/[^\d.-]/g, ''));
                const afterNum = parseFloat(after?.replace(/[^\d.-]/g, ''));

                const isNumeric = !isNaN(beforeNum) && !isNaN(afterNum);
                let isPositiveChange = false;

                if (isNumeric) {
                    const lowerLabel = label.toLowerCase();
                    // Metrics where a decrease is a positive change
                    const costMetrics = ['cpl', 'cpa', 'cpc'];
                    
                    if (costMetrics.some(m => lowerLabel.includes(m))) {
                        isPositiveChange = afterNum < beforeNum;
                    } else {
                        // For all other metrics, an increase is positive
                        isPositiveChange = afterNum > beforeNum;
                    }
                }
                
                return (
                    <div key={label} className="text-center">
                        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap mb-1">{label}</p>
                        <div>
                            {isNumeric ? (
                                <>
                                    <span className={`block text-lg font-bold leading-tight ${isPositiveChange ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                                        {after}
                                    </span>
                                    <span className="block text-xs font-medium text-zinc-400 dark:text-zinc-500 line-through mt-0.5">{before}</span>
                                </>
                            ) : (
                                <>
                                    <span className="block text-lg font-bold leading-tight text-zinc-800 dark:text-zinc-100">{after}</span>
                                    <span className="block text-xs font-medium text-zinc-400 dark:text-zinc-500 line-through mt-0.5">{before}</span>
                                </>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default KPIBlock;