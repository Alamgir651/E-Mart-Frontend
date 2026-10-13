import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion } from 'motion/react';

export const MailIcon = forwardRef(
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
        <motion.rect
          width="20"
          height="16"
          x="2"
          y="4"
          rx="2"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.2 }}
        />
        <motion.path
          d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
          animate={{ y: isHovered ? -1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </svg>
    );
  }
);

MailIcon.displayName = 'MailIcon';
export default MailIcon;
