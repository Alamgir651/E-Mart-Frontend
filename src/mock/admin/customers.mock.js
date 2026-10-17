import aliKhanImg from '@/assets/images/customers/ali_khan.jpg';

export const CUSTOMER_STATS = [
  {
    id: 'total',
    title: 'Total Customers',
    value: '3,420',
    trend: '10%',
    trendUp: true,
    subtext: 'vs last month',
    icon: 'UsersIcon',
    iconBg: 'bg-emerald-50 text-emerald-600',
    borderColor: 'border-l-emerald-500',
  },
  {
    id: 'active',
    title: 'Active Customers',
    value: '2,856',
    trend: '12%',
    trendUp: true,
    subtext: 'vs last month',
    icon: 'UserIcon',
    iconBg: 'bg-blue-50 text-blue-600',
    borderColor: 'border-l-blue-500',
  },
  {
    id: 'new',
    title: 'New Customers',
    value: '420',
    trend: '18%',
    trendUp: true,
    subtext: 'vs last month',
    icon: 'TicketIcon',
    iconBg: 'bg-amber-50 text-amber-600',
    borderColor: 'border-l-amber-500',
  },
  {
    id: 'suspended',
    title: 'Inactive / Suspended',
    value: '144',
    trend: '6%',
    trendUp: false,
    subtext: 'vs last month',
    icon: 'BellIcon',
    iconBg: 'bg-rose-50 text-rose-600',
    borderColor: 'border-l-rose-500',
  },
];

