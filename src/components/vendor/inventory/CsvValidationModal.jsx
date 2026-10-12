import { XIcon, FileTextIcon, CircleCheckIcon, BadgeAlertIcon, BoxIcon, ArrowLeftIcon, LockIcon } from '@/icons';
import { SAMPLE_CSV_PREVIEW_ROWS } from '@/mock/vendor/vendorInventory.mock';

export const CsvValidationModal = ({
  isOpen,
  file,
  onClose,
  onBack,
}) => {
  if (!isOpen) return null;

  const fileName = file?.name || 'inventory_stock_oct_01.csv';
  const totalRows = SAMPLE_CSV_PREVIEW_ROWS.length;
  const invalidRows = SAMPLE_CSV_PREVIEW_ROWS.filter((r) => r.status === 'Invalid');
  const validCount = totalRows - invalidRows.length;
  const invalidCount = invalidRows.length;
  const hasErrors = invalidCount > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-100 p-5 sm:p-7 max-h-[92vh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden animate-in fade-in zoom-in-95 duration-150 space-y-5">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <XIcon size={18} />
        </button>

        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-slate-900">
            CSV Validation / Preview
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Review your inventory upload before adding stock.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <FileTextIcon size={20} />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-slate-800">
                {fileName}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                1.2 KB • {totalRows} data rows • SKU, quantity, unit • No header row
              </p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold self-start sm:self-auto bg-amber-50 text-amber-700 border border-amber-200">
            Needs correction
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3">
            <span className="text-base font-black text-slate-800">{totalRows}</span>
            <span className="text-xs font-semibold text-slate-600">Rows checked</span>
          </div>
          <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 flex items-center gap-2.5">
            <CircleCheckIcon size={16} className="text-emerald-600" />
            <span className="text-xs font-bold text-emerald-800">{validCount} Valid rows</span>
          </div>
          <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200/80 flex items-center gap-2.5">
            <BadgeAlertIcon size={16} className="text-rose-600" />
            <span className="text-xs font-bold text-rose-800">{invalidCount} Invalid rows</span>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-orange-50/60 border border-orange-200/80 flex items-start gap-3 text-xs text-orange-950">
          <BoxIcon size={18} className="text-orange-600 shrink-0 mt-0.5" />
          <div>
            <strong className="font-bold text-orange-900 block">
              Quantities are added to existing inventory, not replaced.
            </strong>
            <span className="text-orange-800/80 text-[11px]">
              Fresh Bananas (1kg): current 5 kg + CSV quantity 50 kg = updated stock 55 kg.
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-800">
            <span>Row preview</span>
            <span className="text-slate-400 font-medium">Showing all {totalRows} rows</span>
          </div>

          <div className="border border-slate-200/80 rounded-xl overflow-hidden text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200/80 text-[11px] font-bold text-slate-500">
                  <th className="py-2.5 px-3 w-12">Row</th>
                  <th className="py-2.5 px-3">Product</th>
                  <th className="py-2.5 px-3">Quantity</th>
                  <th className="py-2.5 px-3">Unit</th>
                  <th className="py-2.5 px-3">Validation status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {SAMPLE_CSV_PREVIEW_ROWS.map((row) => (
                  <tr key={row.row} className={row.status === 'Invalid' ? 'bg-rose-50/30' : ''}>
                    <td className="py-2.5 px-3 text-slate-400">{row.row}</td>
                    <td className="py-2.5 px-3 font-bold text-slate-800">{row.product}</td>
                    <td className={`py-2.5 px-3 font-bold ${row.quantity < 0 ? 'text-rose-600' : 'text-slate-700'}`}>
                      {row.quantity}
                    </td>
                    <td className={`py-2.5 px-3 ${row.status === 'Invalid' && row.errorMessage?.includes('Unit') ? 'text-rose-600 font-bold' : 'text-slate-600'}`}>
                      {row.unit}
                    </td>
                    <td className="py-2.5 px-3">
                      {row.status === 'Valid' ? (
                        <span className="text-emerald-600 font-bold flex items-center gap-1">
                          ✔ Valid
                        </span>
                      ) : (
                        <span className="text-rose-600 font-bold flex items-center gap-1">
                          ✖ Invalid: <span className="font-normal">{row.errorMessage}</span>
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-400">
            Product names are matched from your inventory using the SKU. Quantity is the stock to add.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-1">
          <h4 className="font-semibold text-slate-900">
            Correct {invalidCount} invalid rows to continue
          </h4>
          <p className="text-slate-600 text-[11px] leading-relaxed">
            Edit rows 3 and 4 in your CSV, then go Back to upload the corrected file. Use a positive quantity and the unit listed for each SKU. For eggs, enter the total number of pieces, not dozens.
          </p>
          <p className="text-slate-400 text-[11px]">
            Keep one row per product in this order: SKU, quantity, unit. Do not include header rows.
          </p>
        </div>

        <div className="space-y-2 pt-2 border-t border-slate-100">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-slate-700 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <ArrowLeftIcon size={14} />
              <span>Back</span>
            </button>

            <button
              type="button"
              disabled={hasErrors}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-bold rounded-xl transition-all cursor-not-allowed bg-slate-100 text-slate-400 border border-slate-200"
            >
              <LockIcon size={14} />
              <span>Import stock</span>
            </button>
          </div>

          <p className="text-center text-[11px] text-slate-400">
            Import is disabled until all rows are valid. No inventory has been changed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CsvValidationModal;
