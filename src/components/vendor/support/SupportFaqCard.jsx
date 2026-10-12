import { useState } from 'react';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { CircleHelpIcon, ChevronDownIcon } from '@/icons';

const FaqAccordionItem = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full py-4 text-left flex items-center justify-between gap-4 cursor-pointer group"
      >
        <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
          {item.question}
        </span>
        <div
          className={`text-slate-400 group-hover:text-slate-600 transition-transform duration-200 shrink-0 ${
            isOpen ? 'rotate-180 text-orange-500' : ''
          }`}
        >
          <ChevronDownIcon size={16} animateOnHover={false} />
        </div>
      </button>

      {isOpen && (
        <div className="pb-4 text-xs sm:text-sm font-semibold text-slate-500 leading-relaxed pr-6 animate-fadeIn">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export const SupportFaqCard = ({ faqs = [] }) => {
  const [openId, setOpenId] = useState(null);
  const [helpRef, helpTrigger] = useAnimatedIcon();

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      onMouseEnter={helpTrigger.onMouseEnter}
      onMouseLeave={helpTrigger.onMouseLeave}
      className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs space-y-3"
    >
      <div className="flex items-center gap-2.5 pb-2">
        <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
          <CircleHelpIcon ref={helpRef} size={18} animateOnHover={false} />
        </div>
        <h3 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="divide-y divide-slate-100">
        {faqs.map((faq) => (
          <FaqAccordionItem
            key={faq.id}
            item={faq}
            isOpen={openId === faq.id}
            onToggle={() => handleToggle(faq.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default SupportFaqCard;
