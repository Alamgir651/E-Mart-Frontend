export const OrderPaymentCard = ({ order }) => {
  return (
    <div className="md:col-span-4 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-4 flex flex-col justify-between">
      <div>
        <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
          Payment
        </h3>
        <div className="mt-3 space-y-2.5 text-xs">
          <div className="flex justify-between">
            <span className="text-slate-400 font-medium">Payment Method</span>
            <span className="font-semibold text-slate-800">
              {order.paymentMethod || 'Credit Card'}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-400 font-medium">Payment Status</span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/80">
              {order.paymentStatus || 'Paid'}
            </span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex justify-between items-center font-bold">
        <span className="text-sm text-slate-900">Total Paid</span>
        <span className="text-lg text-slate-900">{order.totalAmount || order.amount}</span>
      </div>
    </div>
  );
};

export default OrderPaymentCard;
