import { categoryProducts } from './categoryProducts';

export interface FullProduct {
  id: number;
  name: string;
  article: string;
  hit: boolean;
  new: boolean;
  price: string;
  description: string;
  image: string[];
  specifications: { title: string; value: string }[];
  availability: {
    pravda: number;
    kosorotova: number;
  };
  creditAvailable: boolean;
  createdAt?: string;
  popularity?: number;
  category?: string;
}

export const newProducts: FullProduct[] = [];

for (const category of Object.keys(categoryProducts)) {
  const product = categoryProducts[category].find(p => p.new);
  if (product) {
    newProducts.push(product);
  }

  if (newProducts.length >= 4) break;
}
