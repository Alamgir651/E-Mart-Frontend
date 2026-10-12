const STEPS = [
  { step: 1, title: 'Basic Information' },
  { step: 2, title: 'Pricing & Inventory' },
  { step: 3, title: 'Images & Publish' },
];

export const ProductStepIndicator = ({ currentStep, onSelectStep }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2 pt-1">
      {STEPS.map((item, index) => {
        const isCurrent = currentStep === item.step;
        const isCompleted = currentStep > item.step;

        return (
          <div key={item.step} className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onSelectStep?.(item.step)}
              className={`flex items-center gap-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                isCurrent
                  ? 'text-orange-600'
                  : isCompleted
                  ? 'text-slate-800'
                  : 'text-slate-400'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-black transition-all ${
                  isCurrent
                    ? 'bg-orange-600 text-white shadow-xs'
                    : isCompleted
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {item.step}
              </span>
              <span>{item.title}</span>
            </button>

            {index < STEPS.length - 1 && (
              <div
                className={`w-8 sm:w-12 h-0.5 rounded-full transition-colors ${
                  isCompleted ? 'bg-orange-500' : 'bg-slate-200'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductStepIndicator;
