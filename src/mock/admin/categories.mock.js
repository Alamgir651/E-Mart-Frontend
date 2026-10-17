import applesImg from '@/assets/images/products/apples.jpg';
import bananasImg from '@/assets/images/products/bananas.jpg';
import milkImg from '@/assets/images/orders/milk.jpg';
import breadImg from '@/assets/images/orders/bread.jpg';
import boxImg from '@/assets/images/box.png';

let categoriesMemoryStore = [
  {
    id: 'cat-1',
    name: 'Fruits & Vegetables',
    description: 'Fresh produce and everyday greens',
    productsCount: 620,
    status: 'Active',
    image: applesImg,
  },
  {
    id: 'cat-2',
    name: 'Meat & Seafood',
    description: 'Fresh cuts, poultry and seafood',
    productsCount: 340,
    status: 'Active',
    image: breadImg,
  },
  {
    id: 'cat-3',
    name: 'Groceries',
    description: 'Pantry staples and cooking essentials',
    productsCount: 760,
    status: 'Active',
    image: milkImg,
  },
  {
    id: 'cat-4',
    name: 'Beverages',
    description: 'Juices, soft drinks and refreshments',
    productsCount: 280,
    status: 'Active',
    image: milkImg,
  },
  {
    id: 'cat-5',
    name: 'Household',
    description: 'Cleaning and home essentials',
    productsCount: 250,
    status: 'Inactive',
    image: boxImg,
  },
  {
    id: 'cat-6',
    name: 'Dairy',
    description: 'Milk, cheese and dairy essentials',
    productsCount: 230,
    status: 'Active',
    image: milkImg,
  },
  {
    id: 'cat-7',
    name: 'Seasonal Specials',
    description: 'No products or subcategories linked',
    productsCount: 0,
    status: 'Inactive',
    image: bananasImg,
  },
];

export const getCategories = () => [...categoriesMemoryStore];

export const addCategoryMock = (newCat) => {
  const item = {
    id: `cat-${Date.now()}`,
    name: newCat.name.trim(),
    description: newCat.description?.trim() || 'General product category',
    productsCount: 0,
    status: newCat.status || 'Active',
    image: newCat.image || applesImg,
  };
  categoriesMemoryStore = [item, ...categoriesMemoryStore];
  return item;
};

export const updateCategoryMock = (id, updatedFields) => {
  categoriesMemoryStore = categoriesMemoryStore.map((cat) => {
    if (cat.id === id) {
      return {
        ...cat,
        ...updatedFields,
        name: updatedFields.name !== undefined ? updatedFields.name.trim() : cat.name,
      };
    }
    return cat;
  });
  return categoriesMemoryStore.find((c) => c.id === id);
};

export const toggleCategoryStatusMock = (id) => {
  categoriesMemoryStore = categoriesMemoryStore.map((cat) => {
    if (cat.id === id) {
      return {
        ...cat,
        status: cat.status === 'Active' ? 'Inactive' : 'Active',
      };
    }
    return cat;
  });
  return categoriesMemoryStore.find((c) => c.id === id);
};

export const deleteCategoryMock = (id) => {
  const target = categoriesMemoryStore.find((c) => c.id === id);
  categoriesMemoryStore = categoriesMemoryStore.filter((c) => c.id !== id);
  return target;
};

export const getCategoryStats = () => {
  const total = categoriesMemoryStore.length;
  const active = categoriesMemoryStore.filter((c) => c.status === 'Active').length;
  const inactive = total - active;
  const totalProducts = categoriesMemoryStore.reduce((acc, c) => acc + (c.productsCount || 0), 0);

  return {
    total,
    active,
    inactive,
    totalProducts,
  };
};
