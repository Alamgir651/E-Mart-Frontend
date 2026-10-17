export const OrderInfoCard = ({ order }) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
      <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
        Order Information
      </h3>
      <div className="space-y-2.5 text-xs">
        <div className="flex justify-between">
          <span className="text-slate-400 font-medium">Order ID</span>
          <span className="font-bold text-slate-900">{order.id}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400 font-medium">Order Date</span>
          <span className="font-semibold text-slate-800">{order.date}</span>
        </div>
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
        <div className="flex justify-between items-center">
          <span className="text-slate-400 font-medium">Order Status</span>
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/80">
            {order.status}
          </span>
        </div>
        <div className="flex justify-between pt-2 border-t border-slate-100 font-bold text-sm">
          <span className="text-slate-900">Total Amount</span>
          <span className="text-slate-900">{order.totalAmount || order.amount}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderInfoCard;
