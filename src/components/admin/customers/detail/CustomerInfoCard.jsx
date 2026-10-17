import { UserIcon, MailIcon, PhoneIcon, MapPinIcon } from '@/icons';

export const CustomerInfoCard = ({ customer }) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-4">
      <h3 className="text-base font-bold text-slate-900 tracking-tight pb-3 border-b border-slate-100">
        Customer Information
      </h3>

      <div className="space-y-3.5 text-xs sm:text-sm">
        {/* Full Name */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-slate-500 font-medium">
            <UserIcon size={16} className="text-slate-400" />
            <span>Full Name</span>
          </div>
          <span className="font-bold text-slate-900">{customer.fullName || customer.name}</span>
        </div>

        {/* Email */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-slate-500 font-medium">
            <MailIcon size={16} className="text-slate-400" />
            <span>Email</span>
          </div>
          <span className="font-bold text-slate-900">{customer.email}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-slate-500 font-medium">
            <PhoneIcon size={16} className="text-slate-400" />
            <span>Phone</span>
          </div>
          <span className="font-bold text-slate-900">{customer.phone}</span>
        </div>

        {/* Location */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 text-slate-500 font-medium">
            <MapPinIcon size={16} className="text-slate-400" />
            <span>Location</span>
          </div>
          <span className="font-bold text-slate-900">{customer.fullLocation || customer.location}</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfoCard;
