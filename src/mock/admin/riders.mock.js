import aliRazaImg from '@/assets/images/riders/ali_raza.jpg';
import cnicCardsImg from '@/assets/images/riders/cnic_cards.jpg';
import drivingLicenseImg from '@/assets/images/riders/driving_license.jpg';
import motorcycleImg from '@/assets/images/riders/motorcycle.jpg';

export const RIDER_STATS = [
  {
    id: 'total',
    title: 'Total Riders',
    value: '52',
    trend: '8%',
    trendUp: true,
    icon: 'ScooterIcon',
    borderColor: 'border-l-blue-500',
    iconBg: 'bg-blue-50 text-blue-500',
  },
  {
    id: 'active',
    title: 'Active Riders',
    value: '38',
    trend: '12%',
    trendUp: true,
    icon: 'UserIcon',
    borderColor: 'border-l-emerald-500',
    iconBg: 'bg-emerald-50 text-emerald-500',
  },
  {
    id: 'pending',
    title: 'Pending Approval',
    value: '5',
    trend: '17%',
    trendUp: true,
    icon: 'ClockIcon',
    borderColor: 'border-l-amber-500',
    iconBg: 'bg-amber-50 text-amber-500',
  },
  {
    id: 'suspended',
    title: 'Suspended',
    value: '4',
    trend: '20%',
    trendUp: false,
    icon: 'ShieldAlertIcon',
    borderColor: 'border-l-rose-500',
    iconBg: 'bg-rose-50 text-rose-500',
  },
];

