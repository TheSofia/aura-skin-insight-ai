
export type Product = {
  id: string;
  productName: string;
  brand: string;
  keyIngredients: string[];
  useCase: string;
  bestFor: string[];
  solutionsOffered: string[];
  howToUse: string;
  imageUrl?: string;
  links: {
    us: string;
    eu?: string;
  };
  saved: boolean;
};
