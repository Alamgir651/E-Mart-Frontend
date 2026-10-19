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

export const TEAM_ROLES = [
  'All roles',
  'Owner / Super Admin',
  'Admin',
  'Operations staff',
  'Support staff',
  'Finance staff',
];

export const TEAM_STATUSES = [
  'All statuses',
  'Active',
  'Invited',
  'Suspended',
];

export const ROLE_PERMISSIONS_PREVIEW = {
  'Admin': {
    badge: 'Full operations',
    permissions: [
      'Manage vendors, riders, customers, orders, inventory and promotions.',
      'Process payouts and approve store verification requests.',
      'Cannot change ownership or delete super admin account.',
    ],
  },
  'Operations staff': {
    badge: 'Scoped staff',
    permissions: [
      'View vendors, riders, customers, orders, products, inventory and support tickets.',
      'Create and edit orders; edit riders and inventory.',
      'No payments, payouts, settings, admin access or delete permissions.',
    ],
  },
  'Support staff': {
    badge: 'Scoped staff',
    permissions: [
      'View orders, customers, support tickets and rider activity.',
      'Respond to support queries and escalate disputes.',
      'No catalog, inventory, payments, payouts or system settings access.',
    ],
  },
  'Finance staff': {
    badge: 'Scoped staff',
    permissions: [
      'View payouts, transactions, vendor commission ledgers and revenue reports.',
      'Prepare and export payout batches.',
      'Cannot alter marketplace commission rates or store configuration.',
    ],
  },
};

export const INITIAL_TEAM_ADMINS = [
  {
    id: 'ADM-01',
    initials: 'AD',
    name: 'Admin (you)',
    email: 'owner@emart.example',
    role: 'Owner / Super Admin',
    status: 'Active',
    lastActive: 'Now · This is you',
    isOwner: true,
  },
  {
    id: 'ADM-02',
    initials: 'BA',
    name: 'Bilal Ahmed',
    email: 'bilal@emart.example',
    role: 'Admin',
    status: 'Active',
    lastActive: 'Today, 10:18 PKT',
    isOwner: false,
  },
  {
    id: 'ADM-03',
    initials: 'SA',
    name: 'Sana Ali',
    email: 'sana@emart.example',
    role: 'Operations staff',
    status: 'Active',
    lastActive: 'Today, 09:42 PKT',
    isOwner: false,
  },
  {
    id: 'ADM-04',
    initials: 'HN',
    name: 'Hamza Noor',
    email: 'hamza@emart.example',
    role: 'Support staff',
    status: 'Active',
    lastActive: 'Yesterday, 16:30 PKT',
    isOwner: false,
  },
  {
    id: 'ADM-05',
    initials: 'NH',
    name: 'Noor Hassan',
    email: 'noor@emart.example',
    role: 'Finance staff',
    status: 'Invited',
    lastActive: 'Not signed in yet',
    isOwner: false,
  },
  {
    id: 'ADM-06',
    initials: 'AR',
    name: 'Ali Raza',
    email: 'ali@emart.example',
    role: 'Operations staff',
    status: 'Suspended',
    lastActive: '03 Oct, 14:05 PKT',
    isOwner: false,
  },
];

export const INITIAL_COMMISSION_SETTINGS = {
  defaultCommissionRate: 12,
  enableOverrides: true,
  baseDeliveryFee: 100,
  distanceIncluded: 3,
  additionalDistanceRate: 25,
  enableFreeDeliveryThreshold: true,
  minOrderSubtotal: 3000,
  riderBaseCompensation: 160,
  riderDistanceIncluded: 3,
  riderAdditionalRate: 20,
};

export const INITIAL_COMMISSION_OVERRIDES = [
  {
    id: 'ovr-1',
    name: 'Groceries',
    type: 'Category',
    rate: 10,
  },
  {
    id: 'ovr-2',
    name: 'Fresh Mart',
    type: 'Vendor',
    rate: 8,
  },
];

