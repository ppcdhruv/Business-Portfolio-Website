import React from 'react';

interface SliderProps {
  label: React.ReactNode;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  step: number;
  displayValue: string;
}

const Slider: React.FC<SliderProps> = ({ label, value, onChange, min, max, step, displayValue }) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <div>{label}</div>
        <span className="text-sm font-bold text-stone-900 dark:text-white bg-stone-200/70 dark:bg-stone-800/70 px-2 py-0.5 rounded-md min-w-[70px] text-center">{displayValue}</span>
      </div>
      <div className="relative h-2 flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="w-full h-2 bg-transparent rounded-lg appearance-none cursor-pointer slider-thumb"
          style={{ '--track-percentage': `${percentage}%` } as React.CSSProperties}
        />
        <style>{`
            /* Light mode track */
            .slider-thumb {
                background: linear-gradient(to right, #1c1917 0%, #1c1917 var(--track-percentage), #e7e5e4 var(--track-percentage), #e7e5e4 100%);
            }
            /* Dark mode track */
            html.dark .slider-thumb {
                background: linear-gradient(to right, white 0%, white var(--track-percentage), #44403c var(--track-percentage), #44403c 100%);
            }

            /* Thumb styles */
            .slider-thumb::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 20px;
                height: 20px;
                background: #1c1917; /* stone-900 */
                border: 3px solid white;
                border-radius: 50%;
                cursor: pointer;
                transition: transform 0.1s ease-in-out;
                margin-top: -1px; /* Align thumb with track */
            }
            .slider-thumb:active::-webkit-slider-thumb {
                transform: scale(1.1);
            }
            html.dark .slider-thumb::-webkit-slider-thumb {
                background: white;
                border: 3px solid #0c0a09; /* stone-950 */
            }

             /* Firefox Thumb */
            .slider-thumb::-moz-range-thumb {
                width: 14px;
                height: 14px;
                background: #1c1917;
                border: 3px solid white;
                border-radius: 50%;
                cursor: pointer;
            }
            html.dark .slider-thumb::-moz-range-thumb {
                 background: white;
                 border: 3px solid #0c0a09;
            }
        `}</style>
      </div>
    </div>
  );
};

export default Slider;