export const PRIMARY_RIDERS = [
  {
    id: 'R01',
    code: '#R01',
    riderId: '#RDR-001',
    name: 'Ali Raza',
    fullName: 'Usama nasir',
    phone: '+92 300 1234567',
    email: 'aliraza@email.com',
    vehicle: 'Motorcycle',
    zone: 'Lahore, PK',
    location: 'Lahore, Pakistan',
    status: 'Pending',
    joinDate: 'Sep 25, 2026',
    appliedDate: 'Sep 25, 2026, 10:24 AM',
    ordersCount: 0,
    avatar: aliRazaImg,
    cnic: '35202-1234567-1',
    lastLogin: '—',
    vehicleDetails: {
      type: 'Motorcycle',
      brand: 'Honda',
      model: 'CG 125',
      registrationNo: 'LEA-1234',
      image: motorcycleImg,
    },
    documents: {
      profileImage: aliRazaImg,
      cnicCards: cnicCardsImg,
      drivingLicense: drivingLicenseImg,
    },
    deliveryStatus: 'On Delivery',
    performanceStats: {
      totalDeliveries: 248,
      completed: 230,
      completedRate: '92%',
      cancelled: 18,
      cancelledRate: '7%',
      totalEarnings: '$680.00',
      currentStatus: 'Online',
    },
    currentDelivery: {
      orderId: '#EMT2458',
      status: 'In Progress',
      startedTime: 'Started 12 mins ago',
      pickupLocation: 'Fresh Mart - Gulberg',
      pickupTime: '10:25 AM',
      dropoffLocation: 'Customer - Ali Khan (DHA Phase 5)',
      dropoffTime: '10:38 AM',
      expectedDelivery: '11:00 AM',
      eta: '12 mins away',
      customerName: 'Ali Khan',
      customerPhone: '+92 321 5556677',
      address: 'Street 4, Phase 5, DHA, Lahore',
      totalAmount: '$34.50',
    },
    recentDeliveries: [
      {
        id: '#EMT2455',
        customer: 'Sara Ahmed',
        location: 'Johar Town',
        status: 'Delivered',
        date: 'Sep 25, 10:12 AM',
        amount: '$24.50',
      },
      {
        id: '#EMT2454',
        customer: 'Usman Raza',
        location: 'DHA Phase 6',
        status: 'Delivered',
        date: 'Sep 25, 09:45 AM',
        amount: '$18.00',
      },
      {
        id: '#EMT2453',
        customer: 'Ayesha Malik',
        location: 'Gulberg',
        status: 'Delivered',
        date: 'Sep 24, 06:30 PM',
        amount: '$32.00',
      },
      {
        id: '#EMT2452',
        customer: 'Bilal Hussain',
        location: 'Model Town',
        status: 'Cancelled',
        date: 'Sep 24, 05:15 PM',
        amount: '$0.00',
      },
      {
        id: '#EMT2451',
        customer: 'Fiza Ali',
        location: 'Township',
        status: 'Delivered',
        date: 'Sep 24, 04:20 PM',
        amount: '$28.50',
      },
    ],
  },
  {
    id: 'R02',
    code: '#R02',
    riderId: '#RDR-002',
    name: 'Bilal Khan',
    fullName: 'Bilal Khan Afridi',
    phone: '+92 321 9876543',
    email: 'bilal.khan@email.com',
    vehicle: 'Motorcycle',
    zone: 'Karachi, PK',
    location: 'Karachi, Pakistan',
    status: 'Active',
    joinDate: 'Sep 23, 2026',
    appliedDate: 'Sep 20, 2026, 09:15 AM',
    ordersCount: 145,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    cnic: '42101-9876543-3',
    lastLogin: 'Today, 08:30 AM',
    vehicleDetails: {
      type: 'Motorcycle',
      brand: 'Yamaha',
      model: 'YBR 125',
      registrationNo: 'KHI-9821',
      image: motorcycleImg,
    },
    documents: {
      profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
      cnicCards: cnicCardsImg,
      drivingLicense: drivingLicenseImg,
    },
    deliveryStatus: 'On Delivery',
    performanceStats: {
      totalDeliveries: 145,
      completed: 139,
      completedRate: '95%',
      cancelled: 6,
      cancelledRate: '4%',
      totalEarnings: '$495.00',
      currentStatus: 'Online',
    },
    currentDelivery: {
      orderId: '#EMT2460',
      status: 'In Progress',
      startedTime: 'Started 8 mins ago',
      pickupLocation: 'Daily Mart - Clifton',
      pickupTime: '10:40 AM',
      dropoffLocation: 'Customer - Zaid Tariq (Defence Phase 2)',
      dropoffTime: '10:50 AM',
      expectedDelivery: '11:15 AM',
      eta: '10 mins away',
      customerName: 'Zaid Tariq',
      customerPhone: '+92 321 4455889',
      address: 'Sea View Road, Clifton, Karachi',
      totalAmount: '$42.00',
    },
    recentDeliveries: [
      {
        id: '#EMT2440',
        customer: 'Tariq Mehmood',
        location: 'Defence Phase 2',
        status: 'Delivered',
        date: 'Sep 24, 07:10 PM',
        amount: '$19.50',
      },
      {
        id: '#EMT2439',
        customer: 'Hira Mani',
        location: 'Clifton Block 4',
        status: 'Delivered',
        date: 'Sep 24, 05:20 PM',
        amount: '$25.00',
      },
    ],
  },
  {
    id: 'R03',
    code: '#R03',
    riderId: '#RDR-003',
    name: 'Usman Malik',
    fullName: 'Usman Malik',
    phone: '+92 333 4567890',
    email: 'usman.malik@email.com',
    vehicle: 'Bicycle',
    zone: 'Islamabad, PK',
    location: 'Islamabad, Pakistan',
    status: 'Active',
    joinDate: 'Sep 20, 2026',
    appliedDate: 'Sep 18, 2026, 02:40 PM',
    ordersCount: 98,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    cnic: '61101-1239874-5',
    lastLogin: 'Today, 09:10 AM',
    vehicleDetails: {
      type: 'Bicycle',
      brand: 'Phoenix',
      model: 'Roadster Pro',
      registrationNo: 'N/A',
      image: motorcycleImg,
    },
    documents: {
      profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80',
      cnicCards: cnicCardsImg,
      drivingLicense: drivingLicenseImg,
    },
    deliveryStatus: 'Available',
    performanceStats: {
      totalDeliveries: 98,
      completed: 94,
      completedRate: '96%',
      cancelled: 4,
      cancelledRate: '4%',
      totalEarnings: '$310.00',
      currentStatus: 'Online',
    },
    currentDelivery: null,
    recentDeliveries: [
      {
        id: '#EMT2422',
        customer: 'Nadia Qasim',
        location: 'F-10 Markaz',
        status: 'Delivered',
        date: 'Sep 23, 03:15 PM',
        amount: '$16.50',
      },
    ],
  },
  {
    id: 'R04',
    code: '#R04',
    riderId: '#RDR-004',
    name: 'Hassan Ali',
    fullName: 'Hassan Ali Raza',
    phone: '+92 300 7654321',
    email: 'hassan.ali@email.com',
    vehicle: 'Motorcycle',
    zone: 'Faisalabad, PK',
    location: 'Faisalabad, Pakistan',
    status: 'Pending',
    joinDate: 'Sep 15, 2026',
    appliedDate: 'Sep 15, 2026, 11:05 AM',
    ordersCount: 0,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    cnic: '33100-7654321-7',
    lastLogin: '—',
    vehicleDetails: {
      type: 'Motorcycle',
      brand: 'United',
      model: 'US 100',
      registrationNo: 'FSD-7712',
      image: motorcycleImg,
    },
    documents: {
      profileImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
      cnicCards: cnicCardsImg,
      drivingLicense: drivingLicenseImg,
    },
    deliveryStatus: 'Pending',
    performanceStats: {
      totalDeliveries: 0,
      completed: 0,
      completedRate: '0%',
      cancelled: 0,
      cancelledRate: '0%',
      totalEarnings: '$0.00',
      currentStatus: 'Offline',
    },
    currentDelivery: null,
    recentDeliveries: [],
  },
  {
    id: 'R05',
    code: '#R05',
    riderId: '#RDR-005',
    name: 'Ahmed Shah',
    fullName: 'Ahmed Shah Bukhari',
    phone: '+92 321 1234576',
    email: 'ahmed.shah@email.com',
    vehicle: 'Motorcycle',
    zone: 'Multan, PK',
    location: 'Multan, Pakistan',
    status: 'Suspended',
    joinDate: 'Sep 12, 2026',
    appliedDate: 'Sep 09, 2026, 04:30 PM',
    ordersCount: 67,
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    cnic: '36302-1234576-9',
    lastLogin: '3 days ago',
    vehicleDetails: {
      type: 'Motorcycle',
      brand: 'Honda',
      model: 'Pridor',
      registrationNo: 'MN-4491',
      image: motorcycleImg,
    },
    documents: {
      profileImage: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=80',
      cnicCards: cnicCardsImg,
      drivingLicense: drivingLicenseImg,
    },
    deliveryStatus: 'Suspended',
    performanceStats: {
      totalDeliveries: 67,
      completed: 58,
      completedRate: '86%',
      cancelled: 9,
      cancelledRate: '14%',
      totalEarnings: '$210.00',
      currentStatus: 'Suspended',
    },
    currentDelivery: null,
    recentDeliveries: [],
  },
  {
    id: 'R06',
    code: '#R06',
    riderId: '#RDR-006',
    name: 'Imran Haider',
    fullName: 'Imran Haider',
    phone: '+92 310 4563478',
    email: 'imran.haider@email.com',
    vehicle: 'Motorcycle',
    zone: 'Lahore, PK',
    location: 'Lahore, Pakistan',
    status: 'Active',
    joinDate: 'Sep 10, 2026',
    appliedDate: 'Sep 08, 2026, 10:00 AM',
    ordersCount: 120,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    cnic: '35201-4563478-1',
    lastLogin: 'Today, 07:45 AM',
    vehicleDetails: {
      type: 'Motorcycle',
      brand: 'Honda',
      model: 'CG 125',
      registrationNo: 'LHR-8823',
      image: motorcycleImg,
    },
    documents: {
      profileImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80',
      cnicCards: cnicCardsImg,
      drivingLicense: drivingLicenseImg,
    },
    deliveryStatus: 'On Delivery',
    performanceStats: {
      totalDeliveries: 120,
      completed: 115,
      completedRate: '95%',
      cancelled: 5,
      cancelledRate: '5%',
      totalEarnings: '$390.00',
      currentStatus: 'Online',
    },
    currentDelivery: null,
    recentDeliveries: [],
  },
  {
    id: 'R07',
    code: '#R07',
    riderId: '#RDR-007',
    name: 'Kamran Ali',
    fullName: 'Kamran Ali',
    phone: '+92 345 9876123',
    email: 'kamran.ali@email.com',
    vehicle: 'Bicycle',
    zone: 'Rawalpindi, PK',
    location: 'Rawalpindi, Pakistan',
    status: 'Active',
    joinDate: 'Sep 08, 2026',
    appliedDate: 'Sep 05, 2026, 01:20 PM',
    ordersCount: 85,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    cnic: '37405-9876123-5',
    lastLogin: 'Yesterday',
    vehicleDetails: {
      type: 'Bicycle',
      brand: 'Sohrab',
      model: 'Speedster',
      registrationNo: 'N/A',
      image: motorcycleImg,
    },
    documents: {
      profileImage: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
      cnicCards: cnicCardsImg,
      drivingLicense: drivingLicenseImg,
    },
    deliveryStatus: 'Available',
    performanceStats: {
      totalDeliveries: 85,
      completed: 82,
      completedRate: '96%',
      cancelled: 3,
      cancelledRate: '4%',
      totalEarnings: '$275.00',
      currentStatus: 'Online',
    },
    currentDelivery: null,
    recentDeliveries: [],
  },
  {
    id: 'R08',
    code: '#R08',
    riderId: '#RDR-008',
    name: 'Fahad Khan',
    fullName: 'Fahad Khan',
    phone: '+92 333 8943210',
    email: 'fahad.khan@email.com',
    vehicle: 'Motorcycle',
    zone: 'Karachi, PK',
    location: 'Karachi, Pakistan',
    status: 'Pending',
    joinDate: 'Sep 05, 2026',
    appliedDate: 'Sep 05, 2026, 03:50 PM',
    ordersCount: 0,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    cnic: '42301-8943210-7',
    lastLogin: '—',
    vehicleDetails: {
      type: 'Motorcycle',
      brand: 'Super Power',
      model: 'SP 70',
      registrationNo: 'KHI-3310',
      image: motorcycleImg,
    },
    documents: {
      profileImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
      cnicCards: cnicCardsImg,
      drivingLicense: drivingLicenseImg,
    },
    deliveryStatus: 'Pending',
    performanceStats: {
      totalDeliveries: 0,
      completed: 0,
      completedRate: '0%',
      cancelled: 0,
      cancelledRate: '0%',
      totalEarnings: '$0.00',
      currentStatus: 'Offline',
    },
    currentDelivery: null,
    recentDeliveries: [],
  },
  {
    id: 'R09',
    code: '#R09',
    riderId: '#RDR-009',
    name: 'Daniyal Ahmed',
    fullName: 'Daniyal Ahmed',
    phone: '+92 310 7889541',
    email: 'daniyal.ahmed@email.com',
    vehicle: 'Motorcycle',
    zone: 'Lahore, PK',
    location: 'Lahore, Pakistan',
    status: 'Active',
    joinDate: 'Sep 03, 2026',
    appliedDate: 'Aug 30, 2026, 12:15 PM',
    ordersCount: 110,
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80',
    cnic: '35202-7889541-3',
    lastLogin: 'Today, 06:30 AM',
    vehicleDetails: {
      type: 'Motorcycle',
      brand: 'Suzuki',
      model: 'GD 110S',
      registrationNo: 'LHR-7104',
      image: motorcycleImg,
    },
    documents: {
      profileImage: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&auto=format&fit=crop&q=80',
      cnicCards: cnicCardsImg,
      drivingLicense: drivingLicenseImg,
    },
    deliveryStatus: 'On Delivery',
    performanceStats: {
      totalDeliveries: 110,
      completed: 104,
      completedRate: '94%',
      cancelled: 6,
      cancelledRate: '6%',
      totalEarnings: '$360.00',
      currentStatus: 'Online',
    },
    currentDelivery: null,
    recentDeliveries: [],
  },
  {
    id: 'R10',
    code: '#R10',
    riderId: '#RDR-010',
    name: 'Saad Ullah',
    fullName: 'Saad Ullah Marwat',
    phone: '+92 321 8876234',
    email: 'saadullah@email.com',
    vehicle: 'Motorcycle',
    zone: 'Peshawar, PK',
    location: 'Peshawar, Pakistan',
    status: 'Suspended',
    joinDate: 'Sep 01, 2026',
    appliedDate: 'Aug 28, 2026, 11:45 AM',
    ordersCount: 42,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    cnic: '17301-8876234-9',
    lastLogin: '5 days ago',
    vehicleDetails: {
      type: 'Motorcycle',
      brand: 'Crown',
      model: 'CR 70',
      registrationNo: 'PSH-9011',
      image: motorcycleImg,
    },
    documents: {
      profileImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
      cnicCards: cnicCardsImg,
      drivingLicense: drivingLicenseImg,
    },
    deliveryStatus: 'Suspended',
    performanceStats: {
      totalDeliveries: 42,
      completed: 35,
      completedRate: '83%',
      cancelled: 7,
      cancelledRate: '17%',
      totalEarnings: '$135.00',
      currentStatus: 'Suspended',
    },
    currentDelivery: null,
    recentDeliveries: [],
  },
];

