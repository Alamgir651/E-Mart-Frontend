import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { fadeIn } from '@/animation/animations';
import { toast } from '@/utils/toast';
import {
  getProductById,
  removeProductMock,
  toggleProductStatusMock,
} from '@/mock/admin/products.mock';

import ProductDetailHeader from '@/components/admin/products/detail/ProductDetailHeader';
import ProductGallery from '@/components/admin/products/detail/ProductGallery';
import ProductMetricPills from '@/components/admin/products/detail/ProductMetricPills';
import ProductBasicInfoCard from '@/components/admin/products/detail/ProductBasicInfoCard';
import ProductInventoryCard from '@/components/admin/products/detail/ProductInventoryCard';
import ProductStatusCard from '@/components/admin/products/detail/ProductStatusCard';
import ProductReportsCard from '@/components/admin/products/detail/ProductReportsCard';
import ProductVendorCard from '@/components/admin/products/detail/ProductVendorCard';
import ProductRecentOrdersCard from '@/components/admin/products/detail/ProductRecentOrdersCard';
import RemoveProductModal from '@/components/admin/products/RemoveProductModal';

export const AdminProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(() => getProductById(id) || getProductById('002'));
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);

  const handleToggleActive = () => {
    const updated = toggleProductStatusMock(product.id);
    setProduct({ ...updated });
    toast.success(`Product is now ${updated.status}.`);
  };

  const handleConfirmRemove = () => {
    removeProductMock(product.id);
    toast.error(`"${product.name}" has been removed from the store.`);
    setIsRemoveOpen(false);
    navigate('/admin/products');
  };

  if (!product) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-xl font-bold text-slate-800">Product Not Found</h2>
        <button
          type="button"
          onClick={() => navigate('/admin/products')}
          className="text-sm font-semibold text-orange-600 hover:underline cursor-pointer"
        >
          Return to Products
        </button>
      </div>
    );
  }

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6 pb-12"
    >
      {/* Header Bar */}
      <ProductDetailHeader
        product={product}
        onRemoveClick={() => setIsRemoveOpen(true)}
        onToggleActive={handleToggleActive}
      />

      {/* Gallery & Description Row */}
      <ProductGallery product={product} />

      {/* 4 Metric Pills */}
      <ProductMetricPills product={product} />

      {/* 3-Column Info Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <ProductBasicInfoCard product={product} />
        <ProductInventoryCard product={product} />
        <ProductStatusCard product={product} />
      </div>

      {/* 2-Column Reports & Vendor Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <ProductReportsCard reports={product.reports} />
        <ProductVendorCard vendorDetails={product.vendorDetails} />
      </div>

      {/* Recent Orders Table */}
      <ProductRecentOrdersCard orders={product.recentOrders} />

      {/* Remove Confirmation Modal */}
      <RemoveProductModal
        isOpen={isRemoveOpen}
        onClose={() => setIsRemoveOpen(false)}
        onConfirm={handleConfirmRemove}
        product={product}
      />
    </motion.div>
  );
};

export default AdminProductDetailPage;
