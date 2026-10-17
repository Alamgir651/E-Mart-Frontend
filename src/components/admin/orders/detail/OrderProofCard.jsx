export const OrderProofCard = ({ deliveryProof }) => {
  return (
    <div className="md:col-span-8 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs space-y-4">
      <h3 className="text-sm font-bold text-slate-900 pb-2 border-b border-slate-100">
        Delivery Proof
      </h3>

      {deliveryProof ? (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-500 block">
                Delivery Photo
              </span>
              <div className="flex items-center gap-3">
                {deliveryProof.photos.map((ph, idx) => (
                  <div
                    key={idx}
                    className="w-32 h-24 rounded-xl overflow-hidden border border-slate-200/80 shadow-2xs bg-slate-100"
                  >
                    <img
                      src={ph}
                      alt="Delivery Proof"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 text-right">
              <span className="text-[10px] font-semibold text-slate-400 block uppercase tracking-wider">
                Completed Timestamp
              </span>
              <span className="text-xs font-bold text-slate-800 block mt-0.5">
                {deliveryProof.timestamp}
              </span>
            </div>
          </div>

          {deliveryProof.riderNote && (
            <div className="space-y-1">
              <span className="text-xs font-semibold text-slate-500 block">
                Rider Note
              </span>
              <div className="p-3 bg-slate-50/70 border border-slate-200/70 rounded-xl text-xs text-slate-600 leading-relaxed italic">
                &ldquo;{deliveryProof.riderNote}&rdquo;
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="text-xs text-slate-400 py-4">
          Delivery proof will be uploaded once order is delivered.
        </p>
      )}
    </div>
  );
};

export default OrderProofCard;
