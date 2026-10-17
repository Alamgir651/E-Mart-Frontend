import { XIcon } from '@/icons';

export const DocumentPreviewModal = ({ isOpen, onClose, title, image }) => {
  if (!isOpen || !image) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-white rounded-3xl p-5 shadow-2xl border border-slate-100 space-y-4"
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {title || 'Document Preview'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <XIcon size={18} />
          </button>
        </div>

        <div className="w-full max-h-[75vh] overflow-hidden rounded-2xl bg-slate-50 flex items-center justify-center p-2 border border-slate-100">
          <img
            src={image}
            alt={title || 'Document'}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentPreviewModal;
