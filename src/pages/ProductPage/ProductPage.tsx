import { PageNotFound } from '../../components/PageNotFound';
import { useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import { ProductSection } from '../../components/ProductSection';
import { useGetProductByIdQuery } from '../../redux/api/categoryProductsApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetNewProductsQuery } from '../../redux/api/newProductsApi.ts';
import { ProductInfo } from './components/ProductInfo';

export const ProductPage = () => {
  const { shortCategory, id } = useParams<{ shortCategory: string; id: string }>();
  const { data: newProducts } = useGetNewProductsQuery();
  const {
    data: product,
    error,
    isLoading,
  } = useGetProductByIdQuery(shortCategory && id ? { shortCategory, id } : skipToken);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <PageNotFound />;
  if (!product) return <div>No product found</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.productMainTitle}>{product.name}</h1>
      <div className={styles.productInfo}>
        <div className={styles.productImage}>
          <img src={product.image[0]} alt={product.name} />
        </div>
        <ProductInfo product={product} />
      </div>
      <ProductSection products={newProducts ?? []} />
    </div>
  );
};
