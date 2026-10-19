import homepageFreshImg from '@/assets/images/promotions/homepage-fresh.jpg';
import fruitsVegetablesImg from '@/assets/images/promotions/fruits-vegetables.jpg';

export const BANNER_PLACEMENTS = [
  'All placements',
  'Homepage',
  'Category Page',
];

export const BANNER_STATUSES = [
  'All statuses',
  'Active',
  'Disabled',
];

export const BANNER_CATEGORIES = [
  'Fruits & Vegetables',
  'Groceries',
  'Meat & Seafood',
  'Beverages',
  'Dairy & Breakfast',
  'Bakery & Snacks',
];

export const INITIAL_BANNERS = [
  {
    id: 'BNR-1',
    placement: 'Homepage',
    category: '',
    image: homepageFreshImg,
    imageFileName: 'homepage-fresh.jpg',
    imageDimensions: '1200 × 600 px',
    title: 'Fresh groceries, delivered to your door',
    description:
      'Stock up on everyday essentials and farm-fresh favourites, all in one convenient shop.',
    ctaText: 'Shop now',
    ctaLink: '/shop',
    status: 'Active',
    enabled: true,
  },
  {
    id: 'BNR-2',
    placement: 'Category Page',
    category: 'Fruits & Vegetables',
    image: fruitsVegetablesImg,
    imageFileName: 'fruits-vegetables.jpg',
    imageDimensions: '1200 × 600 px',
    title: 'Farm-fresh goodness, every day',
    description:
      'Discover seasonal fruits and crisp vegetables, handpicked for freshness and flavour.',
    ctaText: 'Explore fresh picks',
    ctaLink: '/category/fruits-vegetables',
    status: 'Active',
    enabled: true,
  },
];
