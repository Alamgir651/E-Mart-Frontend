export const CustomerPaymentMethodsCard = ({ paymentMethods = [] }) => {
  const defaultMethods = [
    {
      id: 'card-1',
      type: 'Visa',
      last4: '4567',
      isDefault: true,
      expiry: '12/28',
    },
    {
      id: 'card-2',
      type: 'Mastercard',
      last4: '7890',
      isDefault: false,
      expiry: '08/27',
    },
  ];

  const list = paymentMethods.length > 0 ? paymentMethods : defaultMethods;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4">
      <h3 className="text-base font-bold text-slate-900 tracking-tight pb-3 border-b border-slate-100">
        Payment Methods ({list.length})
      </h3>

      <div className="space-y-3">
        {list.map((method) => {
          const isVisa = method.type.toLowerCase().includes('visa');
          return (
            <div
              key={method.id}
              className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-3">
                {isVisa ? (
                  <div className="w-12 h-8 rounded-lg bg-blue-700 text-white font-extrabold italic text-xs flex items-center justify-center tracking-wider shadow-2xs shrink-0">
                    VISA
                  </div>
                ) : (
                  <div className="w-12 h-8 rounded-lg bg-gradient-to-r from-red-500 to-amber-500 text-white font-black text-xs flex items-center justify-center shadow-2xs shrink-0">
                    MC
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-slate-900">
                      {method.type} ending {method.last4}
                    </span>
                    {method.isDefault && (
                      <span className="inline-flex items-center px-2 py-0.2 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/80">
                        Default
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Expires {method.expiry}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerPaymentMethodsCard;
