export const StoreActionButtons = ({
  onCancel,
  isSubmitting,
}) => {
  return (
    <div className="flex items-center justify-end gap-3 sm:gap-4 pt-6 border-t border-slate-100">
      <button
        type="button"
        onClick={onCancel}
        disabled={isSubmitting}
        className="px-6 sm:px-8 py-2.5 sm:py-3 bg-slate-100 hover:bg-slate-200/80 text-slate-700 font-semibold text-xs sm:text-sm rounded-xl transition-all cursor-pointer active:scale-95 disabled:opacity-50"
      >
        Cancel
      </button>

      <button
        type="submit"
        disabled={isSubmitting}
        className="px-8 sm:px-10 py-2.5 sm:py-3 bg-orange-500 hover:bg-orange-600 active:scale-98 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-sm shadow-orange-500/20 transition-all cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <span>Saving...</span>
        ) : (
          <span>Save Changes</span>
        )}
      </button>
    </div>
  );
};

export default StoreActionButtons;
