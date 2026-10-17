export const PayoutStatCards = ({ stats }) => {
  const cards = [
    {
      id: 'commission',
      label: 'Vendor Commission',
      value: stats.vendorCommission.toLocaleString(),
      subtext: '10% of eligible sales • PKR',
      valueClass: 'text-slate-900',
    },
    {
      id: 'platform',
      label: 'Platform Fees',
      value: stats.platformFees.toLocaleString(),
      subtext: '2% of eligible sales • PKR',
      valueClass: 'text-slate-900',
    },
    {
      id: 'earnings',
      label: 'Vendor Earnings',
      value: stats.vendorEarnings.toLocaleString(),
      subtext: 'Net after all deductions • PKR',
      valueClass: 'text-slate-900',
    },
    {
      id: 'pending',
      label: 'Pending Earnings',
      value: stats.pendingEarnings.toLocaleString(),
      subtext: 'Unpaid vendor earnings • PKR',
      valueClass: 'text-amber-600',
    },
    {
      id: 'paid',
      label: 'Paid Earnings',
      value: stats.paidEarnings.toLocaleString(),
      subtext: 'Bank-confirmed payouts • PKR',
      valueClass: 'text-emerald-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
      {cards.map((c) => (
        <div
          key={c.id}
          className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs space-y-1 hover:shadow-xs transition-shadow"
        >
          <p className="text-xs font-semibold text-slate-500">{c.label}</p>
          <h3 className={`text-xl sm:text-2xl font-black tracking-tight ${c.valueClass}`}>
            {c.value}
          </h3>
          <p className="text-[11px] font-medium text-slate-400">{c.subtext}</p>
        </div>
      ))}
    </div>
  );
};

export default PayoutStatCards;
