import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { INITIAL_PRODUCTS } from '@/mock/vendor/vendorProducts.mock';
import ProductsHeader from '@/components/vendor/products/ProductsHeader';
import ProductsFilterBar from '@/components/vendor/products/ProductsFilterBar';
import ProductsTable from '@/components/vendor/products/ProductsTable';
import ProductsPagination from '@/components/vendor/products/ProductsPagination';
import UpdateProductStatusModal from '@/components/vendor/products/UpdateProductStatusModal';
import { toast } from '@/utils/toast';
import { usePortalBase } from '@/utils/usePortalBase';

export const VendorProductsPage = () => {
  const navigate = useNavigate();
  const { getRoute } = usePortalBase();
  const [products, setProducts] = useState(INITIAL_PRODUCTS);
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusModal, setStatusModal] = useState({ isOpen: false, product: null });

  const counts = useMemo(
    () => ({
      all: 130,
      active: 98,
      inactive: 12,
      lowStock: 6,
      outOfStock: 4,
    }),
    []
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (activeTab === 'active' && product.status !== 'Active') return false;
      if (activeTab === 'inactive' && product.status !== 'Inactive') return false;
      if (activeTab === 'low-stock' && product.status !== 'Low Stock') return false;
      if (activeTab === 'out-of-stock' && product.status !== 'Out of Stock') return false;

      if (selectedCategory !== 'All Categories' && product.category !== selectedCategory) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesId = product.id.toLowerCase().includes(q);
        const matchesCategory = product.category.toLowerCase().includes(q);
        if (!matchesName && !matchesId && !matchesCategory) return false;
      }

      return true;
    });
  }, [products, activeTab, selectedCategory, searchQuery]);

  const handleToggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleToggleSelectAll = () => {
    if (selectedIds.length === filteredProducts.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredProducts.map((p) => p.id));
    }
  };

  const handleOpenStatusModal = (product) => {
    setStatusModal({ isOpen: true, product });
  };

  const handleConfirmStatusUpdate = ({ productId, newStatus, reason }) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, status: newStatus } : p))
    );
    setStatusModal({ isOpen: false, product: null });
    toast.success(
      `Product status updated to "${newStatus}"${reason ? ` (${reason})` : ''}`
    );
  };

  const handleEditProduct = (product) => {
    navigate(getRoute(`/products/edit/${product.id}`));
  };

  const handleDeleteProduct = (productId) => {
    setProducts((prev) => prev.filter((p) => p.id !== productId));
    toast.info('Product removed successfully');
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      <ProductsHeader
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          setCurrentPage(1);
        }}
        counts={counts}
        onAddProduct={() => navigate(getRoute('/products/new'))}
      />

      <ProductsFilterBar
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          setCurrentPage(1);
        }}
        selectedCategory={selectedCategory}
        onCategoryChange={(c) => {
          setSelectedCategory(c);
          setCurrentPage(1);
        }}
        onExport={() => toast.success('Exporting product catalog as CSV...')}
        onImport={() => toast.info('Import product inventory triggered')}
      />

      <ProductsTable
        products={filteredProducts}
        selectedIds={selectedIds}
        onToggleSelect={handleToggleSelect}
        onToggleSelectAll={handleToggleSelectAll}
        onOpenStatusModal={handleOpenStatusModal}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />

      <ProductsPagination
        currentPage={currentPage}
        totalPages={5}
        totalItems={130}
        itemsPerPage={8}
        onPageChange={setCurrentPage}
      />

      <UpdateProductStatusModal
        isOpen={statusModal.isOpen}
        product={statusModal.product}
        onClose={() => setStatusModal({ isOpen: false, product: null })}
        onConfirm={handleConfirmStatusUpdate}
      />
    </div>
  );
};

export default VendorProductsPage;
