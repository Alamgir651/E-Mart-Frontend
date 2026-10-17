export const INITIAL_PAYOUT_STATS = {
  vendorCommission: 44500,
  platformFees: 8900,
  vendorEarnings: 391600,
  pendingEarnings: 236000,
  paidEarnings: 155600,
};

let payoutsMemoryStore = [
  {
    id: 'PR-261003-001',
    vendor: 'Fresh Mart',
    vendorId: 'VND-001',
    category: 'Grocery & essentials',
    settledOrders: 240,
    requestedDate: '03 Oct 2026',
    requestedTime: '09:15 PKT',
    payoutAmount: 50000,
    unpaidAmount: 61200,
    status: 'Pending',
    recipient: {
      accountName: 'Fresh Mart Pvt. Ltd.',
      bankName: 'HBL • Bank transfer',
      accountNumber: '**** **** 4821',
      isVerified: true,
      verifiedDate: '01 Oct 2026',
    },
    breakdown: {
      period: '01 – 30 Sep 2026',
      grossSales: 120000,
      refunds: 5000,
      eligibleSales: 115000,
      commission: 11500,
      platformFee: 2300,
      otherAdjustments: 0,
      netEarnings: 101200,
    },
    balances: {
      alreadyPaid: 40000,
      pendingUnpaid: 61200,
      availableToRequest: 11200,
      requestedPayout: 50000,
    },
    timeline: {
      requestedAt: '03 Oct 2026, 09:15 PKT',
      reviewStatus: 'Approval required',
      bankTransferStatus: 'Starts only after approval',
    },
  },
  {
    id: 'PR-261003-002',
    vendor: 'Meat World',
    vendorId: 'VND-002',
    category: 'Meat & Seafood',
    settledOrders: 180,
    requestedDate: '03 Oct 2026',
    requestedTime: '08:45 PKT',
    payoutAmount: 40000,
    unpaidAmount: 58000,
    status: 'Pending',
    recipient: {
      accountName: 'Meat World Pvt. Ltd.',
      bankName: 'Meezan Bank • Bank transfer',
      accountNumber: '**** **** 1290',
      isVerified: true,
      verifiedDate: '28 Sep 2026',
    },
    breakdown: {
      period: '01 – 30 Sep 2026',
      grossSales: 95000,
      refunds: 3000,
      eligibleSales: 92000,
      commission: 9200,
      platformFee: 1840,
      otherAdjustments: 0,
      netEarnings: 80960,
    },
    balances: {
      alreadyPaid: 22960,
      pendingUnpaid: 58000,
      availableToRequest: 18000,
      requestedPayout: 40000,
    },
    timeline: {
      requestedAt: '03 Oct 2026, 08:45 PKT',
      reviewStatus: 'Approval required',
      bankTransferStatus: 'Starts only after approval',
    },
  },
  {
    id: 'PR-261002-003',
    vendor: 'Khan General',
    vendorId: 'VND-003',
    category: 'General store',
    settledOrders: 140,
    requestedDate: '02 Oct 2026',
    requestedTime: '16:20 PKT',
    payoutAmount: 30000,
    unpaidAmount: 50000,
    status: 'Pending',
    recipient: {
      accountName: 'Khan General Traders',
      bankName: 'Bank Alfalah • Bank transfer',
      accountNumber: '**** **** 7731',
      isVerified: true,
      verifiedDate: '25 Sep 2026',
    },
    breakdown: {
      period: '01 – 30 Sep 2026',
      grossSales: 75000,
      refunds: 2000,
      eligibleSales: 73000,
      commission: 7300,
      platformFee: 1460,
      otherAdjustments: 0,
      netEarnings: 64240,
    },
    balances: {
      alreadyPaid: 14240,
      pendingUnpaid: 50000,
      availableToRequest: 20000,
      requestedPayout: 30000,
    },
    timeline: {
      requestedAt: '02 Oct 2026, 16:20 PKT',
      reviewStatus: 'Approval required',
      bankTransferStatus: 'Starts only after approval',
    },
  },
  {
    id: 'PR-261002-004',
    vendor: 'Green Farm',
    vendorId: 'VND-004',
    category: 'Fruits & Vegetables',
    settledOrders: 195,
    requestedDate: '02 Oct 2026',
    requestedTime: '14:10 PKT',
    payoutAmount: 30000,
    unpaidAmount: 22800,
    status: 'Completed',
    txnId: 'TXN-261002-0838',
    recipient: {
      accountName: 'Green Farm Organics',
      bankName: 'MCB Bank • Bank transfer',
      accountNumber: '**** **** 9044',
      isVerified: true,
      verifiedDate: '15 Sep 2026',
    },
    breakdown: {
      period: '01 – 30 Sep 2026',
      grossSales: 68000,
      refunds: 1500,
      eligibleSales: 66500,
      commission: 6650,
      platformFee: 1330,
      otherAdjustments: 0,
      netEarnings: 58520,
    },
    balances: {
      alreadyPaid: 35720,
      pendingUnpaid: 22800,
      availableToRequest: 0,
      requestedPayout: 30000,
    },
    timeline: {
      requestedAt: '02 Oct 2026, 11:00 PKT',
      reviewStatus: 'Approved by admin',
      bankTransferStatus: 'Confirmed on 02 Oct 2026, 14:10 PKT',
    },
  },
  {
    id: 'PR-261002-005',
    vendor: 'Daily Needs',
    vendorId: 'VND-005',
    category: 'Supermarket',
    settledOrders: 210,
    requestedDate: '02 Oct 2026',
    requestedTime: '12:35 PKT',
    payoutAmount: 20000,
    unpaidAmount: 24000,
    status: 'Completed',
    txnId: 'TXN-261002-0837',
    recipient: {
      accountName: 'Daily Needs Mart Ltd.',
      bankName: 'Standard Chartered • Bank transfer',
      accountNumber: '**** **** 3312',
      isVerified: true,
      verifiedDate: '10 Sep 2026',
    },
    breakdown: {
      period: '01 – 30 Sep 2026',
      grossSales: 54000,
      refunds: 1000,
      eligibleSales: 53000,
      commission: 5300,
      platformFee: 1060,
      otherAdjustments: 0,
      netEarnings: 46640,
    },
    balances: {
      alreadyPaid: 22640,
      pendingUnpaid: 24000,
      availableToRequest: 4000,
      requestedPayout: 20000,
    },
    timeline: {
      requestedAt: '02 Oct 2026, 09:30 PKT',
      reviewStatus: 'Approved by admin',
      bankTransferStatus: 'Confirmed on 02 Oct 2026, 12:35 PKT',
    },
  },
  {
    id: 'PR-261001-006',
    vendor: 'Home Store',
    vendorId: 'VND-006',
    category: 'Home essentials',
    settledOrders: 110,
    requestedDate: '01 Oct 2026',
    requestedTime: '15:50 PKT',
    payoutAmount: 15200,
    unpaidAmount: 20000,
    status: 'Completed',
    txnId: 'TXN-261001-0829',
    recipient: {
      accountName: 'Home Store Essentials',
      bankName: 'UBL • Bank transfer',
      accountNumber: '**** **** 6608',
      isVerified: true,
      verifiedDate: '05 Sep 2026',
    },
    breakdown: {
      period: '01 – 30 Sep 2026',
      grossSales: 42000,
      refunds: 800,
      eligibleSales: 41200,
      commission: 4120,
      platformFee: 824,
      otherAdjustments: 0,
      netEarnings: 36256,
    },
    balances: {
      alreadyPaid: 16256,
      pendingUnpaid: 20000,
      availableToRequest: 4800,
      requestedPayout: 15200,
    },
    timeline: {
      requestedAt: '01 Oct 2026, 10:15 PKT',
      reviewStatus: 'Approved by admin',
      bankTransferStatus: 'Confirmed on 01 Oct 2026, 15:50 PKT',
    },
  },
];

