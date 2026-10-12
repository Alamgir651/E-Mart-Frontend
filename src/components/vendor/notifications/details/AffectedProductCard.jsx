export const AffectedProductCard = ({
  cardTitle = 'Affected product',
  product,
}) => {
  const isRemoved = product.status === 'Removed';

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs space-y-4">
      <h3 className="text-sm sm:text-base font-semibold text-slate-900 tracking-tight">
        {cardTitle}
      </h3>

      <div className="flex items-start gap-4">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-1">
          <h4 className="text-sm sm:text-base font-semibold text-slate-900">
            {product.name}
          </h4>
          <p className="text-xs text-slate-500 font-mono">
            {product.id} • SKU: {product.sku}
          </p>
          <p className="text-xs text-slate-600 font-medium">
            {product.categoryPrice}
          </p>
        </div>
      </div>

      <div className="pt-2 flex flex-wrap items-center gap-2">
        <span
          className={`px-2.5 py-0.5 rounded-md text-xs font-semibold ${
            isRemoved
              ? 'bg-rose-100 text-rose-600'
              : 'bg-amber-100 text-amber-700'
          }`}
        >
          {product.status}
        </span>
        <span className="text-xs text-slate-500 font-medium">
          {product.subStatus}
        </span>
      </div>
    </div>
  );
};

export default AffectedProductCard;
