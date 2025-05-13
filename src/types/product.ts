
export type Product = {
  id: string;
  name: string;
  brand: string;
  description: string;
  url: string;
  saved: boolean;
  keywords?: string[]; // Keywords for filtering products based on user input
};
