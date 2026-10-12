import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion } from 'motion/react';

export const ShieldAlertIcon = forwardRef(
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
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          animate={{
            rotate: isHovered ? [0, -6, 6, -3, 3, 0] : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.45 }}
          style={{ originX: '12px', originY: '12px' }}
        />
        <motion.line
          x1="12"
          y1="8"
          x2="12"
          y2="12"
          animate={{ y: isHovered ? -1.5 : 0 }}
          transition={{ type: 'spring', stiffness: 350, damping: 20 }}
        />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    );
  }
);

ShieldAlertIcon.displayName = 'ShieldAlertIcon';
export default ShieldAlertIcon;