export const getPayouts = () => [...payoutsMemoryStore];

export const getPayoutById = (id) => {
  return payoutsMemoryStore.find((p) => p.id === id) || payoutsMemoryStore[0];
};

export const approvePayoutMock = (id) => {
  payoutsMemoryStore = payoutsMemoryStore.map((p) => {
    if (p.id === id) {
      return {
        ...p,
        status: 'Processing',
        timeline: {
          ...p.timeline,
          reviewStatus: 'Approved by admin',
          bankTransferStatus: 'Processing bank transfer',
        },
      };
    }
    return p;
  });
  return getPayoutById(id);
};

export const rejectPayoutMock = (id, reasonData) => {
  payoutsMemoryStore = payoutsMemoryStore.map((p) => {
    if (p.id === id) {
      return {
        ...p,
        status: 'Rejected',
        rejectionReason: reasonData?.reason || 'Settlement documents incomplete',
        rejectionCategory: reasonData?.category || 'Incomplete settlement documents',
        timeline: {
          ...p.timeline,
          reviewStatus: `Rejected: ${reasonData?.reason || 'Documents incomplete'}`,
        },
      };
    }
    return p;
  });
  return getPayoutById(id);
};

export const getPayoutStats = () => {
  const all = payoutsMemoryStore;
  const pendingCount = all.filter((p) => p.status === 'Pending').length;
  const processingCount = all.filter((p) => p.status === 'Processing').length;
  const completedCount = all.filter((p) => p.status === 'Completed').length;
  const rejectedCount = all.filter((p) => p.status === 'Rejected').length;
  const pendingAmount = all
    .filter((p) => p.status === 'Pending')
    .reduce((acc, p) => acc + p.payoutAmount, 0);

  return {
    ...INITIAL_PAYOUT_STATS,
    totalCount: all.length,
    pendingCount,
    processingCount,
    completedCount,
    rejectedCount,
    pendingAmount,
  };
};
