export const ANALYTICS_METRICS = {
  totalSales: {
    title: 'Total Sales',
    value: '$5,420.00',
    change: '+12% from last month',
    isPositive: true,
  },
  totalOrders: {
    title: 'Total Orders',
    value: '128',
    change: '+18% from last month',
    isPositive: true,
  },
  avgOrderValue: {
    title: 'Avg. Order Value',
    value: '$42.35',
    change: '+8% from last month',
    isPositive: true,
  },
};

export const SALES_ORDERS_TREND_DATA = [
  { label: 'Sep 1', sales: 240, orders: 8 },
  { label: 'Sep 3', sales: 290, orders: 10 },
  { label: 'Sep 5', sales: 340, orders: 9 },
  { label: 'Sep 7', sales: 460, orders: 13 },
  { label: 'Sep 10', sales: 310, orders: 11 },
  { label: 'Sep 12', sales: 360, orders: 10 },
  { label: 'Sep 15', sales: 410, orders: 12 },
  { label: 'Sep 17', sales: 300, orders: 11 },
  { label: 'Sep 20', sales: 350, orders: 12 },
  { label: 'Sep 23', sales: 540, orders: 14 },
  { label: 'Sep 25', sales: 380, orders: 13 },
  { label: 'Sep 27', sales: 420, orders: 15 },
  { label: 'Sep 30', sales: 520, orders: 16 },
];

export const CATEGORY_SALES_DATA = [
  { label: 'Fruits & Vegetables', percentage: 32, color: '#f97316' },
  { label: 'Dairy & Eggs', percentage: 18, color: '#fed7aa' },
  { label: 'Bakery', percentage: 12, color: '#c084fc' },
  { label: 'Snacks & Beverages', percentage: 15, color: '#38bdf8' },
  { label: 'Household', percentage: 10, color: '#818cf8' },
  { label: 'Others', percentage: 13, color: '#22c55e' },
];

export const PAYMENT_METHOD_DATA = [
  { label: 'Cash on Delivery', percentage: 45, color: '#f87171' },
  { label: 'Credit Card', percentage: 35, color: '#f97316' },
  { label: 'Digital Wallet', percentage: 15, color: '#38bdf8' },
  { label: 'Others', percentage: 5, color: '#a855f7' },
];

export const CUSTOMER_TYPE_DATA = [
  { label: 'New Customers', percentage: 65, color: '#0ea5e9' },
  { label: 'Returning Customers', percentage: 35, color: '#f97316' },
];
