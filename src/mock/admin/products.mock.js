import bananasImg from '@/assets/images/products/bananas.jpg';
import applesImg from '@/assets/images/products/apples.jpg';
import milkImg from '@/assets/images/orders/milk.jpg';
import breadImg from '@/assets/images/orders/bread.jpg';

export const PRODUCT_STATS = [
  {
    id: 'total',
    title: 'Total Products',
    value: '2,480',
    trend: '12%',
    trendUp: true,
    icon: 'BoxIcon',
    iconBg: 'bg-blue-50 text-blue-600',
    borderColor: 'border-l-blue-500',
  },
  {
    id: 'active',
    title: 'Active Products',
    value: '2,120',
    trend: '15%',
    trendUp: true,
    icon: 'CircleCheckIcon',
    iconBg: 'bg-emerald-50 text-emerald-600',
    borderColor: 'border-l-emerald-500',
  },
  {
    id: 'low_stock',
    title: 'Low Stock',
    value: '180',
    trend: '8%',
    trendUp: false,
    icon: 'ShieldAlertIcon',
    iconBg: 'bg-amber-50 text-amber-600',
    borderColor: 'border-l-amber-500',
  },
  {
    id: 'out_of_stock',
    title: 'Out of Stock',
    value: '64',
    trend: '5%',
    trendUp: false,
    icon: 'BanIcon',
    iconBg: 'bg-rose-50 text-rose-600',
    borderColor: 'border-l-rose-500',
  },
];

export const CATEGORIES_LIST = [
  'All Categories',
  'Fruits & Vegetables',
  'Meat & Seafood',
  'Groceries',
  'Beverages',
  'Household',
  'Dairy',
];

export const VENDORS_LIST = [
  'All Vendors',
  'Fresh Mart',
  'Daily Needs',
  'Meat World',
  'Green Farm',
  'Khan General',
  'Home Store',
];

export const STATUS_LIST = ['All Status', 'Active', 'Low Stock', 'Out of Stock'];

