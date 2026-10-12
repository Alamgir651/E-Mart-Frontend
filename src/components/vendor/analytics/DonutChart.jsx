import { useState } from 'react';

export const DonutChart = ({
  data = [],
  centerPrimary = '$5,420',
  centerSecondary = 'Total Sales',
  size = 180,
  strokeWidth = 26,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const radius = 60;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercent = 0;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-2">
      <div className="relative shrink-0 flex items-center justify-center">
        <svg
          width={size}
          height={size}
          viewBox="0 0 160 160"
          className="transform -rotate-90"
        >
          {data.map((item, idx) => {
            const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
            const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
            accumulatedPercent += item.percentage;
            const isHovered = hoveredIndex === idx;

            return (
              <circle
                key={item.label}
                cx="80"
                cy="80"
                r={radius}
                fill="transparent"
                stroke={item.color}
                strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="transition-all duration-300 cursor-pointer"
              />
            );
          })}
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none select-none">
          <span className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight leading-none">
            {centerPrimary}
          </span>
          <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 mt-1 uppercase tracking-wider">
            {centerSecondary}
          </span>
        </div>
      </div>

      <div className="flex-1 w-full space-y-2">
        {data.map((item, idx) => {
          const isHovered = hoveredIndex === idx;

          return (
            <div
              key={item.label}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`flex items-center justify-between py-1 px-1.5 rounded-lg transition-colors cursor-pointer ${
                isHovered ? 'bg-slate-50' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  style={{ backgroundColor: item.color }}
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                />
                <span className="text-xs font-medium text-slate-600">
                  {item.label}
                </span>
              </div>
              <span className="text-xs font-semibold text-slate-800 ml-2">
                {item.percentage}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DonutChart;
