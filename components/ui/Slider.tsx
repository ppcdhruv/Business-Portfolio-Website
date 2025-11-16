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
        <span className="text-sm font-bold text-neutral-900 dark:text-white bg-neutral-200/70 dark:bg-neutral-800/70 px-2 py-0.5 rounded-md min-w-[70px] text-center">{displayValue}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer slider-thumb"
          style={{ 
            background: `linear-gradient(to right, #171717 0%, #171717 ${percentage}%, #e5e5e5 ${percentage}%, #e5e5e5 100%)`
          }}
        />
        <style>{`
            .slider-thumb::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 20px;
                height: 20px;
                background: #171717; /* neutral-900 */
                border: 3px solid white;
                border-radius: 50%;
                cursor: pointer;
                transition: transform 0.1s ease-in-out;
            }
            .slider-thumb:active::-webkit-slider-thumb {
                transform: scale(1.1);
            }
            html.dark .slider-thumb {
                 background: linear-gradient(to right, white 0%, white ${percentage}%, #404040 ${percentage}%, #404040 100%);
            }
            html.dark .slider-thumb::-webkit-slider-thumb {
                background: white;
                border: 3px solid #0a0a0a; /* neutral-950 */
            }

             /* Firefox */
            .slider-thumb::-moz-range-thumb {
                width: 20px;
                height: 20px;
                background: #171717;
                border: 3px solid white;
                border-radius: 50%;
                cursor: pointer;
            }
            html.dark .slider-thumb::-moz-range-thumb {
                 background: white;
                 border: 3px solid #0a0a0a;
            }
            .slider-thumb::-moz-range-track {
                background: transparent;
                border-color: transparent;
                color: transparent;
            }
        `}</style>
      </div>
    </div>
  );
};

export default Slider;