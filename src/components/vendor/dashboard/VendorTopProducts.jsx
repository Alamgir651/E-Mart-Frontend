export const VendorTopProducts = ({ products = [] }) => {
  return (
    <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-xs h-full flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="text-base font-black text-slate-900 tracking-tight">
          Top Selling Products
        </h3>
      </div>

      <div className="space-y-3">
        {products.map((item) => (
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
                <p className="text-[11px] text-slate-400 mt-0.5">{item.sales}</p>
              </div>
            </div>

            <span className="text-xs font-bold text-slate-900">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorTopProducts;
