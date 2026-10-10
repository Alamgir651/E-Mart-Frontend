import { motion } from 'motion/react';
import { slideUp } from '@/animation/animations';

export const ReviewSubmitStep = ({
  businessData,
  storeData,
  selectedType = 'individual',
  onEditStep,
}) => {
  const storeThumb =
    storeData.banners?.[0] ||
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&auto=format&fit=crop&q=60';

  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="space-y-4 my-3 max-w-4xl"
    >
      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs transition-all">
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              Business Details
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onEditStep(2)}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer"
          >
            Edit
          </button>
        </div>

        <div className="grid grid-cols-2 gap-y-2 text-xs">
          <span className="text-slate-400 font-medium">Full Name</span>
          <span className="text-slate-900 font-bold">{businessData.fullName || 'Ali Raza'}</span>

          <span className="text-slate-400 font-medium">Business Type</span>
          <span className="text-slate-900 font-bold capitalize">
            {selectedType === 'individual' ? 'Individual Store' : selectedType}
          </span>

          <span className="text-slate-400 font-medium">Phone Number</span>
          <span className="text-slate-900 font-bold">
            {businessData.phone ? `+92 ${businessData.phone}` : '+92 3544976'}
          </span>

          <span className="text-slate-400 font-medium">Email</span>
          <span className="text-slate-900 font-bold">{businessData.email || 'aliraza@gmail.com'}</span>
        </div>
      </div>

      <div className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs transition-all">
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 mb-3.5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 22V12h6v10" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              Store Details
            </h3>
          </div>

          <button
            type="button"
            onClick={() => onEditStep(3)}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 transition-colors cursor-pointer"
          >
            Edit
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="w-28 h-20 rounded-xl overflow-hidden border border-slate-200 flex-shrink-0 shadow-xs">
            <img src={storeThumb} alt="Store Thumbnail" className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-2 gap-y-2 text-xs flex-1 w-full">
            <span className="text-slate-400 font-medium">Store Name</span>
            <span className="text-slate-900 font-bold">{storeData.storeName || 'Fresh Mart'}</span>

            <span className="text-slate-400 font-medium">Category</span>
            <span className="text-slate-900 font-bold">{storeData.category || 'Grocery & Vegetables'}</span>

            <span className="text-slate-400 font-medium">Address</span>
            <span className="text-slate-900 font-bold truncate">
              {storeData.addressLine || '123 Main Street, Gulberg, Lahore'}
            </span>

            <span className="text-slate-400 font-medium">City</span>
            <span className="text-slate-900 font-bold">{storeData.city || 'Lahore'}</span>

            <span className="text-slate-400 font-medium">Area</span>
            <span className="text-slate-900 font-bold">{storeData.area || 'Gulberg'}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ReviewSubmitStep;
