import { UserIcon, PhoneIcon, MailIcon, CreditCardIcon } from '@/icons';

export const RiderPersonalInfoCard = ({ rider }) => {
  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs space-y-5">
      <h3 className="text-base font-bold text-slate-900 tracking-tight pb-3 border-b border-slate-100">
        Personal Information
      </h3>

      <div className="space-y-4">
        {/* Full Name */}
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-slate-100/80 flex items-center justify-center text-slate-500 shrink-0">
            <UserIcon size={17} />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span className="text-xs text-slate-500 font-medium">Full Name</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              {rider.fullName || rider.name}
            </span>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-slate-100/80 flex items-center justify-center text-slate-500 shrink-0">
            <PhoneIcon size={17} />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span className="text-xs text-slate-500 font-medium">Phone Number</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              {rider.phone}
            </span>
          </div>
        </div>

        {/* Email Address */}
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-slate-100/80 flex items-center justify-center text-slate-500 shrink-0">
            <MailIcon size={17} />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span className="text-xs text-slate-500 font-medium">Email Address</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              {rider.email}
            </span>
          </div>
        </div>

        {/* CNIC Number */}
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded-xl bg-slate-100/80 flex items-center justify-center text-slate-500 shrink-0">
            <CreditCardIcon size={17} />
          </div>
          <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <span className="text-xs text-slate-500 font-medium">CNIC Number</span>
            <span className="text-xs sm:text-sm font-bold text-slate-900">
              {rider.cnic || '35202-1234567-1'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderPersonalInfoCard;
