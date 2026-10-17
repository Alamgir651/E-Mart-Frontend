export const OrderItemsCard = ({ items = [] }) => {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3">
      <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
        Items ({items.length || 3})
      </h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between text-xs gap-3">
            <div className="flex items-center gap-2.5">
              <img
                src={item.image}
                alt={item.name}
                className="w-10 h-10 rounded-xl object-cover border border-slate-200/80 shrink-0"
              />
              <div>
                <span className="font-bold text-slate-900 block leading-tight">
                  {item.name}
                </span>
                <span className="text-[11px] text-slate-400 block">
                  {item.desc}
                </span>
              </div>
            </div>
            <span className="font-bold text-slate-900 shrink-0">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderItemsCard;
