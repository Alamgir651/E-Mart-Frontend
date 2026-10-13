import { useState } from 'react';
import { ChevronDownIcon, TrashIcon, CartIcon } from '@/icons';

export const PosBillingSection = ({
  customers,
  branches,
  cart,
  onUpdateQty,
  onRemoveItem,
  onClearCart,
  onOpenAddCustomer,
  onPlaceOrder,
}) => {
  const [selectedCustomer, setSelectedCustomer] = useState(customers[0]?.name || 'Annette Black');
  const [selectedBranch, setSelectedBranch] = useState(branches[0] || 'High Hill Branch');
  const [orderType, setOrderType] = useState('Take Away');
  const [paymentMethod, setPaymentMethod] = useState('Cash');
  const [paidAmount, setPaidAmount] = useState('');

  const subTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const productDiscount = cart.reduce((sum, item) => {
    if (item.originalPrice && item.originalPrice > item.price) {
      return sum + (item.originalPrice - item.price) * item.qty;
    }
    return sum;
  }, 0);
  const extraDiscount = 0;
  const tax = subTotal > 0 ? 0 : 0;
  const deliveryCharge = orderType === 'Home Delivery' && cart.length > 0 ? 50 : 0;
  const total = Math.max(0, subTotal + tax + deliveryCharge - extraDiscount);

  const numPaid = parseFloat(paidAmount) || 0;
  const changeAmount = numPaid > total ? (numPaid - total).toFixed(2) : '0';

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-4 sm:p-6 shadow-xs space-y-4">
      <h2 className="text-sm sm:text-base font-semibold text-slate-900">
        Billing Section
      </h2>

      <div className="flex gap-2 items-center">
        <div className="relative flex-1">
          <select
            value={selectedCustomer}
            onChange={(e) => setSelectedCustomer(e.target.value)}
            className="w-full appearance-none px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all cursor-pointer text-slate-700"
          >
            {customers.map((c) => (
              <option key={c.id || c.name} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
          <ChevronDownIcon size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
        <button
          type="button"
          onClick={onOpenAddCustomer}
          className="px-3.5 py-2.5 bg-[#f95900] hover:bg-[#ea5000] active:scale-95 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer shrink-0 whitespace-nowrap shadow-xs shadow-orange-500/20"
        >
          Add New Customer
        </button>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Select Branch
        </label>
        <div className="relative">
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full appearance-none px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-slate-200/90 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all cursor-pointer text-slate-700"
          >
            {branches.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
          <ChevronDownIcon size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-slate-700 mb-1">
          Select Order Type
        </label>
        <div className="flex items-center gap-6 p-2.5 border border-slate-200/90 rounded-xl bg-white text-xs text-slate-700 font-medium">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="radio"
              name="orderType"
              checked={orderType === 'Take Away'}
              onChange={() => setOrderType('Take Away')}
              className="accent-[#f95900] w-4 h-4 cursor-pointer"
            />
            <span>Take Away</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="radio"
              name="orderType"
              checked={orderType === 'Home Delivery'}
              onChange={() => setOrderType('Home Delivery')}
              className="accent-[#f95900] w-4 h-4 cursor-pointer"
            />
            <span>Home Delivery</span>
          </label>
        </div>
      </div>

      <div className="border border-slate-100 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-12 bg-slate-50/80 px-3 py-2 text-[11px] font-semibold text-slate-500 border-b border-slate-100">
          <span className="col-span-5">Item</span>
          <span className="col-span-3 text-center">Qty</span>
          <span className="col-span-3 text-right">Price</span>
          <span className="col-span-1 text-center">Delete</span>
        </div>

        {cart.length > 0 ? (
          <div className="divide-y divide-slate-100 max-h-48 overflow-y-auto">
            {cart.map((item) => (
              <div key={item.id} className="grid grid-cols-12 items-center px-3 py-2.5 text-xs">
                <div className="col-span-5 min-w-0 pr-1">
                  <h5 className="font-semibold text-slate-800 truncate">{item.name}</h5>
                  <span className="text-[10px] text-slate-400 block">{item.unit}</span>
                </div>
                <div className="col-span-3 flex items-center justify-center gap-1">
                  <button
                    onClick={() => onUpdateQty(item.id, -1)}
                    className="w-5 h-5 rounded bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 flex items-center justify-center cursor-pointer"
                  >
                    -
                  </button>
                  <span className="w-5 text-center font-semibold text-slate-800">{item.qty}</span>
                  <button
                    onClick={() => onUpdateQty(item.id, 1)}
                    className="w-5 h-5 rounded bg-slate-100 text-slate-600 font-bold hover:bg-slate-200 flex items-center justify-center cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <span className="col-span-3 text-right font-semibold text-slate-900">
                  {(item.price * item.qty).toFixed(2)}$
                </span>
                <div className="col-span-1 flex justify-center">
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-slate-400 hover:text-rose-500 transition-colors cursor-pointer p-1"
                  >
                    <TrashIcon size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#f95900] flex items-center justify-center mb-2">
              <CartIcon size={24} />
            </div>
            <p className="text-xs text-slate-400 font-medium">No product added yet</p>
          </div>
        )}
      </div>

      <div className="space-y-1.5 text-xs border-b border-slate-100 pb-3 text-slate-500 font-medium">
        <div className="flex justify-between">
          <span>Sub total :</span>
          <span>{subTotal.toFixed(2)}$</span>
        </div>
        <div className="flex justify-between">
          <span>Product Discount :</span>
          <span>- {productDiscount.toFixed(2)}$</span>
        </div>
        <div className="flex justify-between text-[#f95900]">
          <span>Extra Discount :</span>
          <span>- {extraDiscount.toFixed(2)}$</span>
        </div>
        <div className="flex justify-between">
          <span>Tax :</span>
          <span>{tax.toFixed(2)}$</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery Charge :</span>
          <span>{deliveryCharge.toFixed(2)}$</span>
        </div>
        <div className="flex justify-between text-slate-900 font-bold pt-1.5 border-t border-slate-100">
          <span>Total :</span>
          <span>{total.toFixed(2)}$</span>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-800 mb-1.5">
          Payment Method
        </label>
        <div className="flex gap-2">
          {['Cash', 'Card'].map((m) => (
            <button
              key={m}
              type="button"
              onClick={() => setPaymentMethod(m)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                paymentMethod === m
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2 text-xs font-medium text-slate-600 pt-1">
        <div className="flex items-center justify-between">
          <span>Paid Amount :</span>
          <input
            type="number"
            min="0"
            value={paidAmount}
            onChange={(e) => setPaidAmount(e.target.value)}
            placeholder="0"
            className="w-24 px-3 py-1.5 text-right bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none text-slate-800 font-semibold"
          />
        </div>
        <div className="flex items-center justify-between">
          <span>Change Amount :</span>
          <span className="font-semibold text-slate-900">{changeAmount}</span>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="button"
          onClick={onClearCart}
          className="flex-1 py-2.5 border border-rose-300 text-rose-500 hover:bg-rose-50 active:scale-95 rounded-xl font-semibold text-xs transition-all cursor-pointer"
        >
          Cancel Order
        </button>
        <button
          type="button"
          onClick={() =>
            onPlaceOrder({
              customer: selectedCustomer,
              branch: selectedBranch,
              orderType,
              paymentMethod,
              total,
              paid: numPaid,
              change: changeAmount,
            })
          }
          className="flex-1 py-2.5 bg-[#f95900] hover:bg-[#ea5000] active:scale-95 text-white rounded-xl font-semibold text-xs transition-all cursor-pointer shadow-sm shadow-orange-500/25"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PosBillingSection;
