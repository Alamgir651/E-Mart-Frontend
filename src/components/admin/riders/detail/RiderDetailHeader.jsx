import { useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeftIcon,
  PhoneIcon,
  MailIcon,
  CalendarDaysIcon,
  MapPinIcon,
  CheckIcon,
} from '@/icons';

export const RiderDetailHeader = ({
  rider,
  onApprove,
  onReject,
  onSuspend,
  onActivate,
}) => {
  const navigate = useNavigate();
  const isApproved = rider.status === 'Active' || rider.status === 'Approved';
  const isPending = rider.status === 'Pending';
  const isSuspended = rider.status === 'Suspended';

  return (
    <div className="space-y-4">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500">
        <button
          type="button"
          onClick={() => navigate('/admin/riders')}
          className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors cursor-pointer"
        >
          <ArrowLeftIcon size={15} />
          <span>Riders</span>
        </button>
        <span className="text-slate-300">&gt;</span>
        <span className="text-slate-900">Rider Details</span>
      </div>

      {/* Main Rider Header Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Left: Avatar & Info */}
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            <img
              src={rider.avatar}
              alt={rider.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-orange-500/30 shadow-xs shrink-0"
              onError={(e) => {
                e.currentTarget.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80';
              }}
            />

            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  {rider.name}
                </h1>

                {isPending ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-600 border border-amber-200/80">
                    Pending Approval
                  </span>
                ) : isSuspended ? (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-600 border border-rose-200/80">
                    Suspended
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/80">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{rider.deliveryStatus || 'On Delivery'}</span>
                  </span>
                )}
              </div>

              {/* Sub-line metadata */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-500 font-medium">
                <span className="text-slate-400 font-semibold">{rider.riderId || rider.code}</span>
                <span className="inline-flex items-center gap-1">
                  <PhoneIcon size={13} className="text-slate-400" />
                  <span>{rider.phone}</span>
                </span>
                <span className="inline-flex items-center gap-1">
                  <MailIcon size={13} className="text-slate-400" />
                  <span>{rider.email}</span>
                </span>
                {isPending ? (
                  <span className="inline-flex items-center gap-1">
                    <CalendarDaysIcon size={13} className="text-slate-400" />
                    <span>Applied: {rider.appliedDate || rider.joinDate}</span>
                  </span>
                ) : (
                  <>
                    <span className="inline-flex items-center gap-1">
                      <MapPinIcon size={13} className="text-slate-400" />
                      <span>{rider.location || rider.zone}</span>
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <CalendarDaysIcon size={13} className="text-slate-400" />
                      <span>Joined: {rider.joinDate}</span>
                    </span>
                  </>
                )}
              </div>

              {/* Verified / Approved Pills when Active */}
              {isApproved && (
                <div className="pt-2 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                    <CheckIcon size={12} className="stroke-[3]" />
                    <span>Approved</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                    <CheckIcon size={12} className="stroke-[3]" />
                    <span>Active</span>
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {isPending ? (
              <>
                <button
                  type="button"
                  onClick={onApprove}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <CheckIcon size={16} className="stroke-[2.5]" />
                  <span>Approve Rider</span>
                </button>

                <button
                  type="button"
                  onClick={onReject}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
                >
                  <span>Reject Rider</span>
                </button>
              </>
            ) : isSuspended ? (
              <button
                type="button"
                onClick={onActivate}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <CheckIcon size={16} className="stroke-[2.5]" />
                <span>Reactivate Rider</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onSuspend}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <span>Suspend Rider</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderDetailHeader;
