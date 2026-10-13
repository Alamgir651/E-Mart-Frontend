import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion } from 'motion/react';

export const BarcodeIcon = forwardRef(
  ({ size = 16, className = '', animateOnHover = true, onMouseEnter, onMouseLeave, ...props }, ref) => {
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
        <path d="M3 5v14" />
        <path d="M8 5v14" />
        <path d="M12 5v14" />
        <path d="M17 5v14" />
        <path d="M21 5v14" />
        <motion.line
          x1="1"
          y1="12"
          x2="23"
          y2="12"
          stroke="#ea580c"
          strokeWidth="2"
          animate={{
            y1: isHovered ? [6, 18, 6] : 12,
            y2: isHovered ? [6, 18, 6] : 12,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 1.2, repeat: isHovered ? Infinity : 0, ease: 'easeInOut' }}
        />
      </svg>
    );
  }
);

BarcodeIcon.displayName = 'BarcodeIcon';
export default BarcodeIcon;
