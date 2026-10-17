import { useState, useEffect } from 'react';
import { XIcon, CalendarDaysIcon } from '@/icons';
import { DealProductsSection } from './DealProductsSection';

export const DealModal = ({ isOpen, onClose, onSave, editingDeal }) => {
  const [formData, setFormData] = useState({
    title: '',
    dealType: 'Flash Deal',
    startDate: '2026-10-10',
    endDate: '2026-10-12',
    productIds: [],
  });

  useEffect(() => {
    if (editingDeal) {
      setFormData({
        title: editingDeal.title || '',
        dealType: editingDeal.dealType || 'Flash Deal',
        startDate: editingDeal.startDate || '2026-10-10',
        endDate: editingDeal.endDate || '2026-10-12',
        productIds: editingDeal.productIds || [],
      });
    } else {
      setFormData({
        title: '',
        dealType: 'Flash Deal',
        startDate: '2026-10-10',
        endDate: '2026-10-12',
        productIds: [],
      });
    }
  }, [editingDeal, isOpen]);

  if (!isOpen) return null;

  const handleToggleProduct = (id) => {
    setFormData((prev) => ({
      ...prev,
      productIds: prev.productIds.includes(id)
        ? prev.productIds.filter((item) => item !== id)
        : [...prev.productIds, id],
    }));
  };

  const handleRemoveProduct = (id) => {
    setFormData((prev) => ({
      ...prev,
      productIds: prev.productIds.filter((item) => item !== id),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    onSave({
      id: editingDeal ? editingDeal.id : `DEAL-${Date.now()}`,
      ...formData,
      durationDisplay: `${formData.startDate} to ${formData.endDate}`,
      status: editingDeal?.status || 'Active',
      published: editingDeal?.published ?? true,
      activeProductsCount: formData.productIds.length,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {editingDeal ? 'Edit Deal' : 'Add New Deal'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Choose a deal type and set when your offer runs.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Title *</label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData((p) => ({ ...p, title: e.target.value }))}
              placeholder="Weekend Essentials"
              className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Deal Type *</label>
            <div className="grid grid-cols-3 gap-2.5">
              {['Flash Deal', 'New Arrival', 'Top Offers'].map((type) => {
                const isSelected = formData.dealType === type;
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData((p) => ({ ...p, dealType: type }))}
                    className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'border-orange-500 bg-orange-50/30 text-orange-600'
                        : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                    }`}
                  >
                    <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? 'border-orange-500 bg-white' : 'border-slate-300'}`}>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-orange-500" />}
                    </span>
                    <span className="truncate">{type}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Select one of the three supported deal types.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Start Date *</label>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={formData.startDate}
                  onChange={(e) => setFormData((p) => ({ ...p, startDate: e.target.value }))}
                  className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-orange-500 shadow-2xs"
                />
                <CalendarDaysIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">End Date *</label>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={formData.endDate}
                  onChange={(e) => setFormData((p) => ({ ...p, endDate: e.target.value }))}
                  className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:border-orange-500 shadow-2xs"
                />
                <CalendarDaysIcon size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              </div>
            </div>
          </div>

          <DealProductsSection
            selectedProductIds={formData.productIds}
            onToggleProduct={handleToggleProduct}
            onRemoveProduct={handleRemoveProduct}
          />
        </form>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-t border-slate-100">
          <span className="text-[11px] text-slate-400 font-medium">* Required fields</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFormData({ title: '', dealType: 'Flash Deal', startDate: '2026-10-10', endDate: '2026-10-12', productIds: [] })}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-200/60 rounded-xl cursor-pointer"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="px-4 py-2 text-xs font-semibold text-white bg-orange-500 hover:bg-orange-600 rounded-xl shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
            >
              {editingDeal ? 'Update Deal' : 'Create Deal'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealModal;
