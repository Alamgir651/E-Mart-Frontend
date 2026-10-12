import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { ArrowLeftIcon } from '@/icons';
import { COMMON_TOPICS } from '@/mock/vendor/vendorSupport.mock';
import CreateTicketForm from '@/components/vendor/support/create/CreateTicketForm';
import CommonTopicsCard from '@/components/vendor/support/create/CommonTopicsCard';
import SupportHoursCard from '@/components/vendor/support/create/SupportHoursCard';

export const CreateTicketPage = () => {
  const navigate = useNavigate();
  const [backRef, backTrigger] = useAnimatedIcon();
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="space-y-6 w-full animate-fadeIn">
      <div className="flex items-start gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => navigate('/vendor/support')}
          onMouseEnter={backTrigger.onMouseEnter}
          onMouseLeave={backTrigger.onMouseLeave}
          className="mt-1 w-9 h-9 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 transition-all cursor-pointer shadow-2xs shrink-0 active:scale-95"
          aria-label="Back to support"
        >
          <ArrowLeftIcon ref={backRef} size={18} animateOnHover={false} />
        </button>

        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-900 tracking-tight">
            Create Support Ticket
          </h1>
          <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
            Get help from our support team. Describe your issue and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-8">
          <CreateTicketForm
            key={selectedCategory}
            initialCategory={selectedCategory}
          />
        </div>

        <div className="lg:col-span-4 space-y-6">
          <CommonTopicsCard
            topics={COMMON_TOPICS}
            onSelectCategory={setSelectedCategory}
          />
          <SupportHoursCard />
        </div>
      </div>
    </div>
  );
};

export default CreateTicketPage;
