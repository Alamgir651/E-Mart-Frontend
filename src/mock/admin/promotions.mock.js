import applesImg from '@/assets/images/products/apples.jpg';
import bananasImg from '@/assets/images/products/bananas.jpg';
import milkImg from '@/assets/images/orders/milk.jpg';
import breadImg from '@/assets/images/orders/bread.jpg';

export const PROMOTION_TABS = ['Deals', 'Coupons', 'Banner'];

export * from './coupons.mock';

export const DEAL_TYPES = ['All deal types', 'Flash Deal', 'New Arrival', 'Top Offers'];

export const DEAL_STATUSES = ['All statuses', 'Active', 'Scheduled', 'Disabled', 'Expired'];

export const AVAILABLE_PRODUCTS_CATALOG = [
  { id: 'PRD-001', name: 'Fresh Red Apples', category: 'Fruits', price: 'PKR 450', priceNum: 450, image: applesImg },
  { id: 'PRD-002', name: 'Cavendish Bananas', category: 'Fruits', price: 'PKR 280', priceNum: 280, image: bananasImg },
  { id: 'PRD-003', name: 'Fresh Dairy Milk 1L', category: 'Dairy', price: 'PKR 260', priceNum: 260, image: milkImg },
  { id: 'PRD-004', name: 'Whole Wheat Bread', category: 'Bakery', price: 'PKR 190', priceNum: 190, image: breadImg },
  { id: 'PRD-005', name: 'Pure Honey 500g', category: 'Pantry', price: 'PKR 950', priceNum: 950, image: applesImg },
  { id: 'PRD-006', name: 'Organic Brown Eggs (12)', category: 'Dairy & Eggs', price: 'PKR 380', priceNum: 380, image: milkImg },
  { id: 'PRD-007', name: 'Basmati Rice 5kg', category: 'Grains', price: 'PKR 1,850', priceNum: 1850, image: breadImg },
  { id: 'PRD-008', name: 'Green Olives Jar', category: 'Pantry', price: 'PKR 620', priceNum: 620, image: applesImg },
];

export const INITIAL_DEALS = [
  {
    id: 'DEAL-1',
    title: 'Fresh Flash Sale',
    dealType: 'Flash Deal',
    startDate: '2026-10-05',
    endDate: '2026-10-07',
    durationDisplay: '05 Oct 2026 to 07 Oct 2026',
    status: 'Active',
    published: true,
    productIds: ['PRD-001', 'PRD-002', 'PRD-003', 'PRD-004'],
    activeProductsCount: 12,
  },
  {
    id: 'DEAL-2',
    title: 'October New Arrivals',
    dealType: 'New Arrival',
    startDate: '2026-10-01',
    endDate: '2026-10-31',
    durationDisplay: '01 Oct 2026 to 31 Oct 2026',
    status: 'Active',
    published: true,
    productIds: ['PRD-001', 'PRD-005', 'PRD-006', 'PRD-007'],
    activeProductsCount: 24,
  },
  {
    id: 'DEAL-3',
    title: 'Weekend Top Offers',
    dealType: 'Top Offers',
    startDate: '2026-10-10',
    endDate: '2026-10-12',
    durationDisplay: '10 Oct 2026 to 12 Oct 2026',
    status: 'Scheduled',
    published: true,
    productIds: ['PRD-002', 'PRD-003', 'PRD-008'],
    activeProductsCount: 8,
  },
  {
    id: 'DEAL-4',
    title: 'Pantry Essentials',
    dealType: 'Top Offers',
    startDate: '2026-10-08',
    endDate: '2026-10-20',
    durationDisplay: '08 Oct 2026 to 20 Oct 2026',
    status: 'Disabled',
    published: false,
    productIds: [],
    activeProductsCount: 0,
  },
  {
    id: 'DEAL-5',
    title: 'September Flash Sale',
    dealType: 'Flash Deal',
    startDate: '2026-09-25',
    endDate: '2026-09-30',
    durationDisplay: '25 Sep 2026 to 30 Sep 2026',
    status: 'Expired',
    published: false,
    productIds: ['PRD-004', 'PRD-007'],
    activeProductsCount: 9,
  },
];
