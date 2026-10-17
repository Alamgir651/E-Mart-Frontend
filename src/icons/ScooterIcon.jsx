import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion } from 'motion/react';

export const ScooterIcon = forwardRef(
  ({ size = 18, className = '', animateOnHover = true, onMouseEnter, onMouseLeave, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    useImperativeHandle(ref, () => ({
      startAnimation: () => setIsHovered(true),
      stopAnimation: () => setIsHovered(false),
    }));

    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        onMouseEnter={(e) => {
          if (animateOnHover) setIsHovered(true);
          onMouseEnter?.(e);
        }}
        onMouseLeave={(e) => {
          if (animateOnHover) setIsHovered(false);
          onMouseLeave?.(e);
        }}
        {...props}
      >
        {/* Wheels */}
        <motion.circle
          cx="6"
          cy="18"
          r="3"
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ originX: '6px', originY: '18px' }}
        />
        <motion.circle
          cx="19"
          cy="18"
          r="3"
          animate={{
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ originX: '19px', originY: '18px' }}
        />
        {/* Platform / Deck */}
        <path d="M9 18h7" />
        {/* Handlebar Stem & Grip */}
        <motion.path
          d="M19 15L15 4h-4"
          animate={{
            x: isHovered ? [0, 1, 0] : 0,
          }}
          transition={{ duration: 0.4 }}
        />
        <path d="M12 4h4" />
      </svg>
    );
  }
);

ScooterIcon.displayName = 'ScooterIcon';
export default ScooterIcon;
