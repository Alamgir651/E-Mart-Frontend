export const VendorBankDetailsCard = ({ bankDetails = {} }) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-5">
      <h3 className="text-base font-bold text-slate-900 tracking-tight">
        Bank Details
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-xs sm:text-sm">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Account Title
          </span>
          <span className="font-semibold text-slate-900">
            {bankDetails.accountTitle || 'Ahmed Khan'}
          </span>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Bank Name
          </span>
          <span className="font-semibold text-slate-900">
            {bankDetails.bankName || 'Meezan Bank'}
          </span>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Account Number
          </span>
          <span className="font-semibold text-slate-900 font-mono tracking-wider">
            {bankDetails.accountNumber || '0234 5678 9012'}
          </span>
        </div>

        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            IBAN
          </span>
          <span className="font-semibold text-slate-900 font-mono tracking-wider">
            {bankDetails.iban || 'PK36 MEZN 0002 3458 7890'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VendorBankDetailsCard;
