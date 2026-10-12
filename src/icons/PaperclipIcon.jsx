import { forwardRef, useImperativeHandle, useState } from 'react';
import { motion } from 'motion/react';

export const PaperclipIcon = forwardRef(
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
          d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l7.88-7.88"
          animate={{
            rotate: isHovered ? [0, -10, 10, -5, 5, 0] : 0,
            scale: isHovered ? 1.08 : 1,
          }}
          transition={{ duration: 0.4 }}
          style={{ originX: '12px', originY: '12px' }}
        />
      </svg>
    );
  }
);

PaperclipIcon.displayName = 'PaperclipIcon';
export default PaperclipIcon;
