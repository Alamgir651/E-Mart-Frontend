import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion } from 'motion/react';

export const StoreIcon = forwardRef(
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
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <motion.path
          d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"
          animate={{
            scaleY: isHovered ? [1, 1.15, 1] : 1,
          }}
          transition={{ duration: 0.35 }}
          style={{ originY: '22px' }}
        />
        <path d="M2 7h20" />
        <motion.path
          d="M22 7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2"
          animate={{
            y: isHovered ? [0, 1.5, 0] : 0,
          }}
          transition={{ duration: 0.3 }}
        />
      </svg>
    );
  }
);

StoreIcon.displayName = 'StoreIcon';
export default StoreIcon;