// Additional riders to populate pages 2-6 (total 52 riders)
export const EXTRA_RIDERS = Array.from({ length: 42 }).map((_, index) => {
  const num = index + 11;
  const cities = ['Lahore, PK', 'Karachi, PK', 'Islamabad, PK', 'Faisalabad, PK', 'Multan, PK', 'Rawalpindi, PK', 'Peshawar, PK'];
  const city = cities[index % cities.length];
  const vehicles = ['Motorcycle', 'Motorcycle', 'Motorcycle', 'Bicycle'];
  const vehicle = vehicles[index % vehicles.length];
  const statuses = ['Active', 'Active', 'Active', 'Pending', 'Suspended'];
  const status = statuses[index % statuses.length];
  const names = [
    'Zubair Tariq', 'Hamza Qureshi', 'Adeel Arshad', 'Waqas Javed', 'Khurram Shehzad',
    'Mohsin Raza', 'Salman Butt', 'Arslan Tariq', 'Noman Aslam', 'Babar Azam',
    'Rizwan Ahmed', 'Shaheen Shah', 'Haris Rauf', 'Shadab Khan', 'Fakhar Zaman',
    'Imad Wasim', 'Sarfraz Ahmed', 'Wahab Riaz', 'Shoaib Malik', 'Yasir Shah',
    'Asif Ali', 'Faheem Ashraf', 'Hasan Ali', 'Mohammad Amir', 'Umar Gul',
    'Saeed Ajmal', 'Misbah ul Haq', 'Younis Khan', 'Inzamam ul Haq', 'Waqar Younis',
    'Wasim Akram', 'Shahid Afridi', 'Abdul Razzaq', 'Shoaib Akhtar', 'Azhar Mahmood',
    'Kamran Akmal', 'Danish Kaneria', 'Mohammad Hafeez', 'Taufeeq Umar', 'Imran Nazir',
    'Naved ul Hasan', 'Mohammad Sami'
  ];
  const name = names[index % names.length];

  return {
    id: `R${num}`,
    code: `#R${num}`,
    riderId: `#RDR-0${num}`,
    name,
    fullName: name,
    phone: `+92 30${index % 9} ${1000000 + index * 1234}`,
    email: `${name.toLowerCase().replace(/\s+/g, '.')}@email.com`,
    vehicle,
    zone: city,
    location: city.replace(', PK', ', Pakistan'),
    status,
    joinDate: `Aug ${Math.max(1, 28 - (index % 25))}, 2026`,
    appliedDate: `Aug ${Math.max(1, 25 - (index % 25))}, 2026, 10:00 AM`,
    ordersCount: status === 'Pending' ? 0 : Math.floor(Math.random() * 150) + 10,
    avatar: `https://images.unsplash.com/photo-${1500000000000 + index * 100000}?w=150&auto=format&fit=crop&q=80`,
    cnic: `35202-${1000000 + index * 999}-1`,
    lastLogin: status === 'Pending' ? '—' : '2 days ago',
    vehicleDetails: {
      type: vehicle,
      brand: vehicle === 'Motorcycle' ? 'Honda' : 'Phoenix',
      model: vehicle === 'Motorcycle' ? 'CD 70' : 'Classic',
      registrationNo: vehicle === 'Motorcycle' ? `LHR-${4000 + index}` : 'N/A',
      image: motorcycleImg,
    },
    documents: {
      profileImage: aliRazaImg,
      cnicCards: cnicCardsImg,
      drivingLicense: drivingLicenseImg,
    },
    deliveryStatus: status === 'Active' ? 'Available' : status,
    performanceStats: {
      totalDeliveries: status === 'Pending' ? 0 : Math.floor(Math.random() * 150) + 10,
      completed: status === 'Pending' ? 0 : Math.floor(Math.random() * 130) + 8,
      completedRate: status === 'Pending' ? '0%' : '94%',
      cancelled: status === 'Pending' ? 0 : 4,
      cancelledRate: status === 'Pending' ? '0%' : '6%',
      totalEarnings: status === 'Pending' ? '$0.00' : `$${Math.floor(Math.random() * 500) + 80}.00`,
      currentStatus: status === 'Active' ? 'Online' : 'Offline',
    },
    currentDelivery: null,
    recentDeliveries: [],
  };
});

