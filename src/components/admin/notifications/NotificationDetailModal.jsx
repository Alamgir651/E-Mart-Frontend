import { useNavigate } from 'react-router-dom';
import { XIcon, ExternalLinkIcon, CheckIcon } from '@/icons';

export const NotificationDetailModal = ({
  isOpen,
  onClose,
  notification,
  onToggleRead,
}) => {
  const navigate = useNavigate();

  if (!isOpen || !notification) return null;

  const handleNavigate = () => {
    onClose();
    if (notification.actionLink && notification.actionLink !== '#') {
      navigate(notification.actionLink);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-100 overflow-hidden transform transition-all scale-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-orange-50 text-orange-600 border border-orange-200/60">
              {notification.category}
            </span>
            {notification.needsAttention && (
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-rose-50 text-rose-600 border border-rose-200/60">
                Needs attention
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <div>
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Notification Details
            </span>
            <h3 className="text-base font-bold text-slate-900 mt-1">
              {notification.title} ·{' '}
              <span className="text-orange-600">{notification.entityId}</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Received {notification.time} · {notification.groupDate}
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
            {notification.description}
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-slate-50/60 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-400 font-medium">Status</span>
              <p
                className={`text-xs font-semibold mt-0.5 ${
                  notification.isRead ? 'text-slate-600' : 'text-orange-600'
                }`}
              >
                {notification.isRead ? 'Marked as Read' : 'Unread Notification'}
              </p>
            </div>
            <div className="p-3 bg-slate-50/60 rounded-xl border border-slate-100">
              <span className="text-[11px] text-slate-400 font-medium">Entity Reference</span>
              <p className="text-xs font-semibold text-slate-700 mt-0.5">
                {notification.entityId}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50/80 border-t border-slate-100">
          <button
            type="button"
            onClick={() => onToggleRead(notification.id)}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors cursor-pointer"
          >
            <CheckIcon size={14} />
            <span>{notification.isRead ? 'Mark as unread' : 'Mark as read'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200/60 rounded-xl transition-colors cursor-pointer"
            >
              Close
            </button>
            {notification.actionLink && notification.actionLink !== '#' && (
              <button
                type="button"
                onClick={handleNavigate}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-xs shadow-orange-500/25 transition-all cursor-pointer"
              >
                <span>{notification.actionLabel}</span>
                <ExternalLinkIcon size={13} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetailModal;
