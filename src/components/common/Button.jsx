import { motion } from 'motion/react';
import { buttonTap } from '@/animation/animations';

export const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'w-full py-3.5 px-4 font-bold rounded-xl transition-all cursor-pointer flex items-center justify-center text-sm disabled:opacity-60 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-orange-600 hover:bg-orange-500 text-white shadow-lg shadow-orange-600/30',
    outline: 'bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-xs',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700',
  };

  return (
    <motion.button
      variants={buttonTap}
      whileTap="tap"
      disabled={disabled || isLoading}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Processing...</span>
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
};

export default Button;
