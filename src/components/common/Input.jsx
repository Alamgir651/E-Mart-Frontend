import { useRef, cloneElement, isValidElement } from 'react';

export const Input = ({
  label,
  type = 'text',
  icon,
  rightElement,
  error,
  className = '',
  ...props
}) => {
  const iconRef = useRef(null);

  const handleMouseEnter = () => {
    if (iconRef.current && typeof iconRef.current.startAnimation === 'function') {
      iconRef.current.startAnimation();
    }
  };

  const handleMouseLeave = () => {
    if (iconRef.current && typeof iconRef.current.stopAnimation === 'function') {
      iconRef.current.stopAnimation();
    }
  };

  const renderedIcon = isValidElement(icon)
    ? cloneElement(icon, { ref: iconRef })
    : icon;

  return (
    <div
      className="w-full group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {label && (
        <label className="block text-xs font-bold text-slate-700 mb-1.5 transition-colors group-hover:text-slate-900">
          {label}
        </label>
      )}

      <div className="relative flex items-center">
        {icon && (
          <span className="absolute left-3.5 text-slate-400 group-hover:text-orange-500 group-focus-within:text-orange-500 transition-colors pointer-events-none flex items-center justify-center">
            {renderedIcon}
          </span>
        )}

        <input
          type={type}
          className={`w-full py-2.5 sm:py-3 bg-slate-50/80 border rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all ${
            icon ? 'pl-11' : 'pl-4'
          } ${rightElement ? 'pr-11' : 'pr-4'} ${
            error ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
          } ${className}`}
          {...props}
        />

        {rightElement && (
          <div className="absolute right-3 flex items-center">
            {rightElement}
          </div>
        )}
      </div>

      {error && (
        <p className="text-[11px] font-semibold text-rose-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
