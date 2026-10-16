import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'motion/react';
import { fadeIn } from '@/animation/animations';
import { toast } from '@/utils/toast';
import { approveVendor, rejectVendor } from '@/features/admin/adminVendorSlice';
import VendorDetailHeader from '@/components/admin/vendors/detail/VendorDetailHeader';
import VendorBusinessInfoCard from '@/components/admin/vendors/detail/VendorBusinessInfoCard';
import VendorBankDetailsCard from '@/components/admin/vendors/detail/VendorBankDetailsCard';
import VendorImagesCard from '@/components/admin/vendors/detail/VendorImagesCard';
import VendorLocationMap from '@/components/admin/vendors/detail/VendorLocationMap';
import VendorProductsCard from '@/components/admin/vendors/detail/VendorProductsCard';
import VendorTopProductsCard from '@/components/admin/vendors/detail/VendorTopProductsCard';
import VendorPayoutSummaryCard from '@/components/admin/vendors/detail/VendorPayoutSummaryCard';
import VendorApproveModal from '@/components/admin/vendors/detail/VendorApproveModal';
import VendorRejectModal from '@/components/admin/vendors/detail/VendorRejectModal';

export const AdminVendorDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const vendors = useSelector((state) => state.adminVendors.vendors);

  const vendor = vendors.find(
    (v) => v.id === id || v.vendorId === id || v.code === id
  ) || vendors[0];

  const [isApproveOpen, setIsApproveOpen] = useState(false);
  const [isRejectOpen, setIsRejectOpen] = useState(false);

  const isApproved = vendor?.status === 'Active' || vendor?.status === 'Approved';

  const handleConfirmApprove = () => {
    dispatch(approveVendor(vendor.id));
    toast.success(`"${vendor.storeName}" has been approved!`);
    setIsApproveOpen(false);
  };

  const handleConfirmReject = (reason) => {
    dispatch(rejectVendor({ id: vendor.id, reason }));
    toast.error(`"${vendor.storeName}" application was rejected.`);
    setIsRejectOpen(false);
  };

  if (!vendor) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Vendor Not Found</h2>
        <Link to="/admin/vendors" className="text-sm font-semibold text-orange-600 hover:underline">
          Return to Vendors List
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
      <VendorDetailHeader
        vendor={vendor}
        onApprove={() => setIsApproveOpen(true)}
        onReject={() => setIsRejectOpen(true)}
      />

      {isApproved ? (
        /* Approved Vendor Operational Overview Grid */
        <div className="space-y-6">
          {/* Row 1: Business Info & Store Banners + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <VendorBusinessInfoCard vendor={vendor} />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <VendorImagesCard images={vendor.images} />
              <VendorLocationMap
                coordinates={vendor.coordinates}
                locationName={vendor.fullAddress || vendor.location}
                storeName={vendor.storeName}
              />
            </div>
          </div>

          {/* Row 2: Vendor Products & Top Products by Orders */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <VendorProductsCard />
            </div>
            <div className="lg:col-span-5">
              <VendorTopProductsCard />
            </div>
          </div>

          {/* Row 3: Payout Summary & Bank Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7">
              <VendorPayoutSummaryCard />
            </div>
            <div className="lg:col-span-5">
              <VendorBankDetailsCard bankDetails={vendor.bankDetails} />
            </div>
          </div>

          <p className="text-[11px] text-slate-400 text-center sm:text-left pt-2">
            Product activity, order counts and payout records are illustrative sample data.
          </p>
        </div>
      ) : (
        /* Pending / Onboarding Verification Grid */
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-6">
              <VendorBusinessInfoCard vendor={vendor} />
              <VendorBankDetailsCard bankDetails={vendor.bankDetails} />
            </div>
            <div className="lg:col-span-5 space-y-6">
              <VendorImagesCard images={vendor.images} />
            </div>
          </div>

          <VendorLocationMap
            coordinates={vendor.coordinates}
            locationName={vendor.fullAddress || vendor.location}
            storeName={vendor.storeName}
          />
        </div>
      )}

      {/* Modals */}
      <VendorApproveModal
        isOpen={isApproveOpen}
        onClose={() => setIsApproveOpen(false)}
        onConfirm={handleConfirmApprove}
        vendor={vendor}
      />

      <VendorRejectModal
        isOpen={isRejectOpen}
        onClose={() => setIsRejectOpen(false)}
        onConfirm={handleConfirmReject}
        vendor={vendor}
      />
    </motion.div>
  );
};

export default AdminVendorDetailPage;
