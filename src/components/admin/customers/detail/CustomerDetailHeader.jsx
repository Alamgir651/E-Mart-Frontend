import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  CalendarDaysIcon,
  ShieldAlertIcon,
  TrashIcon,
  CheckIcon,
} from '@/icons';

export const CustomerDetailHeader = ({
  customer,
  onSuspend,
  onUnsuspend,
  onDelete,
}) => {
  const navigate = useNavigate();
  const isSuspended = customer.status === 'Suspended';

  return (
    <div className="space-y-4">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
        <button
          type="button"
          onClick={() => navigate('/admin/customers')}
          className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeftIcon size={15} />
          <span>Customers</span>
        </button>
        <span className="text-slate-300">&gt;</span>
        <span className="text-slate-900">Customer Details</span>
      </div>

      {/* Main Customer Header Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left: Avatar & Metadata */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            <img
              src={customer.avatar}
              alt={customer.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-orange-500/20 shadow-xs shrink-0"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80';
              }}
            />

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {customer.name}
                </h1>

                {isSuspended ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200/80">
                    Suspended
                  </span>
                ) : customer.status === 'Inactive' ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-500 border border-rose-200/80">
                    Inactive
                  </span>
                ) : (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/80">
                    Active
                  </span>
                )}

                <span className="text-xs font-medium text-slate-400">
                  {customer.customerId || customer.code}
                </span>
              </div>

              {/* Sub-line metadata */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <MailIcon size={13} className="text-slate-400" />
                  <span>{customer.email}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <PhoneIcon size={13} className="text-slate-400" />
                  <span>{customer.phone}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPinIcon size={13} className="text-slate-400" />
                  <span>{customer.fullLocation || customer.location}</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDaysIcon size={13} className="text-slate-400" />
                  <span>Joined: {customer.joinDate}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Actions (Suspend / Delete) */}
          <div className="flex items-center gap-3 shrink-0">
            {isSuspended ? (
              <button
                type="button"
                onClick={onUnsuspend}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-emerald-300 text-emerald-600 hover:bg-emerald-50 active:scale-95 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer"
              >
                <CheckIcon size={15} />
                <span>Unsuspend</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onSuspend}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-orange-300 text-orange-600 hover:bg-orange-50 active:scale-95 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer"
              >
                <ShieldAlertIcon size={15} />
                <span>Suspend</span>
              </button>
            )}

            <button
              type="button"
              onClick={onDelete}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-rose-300 text-rose-600 hover:bg-rose-50 active:scale-95 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer"
            >
              <TrashIcon size={15} />
              <span>Delete</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetailHeader;
