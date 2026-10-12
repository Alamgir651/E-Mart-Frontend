import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion } from 'motion/react';

export const StarIcon = forwardRef(
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
        <motion.polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? 15 : 0,
          }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        />
      </svg>
    );
  }
);

StarIcon.displayName = 'StarIcon';
export default StarIcon;
