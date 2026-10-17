import { HomeIcon, BuildingIcon, MapPinIcon } from '@/icons';

export const CustomerAddressesCard = ({ addresses = [] }) => {
  const defaultAddresses = [
    {
      id: 'addr-1',
      type: 'Home',
      isDefault: true,
      address: 'House 12, Main Street, Gulberg, Lahore, Pakistan',
    },
    {
      id: 'addr-2',
      type: 'Office',
      isDefault: false,
      address: 'Tech Tower, MM Alam Road, Lahore, Pakistan',
    },
    {
      id: 'addr-3',
      type: 'Other',
      isDefault: false,
      address: 'Apartment 5, DHA Phase 6, Lahore, Pakistan',
    },
  ];

  const list = addresses.length > 0 ? addresses : defaultAddresses;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4">
      <h3 className="text-base font-bold text-slate-900 tracking-tight pb-3 border-b border-slate-100">
        Saved Addresses ({list.length})
      </h3>

      <div className="space-y-3">
        {list.map((item) => {
          const isHome = item.type.toLowerCase() === 'home';
          const isOffice = item.type.toLowerCase() === 'office';

          return (
            <div
              key={item.id}
              className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/50 flex items-start gap-3.5"
            >
              <div
                className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 ${
                  isHome
                    ? 'bg-orange-50 text-orange-600 border border-orange-100'
                    : 'bg-slate-100 text-slate-500 border border-slate-200'
                }`}
              >
                {isHome ? (
                  <HomeIcon size={17} />
                ) : isOffice ? (
                  <BuildingIcon size={17} />
                ) : (
                  <MapPinIcon size={17} />
                )}
              </div>

              <div className="flex-1 space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-slate-900">
                    {item.type}
                  </span>
                  {item.isDefault && (
                    <span className="inline-flex items-center px-2 py-0.2 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-600 border border-emerald-200/80">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.address}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomerAddressesCard;