export const PRIMARY_CUSTOMERS = [
  {
    id: '001',
    code: '#001',
    customerId: '#CUS-001',
    name: 'Ali Khan',
    fullName: 'Ali Khan',
    email: 'ali.khan@gmail.com',
    phone: '+92 300 1234567',
    location: 'Lahore, PK',
    fullLocation: 'Lahore, Pakistan',
    totalOrders: 24,
    totalSpent: '$520.00',
    status: 'Active',
    joinDate: 'Sep 25, 2026',
    avatar: aliKhanImg,
    savedAddressesCount: 3,
    savedCardsCount: 2,
    savedAddresses: [
      {
        id: 'addr-1',
        type: 'Home',
        isDefault: true,
        address: 'House 12, Main Street, Gulberg, Lahore, Pakistan',
      },
      {
        id: 'addr-2',
        type: 'Office',
        isDefault: false,
        address: 'Tech Tower, MM Alam Road, Lahore, Pakistan',
      },
      {
        id: 'addr-3',
        type: 'Other',
        isDefault: false,
        address: 'Apartment 5, DHA Phase 6, Lahore, Pakistan',
      },
    ],
    paymentMethods: [
      {
        id: 'card-1',
        type: 'Visa',
        last4: '4567',
        isDefault: true,
        expiry: '12/28',
      },
      {
        id: 'card-2',
        type: 'Mastercard',
        last4: '7890',
        isDefault: false,
        expiry: '08/27',
      },
    ],
    recentOrders: [
      {
        id: '#EMT2456',
        date: 'Sep 25, 2026',
        itemsCount: '5 items',
        total: '$45.50',
        status: 'In Progress',
        vendor: 'Ayesha mart',
      },
      {
        id: '#EMT2453',
        date: 'Sep 24, 2026',
        itemsCount: '3 items',
        total: '$32.00',
        status: 'Delivered',
        vendor: 'Ayesha mart',
      },
      {
        id: '#EMT2451',
        date: 'Sep 22, 2026',
        itemsCount: '7 items',
        total: '$68.00',
        status: 'Cancelled',
        vendor: 'Ayesha mart',
      },
      {
        id: '#EMT2448',
        date: 'Sep 20, 2026',
        itemsCount: '2 items',
        total: '$25.00',
        status: 'Delivered',
        vendor: 'Ayesha mart',
      },
      {
        id: '#EMT2442',
        date: 'Sep 18, 2026',
        itemsCount: '4 items',
        total: '$76.00',
        status: 'Delivered',
        vendor: 'Ayesha mart',
      },
      // Additional orders so pagination can display 24 total orders!
      {
        id: '#EMT2438',
        date: 'Sep 15, 2026',
        itemsCount: '3 items',
        total: '$28.50',
        status: 'Delivered',
        vendor: 'Fresh Mart',
      },
      {
        id: '#EMT2431',
        date: 'Sep 12, 2026',
        itemsCount: '6 items',
        total: '$52.00',
        status: 'Delivered',
        vendor: 'Daily Needs',
      },
      {
        id: '#EMT2425',
        date: 'Sep 09, 2026',
        itemsCount: '1 item',
        total: '$14.00',
        status: 'Delivered',
        vendor: 'Meat World',
      },
      {
        id: '#EMT2419',
        date: 'Sep 06, 2026',
        itemsCount: '4 items',
        total: '$39.00',
        status: 'Delivered',
        vendor: 'Green Farm',
      },
      {
        id: '#EMT2412',
        date: 'Sep 03, 2026',
        itemsCount: '5 items',
        total: '$48.50',
        status: 'Delivered',
        vendor: 'Ayesha mart',
      },
      {
        id: '#EMT2405',
        date: 'Aug 30, 2026',
        itemsCount: '2 items',
        total: '$19.00',
        status: 'Delivered',
        vendor: 'Daily Needs',
      },
      {
        id: '#EMT2398',
        date: 'Aug 27, 2026',
        itemsCount: '8 items',
        total: '$85.00',
        status: 'Delivered',
        vendor: 'Fresh Mart',
      },
      {
        id: '#EMT2390',
        date: 'Aug 24, 2026',
        itemsCount: '3 items',
        total: '$26.50',
        status: 'Delivered',
        vendor: 'Ayesha mart',
      },
      {
        id: '#EMT2382',
        date: 'Aug 20, 2026',
        itemsCount: '2 items',
        total: '$18.00',
        status: 'Cancelled',
        vendor: 'Meat World',
      },
      {
        id: '#EMT2375',
        date: 'Aug 17, 2026',
        itemsCount: '4 items',
        total: '$42.00',
        status: 'Delivered',
        vendor: 'Fresh Mart',
      },
      {
        id: '#EMT2368',
        date: 'Aug 14, 2026',
        itemsCount: '5 items',
        total: '$55.00',
        status: 'Delivered',
        vendor: 'Daily Needs',
      },
      {
        id: '#EMT2360',
        date: 'Aug 11, 2026',
        itemsCount: '3 items',
        total: '$31.00',
        status: 'Delivered',
        vendor: 'Ayesha mart',
      },
      {
        id: '#EMT2352',
        date: 'Aug 08, 2026',
        itemsCount: '1 item',
        total: '$12.50',
        status: 'Delivered',
        vendor: 'Green Farm',
      },
      {
        id: '#EMT2344',
        date: 'Aug 05, 2026',
        itemsCount: '6 items',
        total: '$64.00',
        status: 'Delivered',
        vendor: 'Fresh Mart',
      },
      {
        id: '#EMT2336',
        date: 'Aug 02, 2026',
        itemsCount: '4 items',
        total: '$38.00',
        status: 'Delivered',
        vendor: 'Daily Needs',
      },
      {
        id: '#EMT2328',
        date: 'Jul 30, 2026',
        itemsCount: '2 items',
        total: '$22.00',
        status: 'Delivered',
        vendor: 'Meat World',
      },
      {
        id: '#EMT2320',
        date: 'Jul 26, 2026',
        itemsCount: '5 items',
        total: '$49.50',
        status: 'Delivered',
        vendor: 'Ayesha mart',
      },
      {
        id: '#EMT2312',
        date: 'Jul 22, 2026',
        itemsCount: '3 items',
        total: '$29.00',
        status: 'Delivered',
        vendor: 'Fresh Mart',
      },
      {
        id: '#EMT2304',
        date: 'Jul 18, 2026',
        itemsCount: '4 items',
        total: '$36.50',
        status: 'Delivered',
        vendor: 'Daily Needs',
      },
    ],
  },
  {
    id: '002',
    code: '#002',
    customerId: '#CUS-002',
    name: 'Sara Ahmed',
    fullName: 'Sara Ahmed',
    email: 'sara.ahmed@gmail.com',
    phone: '+92 321 9876543',
    location: 'Karachi, PK',
    fullLocation: 'Karachi, Pakistan',
    totalOrders: 18,
    totalSpent: '$320.00',
    status: 'Active',
    joinDate: 'Sep 23, 2026',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    savedAddressesCount: 2,
    savedCardsCount: 1,
    savedAddresses: [
      { id: 'addr-s1', type: 'Home', isDefault: true, address: 'Bungalow 45, DHA Phase 5, Karachi, Pakistan' },
    ],
    paymentMethods: [
      { id: 'card-s1', type: 'Visa', last4: '9812', isDefault: true, expiry: '05/28' },
    ],
    recentOrders: [
      { id: '#EMT2450', date: 'Sep 23, 2026', itemsCount: '4 items', total: '$38.00', status: 'Delivered', vendor: 'Daily Needs' },
    ],
  },
  {
    id: '003',
    code: '#003',
    customerId: '#CUS-003',
    name: 'Usman Raza',
    fullName: 'Usman Raza',
    email: 'usman.raza@gmail.com',
    phone: '+92 333 4567890',
    location: 'Islamabad, PK',
    fullLocation: 'Islamabad, Pakistan',
    totalOrders: 12,
    totalSpent: '$180.00',
    status: 'Active',
    joinDate: 'Sep 20, 2026',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    savedAddressesCount: 2,
    savedCardsCount: 1,
    savedAddresses: [
      { id: 'addr-u1', type: 'Home', isDefault: true, address: 'Street 14, Sector F-8/2, Islamabad, Pakistan' },
    ],
    paymentMethods: [
      { id: 'card-u1', type: 'Mastercard', last4: '2219', isDefault: true, expiry: '09/27' },
    ],
    recentOrders: [
      { id: '#EMT2445', date: 'Sep 19, 2026', itemsCount: '3 items', total: '$24.00', status: 'Delivered', vendor: 'Fresh Mart' },
    ],
  },
  {
    id: '004',
    code: '#004',
    customerId: '#CUS-004',
    name: 'Ayesha Malik',
    fullName: 'Ayesha Malik',
    email: 'ayesha.malik@gmail.com',
    phone: '+92 300 7654321',
    location: 'Faisalabad, PK',
    fullLocation: 'Faisalabad, Pakistan',
    totalOrders: 32,
    totalSpent: '$680.00',
    status: 'Active',
    joinDate: 'Sep 18, 2026',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    savedAddressesCount: 3,
    savedCardsCount: 2,
    savedAddresses: [
      { id: 'addr-a1', type: 'Home', isDefault: true, address: 'Canal Road, Officers Colony, Faisalabad, Pakistan' },
    ],
    paymentMethods: [
      { id: 'card-a1', type: 'Visa', last4: '3341', isDefault: true, expiry: '11/29' },
    ],
    recentOrders: [
      { id: '#EMT2440', date: 'Sep 17, 2026', itemsCount: '6 items', total: '$58.00', status: 'Delivered', vendor: 'Green Farm' },
    ],
  },
  {
    id: '005',
    code: '#005',
    customerId: '#CUS-005',
    name: 'Bilal Hussain',
    fullName: 'Bilal Hussain',
    email: 'bilal.hussain@gmail.com',
    phone: '+92 322 1239876',
    location: 'Multan, PK',
    fullLocation: 'Multan, Pakistan',
    totalOrders: 7,
    totalSpent: '$95.00',
    status: 'Inactive',
    joinDate: 'Sep 15, 2026',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    savedAddressesCount: 1,
    savedCardsCount: 1,
    savedAddresses: [
      { id: 'addr-b1', type: 'Home', isDefault: true, address: 'Model Town, Bosan Road, Multan, Pakistan' },
    ],
    paymentMethods: [
      { id: 'card-b1', type: 'Mastercard', last4: '1092', isDefault: true, expiry: '03/26' },
    ],
    recentOrders: [],
  },
  {
    id: '006',
    code: '#006',
    customerId: '#CUS-006',
    name: 'Hamza Tariq',
    fullName: 'Hamza Tariq',
    email: 'hamza.tariq@gmail.com',
    phone: '+92 310 4567123',
    location: 'Rawalpindi, PK',
    fullLocation: 'Rawalpindi, Pakistan',
    totalOrders: 28,
    totalSpent: '$410.00',
    status: 'Active',
    joinDate: 'Sep 12, 2026',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    savedAddressesCount: 2,
    savedCardsCount: 1,
    savedAddresses: [
      { id: 'addr-h1', type: 'Home', isDefault: true, address: 'Bahria Town Phase 4, Rawalpindi, Pakistan' },
    ],
    paymentMethods: [
      { id: 'card-h1', type: 'Visa', last4: '7721', isDefault: true, expiry: '07/28' },
    ],
    recentOrders: [],
  },
  {
    id: '007',
    code: '#007',
    customerId: '#CUS-007',
    name: 'Zainab Noor',
    fullName: 'Zainab Noor',
    email: 'zainab.noor@gmail.com',
    phone: '+92 345 9876123',
    location: 'Lahore, PK',
    fullLocation: 'Lahore, Pakistan',
    totalOrders: 6,
    totalSpent: '$88.00',
    status: 'Active',
    joinDate: 'Sep 10, 2026',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    savedAddressesCount: 1,
    savedCardsCount: 1,
    savedAddresses: [
      { id: 'addr-z1', type: 'Home', isDefault: true, address: 'Johar Town Phase 2, Lahore, Pakistan' },
    ],
    paymentMethods: [
      { id: 'card-z1', type: 'Visa', last4: '5561', isDefault: true, expiry: '10/27' },
    ],
    recentOrders: [],
  },
  {
    id: '008',
    code: '#008',
    customerId: '#CUS-008',
    name: 'Ahmed Raza',
    fullName: 'Ahmed Raza',
    email: 'ahmed.raza@gmail.com',
    phone: '+92 312 6543210',
    location: 'Karachi, PK',
    fullLocation: 'Karachi, Pakistan',
    totalOrders: 15,
    totalSpent: '$250.00',
    status: 'Suspended',
    joinDate: 'Sep 08, 2026',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    savedAddressesCount: 2,
    savedCardsCount: 1,
    savedAddresses: [
      { id: 'addr-ar1', type: 'Home', isDefault: true, address: 'Clifton Block 2, Karachi, Pakistan' },
    ],
    paymentMethods: [
      { id: 'card-ar1', type: 'Mastercard', last4: '8830', isDefault: true, expiry: '04/26' },
    ],
    recentOrders: [],
  },
  {
    id: '009',
    code: '#009',
    customerId: '#CUS-009',
    name: 'Sana Iqbal',
    fullName: 'Sana Iqbal',
    email: 'sana.iqbal@gmail.com',
    phone: '+92 333 7896541',
    location: 'Islamabad, PK',
    fullLocation: 'Islamabad, Pakistan',
    totalOrders: 21,
    totalSpent: '$390.00',
    status: 'Active',
    joinDate: 'Sep 05, 2026',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    savedAddressesCount: 2,
    savedCardsCount: 2,
    savedAddresses: [
      { id: 'addr-si1', type: 'Home', isDefault: true, address: 'Sector G-11/3, Islamabad, Pakistan' },
    ],
    paymentMethods: [
      { id: 'card-si1', type: 'Visa', last4: '9920', isDefault: true, expiry: '01/29' },
    ],
    recentOrders: [],
  },
  {
    id: '010',
    code: '#010',
    customerId: '#CUS-010',
    name: 'Imran Ali',
    fullName: 'Imran Ali',
    email: 'imran.ali@gmail.com',
    phone: '+92 321 9871234',
    location: 'Peshawar, PK',
    fullLocation: 'Peshawar, Pakistan',
    totalOrders: 9,
    totalSpent: '$120.00',
    status: 'Active',
    joinDate: 'Sep 02, 2026',
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    savedAddressesCount: 1,
    savedCardsCount: 1,
    savedAddresses: [
      { id: 'addr-ia1', type: 'Home', isDefault: true, address: 'Hayatabad Phase 3, Peshawar, Pakistan' },
    ],
    paymentMethods: [
      { id: 'card-ia1', type: 'Mastercard', last4: '4410', isDefault: true, expiry: '06/27' },
    ],
    recentOrders: [],
  },
];

