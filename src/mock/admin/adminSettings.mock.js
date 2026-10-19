export const SETTINGS_TABS = [
  'General & Branding',
  'Team & Admins',
  'Roles & Permissions',
  'Commission & Delivery Fees',
  'Notifications',
  'Account & Security',
];

export const COUNTRY_OPTIONS = [
  'Pakistan',
  'United Arab Emirates',
  'Saudi Arabia',
  'United Kingdom',
  'United States',
  'Canada',
  'Turkey',
];

export const CURRENCY_OPTIONS = [
  'PKR — Pakistani Rupee',
  'USD — US Dollar',
  'AED — UAE Dirham',
  'SAR — Saudi Riyal',
  'GBP — British Pound',
  'EUR — Euro',
];

export const TIMEZONE_OPTIONS = [
  'Asia/Karachi (UTC +05:00)',
  'Asia/Dubai (UTC +04:00)',
  'Asia/Riyadh (UTC +03:00)',
  'Europe/London (UTC +00:00)',
  'America/New_York (UTC -05:00)',
];

export const INITIAL_GENERAL_SETTINGS = {
  supportEmail: 'support@emart.example',
  supportPhone: '+92 300 000 0000',
  contactName: 'Emart Support Team',
  businessAddress: 'Example Plaza, Main Boulevard',
  city: 'Karachi',
  country: 'Pakistan',
  postalCode: '74000',
  currency: 'PKR — Pakistani Rupee',
  timezone: 'Asia/Karachi (UTC +05:00)',
};

export const INITIAL_TEAM_ADMINS = [
  {
    id: 'ADM-01',
    name: 'Admin',
    email: 'admin@emart.com',
    role: 'Super Admin',
    status: 'Active',
    twoFactor: true,
    lastActive: 'Active now',
  },
  {
    id: 'ADM-02',
    name: 'Sarah Khan',
    email: 'sarah.operations@emart.com',
    role: 'Operations Lead',
    status: 'Active',
    twoFactor: true,
    lastActive: '25 mins ago',
  },
  {
    id: 'ADM-03',
    name: 'Bilal Ahmed',
    email: 'bilal.finance@emart.com',
    role: 'Finance Manager',
    status: 'Active',
    twoFactor: false,
    lastActive: 'Yesterday at 5:20 PM',
  },
  {
    id: 'ADM-04',
    name: 'Hina Tariq',
    email: 'hina.support@emart.com',
    role: 'Support Lead',
    status: 'Pending Invite',
    twoFactor: false,
    lastActive: 'Invited 2 days ago',
  },
];

export const INITIAL_COMMISSION_SETTINGS = {
  defaultCommissionRate: 8,
  minCommissionPerOrder: 50,
  payoutFeePercent: 0,
  baseDeliveryFee: 120,
  freeDeliveryThreshold: 1500,
  perKmRate: 25,
};

export const INITIAL_NOTIFICATION_SETTINGS = {
  newVendorAlert: true,
  highValueOrderAlert: true,
  payoutRequestAlert: true,
  lowStockAlert: false,
  ticketEscalationAlert: true,
  dailySummaryDigest: true,
};
