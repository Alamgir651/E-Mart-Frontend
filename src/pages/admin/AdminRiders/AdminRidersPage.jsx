import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { PlusIcon } from '@/icons';
import { fadeIn } from '@/animation/animations';
import {
  getRiders,
  getRiderStats,
  addRiderMock,
} from '@/mock/admin/riders.mock';
import RiderStatCards from '@/components/admin/riders/RiderStatCards';
import RiderFilterBar from '@/components/admin/riders/RiderFilterBar';
import RiderTable from '@/components/admin/riders/RiderTable';
import AddRiderModal from '@/components/admin/riders/AddRiderModal';

export const AdminRidersPage = () => {
  const [riders, setRiders] = useState(() => getRiders());
  const [stats, setStats] = useState(() => getRiderStats());
  const [filters, setFilters] = useState({
    search: '',
    status: 'All Status',
    zone: 'All Zones',
    vehicle: 'All Vehicles',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleSearchChange = (value) => {
    setFilters((prev) => ({ ...prev, search: value }));
    setCurrentPage(1);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleAddRider = (newRider) => {
    addRiderMock(newRider);
    setRiders(getRiders());
    setStats(getRiderStats());
  };

  const filteredRiders = useMemo(() => {
    return riders.filter((r) => {
      if (filters.search) {
        const query = filters.search.toLowerCase();
        const matchesName = r.name?.toLowerCase().includes(query);
        const matchesFullName = r.fullName?.toLowerCase().includes(query);
        const matchesPhone = r.phone?.toLowerCase().includes(query);
        const matchesEmail = r.email?.toLowerCase().includes(query);
        const matchesCode = r.code?.toLowerCase().includes(query);
        const matchesRiderId = r.riderId?.toLowerCase().includes(query);
        if (
          !matchesName &&
          !matchesFullName &&
          !matchesPhone &&
          !matchesEmail &&
          !matchesCode &&
          !matchesRiderId
        ) {
          return false;
        }
      }

      if (filters.status && filters.status !== 'All Status') {
        if (r.status !== filters.status) return false;
      }

      if (filters.zone && filters.zone !== 'All Zones') {
        if (r.zone !== filters.zone) return false;
      }

      if (filters.vehicle && filters.vehicle !== 'All Vehicles') {
        if (r.vehicle !== filters.vehicle) return false;
      }

      return true;
    });
  }, [riders, filters]);

  // Paginated slice for current page
  const paginatedRiders = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return filteredRiders.slice(startIndex, startIndex + pageSize);
  }, [filteredRiders, currentPage, pageSize]);

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Riders Management
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage delivery riders, approve new applications and monitor their activity.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-600 hover:bg-orange-700 active:scale-95 text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-all cursor-pointer shrink-0"
        >
          <PlusIcon size={16} />
          <span>Add Rider</span>
        </button>
      </div>

      {/* 4 Stat Cards */}
      <RiderStatCards stats={stats} />

      {/* Filters Bar */}
      <RiderFilterBar
        filters={filters}
        onSearchChange={handleSearchChange}
        onFilterChange={handleFilterChange}
      />

      {/* Riders Table */}
      <RiderTable
        riders={paginatedRiders}
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={filteredRiders.length}
        onPageChange={setCurrentPage}
      />

      {/* Add Rider Modal */}
      <AddRiderModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddRider={handleAddRider}
      />
    </motion.div>
  );
};

export default AdminRidersPage;
