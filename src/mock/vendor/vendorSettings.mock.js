export const INITIAL_ACCOUNT_SETTINGS = {
  fullName: 'Ali Khan',
  email: 'freshmart@example.com',
  countryCode: '+92',
  phone: '3001234567',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
};

export const INITIAL_PAYMENT_SETTINGS = {
  currentMethod: 'Bank Transfer (Meezan Bank - **********1234)',
  activeType: 'bank',
  accountTitle: 'Ali Khan',
  bankName: 'Meezan Bank',
  iban: 'PK72 MEZN 0001 2345 6789',
};

export const INITIAL_NOTIFICATION_PREFERENCES = [
  {
    id: 'orders',
    title: 'New Order Notifications',
    desc: 'Get notified when a new order is received',
    icon: 'cart',
    enabled: true,
  },
  {
    id: 'order_status',
    title: 'Order Status Updates',
    desc: 'Get notified when order status changes',
    icon: 'refresh',
    enabled: true,
  },
  {
    id: 'payouts',
    title: 'Payment & Payout Notifications',
    desc: 'Get notified about payments and payouts',
    icon: 'wallet',
    enabled: true,
  },
  {
    id: 'low_stock',
    title: 'Low Stock Alerts',
    desc: 'Get notified when products are low in stock',
    icon: 'alert',
    enabled: false,
  },
  {
    id: 'messages',
    title: 'Customer Messages',
    desc: 'Get notified about new customer messages',
    icon: 'mail',
    enabled: true,
  },
  {
    id: 'promotions',
    title: 'Promotions & Offers',
    desc: 'Get notified about latest platform campaigns',
    icon: 'megaphone',
    enabled: false,
  },
  {
    id: 'system',
    title: 'System Updates',
    desc: 'Get notified about core system updates',
    icon: 'settings',
    enabled: true,
  },
];