// Additional records to support pagination (total 3,420 customers)
export const EXTRA_CUSTOMERS = Array.from({ length: 40 }).map((_, index) => {
  const num = index + 11;
  const numFormatted = num < 100 ? `0${num}` : `${num}`;
  const cities = ['Lahore, PK', 'Karachi, PK', 'Islamabad, PK', 'Faisalabad, PK', 'Multan, PK', 'Rawalpindi, PK', 'Peshawar, PK'];
  const city = cities[index % cities.length];
  const statuses = ['Active', 'Active', 'Active', 'Active', 'Inactive', 'Suspended'];
  const status = statuses[index % statuses.length];
  const names = [
    'Farhan Akhtar', 'Marium Tariq', 'Danish Taimoor', 'Hania Amir', 'Bilal Abbas',
    'Yumna Zaidi', 'Fawad Khan', 'Mahira Khan', 'Atif Aslam', 'Sajal Aly',
    'Ahad Raza', 'Ayeza Khan', 'Humayun Saeed', 'Mehwish Hayat', 'Fahad Mustafa',
    'Maya Ali', 'Sheheryar Munawar', 'Sanam Saeed', 'Ali Zafar', 'Aima Baig',
    'Asim Azhar', 'Momina Mustehsan', 'Zahid Ahmed', 'Iqra Aziz', 'Yasir Hussain',
    'Kinza Hashmi', 'Imran Ashraf', 'Hiba Bukhari', 'Wahaj Ali', 'Kubra Khan',
    'Nabeel Zuberi', 'Ramsha Khan', 'Shahzad Sheikh', 'Saboor Aly', 'Affan Waheed',
    'Neelam Muneer', 'Junaid Khan', 'Areeba Habib', 'Feroze Khan', 'Alizeh Shah'
  ];
  const name = names[index % names.length];
  const orders = Math.floor(Math.random() * 30) + 1;
  const spent = (orders * (Math.floor(Math.random() * 25) + 15)).toFixed(2);

  return {
    id: numFormatted,
    code: `#${numFormatted}`,
    customerId: `#CUS-${numFormatted}`,
    name,
    fullName: name,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@gmail.com`,
    phone: `+92 30${index % 9} ${2000000 + index * 1432}`,
    location: city,
    fullLocation: city.replace(', PK', ', Pakistan'),
    totalOrders: orders,
    totalSpent: `$${spent}`,
    status,
    joinDate: `Aug ${Math.max(1, 28 - (index % 25))}, 2026`,
    avatar: `https://images.unsplash.com/photo-${1510000000000 + index * 100000}?w=150&auto=format&fit=crop&q=80`,
    savedAddressesCount: (index % 3) + 1,
    savedCardsCount: (index % 2) + 1,
    savedAddresses: [
      { id: `addr-e${index}`, type: 'Home', isDefault: true, address: `Street ${index + 2}, Sector 4, ${city.replace(', PK', '')}, Pakistan` }
    ],
    paymentMethods: [
      { id: `card-e${index}`, type: index % 2 === 0 ? 'Visa' : 'Mastercard', last4: `${1000 + index}`, isDefault: true, expiry: '12/28' }
    ],
    recentOrders: [
      { id: `#EMT${2400 - index}`, date: 'Aug 20, 2026', itemsCount: '3 items', total: `$${(orders * 8).toFixed(2)}`, status: 'Delivered', vendor: 'Fresh Mart' }
    ],
  };
});

