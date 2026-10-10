import { REGISTRATION_STEPS } from '@/mock/vendor/vendorRegister.mock';

export const RegistrationStepper = ({ currentStep = 1 }) => {
  return (
    <div className="flex items-center justify-between sm:justify-start gap-1 sm:gap-4 w-full overflow-x-auto pb-2">
      {REGISTRATION_STEPS.map((item, index) => {
        const isActive = item.step === currentStep;
        const isCompleted = item.step < currentStep;

        return (
          <div key={item.step} className="flex items-center flex-shrink-0">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-500/30'
                    : isCompleted
                    ? 'bg-emerald-500 text-white'
                    : 'bg-white border border-slate-200 text-slate-400'
                }`}
              >
                {item.step}
              </div>
              <span
                className={`text-[11px] whitespace-nowrap transition-colors ${
                  isActive
                    ? 'font-bold text-orange-600'
                    : 'font-medium text-slate-400'
                }`}
              >
                {item.label}
              </span>
            </div>

            {index < REGISTRATION_STEPS.length - 1 && (
              <div className="w-8 sm:w-14 h-px bg-slate-200 mx-1 sm:mx-3 self-center mb-5" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RegistrationStepper;
