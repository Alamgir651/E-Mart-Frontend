import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion } from 'motion/react';

export const TicketIcon = forwardRef(
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
          d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
          animate={{
            rotate: isHovered ? [0, -5, 5, -3, 3, 0] : 0,
            scale: isHovered ? 1.06 : 1,
          }}
          transition={{ duration: 0.4 }}
          style={{ originX: '12px', originY: '12px' }}
        />
        <path d="M13 5v2" />
        <path d="M13 11v2" />
        <path d="M13 17v2" />
      </svg>
    );
  }
);

TicketIcon.displayName = 'TicketIcon';
export default TicketIcon;
