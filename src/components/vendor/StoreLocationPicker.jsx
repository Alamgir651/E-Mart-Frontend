import { SearchIcon, MapPinIcon, ChevronDownIcon } from '@/icons';
import { Input } from '@/components/common/Input';

export const StoreLocationPicker = ({ data, onChange }) => {
  return (
    <div className="space-y-3">
      <Input
        label="Store Address *"
        required
        value={data.addressSearch || ''}
        onChange={(e) => onChange('addressSearch', e.target.value)}
        placeholder="Search your address"
        icon={<SearchIcon size={16} />}
      />

      <div className="relative h-28 sm:h-32 w-full rounded-2xl overflow-hidden border border-slate-200 bg-emerald-50/20">
        <svg className="w-full h-full opacity-60" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="map-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e2e8f0" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-pattern)" />
          <path d="M0,40 Q80,20 160,50 T320,60 T480,30" fill="none" stroke="#fed7aa" strokeWidth="5" />
          <path d="M40,0 Q100,60 180,90 T360,110" fill="none" stroke="#e2e8f0" strokeWidth="6" />
          <path d="M120,0 L200,140" fill="none" stroke="#bbf7d0" strokeWidth="4" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative flex items-center justify-center">
            <span className="w-8 h-8 rounded-full bg-orange-500/20 animate-ping absolute" />
            <div className="w-8 h-8 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-lg shadow-orange-600/40 relative z-10">
              <MapPinIcon size={16} />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onChange('addressLine', 'Current GPS Location Detected')}
          className="absolute bottom-2.5 left-1/2 -translate-x-1/2 px-3.5 py-1.5 bg-white/95 backdrop-blur-sm border border-slate-200 rounded-full text-xs font-bold text-slate-700 shadow-sm hover:bg-white transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <span className="text-orange-500">📍</span>
          <span>Use Current Location</span>
        </button>
      </div>

      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5">
          Address Line
        </label>
        <input
          type="text"
          value={data.addressLine || ''}
          onChange={(e) => onChange('addressLine', e.target.value)}
          placeholder="Enter full address"
          className="w-full py-2.5 px-3.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            City *
          </label>
          <div className="relative flex items-center">
            <select
              value={data.city || ''}
              onChange={(e) => onChange('city', e.target.value)}
              className="w-full py-2.5 pl-3 pr-8 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 appearance-none cursor-pointer"
            >
              <option value="">Select city</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Rawalpindi">Rawalpindi</option>
              <option value="Faisalabad">Faisalabad</option>
            </select>
            <ChevronDownIcon size={14} className="absolute right-2.5 text-slate-400 pointer-events-none" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Area / Zone *
          </label>
          <div className="relative flex items-center">
            <select
              value={data.area || ''}
              onChange={(e) => onChange('area', e.target.value)}
              className="w-full py-2.5 pl-3 pr-8 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 appearance-none cursor-pointer"
            >
              <option value="">Select area</option>
              <option value="Gulberg">Gulberg</option>
              <option value="DHA Phase 5">DHA Phase 5</option>
              <option value="Clifton">Clifton</option>
              <option value="Blue Area">Blue Area</option>
              <option value="Bahria Town">Bahria Town</option>
            </select>
            <ChevronDownIcon size={14} className="absolute right-2.5 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreLocationPicker;