export const INITIAL_CUSTOMERS = [...PRIMARY_CUSTOMERS, ...EXTRA_CUSTOMERS];

// In-memory store
let customersStore = [...INITIAL_CUSTOMERS];
let customerStatsStore = [...CUSTOMER_STATS];
export const TOTAL_CUSTOMERS_COUNT = 3420;

export const getCustomers = () => [...customersStore];
export const getCustomerStats = () => [...customerStatsStore];
export const getCustomerById = (id) =>
  customersStore.find(
    (c) =>
      c.id?.toLowerCase() === id?.toLowerCase() ||
      c.customerId?.toLowerCase() === id?.toLowerCase() ||
      c.code?.toLowerCase() === id?.toLowerCase() ||
      c.code?.replace('#', '')?.toLowerCase() === id?.toLowerCase()
  );

export const suspendCustomerMock = (id, reason) => {
  const customer = getCustomerById(id);
  if (customer) {
    customer.status = 'Suspended';
    customer.suspensionReason = reason;
  }
  return customer;
};

export const unsuspendCustomerMock = (id, reason) => {
  const customer = getCustomerById(id);
  if (customer) {
    customer.status = 'Active';
    customer.unsuspensionReason = reason;
  }
  return customer;
};

export const deleteCustomerMock = (id) => {
  const customer = getCustomerById(id);
  if (customer) {
    customersStore = customersStore.filter((c) => c.id !== customer.id);
  }
  return customer;
};

export default INITIAL_CUSTOMERS;