let productsMemoryStore = [
  {
    id: '001',
    code: '#001',
    name: 'Fresh Red Apples',
    category: 'Fruits & Vegetables',
    categoryPath: 'Fruits & Vegetables > Fruits',
    vendor: 'Fresh Mart',
    price: '$6.00',
    priceNumber: 6.0,
    stock: 120,
    unit: 'kg',
    status: 'Active',
    image: applesImg,
    brand: 'Fresh Farm',
    reportsCount: 3,
    reports: [
      {
        id: 'RPT-101',
        user: 'Ali Khan',
        email: 'ali.khan@gmail.com',
        phone: '+92 300 9876543',
        reason: 'Quality Issue',
        date: 'Oct 15, 2026',
        time: '02:30 PM',
        status: 'Pending',
        orderId: '#EMT2455',
        note: 'Apples received were bruised and some were overripe. Requesting replacement or refund.',
      },
      {
        id: 'RPT-102',
        user: 'Sara Ahmed',
        email: 'sara.ahmed@gmail.com',
        phone: '+92 312 4567890',
        reason: 'Packaging Damage',
        date: 'Oct 14, 2026',
        time: '11:15 AM',
        status: 'Under Review',
        orderId: '#EMT2440',
        note: 'Bag was torn during delivery and several apples fell out and were crushed.',
      },
      {
        id: 'RPT-103',
        user: 'Usman Raza',
        email: 'usman.raza@gmail.com',
        phone: '+92 321 6543210',
        reason: 'Incorrect Weight',
        date: 'Oct 11, 2026',
        time: '04:45 PM',
        status: 'Resolved',
        orderId: '#EMT2412',
        note: 'Ordered 1kg but scale showed 820g only. Vendor credited back the difference.',
      },
    ],
    vendorDetails: {
      name: 'Fresh Mart',
      owner: 'Ahmed Khan',
      email: 'freshmart@gmail.com',
      phone: '+92 300 1234567',
      location: 'Gulberg III, Lahore',
      vendorId: '#VDR-001',
    },
  },
  {
    id: '002',
    code: '#002',
    name: 'Fresh Bananas (1kg)',
    category: 'Fruits & Vegetables',
    categoryPath: 'Fruits & Vegetables > Fruits',
    vendor: 'Fresh Mart',
    price: '$4.50',
    priceNumber: 4.5,
    stock: 85,
    totalStockKg: '48 kg',
    lowStockAlertKg: '10 kg',
    totalSales: 320,
    totalRevenue: '$1,440.00',
    status: 'Active',
    image: bananasImg,
    brand: 'Fresh Farm',
    shortDescription:
      'Fresh and organic bananas, rich in potassium and natural energy.',
    detailedDescription:
      'Our fresh bananas are carefully sourced from trusted farms. Naturally ripened, rich in nutrients, and perfect for everyday use.',
    tags: ['fresh fruits', 'banana', 'organic', 'healthy food'],
    variants: [
      { variant: '250g', price: '$2.50', stock: 30 },
      { variant: '500g', price: '$3.50', stock: 25 },
      { variant: '1kg', price: '$4.50', stock: 50 },
    ],
    vendorDetails: {
      name: 'Fresh Mart',
      owner: 'Ahmed Khan',
      email: 'freshmart@gmail.com',
      phone: '+92 300 1234567',
      location: 'Lahore, Pakistan',
      vendorId: '#VDR-001',
    },
    reportsCount: 2,
    reports: [
      {
        id: 'RPT-104',
        user: 'Ali Khan',
        email: 'ali.khan@gmail.com',
        phone: '+92 300 1234567',
        reason: 'Quality Issue',
        date: 'Oct 14, 2026',
        time: '10:00 AM',
        status: 'Pending',
        orderId: '#EMT2430',
        note: 'A few bananas were slightly overripe with dark spots.',
      },
      {
        id: 'RPT-105',
        user: 'Sara Ahmed',
        email: 'sara.a@gmail.com',
        phone: '+92 311 2233445',
        reason: 'Packaging Damage',
        date: 'Oct 10, 2026',
        time: '03:15 PM',
        status: 'Resolved',
        orderId: '#EMT2399',
        note: 'Packaging was crushed in bag. Replacement delivered quickly.',
      },
    ],
    recentOrders: [
      {
        id: '#EMT2455',
        customer: 'Sara Ahmed',
        quantity: '1kg x 1',
        total: '$4.50',
        status: 'Completed',
        date: 'Sep 25, 2026',
      },
    ],
  },
  {
    id: '003',
    code: '#003',
    name: 'Chicken Breast',
    category: 'Meat & Seafood',
    categoryPath: 'Meat & Seafood > Poultry',
    vendor: 'Meat World',
    price: '$8.00',
    priceNumber: 8.0,
    stock: 45,
    unit: 'kg',
    status: 'Low Stock',
    image: breadImg,
    brand: 'Meat World',
    reportsCount: 1,
    reports: [
      {
        id: 'RPT-106',
        user: 'Zainab Bibi',
        email: 'zainab.b@gmail.com',
        phone: '+92 321 4455667',
        reason: 'Packaging Damage',
        date: 'Oct 09, 2026',
        time: '01:20 PM',
        status: 'Resolved',
        orderId: '#EMT2388',
        note: 'Vacuum seal was pierced during delivery.',
      },
    ],
  },
  {
    id: '004',
    code: '#004',
    name: 'Basmati Rice 5kg',
    category: 'Groceries',
    categoryPath: 'Groceries > Grains',
    vendor: 'Green Farm',
    price: '$28.00',
    priceNumber: 28.0,
    stock: 0,
    unit: 'bag',
    status: 'Out of Stock',
    image: breadImg,
    brand: 'Green Farm',
    reportsCount: 0,
    reports: [],
  },
  {
    id: '005',
    code: '#005',
    name: 'Coca-Cola 1.5L',
    category: 'Beverages',
    categoryPath: 'Beverages > Soft Drinks',
    vendor: 'Khan General',
    price: '$3.50',
    priceNumber: 3.5,
    stock: 200,
    unit: 'bottle',
    status: 'Active',
    image: milkImg,
    brand: 'Coca-Cola',
    reportsCount: 0,
    reports: [],
  },
  {
    id: '006',
    code: '#006',
    name: 'Tide Detergent',
    category: 'Household',
    categoryPath: 'Household > Laundry',
    vendor: 'Home Store',
    price: '$12.00',
    priceNumber: 12.0,
    stock: 34,
    unit: 'box',
    status: 'Low Stock',
    image: milkImg,
    brand: 'Tide',
    reportsCount: 2,
    reports: [
      {
        id: 'RPT-107',
        user: 'Kiran Shah',
        email: 'kiran.s@gmail.com',
        phone: '+92 333 7788990',
        reason: 'Packaging Damage',
        date: 'Oct 13, 2026',
        time: '12:00 PM',
        status: 'Pending',
        orderId: '#EMT2420',
        note: 'Detergent powder leaked into grocery bag.',
      },
      {
        id: 'RPT-108',
        user: 'Fatima Noor',
        email: 'fatima.n@gmail.com',
        phone: '+92 300 2233441',
        reason: 'Wrong Item Delivered',
        date: 'Oct 08, 2026',
        time: '11:40 AM',
        status: 'Resolved',
        orderId: '#EMT2370',
        note: 'Delivered 500g instead of 1kg box. Refunded immediately.',
      },
    ],
  },
  {
    id: '007',
    code: '#007',
    name: 'Cooking Oil 2L',
    category: 'Groceries',
    categoryPath: 'Groceries > Oils',
    vendor: 'Fresh Mart',
    price: '$18.00',
    priceNumber: 18.0,
    stock: 67,
    unit: 'bottle',
    status: 'Active',
    image: milkImg,
    brand: 'Dalda',
    reportsCount: 1,
    reports: [
      {
        id: 'RPT-109',
        user: 'Bilal Ahmad',
        email: 'bilal.a@gmail.com',
        phone: '+92 302 4455667',
        reason: 'Packaging Damage',
        date: 'Oct 12, 2026',
        time: '04:15 PM',
        status: 'Pending',
        orderId: '#EMT2415',
        note: 'Cap was loose and had minor oil leakage around nozzle.',
      },
    ],
  },
  {
    id: '008',
    code: '#008',
    name: 'Milk 1L',
    category: 'Dairy',
    categoryPath: 'Dairy > Fresh Milk',
    vendor: 'Daily Needs',
    price: '$2.50',
    priceNumber: 2.5,
    stock: 150,
    unit: 'tetra',
    status: 'Active',
    image: milkImg,
    brand: 'Nestle',
    reportsCount: 0,
    reports: [],
  },
  {
    id: '009',
    code: '#009',
    name: 'Tomatoes 1kg',
    category: 'Fruits & Vegetables',
    categoryPath: 'Fruits & Vegetables > Vegetables',
    vendor: 'Green Farm',
    price: '$3.00',
    priceNumber: 3.0,
    stock: 0,
    unit: 'kg',
    status: 'Out of Stock',
    image: applesImg,
    brand: 'Green Farm',
    reportsCount: 0,
    reports: [],
  },
  {
    id: '010',
    code: '#010',
    name: 'Onions 1kg',
    category: 'Fruits & Vegetables',
    categoryPath: 'Fruits & Vegetables > Vegetables',
    vendor: 'Green Farm',
    price: '$2.50',
    priceNumber: 2.5,
    stock: 90,
    unit: 'kg',
    status: 'Active',
    image: applesImg,
    brand: 'Green Farm',
    reportsCount: 0,
    reports: [],
  },
];