export const INITIAL_RIDERS = [...PRIMARY_RIDERS, ...EXTRA_RIDERS];

let ridersStore = [...INITIAL_RIDERS];
let statsStore = [...RIDER_STATS];

export const getRiders = () => [...ridersStore];
export const getRiderStats = () => [...statsStore];
export const getRiderById = (id) =>
  ridersStore.find(
    (r) =>
      r.id?.toLowerCase() === id?.toLowerCase() ||
      r.riderId?.toLowerCase() === id?.toLowerCase() ||
      r.code?.toLowerCase() === id?.toLowerCase()
  );

export const approveRiderMock = (id) => {
  const rider = getRiderById(id);
  if (rider) {
    const prevStatus = rider.status;
    rider.status = 'Active';
    rider.deliveryStatus = 'On Delivery';
    if (prevStatus === 'Pending') {
      const p = statsStore.find((s) => s.id === 'pending');
      const a = statsStore.find((s) => s.id === 'active');
      if (p) p.value = String(Math.max(0, Number(p.value) - 1));
      if (a) a.value = String(Number(a.value) + 1);
    }
  }
  return rider;
};

export const rejectRiderMock = (id, reason) => {
  const rider = getRiderById(id);
  if (rider) {
    const prevStatus = rider.status;
    rider.status = 'Rejected';
    rider.rejectionReason = reason;
    if (prevStatus === 'Pending') {
      const p = statsStore.find((s) => s.id === 'pending');
      if (p) p.value = String(Math.max(0, Number(p.value) - 1));
    }
  }
  return rider;
};

