import { useState } from 'react';
import { useAnimatedIcon } from '@/utils/useAnimatedIcon';
import { CreditCardIcon, SquarePenIcon } from '@/icons';
import { toast } from '@/utils/toast';

const PAYMENT_TABS = [
  { id: 'bank', label: 'Bank Transfer' },
  { id: 'jazzcash', label: 'JazzCash' },
  { id: 'easypaisa', label: 'EasyPaisa' },
];

export const PaymentSettingsCard = ({ data, onSave }) => {
  const [cardRef, cardTrigger] = useAnimatedIcon();
  const [payoutMethodRef, payoutMethodTrigger] = useAnimatedIcon();
  const [activeTab, setActiveTab] = useState(data.activeType || 'bank');
  const [form, setForm] = useState({
    accountTitle: data.accountTitle || 'Ali Khan',
    bankName: data.bankName || 'Meezan Bank',
    iban: data.iban || 'PK72 MEZN 0001 2345 6789',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.accountTitle.trim() || !form.iban.trim()) {
      toast.error('Please fill in all required payment fields');
      return;
    }

    onSave({
      ...data,
      activeType: activeTab,
      accountTitle: form.accountTitle,
      bankName: form.bankName,
      iban: form.iban,
      currentMethod: `${
        activeTab === 'bank'
          ? `Bank Transfer (${form.bankName} - ****${form.iban.slice(-4)})`
          : `${activeTab.toUpperCase()} - ****${form.iban.slice(-4)}`
      }`,
    });
    toast.success('Payment settings updated successfully!');
  };

  return (
    <div
      onMouseEnter={cardTrigger.onMouseEnter}
      onMouseLeave={cardTrigger.onMouseLeave}
      className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/80 shadow-xs space-y-6 flex flex-col justify-between"
    >
      <div className="flex items-start gap-3.5">
        <div className="w-10 h-10 rounded-2xl bg-orange-50 border border-orange-200/60 text-orange-500 flex items-center justify-center shrink-0">
          <CreditCardIcon ref={cardRef} size={20} animateOnHover={false} />
        </div>
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
            Payment Settings
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Manage your payout and payment methods
          </p>
        </div>
      </div>

      <div
        onMouseEnter={payoutMethodTrigger.onMouseEnter}
        onMouseLeave={payoutMethodTrigger.onMouseLeave}
        className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-orange-50 border border-orange-200/60 text-orange-500 flex items-center justify-center shrink-0">
            <CreditCardIcon ref={payoutMethodRef} size={16} animateOnHover={false} />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-slate-400 block uppercase tracking-wider">
              Current Payout Method
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-800 mt-0.5">
              {data.currentMethod}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => toast.info('You can update details below.')}
          className="px-3 py-1.5 border border-slate-200 text-slate-700 hover:bg-white font-semibold text-xs rounded-xl transition-colors cursor-pointer shrink-0"
        >
          Edit
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {PAYMENT_TABS.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-2 sm:px-3 text-xs font-semibold rounded-xl transition-all cursor-pointer border flex items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'border-orange-500 bg-orange-50/50 text-orange-600 shadow-2xs'
                    : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                }`}
              >
                <CreditCardIcon size={14} animateOnHover={false} className={isSelected ? 'text-orange-600' : 'text-slate-400'} />
                <span className="truncate">{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Account Title <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.accountTitle}
              onChange={(e) => setForm((p) => ({ ...p, accountTitle: e.target.value }))}
              placeholder="Ali Khan"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Bank Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              required
              value={form.bankName}
              onChange={(e) => setForm((p) => ({ ...p, bankName: e.target.value }))}
              placeholder="Meezan Bank"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">
            Account Number / IBAN <span className="text-rose-500">*</span>
          </label>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <input
              type="text"
              required
              value={form.iban}
              onChange={(e) => setForm((p) => ({ ...p, iban: e.target.value }))}
              placeholder="PK72 MEZN 0001 2345 6789"
              className="flex-1 w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-2xs font-mono"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 active:scale-98 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm shadow-orange-500/20 transition-all cursor-pointer whitespace-nowrap"
            >
              Save Payment Method
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentSettingsCard;
