import { useState, useMemo } from 'react';
import { XIcon, ShieldAlertIcon, CircleCheckIcon } from '@/icons';
import ProductReportItem from './ProductReportItem';
import { updateProductReportStatusMock } from '@/mock/admin/products.mock';
import { toast } from '@/utils/toast';

export const ProductDetailModal = ({ isOpen, onClose, product }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [reportsList, setReportsList] = useState(product?.reports || []);

  // Sync when product changes
  if (product && reportsList !== product.reports && (!reportsList.length || product.id !== reportsList[0]?.productId)) {
    // only if different product
  }

  // Keep state updated when selected product changes
  const currentReports = useMemo(() => {
    return product?.reports || [];
  }, [product]);

  const [localReports, setLocalReports] = useState(currentReports);

  // Sync if product changes
  useMemo(() => {
    setLocalReports(product?.reports || []);
  }, [product]);

  if (!isOpen || !product) return null;

  const totalReports = localReports.length;
  const pendingReports = localReports.filter((r) => r.status !== 'Resolved').length;
  const resolvedReports = localReports.filter((r) => r.status === 'Resolved').length;

  const filteredReports = localReports.filter((r) => {
    if (activeFilter === 'Pending') return r.status !== 'Resolved';
    if (activeFilter === 'Resolved') return r.status === 'Resolved';
    return true;
  });

  const handleUpdateStatus = (reportId, newStatus) => {
    updateProductReportStatusMock(product.id, reportId, newStatus);
    setLocalReports((prev) =>
      prev.map((r) => (r.id === reportId ? { ...r, status: newStatus } : r))
    );
    if (newStatus === 'Resolved') {
      toast.success(`Report #${reportId} marked as Resolved.`);
    } else {
      toast.info(`Report #${reportId} reopened.`);
    }
  };

  const vendorName = product.vendor || product.vendorDetails?.name || 'Fresh Mart';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-slate-900/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-3xl w-full bg-[#fbf9f6] rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-200 my-auto space-y-5 max-h-[90vh] overflow-y-auto [scrollbar-width:thin]"
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200/80">
          <div className="flex items-center gap-3.5">
            <img
              src={product.image}
              alt={product.name}
              className="w-13 h-13 rounded-2xl object-cover border border-slate-200/90 shadow-2xs shrink-0"
            />
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  {product.name}
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-orange-50 text-orange-600 border border-orange-200/80">
                  {product.code}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Vendor: <span className="font-semibold text-slate-700">{vendorName}</span> •{' '}
                Category: <span className="text-slate-600">{product.category}</span> •{' '}
                Price: <span className="font-bold text-slate-800">{product.price}</span>
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-colors flex items-center justify-center cursor-pointer shadow-2xs shrink-0"
          >
            <XIcon animateOnHover={false} size={18} />
          </button>
        </div>

        {/* Reports KPI Bar */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-200/60 flex items-center justify-center shrink-0">
              <ShieldAlertIcon animateOnHover={false} size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Total Reports</p>
              <p className="text-lg font-bold text-slate-900">{totalReports}</p>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/60 flex items-center justify-center shrink-0">
              <ShieldAlertIcon animateOnHover={false} size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Pending</p>
              <p className="text-lg font-bold text-amber-600">{pendingReports}</p>
            </div>
          </div>

          <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center shrink-0">
              <CircleCheckIcon animateOnHover={false} size={18} />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Resolved</p>
              <p className="text-lg font-bold text-emerald-600">{resolvedReports}</p>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/60 rounded-xl">
            {['All', 'Pending', 'Resolved'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFilter(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === tab
                    ? 'bg-white text-slate-900 shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab} {tab === 'All' ? `(${totalReports})` : tab === 'Pending' ? `(${pendingReports})` : `(${resolvedReports})`}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-400 font-medium hidden sm:inline">
            Showing {filteredReports.length} of {totalReports} reports
          </span>
        </div>

        {/* Reports Content List */}
        <div className="space-y-3.5">
          {filteredReports.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200/80 p-8 text-center space-y-2.5 shadow-2xs">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200/60 flex items-center justify-center mx-auto">
                <CircleCheckIcon animateOnHover={false} size={24} />
              </div>
              <h4 className="text-sm font-bold text-slate-800">No Reports Found</h4>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                {activeFilter === 'All'
                  ? 'This product has 0 customer complaints or reported issues.'
                  : `There are no ${activeFilter.toLowerCase()} reports for this product.`}
              </p>
            </div>
          ) : (
            filteredReports.map((report) => (
              <ProductReportItem
                key={report.id}
                report={report}
                onUpdateStatus={handleUpdateStatus}
              />
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-200/80 text-xs">
          <span className="text-slate-400 font-medium">
            Customer quality assurance and product reports
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-colors cursor-pointer shadow-2xs"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
