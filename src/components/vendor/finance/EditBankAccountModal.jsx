import { useState, useEffect } from 'react';
import { XIcon } from '@/icons';

export const EditBankAccountModal = ({
  isOpen,
  bankAccount,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState({
    bankName: '',
    accountTitle: '',
    accountNumber: '',
    iban: '',
  });

  useEffect(() => {
    if (bankAccount) {
      setFormData({
        bankName: bankAccount.bankName || '',
        accountTitle: bankAccount.accountTitle || '',
        accountNumber: bankAccount.rawAccountNumber || bankAccount.accountNumber || '',
        iban: bankAccount.iban || '',
      });
    }
  }, [bankAccount, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...bankAccount,
      bankName: formData.bankName,
      accountTitle: formData.accountTitle,
      accountNumber: `**** **** **** ${formData.accountNumber.slice(-4) || '4242'}`,
      rawAccountNumber: formData.accountNumber,
      iban: formData.iban,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <h2 className="text-base sm:text-lg font-semibold text-slate-900 tracking-tight">
            Edit Bank Account
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <XIcon size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Bank Name
            </label>
            <input
              type="text"
              required
              value={formData.bankName}
              onChange={(e) => setFormData((p) => ({ ...p, bankName: e.target.value }))}
              placeholder="e.g. Allied Bank"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Account Title
            </label>
            <input
              type="text"
              required
              value={formData.accountTitle}
              onChange={(e) => setFormData((p) => ({ ...p, accountTitle: e.target.value }))}
              placeholder="e.g. Fresh Mart (Pvt) Ltd"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Account Number
            </label>
            <input
              type="text"
              required
              value={formData.accountNumber}
              onChange={(e) => setFormData((p) => ({ ...p, accountNumber: e.target.value }))}
              placeholder="**** **** **** 4242"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-mono"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              IBAN / Routing Number
            </label>
            <input
              type="text"
              required
              value={formData.iban}
              onChange={(e) => setFormData((p) => ({ ...p, iban: e.target.value }))}
              placeholder="e.g. PK36ABPA0001234567890"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all font-mono"
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 active:scale-98 text-white text-xs sm:text-sm font-semibold shadow-sm shadow-orange-500/20 transition-all cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBankAccountModal;