export const getProducts = () => [...productsMemoryStore];

export const getProductById = (id) => {
  const norm = id?.replace('#', '');
  return (
    productsMemoryStore.find(
      (p) => p.id === norm || p.code === `#${norm}` || p.id === id
    ) || productsMemoryStore[1]
  );
};

export const removeProductMock = (id) => {
  const norm = id?.replace('#', '');
  productsMemoryStore = productsMemoryStore.filter(
    (p) => p.id !== norm && p.code !== `#${norm}` && p.id !== id
  );
  return [...productsMemoryStore];
};

export const VENDOR_PRODUCTS_SUMMARY = [
  {
    vendorId: 'VDR-001',
    vendorCode: '#VDR-001',
    vendorName: 'Fresh Mart',
    category: 'Groceries & Essentials',
    totalProducts: 420,
    activeProducts: 380,
    lowStockProducts: 28,
    outOfStockProducts: 12,
    rating: 4.8,
    reviewsCount: 320,
    phone: '+92 300 1234567',
    email: 'freshmart@gmail.com',
    location: 'Gulberg III, Lahore',
  },
  {
    vendorId: 'VDR-002',
    vendorCode: '#VDR-002',
    vendorName: 'Daily Needs',
    category: 'Supermarket Vendor',
    totalProducts: 310,
    activeProducts: 285,
    lowStockProducts: 18,
    outOfStockProducts: 7,
    rating: 4.9,
    reviewsCount: 295,
    phone: '+92 200 4568794',
    email: 'dailyneeds@gmail.com',
    location: 'DHA Phase 6, Lahore',
  },
  {
    vendorId: 'VDR-003',
    vendorCode: '#VDR-003',
    vendorName: 'Meat World',
    category: 'Meat & Seafood',
    totalProducts: 180,
    activeProducts: 160,
    lowStockProducts: 14,
    outOfStockProducts: 6,
    rating: 4.7,
    reviewsCount: 180,
    phone: '+92 333 4455667',
    email: 'meatworld@gmail.com',
    location: 'F-10 Markaz, Islamabad',
  },
  {
    vendorId: 'VDR-004',
    vendorCode: '#VDR-004',
    vendorName: 'Home Store',
    category: 'Home Essentials',
    totalProducts: 250,
    activeProducts: 220,
    lowStockProducts: 22,
    outOfStockProducts: 8,
    rating: 4.6,
    reviewsCount: 110,
    phone: '+92 312 8765432',
    email: 'homestore@gmail.com',
    location: 'Gulberg III, Lahore',
  },
  {
    vendorId: 'VDR-005',
    vendorCode: '#VDR-005',
    vendorName: 'Pharma Plus',
    category: 'Health & Pharmacy',
    totalProducts: 390,
    activeProducts: 360,
    lowStockProducts: 20,
    outOfStockProducts: 10,
    rating: 4.9,
    reviewsCount: 240,
    phone: '+92 321 8876234',
    email: 'pharmaplus@gmail.com',
    location: 'Johar Town, Lahore',
  },
  {
    vendorId: 'VDR-006',
    vendorCode: '#VDR-006',
    vendorName: 'Tech Zone',
    category: 'Electronics & Gadgets',
    totalProducts: 145,
    activeProducts: 130,
    lowStockProducts: 10,
    outOfStockProducts: 5,
    rating: 4.8,
    reviewsCount: 135,
    phone: '+92 301 2233445',
    email: 'techzone@gmail.com',
    location: 'Blue Area, Islamabad',
  },
  {
    vendorId: 'VDR-007',
    vendorCode: '#VDR-007',
    vendorName: 'Beauty Hub',
    category: 'Cosmetics & Personal Care',
    totalProducts: 215,
    activeProducts: 195,
    lowStockProducts: 14,
    outOfStockProducts: 6,
    rating: 4.7,
    reviewsCount: 165,
    phone: '+92 333 8943210',
    email: 'beautyhub@gmail.com',
    location: 'Mall 1, Gulberg, Lahore',
  },
  {
    vendorId: 'VDR-008',
    vendorCode: '#VDR-008',
    vendorName: 'Khan Mart',
    category: 'General Store',
    totalProducts: 160,
    activeProducts: 140,
    lowStockProducts: 15,
    outOfStockProducts: 5,
    rating: 4.5,
    reviewsCount: 95,
    phone: '+92 321 8876234',
    email: 'khanmart@gmail.com',
    location: 'Tariq Road, Karachi',
  },
  {
    vendorId: 'VDR-009',
    vendorCode: '#VDR-009',
    vendorName: 'Green Farm',
    category: 'Fruits & Vegetables',
    totalProducts: 290,
    activeProducts: 265,
    lowStockProducts: 18,
    outOfStockProducts: 7,
    rating: 4.9,
    reviewsCount: 260,
    phone: '+92 301 2233445',
    email: 'greenfarm@gmail.com',
    location: 'D-Ground, Faisalabad',
  },
  {
    vendorId: 'VDR-010',
    vendorCode: '#VDR-010',
    vendorName: 'Super Store',
    category: 'Hypermarket',
    totalProducts: 120,
    activeProducts: 105,
    lowStockProducts: 11,
    outOfStockProducts: 4,
    rating: 4.6,
    reviewsCount: 88,
    phone: '+92 321 8876234',
    email: 'superstore@gmail.com',
    location: 'Peshawar, PK',
  },
];

