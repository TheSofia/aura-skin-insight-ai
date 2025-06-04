
import { Product } from '@/types/product';
import { skincareProducts } from './skincare';
import { exfoliantsProducts } from './exfoliants';
import { premiumProducts } from './premium';
import { premiumLuxuryProducts } from './premiumLuxury';
import { treatmentProducts } from './treatments';
import { specializedProducts } from './specialized';
import { spfProducts } from './spf';
import { naturalProducts } from './naturals';
import { supplementProducts } from './supplements';
import { toolsProducts } from './tools';

// Combined products catalog from all categories - Knowledge Dataset aligned
export const allProducts: Product[] = [
  ...premiumLuxuryProducts, // Premium luxury products featured first
  ...skincareProducts,
  ...exfoliantsProducts,
  ...premiumProducts,
  ...treatmentProducts,
  ...specializedProducts,
  ...spfProducts,
  ...naturalProducts,
  ...supplementProducts,
  ...toolsProducts
];

// Export individual categories for specific use cases
export {
  skincareProducts,
  exfoliantsProducts,
  premiumProducts,
  premiumLuxuryProducts,
  treatmentProducts,
  specializedProducts,
  spfProducts,
  naturalProducts,
  supplementProducts,
  toolsProducts
};
