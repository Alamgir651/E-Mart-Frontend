import { useRef } from 'react';

export const useAnimatedIcon = () => {
  const iconRef = useRef(null);

  const trigger = {
    onMouseEnter: () => {
      if (iconRef.current && typeof iconRef.current.startAnimation === 'function') {
        iconRef.current.startAnimation();
      }
    },
    onMouseLeave: () => {
      if (iconRef.current && typeof iconRef.current.stopAnimation === 'function') {
        iconRef.current.stopAnimation();
      }
    },
  };

  return [iconRef, trigger];
};

export default useAnimatedIcon;
