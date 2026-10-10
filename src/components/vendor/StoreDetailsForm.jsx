import { motion } from 'motion/react';
import { ChevronDownIcon } from '@/icons';
import { Input } from '@/components/common/Input';
import { StoreLocationPicker } from './StoreLocationPicker';
import { StoreMediaUpload } from './StoreMediaUpload';
import { slideUp } from '@/animation/animations';

export const StoreDetailsForm = ({ storeData, onChange }) => {
  return (
    <motion.div
      variants={slideUp}
      initial="hidden"
      animate="visible"
      className="space-y-4 my-2"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-start">
        <div className="space-y-3.5">
          <Input
            label="Store Name *"
            required
            value={storeData.storeName || ''}
            onChange={(e) => onChange('storeName', e.target.value)}
            placeholder="Enter your store name"
            icon={
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 22V12h6v10" />
              </svg>
            }
          />

          <div className="group">
            <label className="block text-xs font-bold text-slate-700 mb-1.5 transition-colors group-hover:text-slate-900">
              Store Category *
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3.5 text-slate-400 pointer-events-none">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
              </span>
              <select
                value={storeData.category || ''}
                onChange={(e) => onChange('category', e.target.value)}
                className="w-full py-2.5 pl-11 pr-8 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 appearance-none cursor-pointer"
              >
                <option value="">Select category</option>
                <option value="Grocery & Supermarket">Grocery & Supermarket</option>
                <option value="Electronics & Gadgets">Electronics & Gadgets</option>
                <option value="Fashion & Apparel">Fashion & Apparel</option>
                <option value="Pharmacy & Health">Pharmacy & Health</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
              </select>
              <ChevronDownIcon size={14} className="absolute right-3 text-slate-400 pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col group">
            <label className="block text-xs font-bold text-slate-700 mb-1.5 transition-colors group-hover:text-slate-900">
              Store Description *
            </label>
            <div className="relative flex-1 flex flex-col">
              <textarea
                maxLength={300}
                rows={4}
                value={storeData.description || ''}
                onChange={(e) => onChange('description', e.target.value)}
                placeholder="Describe your store and products"
                className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all resize-none"
              />
              <span className="absolute bottom-2.5 right-3 text-[11px] font-semibold text-slate-400">
                {storeData.description?.length || 0}/300
              </span>
            </div>
          </div>
        </div>

        <div>
          <StoreLocationPicker data={storeData} onChange={onChange} />
        </div>
      </div>

      <StoreMediaUpload banners={storeData.banners} onBannerChange={(val) => onChange('banners', val)} />
    </motion.div>
  );
};

export default StoreDetailsForm;
