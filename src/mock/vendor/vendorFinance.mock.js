export const FINANCE_METRICS = {
  totalSales: {
    value: '$5,420.00',
    change: '12% from last month',
    isPositive: true,
  },
  commissionFee: {
    value: '$542.00',
    subtext: '10% of sales',
  },
  netEarnings: {
    value: '$4,878.00',
    change: '15% from last month',
    isPositive: true,
  },
  pendingPayout: {
    value: '$1,250.00',
    subtext: 'Next payout: Sep 30',
  },
};

export const INITIAL_PAYOUT_BALANCE = {
  available: 1250.0,
  minimumAmount: 100.0,
  autoPayout: true,
  frequency: 'Every 7 days',
  nextPayoutDate: 'Sep 30, 2025',
};

export const INITIAL_BANK_ACCOUNT = {
  bankName: 'Allied Bank',
  accountTitle: 'Fresh Mart (Pvt) Ltd',
  accountNumber: '**** **** **** 4242',
  rawAccountNumber: '1234567890124242',
  iban: 'PK36ABPA0001234567890',
  isVerified: true,
};

export const EARNINGS_CHART_DATA = [
  { label: 'Sep 1', sales: 280, net: 170 },
  { label: 'Sep 5', sales: 420, net: 260 },
  { label: 'Sep 10', sales: 540, net: 360 },
  { label: 'Sep 15', sales: 390, net: 240 },
  { label: 'Sep 20', sales: 640, net: 430 },
  { label: 'Sep 25', sales: 780, net: 530 },
  { label: 'Sep 30', sales: 740, net: 510 },
];

export const PAYOUT_HISTORY = [
  {
    id: 'PAY-3982',
    date: 'Sep 15, 2025',
    amount: 1120.0,
    status: 'Paid',
    method: 'Bank Transfer',
    bank: 'Allied Bank (****4242)',
    timeline: [
      { step: 'Initiated', time: 'Sep 14, 2025 • 10:30 AM', completed: true },
      { step: 'Processing', time: 'Sep 14, 2025 • 11:15 AM', completed: true },
      { step: 'Completed', time: 'Sep 15, 2025 • 09:00 AM', completed: true },
    ],
    breakdown: [
      { description: 'Order Payment #EM1028', orderId: 'EM1028', amount: 350.0, type: 'credit' },
      { description: 'Order Payment #EM1025', orderId: 'EM1025', amount: 520.0, type: 'credit' },
      { description: 'Order Payment #EM1019', orderId: 'EM1019', amount: 400.0, type: 'credit' },
      { description: 'Commission Fee', orderId: '—', amount: -100.0, type: 'fee' },
      { description: 'Platform Fee', orderId: '—', amount: -50.0, type: 'fee' },
    ],
  },
  {
    id: 'PAY-3871',
    date: 'Sep 08, 2025',
    amount: 945.5,
    status: 'Paid',
    method: 'Bank Transfer',
    bank: 'Allied Bank (****4242)',
    timeline: [
      { step: 'Initiated', time: 'Sep 07, 2025 • 09:10 AM', completed: true },
      { step: 'Processing', time: 'Sep 07, 2025 • 10:00 AM', completed: true },
      { step: 'Completed', time: 'Sep 08, 2025 • 08:30 AM', completed: true },
    ],
    breakdown: [
      { description: 'Order Payment #EM1011', orderId: 'EM1011', amount: 1045.5, type: 'credit' },
      { description: 'Commission Fee', orderId: '—', amount: -80.0, type: 'fee' },
      { description: 'Platform Fee', orderId: '—', amount: -20.0, type: 'fee' },
    ],
  },
  {
    id: 'PAY-3760',
    date: 'Sep 01, 2025',
    amount: 1450.0,
    status: 'Paid',
    method: 'Bank Transfer',
    bank: 'Allied Bank (****4242)',
    timeline: [
      { step: 'Initiated', time: 'Aug 31, 2025 • 14:00 PM', completed: true },
      { step: 'Processing', time: 'Aug 31, 2025 • 15:30 PM', completed: true },
      { step: 'Completed', time: 'Sep 01, 2025 • 09:45 AM', completed: true },
    ],
    breakdown: [
      { description: 'Order Payment #EM1002', orderId: 'EM1002', amount: 1600.0, type: 'credit' },
      { description: 'Commission Fee', orderId: '—', amount: -120.0, type: 'fee' },
      { description: 'Platform Fee', orderId: '—', amount: -30.0, type: 'fee' },
    ],
  },
  {
    id: 'PAY-3659',
    date: 'Aug 25, 2025',
    amount: 890.0,
    status: 'Paid',
    method: 'Bank Transfer',
    bank: 'Allied Bank (****4242)',
    timeline: [
      { step: 'Initiated', time: 'Aug 24, 2025 • 11:00 AM', completed: true },
      { step: 'Processing', time: 'Aug 24, 2025 • 12:20 PM', completed: true },
      { step: 'Completed', time: 'Aug 25, 2025 • 10:15 AM', completed: true },
    ],
    breakdown: [
      { description: 'Order Payment #EM0991', orderId: 'EM0991', amount: 980.0, type: 'credit' },
      { description: 'Commission Fee', orderId: '—', amount: -70.0, type: 'fee' },
      { description: 'Platform Fee', orderId: '—', amount: -20.0, type: 'fee' },
    ],
  },
];
