export const DeliveryProofCard = ({ deliveryProof }) => {
  if (!deliveryProof) return null;

  return (
    <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-xs h-full">
      <h3 className="text-sm font-black text-slate-900 tracking-tight mb-4">
        Delivery Proof
      </h3>

      <div className="space-y-4">
        <div>
          <span className="text-[11px] font-semibold text-slate-400 block mb-2">
            Delivery Photo
          </span>
          <div className="flex flex-wrap items-center gap-3">
            {deliveryProof.photos?.map((photo, i) => (
              <img
                key={i}
                src={photo}
                alt={`Proof ${i + 1}`}
                className="w-32 h-24 rounded-xl object-cover border border-slate-200 shadow-2xs hover:scale-105 transition-transform cursor-pointer"
              />
            ))}

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60 min-w-[130px]">
              <span className="text-[10px] text-slate-400 font-semibold block">
                Completed Timestamp
              </span>
              <p className="text-xs font-bold text-slate-800 mt-1">
                {deliveryProof.completedAt || '08:15 PM, Sep 22, 2026'}
              </p>
            </div>
          </div>
        </div>

        {deliveryProof.riderNote && (
          <div className="pt-2 border-t border-slate-100">
            <span className="text-[11px] font-semibold text-slate-400 block mb-1">
              Rider Note
            </span>
            <div className="p-3 rounded-xl bg-slate-50/70 border border-slate-200/50 text-xs text-slate-700 leading-relaxed font-medium">
              {deliveryProof.riderNote}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryProofCard;
