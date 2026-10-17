import { XIcon, TrashIcon } from '@/icons';

export const DeleteCustomerModal = ({
  isOpen,
  onClose,
  onConfirm,
  customer,
}) => {
  if (!isOpen || !customer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-100 text-center animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <XIcon size={18} />
        </button>

        {/* Top Trash Icon */}
        <div className="w-14 h-14 mx-auto rounded-full bg-rose-50 border-4 border-rose-100/70 flex items-center justify-center text-rose-600 mb-3">
          <TrashIcon size={24} />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-slate-900 tracking-tight">
          Delete User
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Are you sure you want to delete this user?
        </p>

        {/* User Card */}
        <div className="mt-4 p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between text-left gap-3">
          <div className="flex items-center gap-3">
            <img
              src={customer.avatar}
              alt={customer.name}
              className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80';
              }}
            />
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                  {customer.name}
                </h4>
                <span className="text-[11px] text-slate-400 font-medium">
                  {customer.code}
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block -mt-0.5">
                {customer.email}
              </span>
            </div>
          </div>

          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-semibold border ${
              customer.status === 'Active'
                ? 'bg-emerald-50 text-emerald-600 border-emerald-200/80'
                : 'bg-rose-50 text-rose-600 border-rose-200/80'
            }`}
          >
            {customer.status}
          </span>
        </div>

        {/* Warning Banner */}
        <div className="mt-3.5 p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/70 text-left flex items-start gap-3">
          <div className="text-rose-600 mt-0.5 shrink-0 text-sm">
            &#9888;
          </div>
          <div className="space-y-0.5">
            <h5 className="text-xs font-bold text-rose-900">
              This action cannot be undone
            </h5>
            <p className="text-[11px] text-rose-700 leading-relaxed">
              {customer.name}&apos;s account will be permanently deleted. They will no longer be able to sign in or place new orders.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-rose-600 hover:bg-rose-700 active:scale-95 rounded-xl shadow-xs transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <TrashIcon size={14} />
            <span>Delete User</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteCustomerModal;
