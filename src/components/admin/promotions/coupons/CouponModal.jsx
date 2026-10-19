import { useState, useEffect, useRef } from 'react';
import {
  XIcon,
  RefreshCwIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
} from '@/icons';
import {
  DISCOUNT_TYPES,
  generateRandomCouponCode,
} from '@/mock/admin/coupons.mock';

const INITIAL_FORM = {
  couponType: 'Default',
  title: '',
  code: '',
  limitPerUser: 1,
  discountType: 'Percent',
  discountAmount: 10,
  minPurchase: '',
  maxDiscount: '',
  startDate: new Date().toISOString().split('T')[0],
  expireDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0],
};

export const CouponModal = ({
  isOpen,
  onClose,
  onSave,
  editingCoupon = null,
}) => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const startDateRef = useRef(null);
  const expireDateRef = useRef(null);

  useEffect(() => {
    if (editingCoupon) {
      setFormData({
        couponType: editingCoupon.couponType || 'Default',
        title: editingCoupon.title || '',
        code: editingCoupon.code || '',
        limitPerUser: editingCoupon.limitPerUser ?? 1,
        discountType: editingCoupon.discountType || 'Percent',
        discountAmount: editingCoupon.discountAmount ?? 10,
        minPurchase: editingCoupon.minPurchase ?? '',
        maxDiscount: editingCoupon.maxDiscount ?? '',
        startDate: editingCoupon.startDate || INITIAL_FORM.startDate,
        expireDate: editingCoupon.expireDate || INITIAL_FORM.expireDate,
      });
    } else {
      setFormData({
        ...INITIAL_FORM,
        code: generateRandomCouponCode(10),
      });
    }
  }, [editingCoupon, isOpen]);

  if (!isOpen) return null;

  const handleGenerateCode = () => {
    const newCode = generateRandomCouponCode(10);
    setFormData((prev) => ({ ...prev, code: newCode }));
  };

  const handleReset = () => {
    if (editingCoupon) {
      setFormData({
        couponType: editingCoupon.couponType || 'Default',
        title: editingCoupon.title || '',
        code: editingCoupon.code || '',
        limitPerUser: editingCoupon.limitPerUser ?? 1,
        discountType: editingCoupon.discountType || 'Percent',
        discountAmount: editingCoupon.discountAmount ?? 10,
        minPurchase: editingCoupon.minPurchase ?? '',
        maxDiscount: editingCoupon.maxDiscount ?? '',
        startDate: editingCoupon.startDate || INITIAL_FORM.startDate,
        expireDate: editingCoupon.expireDate || INITIAL_FORM.expireDate,
      });
    } else {
      setFormData({
        ...INITIAL_FORM,
        code: generateRandomCouponCode(10),
      });
    }
  };

  const calculateStatus = (startDate, expireDate, enabled) => {
    if (!enabled) return 'Disabled';
    const now = new Date();
    const start = new Date(startDate);
    const end = new Date(expireDate);
    // End date should include the full day
    end.setHours(23, 59, 59, 999);

    if (now < start) return 'Scheduled';
    if (now > end) return 'Expired';
    return 'Active';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.code.trim()) return;

    const enabled = editingCoupon ? editingCoupon.enabled : true;
    const status = calculateStatus(
      formData.startDate,
      formData.expireDate,
      enabled
    );

    const savedCoupon = {
      id: editingCoupon ? editingCoupon.id : `CPN-${Date.now()}`,
      couponType: formData.couponType,
      title: formData.title.trim(),
      code: formData.code.trim(),
      limitPerUser: Number(formData.limitPerUser) || 1,
      discountType: formData.discountType,
      discountAmount:
        formData.discountType === 'Free delivery'
          ? 0
          : Number(formData.discountAmount) || 0,
      minPurchase: formData.minPurchase ? Number(formData.minPurchase) : null,
      maxDiscount: formData.maxDiscount ? Number(formData.maxDiscount) : null,
      startDate: formData.startDate,
      expireDate: formData.expireDate,
      totalUsed: editingCoupon ? editingCoupon.totalUsed : 0,
      enabled,
      status,
    };

    onSave(savedCoupon);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {editingCoupon ? 'Edit Coupon' : 'Add New Coupon'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Set up a coupon code, discount rules and validity period.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
          >
            <XIcon size={18} />
          </button>
        </div>

        {/* Form Body */}
        <form
          id="coupon-form"
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto overflow-x-hidden p-6 space-y-6"
        >
          {/* Section 1: Coupon details */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Coupon details</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Choose the coupon type and the code customers will use.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Coupon Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Coupon Type
                </label>
                <div className="relative">
                  <select
                    value={formData.couponType}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, couponType: e.target.value }))
                    }
                    className="w-full appearance-none px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs cursor-pointer"
                  >
                    <option value="Default">Default</option>
                    <option value="First order">First order</option>
                    <option value="Free delivery">Free delivery</option>
                  </select>
                  <ChevronDownIcon
                    size={15}
                    animateOnHover={false}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>

              {/* Coupon Title */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Coupon Title
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, title: e.target.value }))
                  }
                  placeholder="October Savings"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Coupon Code */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Coupon Code
                  </label>
                  <button
                    type="button"
                    onClick={handleGenerateCode}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700 cursor-pointer transition-colors"
                  >
                    <RefreshCwIcon size={12} animateOnHover={false} />
                    <span>Generate code</span>
                  </button>
                </div>
                <input
                  type="text"
                  required
                  value={formData.code}
                  onChange={(e) =>
                    setFormData((p) => ({
                      ...p,
                      code: e.target.value.replace(/\s+/g, ''),
                    }))
                  }
                  placeholder="OCTOBER10"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold tracking-wide text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Use a unique code without spaces.
                </p>
              </div>

              {/* Limit For Same User */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Limit For Same User
                </label>
                <input
                  type="number"
                  min="1"
                  required
                  value={formData.limitPerUser}
                  onChange={(e) =>
                    setFormData((p) => ({
                      ...p,
                      limitPerUser: Math.max(1, parseInt(e.target.value) || 1),
                    }))
                  }
                  placeholder="1"
                  className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Maximum redemptions allowed per customer.
                </p>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 2: Discount rules */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Discount rules</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Define the savings and purchase requirements. All amounts are in PKR.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Discount Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Discount Type
                </label>
                <div className="relative">
                  <select
                    value={formData.discountType}
                    onChange={(e) =>
                      setFormData((p) => ({
                        ...p,
                        discountType: e.target.value,
                      }))
                    }
                    className="w-full appearance-none px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs cursor-pointer"
                  >
                    {DISCOUNT_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    size={15}
                    animateOnHover={false}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                </div>
              </div>

              {/* Discount Amount */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Discount Amount
                </label>
                <div className="relative flex rounded-xl shadow-2xs">
                  <input
                    type="number"
                    min="0"
                    disabled={formData.discountType === 'Free delivery'}
                    value={
                      formData.discountType === 'Free delivery'
                        ? '0'
                        : formData.discountAmount
                    }
                    onChange={(e) =>
                      setFormData((p) => ({
                        ...p,
                        discountAmount: e.target.value,
                      }))
                    }
                    placeholder="10"
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 disabled:bg-slate-50 disabled:text-slate-400 pr-10"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-xs font-semibold text-slate-400">
                    {formData.discountType === 'Percent' ? '%' : 'PKR'}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Minimum Purchase */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Minimum Purchase
                </label>
                <div className="flex rounded-xl shadow-2xs border border-slate-200 overflow-hidden focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
                  <span className="inline-flex items-center px-3 bg-slate-50 text-slate-500 text-xs font-semibold border-r border-slate-200">
                    PKR
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={formData.minPurchase}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, minPurchase: e.target.value }))
                    }
                    placeholder="1,500"
                    className="w-full px-3.5 py-2.5 bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Maximum Discount */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Maximum Discount
                </label>
                <div className="flex rounded-xl shadow-2xs border border-slate-200 overflow-hidden focus-within:border-orange-500 focus-within:ring-1 focus-within:ring-orange-500">
                  <span className="inline-flex items-center px-3 bg-slate-50 text-slate-500 text-xs font-semibold border-r border-slate-200">
                    PKR
                  </span>
                  <input
                    type="number"
                    min="0"
                    value={formData.maxDiscount}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, maxDiscount: e.target.value }))
                    }
                    placeholder="500"
                    className="w-full px-3.5 py-2.5 bg-white text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Section 3: Validity period */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-slate-900">Validity period</h4>
              <p className="text-xs text-slate-500 mt-0.5">
                The coupon can be redeemed between these dates.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Start Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Start Date
                </label>
                <div className="relative">
                  <input
                    ref={startDateRef}
                    type="date"
                    required
                    value={formData.startDate}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, startDate: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs cursor-pointer pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => startDateRef.current?.showPicker?.()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <CalendarDaysIcon size={16} />
                  </button>
                </div>
              </div>

              {/* Expire Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Expire Date
                </label>
                <div className="relative">
                  <input
                    ref={expireDateRef}
                    type="date"
                    required
                    value={formData.expireDate}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, expireDate: e.target.value }))
                    }
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 shadow-2xs cursor-pointer pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => expireDateRef.current?.showPicker?.()}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <CalendarDaysIcon size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/50">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-700 cursor-pointer transition-colors"
          >
            <RefreshCwIcon size={14} animateOnHover={false} />
            <span>Reset</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100 cursor-pointer transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="coupon-form"
              className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold shadow-xs shadow-orange-500/25 active:scale-95 transition-all cursor-pointer"
            >
              {editingCoupon ? 'Save Changes' : 'Create Coupon'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponModal;