export const INITIAL_NOTIFICATION_SETTINGS = {
  newVendorAlert: true,
  highValueOrderAlert: true,
  payoutRequestAlert: true,
  lowStockAlert: false,
  ticketEscalationAlert: true,
  dailySummaryDigest: true,
};

export const OPERATIONAL_NOTIFICATION_CATEGORIES = [
  {
    id: 'orders',
    title: 'Orders',
    description: 'New orders, cancellations and status changes',
    defaultInApp: true,
    defaultEmail: true,
    defaultPush: true,
  },
  {
    id: 'payments',
    title: 'Payments & Refunds',
    description: 'Payment confirmations and refund requests',
    defaultInApp: true,
    defaultEmail: true,
    defaultPush: false,
  },
  {
    id: 'vendors',
    title: 'Vendor Updates',
    description: 'Approvals, documents and profile changes',
    defaultInApp: true,
    defaultEmail: false,
    defaultPush: false,
  },
  {
    id: 'delivery',
    title: 'Delivery / Riders',
    description: 'Assignments, delays and delivery exceptions',
    defaultInApp: true,
    defaultEmail: false,
    defaultPush: true,
  },
  {
    id: 'support',
    title: 'Support Tickets',
    description: 'New tickets, replies and escalations',
    defaultInApp: true,
    defaultEmail: true,
    defaultPush: true,
  },
  {
    id: 'reports',
    title: 'Reports & Complaints',
    description: 'New reports and complaint updates',
    defaultInApp: true,
    defaultEmail: true,
    defaultPush: false,
  },
  {
    id: 'promotions',
    title: 'Promotions',
    description: 'Campaign reminders and promotional updates',
    defaultInApp: false,
    defaultEmail: false,
    defaultPush: false,
  },
];

export const INITIAL_OPERATIONAL_NOTIFICATIONS = OPERATIONAL_NOTIFICATION_CATEGORIES.reduce(
  (acc, cat) => {
    acc[cat.id] = {
      inApp: cat.defaultInApp,
      email: cat.defaultEmail,
      push: cat.defaultPush,
    };
    return acc;
  },
  {}
);

export const INITIAL_ADMIN_PROFILE = {
  displayName: 'Admin',
  phoneNumber: '+92 300 000 0000',
  email: 'owner@emart.example',
  role: 'Owner / Super Admin · Protected system role',
};

export const INITIAL_ACTIVE_SESSIONS = [
  {
    id: 'sess-1',
    device: 'Chrome · Windows',
    location: 'Karachi, Pakistan',
    time: 'Active now · 05 Oct, 10:30 PKT',
    isCurrent: true,
    type: 'desktop',
  },
  {
    id: 'sess-2',
    device: 'Firefox · Windows',
    location: 'Lahore, Pakistan',
    time: '05 Oct 2026, 16:20 PKT',
    isCurrent: false,
    type: 'desktop',
  },
  {
    id: 'sess-3',
    device: 'Safari · iPhone',
    location: 'Karachi, Pakistan',
    time: '04 Oct 2026, 11:05 PKT',
    isCurrent: false,
    type: 'mobile',
  },
];

export const PERMISSION_MODULES = [
  'Vendors',
  'Riders',
  'Customers',
  'Orders',
  'Products',
  'Categories',
  'Inventory',
  'Payouts',
  'Payments & Refunds',
  'POS',
  'Promotions',
  'Support Tickets',
  'Reports & Complaints',
  'Settings & admin access',
];

export const PERMISSION_ACTIONS = ['View', 'Create', 'Edit', 'Delete', 'Manage'];

