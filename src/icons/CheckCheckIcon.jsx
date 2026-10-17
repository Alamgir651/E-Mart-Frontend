import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion } from 'motion/react';

export const CheckCheckIcon = forwardRef(
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
          d="M18 6 7 17l-5-5"
          animate={{
            pathLength: isHovered ? [0, 1] : 1,
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.path
          d="m22 10-7.5 7.5L13 16"
          animate={{
            pathLength: isHovered ? [0, 1] : 1,
            opacity: 1,
          }}
          transition={{ duration: 0.35, delay: 0.08 }}
        />
      </svg>
    );
  }
);

CheckCheckIcon.displayName = 'CheckCheckIcon';
export default CheckCheckIcon;
