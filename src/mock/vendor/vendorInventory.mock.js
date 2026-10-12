export const INITIAL_INVENTORY = [
  {
    id: 'INV-101', sku: 'BAN-1KG-01', name: 'Fresh Bananas', unit: '1kg',
    category: 'Fruits & Vegetables > Fruits', stock: 48, lowStockAlert: 10, status: 'In Stock',
    price: 4.5, costPrice: 2.0,
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=120&auto=format&fit=crop&q=80',
    lastAdded: 'Sep 22, 2025, 10:24 AM', lastUpdated: 'Sep 22, 2025, 10:24 AM',
  },
  {
    id: 'INV-102', sku: 'APP-1KG-02', name: 'Red Apples', unit: '1kg',
    category: 'Fruits & Vegetables > Fruits', stock: 5, lowStockAlert: 10, status: 'Low Stock',
    price: 6.0, costPrice: 3.5,
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=120&auto=format&fit=crop&q=80',
    lastAdded: 'Sep 18, 2025, 02:15 PM', lastUpdated: 'Sep 20, 2025, 11:30 AM',
  },
  {
    id: 'INV-103', sku: 'MLK-1L-03', name: 'Fresh Milk', unit: '1L',
    category: 'Dairy & Eggs', stock: 0, lowStockAlert: 15, status: 'Out of Stock',
    price: 9.5, costPrice: 6.0,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=120&auto=format&fit=crop&q=80',
    lastAdded: 'Sep 10, 2025, 08:00 AM', lastUpdated: 'Sep 19, 2025, 05:00 PM',
  },
  {
    id: 'INV-104', sku: 'TOM-1KG-04', name: 'Tomatoes', unit: '1kg',
    category: 'Fruits & Vegetables > Vegetables', stock: 12, lowStockAlert: 10, status: 'In Stock',
    price: 3.0, costPrice: 1.5,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=120&auto=format&fit=crop&q=80',
    lastAdded: 'Sep 21, 2025, 09:10 AM', lastUpdated: 'Sep 21, 2025, 09:10 AM',
  },
  {
    id: 'INV-105', sku: 'RCE-5KG-05', name: 'Basmati Rice', unit: '5kg',
    category: 'Grocery', stock: 35, lowStockAlert: 10, status: 'In Stock',
    price: 18.0, costPrice: 12.0,
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&auto=format&fit=crop&q=80',
    lastAdded: 'Sep 12, 2025, 01:20 PM', lastUpdated: 'Sep 15, 2025, 10:00 AM',
  },
  {
    id: 'INV-106', sku: 'EGG-12P-06', name: 'Large Eggs', unit: '12 pcs',
    category: 'Dairy & Eggs', stock: 2, lowStockAlert: 8, status: 'Low Stock',
    price: 5.0, costPrice: 3.0,
    image: 'https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?w=120&auto=format&fit=crop&q=80',
    lastAdded: 'Sep 14, 2025, 04:30 PM', lastUpdated: 'Sep 22, 2025, 08:15 AM',
  },
  {
    id: 'INV-107', sku: 'CHK-1KG-07', name: 'Chicken Breast', unit: '1kg',
    category: 'Meat & Poultry', stock: 6, lowStockAlert: 10, status: 'Low Stock',
    price: 12.5, costPrice: 8.5,
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=120&auto=format&fit=crop&q=80',
    lastAdded: 'Sep 17, 2025, 11:45 AM', lastUpdated: 'Sep 21, 2025, 06:20 PM',
  },
  {
    id: 'INV-108', sku: 'ONN-1KG-08', name: 'Onions', unit: '1kg',
    category: 'Fruits & Vegetables > Vegetables', stock: 0, lowStockAlert: 15, status: 'Out of Stock',
    price: 2.5, costPrice: 1.2,
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?w=120&auto=format&fit=crop&q=80',
    lastAdded: 'Sep 09, 2025, 02:00 PM', lastUpdated: 'Sep 18, 2025, 09:30 AM',
  },
  {
    id: 'INV-109', sku: 'POT-1KG-09', name: 'Potatoes', unit: '1kg',
    category: 'Fruits & Vegetables > Vegetables', stock: 20, lowStockAlert: 10, status: 'In Stock',
    price: 2.0, costPrice: 1.0,
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=120&auto=format&fit=crop&q=80',
    lastAdded: 'Sep 16, 2025, 03:15 PM', lastUpdated: 'Sep 16, 2025, 03:15 PM',
  },
  {
    id: 'INV-110', sku: 'BRD-400G-10', name: 'Bread', unit: '400g',
    category: 'Bakery', stock: 15, lowStockAlert: 5, status: 'In Stock',
    price: 3.5, costPrice: 1.8,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=120&auto=format&fit=crop&q=80',
    lastAdded: 'Sep 20, 2025, 07:00 AM', lastUpdated: 'Sep 20, 2025, 07:00 AM',
  },
];

export const DEFAULT_STOCK_HISTORY = [
  {
    id: 1, date: 'Sep 22, 2025, 10:24 AM', type: 'Stock In',
    quantity: '+50 kg', prevStock: '5 kg', newStock: '48 kg',
    notes: 'New stock received', addedBy: 'You',
  },
  {
    id: 2, date: 'Sep 18, 2025, 02:15 PM', type: 'Stock Adjustment',
    quantity: '-5 kg', prevStock: '10 kg', newStock: '5 kg',
    notes: 'Damaged items', addedBy: 'You',
  },
  {
    id: 3, date: 'Sep 15, 2025, 11:40 AM', type: 'Stock In',
    quantity: '+30 kg', prevStock: '-', newStock: '10 kg',
    notes: 'Supplier delivery', addedBy: 'You',
  },
  {
    id: 4, date: 'Sep 10, 2025, 09:30 AM', type: 'Stock Out',
    quantity: '-12 kg', prevStock: '12 kg', newStock: '-',
    notes: 'Customer order', addedBy: 'System',
  },
];

export const SAMPLE_CSV_PREVIEW_ROWS = [
  { row: 1, product: 'Fresh Bananas (1kg)', sku: 'BAN-1KG-01', quantity: 50, unit: 'kg', status: 'Valid' },
  { row: 2, product: 'Fresh Carrots (1kg)', sku: 'CRT-1KG-02', quantity: 25, unit: 'kg', status: 'Valid' },
  {
    row: 3, product: 'Fresh Tomatoes (1kg)', sku: 'TOM-1KG-04', quantity: -3, unit: 'kg',
    status: 'Invalid', errorMessage: 'Quantity must be greater than 0.',
  },
  {
    row: 4, product: 'Free-range Eggs', sku: 'EGG-12P-06', quantity: 12, unit: 'dozen',
    status: 'Invalid', errorMessage: 'Unit must be "pcs" for this SKU.',
  },
  { row: 5, product: 'Red Apples (1kg)', sku: 'APP-1KG-02', quantity: 20, unit: 'kg', status: 'Valid' },
  { row: 6, product: 'Fresh Potatoes (1kg)', sku: 'POT-1KG-09', quantity: 30, unit: 'kg', status: 'Valid' },
];
