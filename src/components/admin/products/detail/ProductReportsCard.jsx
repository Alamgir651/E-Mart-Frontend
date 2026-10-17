export const ProductReportsCard = ({ reports = [] }) => {
  const sampleReports = reports.length
    ? reports
    : [
        { user: 'Ali Khan', reason: 'Quality Issue', date: 'Sep 22, 2025', status: 'Pending' },
        { user: 'Sara Ahmed', reason: 'Packaging damage', date: 'Sep 21, 2025', status: 'Resolved' },
      ];

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-3 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Product Reports
            </h3>
            <p className="text-[11px] text-slate-400">
              User-submitted complaints about this product
            </p>
          </div>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-orange-50 text-orange-600 border border-orange-200/60">
            {sampleReports.length} sample reports
          </span>
        </div>

        <div className="overflow-x-auto mt-2">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-[11px] font-semibold text-slate-400">
                <th className="pb-2">Reporting User</th>
                <th className="pb-2">Complaint Reason</th>
                <th className="pb-2">Report Date</th>
                <th className="pb-2 text-right">Review Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {sampleReports.map((r, idx) => (
                <tr key={idx}>
                  <td className="py-2.5 font-bold text-slate-900">{r.user}</td>
                  <td className="py-2.5 text-slate-600">{r.reason}</td>
                  <td className="py-2.5 text-slate-400">{r.date}</td>
                  <td className="py-2.5 text-right">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold border ${
                        r.status === 'Resolved'
                          ? 'bg-emerald-50 text-emerald-600 border-emerald-200/80'
                          : 'bg-amber-50 text-amber-600 border-amber-200/80'
                      }`}
                    >
                      {r.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="button"
          className="text-xs font-semibold text-orange-600 hover:underline cursor-pointer"
        >
          View all reports
        </button>
      </div>
    </div>
  );
};

export default ProductReportsCard;
