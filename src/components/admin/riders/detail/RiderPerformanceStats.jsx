import { CartIcon, CircleCheckIcon, ShieldAlertIcon, CreditCardIcon, TrendingUpIcon, TrendingDownIcon } from '@/icons';

export const RiderPerformanceStats = ({ stats }) => {
  const data = stats || {
    totalDeliveries: 248,
    completed: 230,
    completedRate: '92%',
    cancelled: 18,
    cancelledRate: '7%',
    totalEarnings: '$680.00',
    currentStatus: 'Online',
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
      {/* 1. Total Deliveries */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
        <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100/60 mb-3">
          <CartIcon size={18} />
        </div>
        <div>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {data.totalDeliveries}
          </h4>
          <span className="text-xs font-medium text-slate-500 mt-1 block">
            Total Deliveries
          </span>
        </div>
      </div>

      {/* 2. Completed */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/60">
            <CircleCheckIcon size={18} />
          </div>
          <span className="inline-flex items-center gap-0.5 text-xs font-bold text-emerald-600">
            <TrendingUpIcon size={13} />
            <span>{data.completedRate}</span>
          </span>
        </div>
        <div>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {data.completed}
          </h4>
          <span className="text-xs font-medium text-slate-500 mt-1 block">
            Completed
          </span>
        </div>
      </div>

      {/* 3. Cancelled */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
        <div className="flex items-center justify-between mb-3">
          <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center border border-rose-100/60">
            <ShieldAlertIcon size={18} />
          </div>
          <span className="inline-flex items-center gap-0.5 text-xs font-bold text-rose-600">
            <TrendingDownIcon size={13} />
            <span>{data.cancelledRate}</span>
          </span>
        </div>
        <div>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {data.cancelled}
          </h4>
          <span className="text-xs font-medium text-slate-500 mt-1 block">
            Cancelled
          </span>
        </div>
      </div>

      {/* 4. Total Earnings */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between">
        <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100/60 mb-3">
          <CreditCardIcon size={18} />
        </div>
        <div>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {data.totalEarnings}
          </h4>
          <span className="text-xs font-medium text-slate-500 mt-1 block">
            Total Earnings
          </span>
        </div>
      </div>

      {/* 5. Current Status */}
      <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs flex flex-col justify-between col-span-2 sm:col-span-1">
        <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/60 mb-3">
          <CircleCheckIcon size={18} />
        </div>
        <div>
          <h4 className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
            {data.currentStatus}
          </h4>
          <span className="text-xs font-medium text-slate-500 mt-1 block">
            Current Status
          </span>
        </div>
      </div>
    </div>
  );
};

export default RiderPerformanceStats;
