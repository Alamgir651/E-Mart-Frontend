import { Link } from 'react-router-dom';

export const VendorLowStock = ({ products = [] }) => {
  return (
    <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-xs h-full flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-black text-slate-900 tracking-tight">
          Low Stock Products
        </h3>
        <Link
          to="/vendor/inventory"
          className="text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors"
        >
          View All
        </Link>
      </div>

      <div className="space-y-3">
        {products.map((item) => {
          const isOut = item.status === 'Out of Stock';

          return (
            <div
              key={item.id}
              className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-50 transition-colors group cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-10 h-10 rounded-xl object-cover border border-slate-100 shadow-2xs group-hover:scale-105 transition-transform"
                />
                <div>
                  <h4 className="text-xs font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">{item.stock}</p>
                </div>
              </div>

              <span
                className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                  isOut
                    ? 'bg-rose-50 text-rose-500 border border-rose-200/50'
                    : 'bg-amber-50 text-amber-600 border border-amber-200/50'
                }`}
              >
                {item.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VendorLowStock;
