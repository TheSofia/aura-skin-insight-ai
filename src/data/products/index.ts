
import { Product } from '@/types/product';
import { skincareProducts } from './skincare';
import { exfoliantsProducts } from './exfoliants';
import { premiumProducts } from './premium';
import { treatmentProducts } from './treatments';
import { specializedProducts } from './specialized';
import { spfProducts } from './spf';
import { naturalProducts } from './naturals';
import { supplementProducts } from './supplements';
import { toolsProducts } from './tools';

// Combined products catalog from all categories
export const allProducts: Product[] = [
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
  treatmentProducts,
  specializedProducts,
  spfProducts,
  naturalProducts,
  supplementProducts,
  toolsProducts
};