export const getVendorProductSummaryById = (vendorId) => {
  const norm = vendorId?.replace('#', '').toUpperCase();
  return (
    VENDOR_PRODUCTS_SUMMARY.find(
      (v) => v.vendorId.toUpperCase() === norm || v.vendorId.toUpperCase() === `VDR-${norm}`
    ) || VENDOR_PRODUCTS_SUMMARY[0]
  );
};

export const getProductsByVendorId = (vendorId) => {
  const norm = vendorId?.replace('#', '').toUpperCase();
  const summary = getVendorProductSummaryById(vendorId);
  const vendorName = summary.vendorName;

  const direct = productsMemoryStore.filter(
    (p) => p.vendor?.toLowerCase() === vendorName?.toLowerCase()
  );

  // Generate additional products if list is small so pagination works smoothly
  if (direct.length < 15) {
    const categories = ['Fruits & Vegetables', 'Groceries', 'Dairy', 'Snacks', 'Beverages'];
    const sampleItems = [
      { name: 'Red Apples (1kg)', price: '$5.50', stock: 120, status: 'Active', image: applesImg },
      { name: 'Fresh Bananas (1kg)', price: '$4.50', stock: 85, status: 'Active', image: bananasImg },
      { name: 'Pure Cow Milk 1L', price: '$2.50', stock: 65, status: 'Active', image: milkImg },
      { name: 'Whole Wheat Bread', price: '$2.00', stock: 40, status: 'Low Stock', image: breadImg },
      { name: 'Golden Basmati Rice 5kg', price: '$24.00', stock: 0, status: 'Out of Stock', image: breadImg },
      { name: 'Organic Honey 500g', price: '$8.50', stock: 35, status: 'Active', image: applesImg },
      { name: 'Farm Fresh Eggs (Dozen)', price: '$3.80', stock: 80, status: 'Active', image: breadImg },
      { name: 'Green Tea 100g', price: '$4.20', stock: 12, status: 'Low Stock', image: milkImg },
    ];

    const sampleReportsPool = [
      [
        {
          id: 'RPT-201',
          user: 'Bilal Qureshi',
          email: 'bilal.q@gmail.com',
          phone: '+92 333 1122334',
          reason: 'Quality Issue',
          date: 'Oct 16, 2026',
          time: '01:10 PM',
          status: 'Pending',
          orderId: '#EMT2480',
          note: 'Item received was near expiry date and texture was not fresh.',
        },
        {
          id: 'RPT-202',
          user: 'Zainab Bibi',
          email: 'zainab.b@gmail.com',
          phone: '+92 300 5544332',
          reason: 'Damaged Packaging',
          date: 'Oct 14, 2026',
          time: '05:20 PM',
          status: 'Resolved',
          orderId: '#EMT2462',
          note: 'Package was leaked during transit. Replacement was sent.',
        },
      ],
      [
        {
          id: 'RPT-203',
          user: 'Hamza Tariq',
          email: 'hamza.t@gmail.com',
          phone: '+92 321 9988776',
          reason: 'Wrong Item Delivered',
          date: 'Oct 15, 2026',
          time: '09:40 AM',
          status: 'Under Review',
          orderId: '#EMT2471',
          note: 'Ordered whole wheat variant but received standard plain item instead.',
        },
      ],
      [],
      [
        {
          id: 'RPT-204',
          user: 'Ayesha Malik',
          email: 'ayesha.m@gmail.com',
          phone: '+92 345 6677889',
          reason: 'Quality Issue',
          date: 'Oct 12, 2026',
          time: '03:15 PM',
          status: 'Resolved',
          orderId: '#EMT2438',
          note: 'Item was slightly dented. Vendor credited back the difference.',
        },
      ],
      [],
    ];

    const generated = Array.from({ length: 14 }).map((_, i) => {
      const item = sampleItems[i % sampleItems.length];
      const codeNum = String(i + 11).padStart(3, '0');
      const reports = sampleReportsPool[i % sampleReportsPool.length];
      return {
        id: `gen-${codeNum}`,
        code: `#${codeNum}`,
        name: `${item.name} (${i + 1})`,
        category: categories[i % categories.length],
        categoryPath: `${categories[i % categories.length]} > Fresh`,
        vendor: vendorName,
        price: item.price,
        stock: item.stock,
        status: item.status,
        image: item.image,
        brand: summary.vendorName,
        reportsCount: reports.length,
        reports: reports,
        detailedDescription: `High-quality ${item.name} supplied by ${summary.vendorName}. Carefully inspected and packaged.`,
        tags: ['popular', 'fresh', 'in-store'],
        variants: [
          { variant: 'Standard', price: item.price, stock: item.stock },
        ],
        vendorDetails: {
          name: summary.vendorName,
          owner: 'Ahmed Khan',
          email: summary.email,
          phone: summary.phone,
          location: summary.location,
          vendorId: summary.vendorCode,
        },
        recentOrders: [],
      };
    });

    return [...direct, ...generated];
  }

  return direct;
};

export const updateProductReportStatusMock = (productId, reportId, newStatus) => {
  const norm = productId?.replace('#', '');
  productsMemoryStore = productsMemoryStore.map((p) => {
    if (p.id === norm || p.code === `#${norm}` || p.id === productId) {
      const updatedReports = (p.reports || []).map((r) =>
        r.id === reportId ? { ...r, status: newStatus } : r
      );
      return {
        ...p,
        reports: updatedReports,
      };
    }
    return p;
  });
  return getProductById(productId);
};

export const toggleProductStatusMock = (id) => {
  const norm = id?.replace('#', '');
  productsMemoryStore = productsMemoryStore.map((p) => {
    if (p.id === norm || p.code === `#${norm}` || p.id === id) {
      return {
        ...p,
        status: p.status === 'Active' ? 'Inactive' : 'Active',
      };
    }
    return p;
  });
  return getProductById(id);
};
