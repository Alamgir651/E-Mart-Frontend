export const smoothTransition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
};

export const springTransition = {
  type: 'spring',
  stiffness: 350,
  damping: 25,
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: smoothTransition,
  },
};

export const slideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const slideDown = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothTransition,
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: smoothTransition,
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: smoothTransition,
  },
};

export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    y: -4,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

export const buttonTap = {
  tap: { scale: 0.98 },
};

export const getStaggerDelay = (index, step = 0.08) => index * step;
