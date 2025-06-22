import styles from './ProductList.module.scss';
import { ProductCard } from '../../../../components/ProductCard';
import type { FullProduct } from '../../../../../mock-server/data/newProducts.ts';
import React from 'react';

interface ProductListProps {
  categoryProducts?: {
    products?: FullProduct[];
  };
  viewType: 'grid' | 'list';
  shortCategory: string;
}

export const ProductList: React.FC<ProductListProps> = ({ categoryProducts, viewType, shortCategory }) => {
  return (
    <section className={viewType === 'grid' ? styles.productGrid : styles.productList}>
      {categoryProducts?.products?.map(product => (
        <ProductCard key={product.id} product={product} variant={viewType} shortCategory={shortCategory} />
      ))}
    </section>
  );
};