export const INITIAL_ROLES_CONFIG = [
  {
    id: 'role-owner',
    name: 'Owner / Super Admin',
    membersCount: 1,
    memberText: '1 member',
    type: 'System role',
    isSystem: true,
    isOwner: true,
    description: 'Full immutable control over all marketplace systems, team members, financials and platform settings.',
    assignedText: 'Assigned to 1 member: Admin (you).',
    permissions: PERMISSION_MODULES.reduce((acc, mod) => {
      acc[mod] = {
        View: true,
        Create: mod !== 'Settings & admin access',
        Edit: mod !== 'Settings & admin access',
        Delete: mod !== 'Settings & admin access',
        Manage: true,
        isLocked: mod === 'Settings & admin access',
      };
      return acc;
    }, {}),
  },
  {
    id: 'role-admin',
    name: 'Admin',
    membersCount: 1,
    memberText: '1 member',
    type: 'System role',
    isSystem: true,
    isOwner: false,
    description: 'Comprehensive business operations management. Can manage vendors, products, orders, payouts and promotions.',
    assignedText: 'Assigned to 1 member: Bilal Ahmed.',
    permissions: PERMISSION_MODULES.reduce((acc, mod) => {
      const isSettings = mod === 'Settings & admin access';
      acc[mod] = {
        View: !isSettings,
        Create: !isSettings,
        Edit: !isSettings,
        Delete: false,
        Manage: !isSettings,
        isLocked: isSettings,
      };
      return acc;
    }, {}),
  },
  {
    id: 'role-operations',
    name: 'Operations staff',
    membersCount: 2,
    memberText: '2 members',
    type: 'Custom role',
    isSystem: false,
    isOwner: false,
    description: 'Handles day-to-day order and delivery operations. No financial or administrative access.',
    assignedText: 'Assigned to 2 members: Sana Ali (active) and Ali Raza (suspended). Saving updates permissions for this role; suspended access stays blocked.',
    permissions: {
      'Vendors': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Riders': { View: true, Create: false, Edit: true, Delete: false, Manage: false },
      'Customers': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Orders': { View: true, Create: true, Edit: true, Delete: false, Manage: false },
      'Products': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Categories': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Inventory': { View: true, Create: false, Edit: true, Delete: false, Manage: false },
      'Payouts': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Payments & Refunds': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'POS': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Promotions': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Support Tickets': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Reports & Complaints': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Settings & admin access': { View: false, Create: false, Edit: false, Delete: false, Manage: false, isLocked: true },
    },
  },
  {
    id: 'role-support',
    name: 'Support staff',
    membersCount: 1,
    memberText: '1 member',
    type: 'Custom role',
    isSystem: false,
    isOwner: false,
    description: 'Dedicated customer care, rider inquiries and support ticket resolution.',
    assignedText: 'Assigned to 1 member: Hamza Noor.',
    permissions: {
      'Vendors': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Riders': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Customers': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Orders': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Products': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Categories': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Inventory': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Payouts': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Payments & Refunds': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'POS': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Promotions': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Support Tickets': { View: true, Create: true, Edit: true, Delete: false, Manage: true },
      'Reports & Complaints': { View: true, Create: false, Edit: true, Delete: false, Manage: false },
      'Settings & admin access': { View: false, Create: false, Edit: false, Delete: false, Manage: false, isLocked: true },
    },
  },
  {
    id: 'role-finance',
    name: 'Finance staff',
    membersCount: 1,
    memberText: '1 invited',
    type: 'Custom role',
    isSystem: false,
    isOwner: false,
    description: 'Auditing payouts, vendor settlements, invoices and transaction histories.',
    assignedText: 'Assigned to 1 member: Noor Hassan (invited).',
    permissions: {
      'Vendors': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Riders': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Customers': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Orders': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Products': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Categories': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Inventory': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Payouts': { View: true, Create: true, Edit: true, Delete: false, Manage: true },
      'Payments & Refunds': { View: true, Create: true, Edit: true, Delete: false, Manage: true },
      'POS': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Promotions': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Support Tickets': { View: false, Create: false, Edit: false, Delete: false, Manage: false },
      'Reports & Complaints': { View: true, Create: false, Edit: false, Delete: false, Manage: false },
      'Settings & admin access': { View: false, Create: false, Edit: false, Delete: false, Manage: false, isLocked: true },
    },
  },
];
