import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { INITIAL_INVENTORY } from '@/mock/vendor/vendorInventory.mock';
import InventoryHeader from '@/components/vendor/inventory/InventoryHeader';
import InventoryFilterBar from '@/components/vendor/inventory/InventoryFilterBar';
import InventoryTable from '@/components/vendor/inventory/InventoryTable';
import StockUpdateModal from '@/components/vendor/inventory/StockUpdateModal';
import CsvValidationModal from '@/components/vendor/inventory/CsvValidationModal';
import ProductsPagination from '@/components/vendor/products/ProductsPagination';
import { toast } from '@/utils/toast';

export const VendorInventoryPage = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState(INITIAL_INVENTORY);
  const [searchQuery, setSearchQuery] = useState('');
  const [stockFilter, setStockFilter] = useState('All Products');
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [activeStockProduct, setActiveStockProduct] = useState(null);
  const [activeCsvFile, setActiveCsvFile] = useState(null);

  const filteredItems = useMemo(() => {
    return inventory.filter((item) => {
      if (stockFilter !== 'All Products' && item.status !== stockFilter) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesSku = item.sku.toLowerCase().includes(q);
        if (!matchesName && !matchesSku) return false;
      }

      return true;
    });
  }, [inventory, stockFilter, searchQuery]);

  const handleToggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleToggleSelectAll = () => {
    if (selectedIds.length === filteredItems.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredItems.map((i) => i.id));
    }
  };

  const handleUpdateStock = ({ productId, change, notes }) => {
    setInventory((prev) =>
      prev.map((item) => {
        if (item.id === productId) {
          const newStock = Math.max(0, item.stock + change);
          const newStatus =
            newStock === 0
              ? 'Out of Stock'
              : newStock <= item.lowStockAlert
              ? 'Low Stock'
              : 'In Stock';
          return {
            ...item,
            stock: newStock,
            status: newStatus,
            lastUpdated: 'Just now',
          };
        }
        return item;
      })
    );

    setActiveStockProduct(null);
    toast.success(
      `Inventory updated (${change >= 0 ? `+${change}` : change} units)${notes ? `: ${notes}` : ''}`
    );
  };

  const handleOpenCsvValidation = (file) => {
    setActiveCsvFile(file || { name: 'inventory_stock_oct_01.csv' });
  };

  const handleBackFromCsv = () => {
    setActiveCsvFile(null);
  };

  return (
    <div className="space-y-4 sm:space-y-5">
      <InventoryHeader />

      <InventoryFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        stockFilter={stockFilter}
        onStockFilterChange={setStockFilter}
        onOpenCsvModal={() => handleOpenCsvValidation(null)}
      />

      <InventoryTable
        items={filteredItems}
        selectedIds={selectedIds}
        onToggleSelect={handleToggleSelect}
        onToggleSelectAll={handleToggleSelectAll}
        onAddStock={(prod) => setActiveStockProduct(prod)}
        onEditProduct={(prod) => navigate(`/vendor/products/edit/${prod.id.replace('INV-', 'PRD-')}`)}
      />

      <ProductsPagination
        currentPage={currentPage}
        totalPages={4}
        totalItems={124}
        itemsPerPage={8}
        onPageChange={setCurrentPage}
      />

      <StockUpdateModal
        isOpen={Boolean(activeStockProduct)}
        product={activeStockProduct}
        onClose={() => setActiveStockProduct(null)}
        onUpdateStock={handleUpdateStock}
        onOpenCsvValidation={(file) => handleOpenCsvValidation(file)}
      />

      <CsvValidationModal
        isOpen={Boolean(activeCsvFile)}
        file={activeCsvFile}
        onClose={() => setActiveCsvFile(null)}
        onBack={handleBackFromCsv}
      />
    </div>
  );
};

export default VendorInventoryPage;
