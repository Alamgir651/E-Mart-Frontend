import { CartIcon, CreditCardIcon, MapPinIcon, WalletIcon } from '@/icons';

export const CustomerDetailStats = ({ customer }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {/* 1. Total Orders */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100/60 shrink-0">
          <CartIcon size={20} />
        </div>
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {customer.totalOrders}
          </h4>
          <span className="text-xs font-medium text-slate-500 block mt-0.5">
            Total Orders
          </span>
        </div>
      </div>

      {/* 2. Total Spent */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/60 shrink-0">
          <CreditCardIcon size={20} />
        </div>
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {customer.totalSpent}
          </h4>
          <span className="text-xs font-medium text-slate-500 block mt-0.5">
            Total Spent
          </span>
        </div>
      </div>

      {/* 3. Saved Addresses */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/60 shrink-0">
          <MapPinIcon size={20} />
        </div>
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {customer.savedAddressesCount || customer.savedAddresses?.length || 3}
          </h4>
          <span className="text-xs font-medium text-slate-500 block mt-0.5">
            Saved Addresses
          </span>
        </div>
      </div>

      {/* 4. Saved Cards */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex items-center gap-4">
        <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100/60 shrink-0">
          <WalletIcon size={20} />
        </div>
        <div>
          <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            {customer.savedCardsCount || customer.paymentMethods?.length || 2}
          </h4>
          <span className="text-xs font-medium text-slate-500 block mt-0.5">
            Saved Cards
          </span>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailStats;
