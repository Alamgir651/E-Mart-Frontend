import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion } from 'motion/react';

export const FlagIcon = forwardRef(
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
        <motion.path
          d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
          animate={{
            skewX: isHovered ? [0, 8, -6, 4, 0] : 0,
          }}
          transition={{ duration: 0.45 }}
          style={{ originX: '4px', originY: '9px' }}
        />
        <line x1="4" y1="22" x2="4" y2="15" />
      </svg>
    );
  }
);

FlagIcon.displayName = 'FlagIcon';
export default FlagIcon;
