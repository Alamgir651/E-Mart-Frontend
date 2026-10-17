import { LayoutGridIcon, CircleCheckIcon, BoxIcon, ShieldAlertIcon } from '@/icons';

export const CategoryStatCards = ({ stats }) => {
  const cards = [
    {
      id: 'total',
      label: 'Total Categories',
      value: stats.total,
      subtext: `${stats.active} active • ${stats.inactive} inactive`,
      icon: LayoutGridIcon,
      iconBg: 'bg-orange-50 text-orange-600 border border-orange-200/60',
    },
    {
      id: 'active',
      label: 'Active Categories',
      value: stats.active,
      subtext: 'Visible to customers',
      icon: CircleCheckIcon,
      iconBg: 'bg-emerald-50 text-emerald-600 border border-emerald-200/60',
    },
    {
      id: 'products',
      label: 'Total Products',
      value: stats.totalProducts.toLocaleString(),
      subtext: 'Assigned to categories',
      icon: BoxIcon,
      iconBg: 'bg-blue-50 text-blue-600 border border-blue-200/60',
    },
    {
      id: 'inactive',
      label: 'Inactive Categories',
      value: stats.inactive,
      subtext: 'Hidden from catalog',
      icon: ShieldAlertIcon,
      iconBg: 'bg-amber-50 text-amber-600 border border-amber-200/60',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {cards.map((card) => {
        const IconComponent = card.icon;
        return (
          <div
            key={card.id}
            className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-semibold text-slate-500">{card.label}</p>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mt-1">
                {card.value}
              </h3>
              <p className="text-[11px] font-medium text-slate-400 mt-1">
                {card.subtext}
              </p>
            </div>

            <div
              className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs ${card.iconBg}`}
            >
              <IconComponent animateOnHover={false} size={22} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryStatCards;
