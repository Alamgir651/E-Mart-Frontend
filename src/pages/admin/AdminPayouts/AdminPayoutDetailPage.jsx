import { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeIn } from '@/animation/animations';
import {
  getPayoutById,
  approvePayoutMock,
  rejectPayoutMock,
} from '@/mock/admin/payouts.mock';
import PayoutDetailLeftColumn from './components/PayoutDetailLeftColumn';
import PayoutDetailRightColumn from './components/PayoutDetailRightColumn';
import ApprovePayoutModal from '@/components/admin/payouts/ApprovePayoutModal';
import RejectPayoutModal from '@/components/admin/payouts/RejectPayoutModal';
import OrderActionButton from '@/components/admin/orders/OrderActionButton';
import { ArrowLeftIcon, CheckIcon, ShieldAlertIcon } from '@/icons';
import { toast } from '@/utils/toast';

export const AdminPayoutDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [payout, setPayout] = useState(() => getPayoutById(id));
  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isRejectOpen, setIsRejectOpen] = useState(false);

  const isPending = payout.status === 'Pending';

  const handleConfirmApprove = (payoutId) => {
    const updated = approvePayoutMock(payoutId);
    setPayout({ ...updated });
    setIsApproveOpen(false);
    toast.success(`Payout ${payoutId} approved and transfer initiated.`);
  };

  const handleConfirmReject = (payoutId, reasonData) => {
    const updated = rejectPayoutMock(payoutId, reasonData);
    setPayout({ ...updated });
    setIsRejectOpen(false);
    toast.error(`Payout ${payoutId} rejected.`);
  };

  return (
    <motion.div variants={fadeIn} initial="hidden" animate="visible" className="space-y-6 pb-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2.5 text-xs sm:text-sm">
        <OrderActionButton
          icon={ArrowLeftIcon}
          title="Back to Commission & Payouts"
          onClick={() => navigate('/admin/payouts')}
          iconSize={16}
          className="p-2 rounded-xl bg-white border border-slate-200/80 text-slate-600 hover:text-orange-600 shadow-2xs"
        />
        <div className="flex items-center gap-1.5 text-slate-500 font-medium">
          <Link to="/admin/payouts" className="hover:text-orange-600 transition-colors">
            Commission & Payouts
          </Link>
          <span>/</span>
          <span className="font-bold text-slate-800 font-mono">{payout.id}</span>
        </div>
      </div>

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Payout request details
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {payout.vendor} • Review the earnings breakdown before approving a payout.
          </p>
        </div>

        {isPending ? (
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsApproveOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              <CheckIcon animateOnHover={false} size={16} />
              <span>Approve payout</span>
            </button>
            <button
              type="button"
              onClick={() => setIsRejectOpen(true)}
              className="px-4 py-2.5 rounded-xl border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs sm:text-sm font-bold shadow-2xs transition-colors cursor-pointer"
            >
              Reject
            </button>
          </div>
        ) : (
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold border ${
              payout.status === 'Completed'
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            {payout.status}
          </span>
        )}
      </div>

      {/* Pending Notice Banner */}
      {isPending && (
        <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
          <ShieldAlertIcon animateOnHover={false} size={18} className="text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-bold text-slate-900">
              Pending review • PKR {payout.payoutAmount.toLocaleString()} requested
            </p>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              PKR {payout.balances?.pendingUnpaid?.toLocaleString() || '61,200'} remains unpaid. PKR {payout.payoutAmount.toLocaleString()} is reserved for this request, leaving PKR {payout.balances?.availableToRequest?.toLocaleString() || '11,200'} available to request. No funds have been transferred.
            </p>
          </div>
        </div>
      )}

      {/* 2-Column Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2">
          <PayoutDetailLeftColumn payout={payout} />
        </div>
        <div>
          <PayoutDetailRightColumn payout={payout} />
        </div>
      </div>

      {/* Footer Meta */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400 pt-2 border-t border-slate-100">
        <span>Sample data • Snapshot 03 Oct 2026, 10:00 PKT</span>
        <span>All amounts in PKR • Bank details masked</span>
      </div>

      {/* Modals */}
      <ApprovePayoutModal
        isOpen={isApproveOpen}
        onClose={() => setIsApproveOpen(false)}
        onConfirm={handleConfirmApprove}
        payout={payout}
      />

      <RejectPayoutModal
        isOpen={isRejectOpen}
        onClose={() => setIsRejectOpen(false)}
        onConfirm={handleConfirmReject}
        payout={payout}
      />
    </motion.div>
  );
};

export default AdminPayoutDetailPage;
