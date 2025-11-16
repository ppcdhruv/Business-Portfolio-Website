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
                        <p className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 whitespace-nowrap">{label}</p>
                        <div className="mt-0.5 flex items-baseline justify-center gap-1.5">
                            {isNumeric ? (
                                <>
                                    <span className={`text-base font-semibold ${isPositiveChange ? 'text-green-600 dark:text-green-500' : 'text-red-600 dark:text-red-500'}`}>
                                        {after}
                                    </span>
                                    <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 line-through">{before}</span>
                                </>
                            ) : (
                                <>
                                    <span className="text-base font-semibold text-zinc-800 dark:text-zinc-100">{after}</span>
                                    <span className="text-[10px] font-medium text-zinc-400 dark:text-zinc-500 line-through">{before}</span>
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