export const suspendRiderMock = (id) => {
  const rider = getRiderById(id);
  if (rider) {
    const prevStatus = rider.status;
    rider.status = 'Suspended';
    rider.deliveryStatus = 'Suspended';
    if (prevStatus === 'Active') {
      const s = statsStore.find((s) => s.id === 'suspended');
      const a = statsStore.find((s) => s.id === 'active');
      if (s) s.value = String(Number(s.value) + 1);
      if (a) a.value = String(Math.max(0, Number(a.value) - 1));
    }
  }
  return rider;
};

export const activateRiderMock = (id) => {
  const rider = getRiderById(id);
  if (rider) {
    const prevStatus = rider.status;
    rider.status = 'Active';
    rider.deliveryStatus = 'Available';
    if (prevStatus === 'Suspended') {
      const s = statsStore.find((s) => s.id === 'suspended');
      const a = statsStore.find((s) => s.id === 'active');
      if (s) s.value = String(Math.max(0, Number(s.value) - 1));
      if (a) a.value = String(Number(a.value) + 1);
    }
  }
  return rider;
};

export const addRiderMock = (newRider) => {
  ridersStore = [newRider, ...ridersStore];
  const t = statsStore.find((s) => s.id === 'total');
  if (t) t.value = String(Number(t.value) + 1);
  if (newRider.status === 'Pending') {
    const p = statsStore.find((s) => s.id === 'pending');
    if (p) p.value = String(Number(p.value) + 1);
  }
  return newRider;
};

export default INITIAL_RIDERS;

