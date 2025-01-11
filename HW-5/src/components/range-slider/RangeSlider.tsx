import React, { useState, useCallback } from "react";
import "./rangeSlider.css"; 

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  initialMinValue?: number;
  initialMaxValue?: number;
  onChange?: (min: number, max: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step = 1,
  initialMinValue = min,
  initialMaxValue = max,
  onChange,
}) => {
  const [minValue, setMinValue] = useState<number>(initialMinValue);
  const [maxValue, setMaxValue] = useState<number>(initialMaxValue);

  const handleMinChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.min(Number(e.target.value), maxValue - step);
      setMinValue(value);
      if (onChange) onChange(value, maxValue);
    },
    [maxValue, step, onChange]
  );

  const handleMaxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Math.max(Number(e.target.value), minValue + step);
      setMaxValue(value);
      if (onChange) onChange(minValue, value);
    },
    [minValue, step, onChange]
  );

  return (
    <div className="range-slider">
      <div className="range-track">
        <div
          className="range-fill"
          style={{
            left: `${((minValue - min) / (max - min)) * 100}%`,
            right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
          }}
        ></div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={minValue}
        onChange={handleMinChange}
        className="range-input"
      />
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={maxValue}
        onChange={handleMaxChange}
        className="range-input"
      />
      <div className="range-values">
        Selected Range: {minValue} - {maxValue}
      </div>
    </div>
  );
};

export default RangeSlider;
