export const COUPON_TYPES = [
  'All coupon types',
  'Default',
  'First order',
  'Free delivery',
];

export const COUPON_STATUSES = [
  'All statuses',
  'Active',
  'Scheduled',
  'Disabled',
  'Expired',
];

export const DISCOUNT_TYPES = [
  'Percent',
  'Amount',
  'Free delivery',
];

export const INITIAL_COUPONS = [
  {
    id: 'CPN-1',
    code: 'rbioarwzwi',
    title: 'First Order',
    couponType: 'First order',
    discountType: 'Amount',
    discountAmount: 250,
    minPurchase: 1500,
    maxDiscount: null,
    limitPerUser: 1,
    totalUsed: 0,
    startDate: '2026-10-01',
    expireDate: '2026-10-31',
    status: 'Active',
    enabled: true,
  },
  {
    id: 'CPN-2',
    code: '2tevxv1veb',
    title: 'Free Delivery',
    couponType: 'Free delivery',
    discountType: 'Free delivery',
    discountAmount: 0,
    minPurchase: 1000,
    maxDiscount: null,
    limitPerUser: 85,
    totalUsed: 1,
    startDate: '2026-10-01',
    expireDate: '2026-11-30',
    status: 'Active',
    enabled: true,
  },
  {
    id: 'CPN-3',
    code: 'src4tamx8p',
    title: '10% discount',
    couponType: 'Default',
    discountType: 'Percent',
    discountAmount: 10,
    minPurchase: null,
    maxDiscount: 500,
    limitPerUser: 100,
    totalUsed: 0,
    startDate: '2026-10-10',
    expireDate: '2026-12-31',
    status: 'Scheduled',
    enabled: true,
  },
  {
    id: 'CPN-4',
    code: 'RY2354',
    title: 'Premium Deal',
    couponType: 'Default',
    discountType: 'Percent',
    discountAmount: 15,
    minPurchase: null,
    maxDiscount: 1000,
    limitPerUser: 1,
    totalUsed: 0,
    startDate: '2026-10-01',
    expireDate: '2027-01-31',
    status: 'Disabled',
    enabled: false,
  },
  {
    id: 'CPN-5',
    code: 'Foodie',
    title: 'Test Coupon',
    couponType: 'Default',
    discountType: 'Amount',
    discountAmount: 150,
    minPurchase: 800,
    maxDiscount: null,
    limitPerUser: 5,
    totalUsed: 0,
    startDate: '2026-09-01',
    expireDate: '2026-09-30',
    status: 'Expired',
    enabled: false,
  },
];

/**
 * Format YYYY-MM-DD into "DD MMM YYYY" (e.g., "01 Oct 2026")
 */
export const formatCouponDate = (dateStr) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;

  const day = String(date.getDate()).padStart(2, '0');
  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};

/**
 * Generate a random alphanumeric coupon code
 */
export const generateRandomCouponCode = (length = 10) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
