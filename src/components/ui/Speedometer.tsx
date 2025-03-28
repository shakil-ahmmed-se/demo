// components/ui/Speedometer.tsx
import React from 'react';
import { Progress } from './progress';

interface SpeedometerProps {
  value: number; // Progress value (0-100)
  size?: number; // Size of the speedometer
  label?: string; // Optional label for payment amount
}

const Speedometer: React.FC<SpeedometerProps> = ({ value, size = 80, label }) => {
  // Calculate the angle for the needle based on the progress value
  const angle = (value / 100) * 180 - 90; // Map 0-100 to -90 to 90 degrees

  // Calculate coordinates for the label (similar to the previous implementation)
  const getCoordinatesForPercent = (percent: number) => {
    const radians = (percent / 100) * Math.PI - Math.PI / 2; // Map to 0-180 degrees
    const radius = size / 4; // Position the label outside the circle
    const x = size / 2 + radius * Math.cos(radians);
    const y = size / 2 + radius * Math.sin(radians);
    return { x, y };
  };

  const labelCoords = label ? getCoordinatesForPercent(value) : { x: 0, y: 0 };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Semi-circle background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 rounded-t-full bg-gray-200"
          style={{
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
          }}
        />
      </div>

      {/* Progress Indicator */}
      <Progress
        value={value}
        className="w-full h-full rounded-t-full overflow-hidden"
        style={{
          background: 'transparent',
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        }}
      >
        <div
          className="h-full bg-[#238DB2] rounded-t-full"
          style={{
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
          }}
        />
      </Progress>

      {/* Needle */}
      <div
        className="absolute top-1/2 left-1/2 w-1 h-1/3 bg-red-500 origin-bottom"
        style={{
          transform: `translate(-50%, 0) rotate(${angle}deg)`,
        }}
      />

      {/* Center Circle for Needle */}
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2" />

      {/* Progress Value */}
      <div className="absolute inset-0 flex items-end justify-center pb-2">
        <span className="text-lg font-semibold text-gray-800">{value}%</span>
      </div>

      {/* Payment Amount Label */}
      {label && (
        <div
          className="absolute bg-[#238DB2] text-white text-xs font-medium px-2 py-1 rounded-full"
          style={{
            left: `${labelCoords.x}px`,
            top: `${labelCoords.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default Speedometer;