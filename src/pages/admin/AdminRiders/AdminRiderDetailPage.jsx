import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeIn } from '@/animation/animations';
import { toast } from '@/utils/toast';
import {
  getRiderById,
  approveRiderMock,
  rejectRiderMock,
  suspendRiderMock,
  activateRiderMock,
} from '@/mock/admin/riders.mock';

import RiderDetailHeader from '@/components/admin/riders/detail/RiderDetailHeader';
import RiderPersonalInfoCard from '@/components/admin/riders/detail/RiderPersonalInfoCard';
import RiderAccountInfoCard from '@/components/admin/riders/detail/RiderAccountInfoCard';
import RiderProfileImageCard from '@/components/admin/riders/detail/RiderProfileImageCard';
import RiderCnicCard from '@/components/admin/riders/detail/RiderCnicCard';
import RiderVehicleInfoCard from '@/components/admin/riders/detail/RiderVehicleInfoCard';
import RiderDriverLicenseCard from '@/components/admin/riders/detail/RiderDriverLicenseCard';
import RiderApproveModal from '@/components/admin/riders/detail/RiderApproveModal';
import RiderRejectModal from '@/components/admin/riders/detail/RiderRejectModal';
import DocumentPreviewModal from '@/components/admin/riders/detail/DocumentPreviewModal';

import RiderPerformanceStats from '@/components/admin/riders/detail/RiderPerformanceStats';
import RiderCurrentDeliveryCard from '@/components/admin/riders/detail/RiderCurrentDeliveryCard';
import RiderRecentDeliveriesTable from '@/components/admin/riders/detail/RiderRecentDeliveriesTable';

export const AdminRiderDetailPage = () => {
  const { id } = useParams();

  const [rider, setRider] = useState(() => getRiderById(id) || getRiderById('R01'));

  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isRejectOpen, setIsRejectOpen] = useState(false);
  const [previewDoc, setPreviewDoc] = useState({
    isOpen: false,
    title: '',
    image: '',
  });

  const isApproved = rider?.status === 'Active' || rider?.status === 'Approved';

  const handleConfirmApprove = () => {
    const updated = approveRiderMock(rider.id);
    setRider({ ...updated });
    toast.success(`"${rider.name}" has been approved!`);
    setIsApproveOpen(false);
  };

  const handleConfirmReject = (reason) => {
    const updated = rejectRiderMock(rider.id, reason);
    setRider({ ...updated });
    toast.error(`"${rider.name}" application was rejected.`);
    setIsRejectOpen(false);
  };

  const handleSuspend = () => {
    const updated = suspendRiderMock(rider.id);
    setRider({ ...updated });
    toast.warning(`"${rider.name}" has been suspended.`);
  };

  const handleActivate = () => {
    const updated = activateRiderMock(rider.id);
    setRider({ ...updated });
    toast.success(`"${rider.name}" has been reactivated.`);
  };

  if (!rider) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Rider Not Found</h2>
        <Link
          to="/admin/riders"
          className="text-sm font-semibold text-orange-600 hover:underline"
        >
          Return to Riders List
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6 pb-8"
    >
      {/* Header Card with Navigation and Status/Actions */}
      <RiderDetailHeader
        rider={rider}
        onApprove={() => setIsApproveOpen(true)}
        onReject={() => setIsRejectOpen(true)}
        onSuspend={handleSuspend}
        onActivate={handleActivate}
      />

      {isApproved ? (
        /* Approved / Active Rider Operational Overview (Image 5) */
        <div className="space-y-6">
          {/* 1. Five Stat Cards Row */}
          <RiderPerformanceStats stats={rider.performanceStats} />

          {/* 2. Current Delivery Card with Timeline & Map Route */}
          <RiderCurrentDeliveryCard
            delivery={rider.currentDelivery}
            riderAvatar={rider.avatar}
          />

          {/* 3. Recent Deliveries Table */}
          <RiderRecentDeliveriesTable
            deliveries={rider.recentDeliveries}
          />
        </div>
      ) : (
        /* Pending / Onboarding Verification Layout (Image 2) */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Personal & Account Information */}
          <div className="lg:col-span-6 space-y-6">
            <RiderPersonalInfoCard rider={rider} />
            <RiderAccountInfoCard rider={rider} />
          </div>

          {/* Right Column: Profile Image, CNIC, Vehicle Info, Driver License */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Row: Profile Image & CNIC */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <RiderProfileImageCard
                image={rider.documents?.profileImage || rider.avatar}
                onPreview={() =>
                  setPreviewDoc({
                    isOpen: true,
                    title: `${rider.name} - Profile Image`,
                    image: rider.documents?.profileImage || rider.avatar,
                  })
                }
              />
              <RiderCnicCard
                image={rider.documents?.cnicCards}
                onPreview={() =>
                  setPreviewDoc({
                    isOpen: true,
                    title: `${rider.name} - CNIC (Front & Back)`,
                    image: rider.documents?.cnicCards,
                  })
                }
              />
            </div>

            {/* Vehicle Information */}
            <RiderVehicleInfoCard vehicleDetails={rider.vehicleDetails} />

            {/* Driver License */}
            <RiderDriverLicenseCard
              image={rider.documents?.drivingLicense}
              onPreview={() =>
                setPreviewDoc({
                  isOpen: true,
                  title: `${rider.name} - Driver License`,
                  image: rider.documents?.drivingLicense,
                })
              }
            />
          </div>
        </div>
      )}

      {/* Modals */}
      <RiderApproveModal
        isOpen={isApproveOpen}
        onClose={() => setIsApproveOpen(false)}
        onConfirm={handleConfirmApprove}
        rider={rider}
      />

      <RiderRejectModal
        isOpen={isRejectOpen}
        onClose={() => setIsRejectOpen(false)}
        onConfirm={handleConfirmReject}
        rider={rider}
      />

      <DocumentPreviewModal
        isOpen={previewDoc.isOpen}
        onClose={() =>
          setPreviewDoc({ isOpen: false, title: '', image: '' })
        }
        title={previewDoc.title}
        image={previewDoc.image}
      />
    </motion.div>
  );
};

export default AdminRiderDetailPage;
