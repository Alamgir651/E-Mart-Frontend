import { Link } from 'react-router-dom';
import {
  ArrowLeftIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  CalendarDaysIcon,
  CheckIcon,
} from '@/icons';

const STATUS_BADGES = {
  Pending: 'bg-amber-50 text-amber-700 border-amber-200/80',
  Active: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  Approved: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
  Rejected: 'bg-rose-50 text-rose-700 border-rose-200/80',
  Suspended: 'bg-orange-50 text-orange-700 border-orange-200/80',
};

export const VendorDetailHeader = ({ vendor, onApprove, onReject }) => {
  const isApproved = vendor.status === 'Active' || vendor.status === 'Approved';
  const isPending = vendor.status === 'Pending';
  const badgeClass =
    STATUS_BADGES[vendor.status] || 'bg-slate-50 text-slate-700 border-slate-200';

  const badgeText = isPending
    ? 'Pending Approval'
    : isApproved
    ? 'Approved'
    : vendor.status;

  return (
    <div className="space-y-4">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <Link
          to="/admin/vendors"
          className="inline-flex items-center gap-1.5 hover:text-orange-600 transition-colors"
        >
          <ArrowLeftIcon size={14} />
          <span>Vendors</span>
        </Link>
        <span className="text-slate-300">›</span>
        <span className="text-orange-600 font-bold">{vendor.storeName}</span>
      </div>

      {/* Main Vendor Header Card */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/80 shadow-2xs flex flex-col xl:flex-row xl:items-center xl:justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Logo Section directly handled in First Section */}
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-white font-black text-center text-xs sm:text-sm tracking-tight shadow-md p-2 uppercase shrink-0"
            style={{ backgroundColor: vendor.brandColor || '#ef4444' }}
          >
            <span>{vendor.storeName}</span>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {vendor.storeName}
              </h1>
              <span
                className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold border ${badgeClass}`}
              >
                {badgeText}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">
                Vendor ID: <span className="font-bold">{vendor.vendorId}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MailIcon size={13} className="text-slate-400" />
                <span>{vendor.email}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <PhoneIcon size={13} className="text-slate-400" />
                <span>{vendor.phone}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPinIcon size={13} className="text-slate-400" />
                <span>{vendor.fullAddress || vendor.location}</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <CalendarDaysIcon size={13} className="text-slate-400" />
                <span>Joined: {vendor.joinDate}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Right Section: Active vendor label if approved, or action buttons if pending */}
        <div className="shrink-0 self-end xl:self-center">
          {isApproved ? (
            <div className="text-right">
              <span className="text-sm font-bold text-emerald-600 block">
                Active vendor
              </span>
              <span className="text-xs text-slate-400 block -mt-0.5">
                Approved by Admin
              </span>
            </div>
          ) : isPending ? (
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onApprove}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <CheckIcon size={16} />
                <span>Approve Vendor</span>
              </button>

              <button
                type="button"
                onClick={onReject}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <span>Reject Vendor</span>
              </button>
            </div>
          ) : (
            <div className="text-right">
              <span className="text-sm font-bold text-rose-600 block">
                {vendor.status}
              </span>
              <span className="text-xs text-slate-400 block -mt-0.5">
                Application {vendor.status.toLowerCase()}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorDetailHeader;
