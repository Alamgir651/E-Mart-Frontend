import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDownIcon, CheckIcon } from '@/icons';

export const SelectDropdown = ({
  value,
  options = [],
  onChange,
  placeholder = 'Select option',
  className = '',
  menuWidth = 'w-48',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSelect = (optionValue) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`inline-flex items-center justify-between gap-2.5 px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl border transition-all cursor-pointer shadow-2xs ${
          isOpen
            ? 'bg-white border-orange-500 ring-2 ring-orange-500/20 text-orange-600'
            : 'bg-white hover:bg-slate-50/80 border-slate-200/90 text-slate-700'
        }`}
      >
        <span>{value || placeholder}</span>
        <ChevronDownIcon
          size={14}
          className={`text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-orange-500' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className={`absolute left-0 top-full mt-1.5 ${menuWidth} max-h-64 overflow-y-auto bg-white border border-slate-200/90 rounded-2xl shadow-xl shadow-slate-900/10 py-1.5 z-40 [scrollbar-width:thin]`}
          >
            {options.map((opt) => {
              const optLabel = typeof opt === 'string' ? opt : opt.label;
              const optValue = typeof opt === 'string' ? opt : opt.value;
              const isSelected = value === optValue;

              return (
                <button
                  key={optValue}
                  type="button"
                  onClick={() => handleSelect(optValue)}
                  className={`w-full text-left px-3.5 py-2 text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-orange-50 text-orange-600 font-bold'
                      : 'text-slate-700 hover:bg-orange-50/50 hover:text-orange-600 font-medium'
                  }`}
                >
                  <span className="truncate">{optLabel}</span>
                  {isSelected && (
                    <CheckIcon size={14} className="text-orange-600 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectDropdown;
