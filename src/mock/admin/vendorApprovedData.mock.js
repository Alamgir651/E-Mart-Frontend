export const VENDOR_PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Fresh Bananas',
    variant: 'Fruits • 1 dozen',
    price: 'Rs. 240',
    stock: 120,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Fresh Tomatoes',
    variant: 'Vegetables • 1 kg',
    price: 'Rs. 180',
    stock: 75,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Farm Fresh Milk',
    variant: 'Dairy • 1 litre',
    price: 'Rs. 220',
    stock: 48,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=120&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Fresh Eggs',
    variant: 'Dairy & Eggs • 12 pack',
    price: 'Rs. 360',
    stock: 60,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?w=120&auto=format&fit=crop&q=80',
  },
];

export const TOP_PRODUCTS_BY_ORDERS = [
  { id: 1, rank: 1, name: 'Fresh Bananas', orders: 86, percentage: 86 },
  { id: 2, rank: 2, name: 'Fresh Tomatoes', orders: 64, percentage: 64 },
  { id: 3, rank: 3, name: 'Farm Fresh Milk', orders: 51, percentage: 51 },
  { id: 4, rank: 4, name: 'Fresh Eggs', orders: 38, percentage: 38 },
];

export const VENDOR_PAYOUTS_DATA = {
  totalPaidOut: 'Rs. 36,000',
  completedPayouts: 3,
  payouts: [
    { id: '#PAY-003', date: 'Oct 2, 2026', amount: 'Rs. 15,000', status: 'Paid' },
    { id: '#PAY-002', date: 'Sep 30, 2026', amount: 'Rs. 12,500', status: 'Paid' },
    { id: '#PAY-001', date: 'Sep 28, 2026', amount: 'Rs. 8,500', status: 'Paid' },
  ],
};
