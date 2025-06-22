import { PageNotFound } from '../../components/PageNotFound';
import { Link, useParams } from 'react-router-dom';
import styles from './ProductPage.module.scss';
import { Button } from '../../UI/Button';
import { ProductSection } from '../../components/ProductSection';
import { useGetProductByIdQuery } from '../../redux/api/categoryProductsApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { useGetNewProductsQuery } from '../../redux/api/newProductsApi.ts';

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
        <div className={styles.productInfoContainer}>
          <h2 className={styles.productName}>{product.name}</h2>
          <p className={styles.productArticle}>Артикул: {product.article}</p>
          {(product.new || product.hit) && (
            <div className={styles.productTags}>
              {!!product.new && <p className={styles.productNewTag}>Новое</p>}
              {!!product.hit && <p className={styles.productHitTag}>Хит продаж</p>}
            </div>
          )}
          <div className={styles.productBlock}>
            <div>
              <p className={styles.productPrice}>{product.price} ₽</p>
              <p className={styles.productPriceCredit}>
                или {Math.round(+product.price.replace(/\s/g, '') / 10)} ₽/мес.
              </p>
            </div>
            <div className={styles.productButtons}>
              <Button disabled={!product.creditAvailable}>В кредит</Button>
              <Button variant="yellow">В корзину</Button>
            </div>
          </div>
          <div className={styles.availability}>
            <h3 className={styles.availabilityTitle}>Наличие сейчас:</h3>
            <Link
              to="/"
              className={`${styles.availabilityLink} ${product.availability.pravda === 0 ? styles.availabilityLinkDisable : ''}`}
            >
              Ул Газеты Правды, 59 — {product.availability.pravda} шт
            </Link>
            <Link
              to="/"
              className={`${styles.availabilityLink} ${product.availability.kosorotova === 0 ? styles.availabilityLinkDisable : ''}`}
            >
              Ул. Косоротова 11 — {product.availability.kosorotova} шт
            </Link>
          </div>
          <p className={styles.productDescription}>{product.description}</p>
          <p className={styles.productSpecificationsTitle}>Характеристики:</p>
          {product.specifications.map(({ title, value }) => (
            <div className={styles.productSpecifications} key={title}>
              <span className={styles.productSpecification}>{title}</span>
              <span className={styles.productSpecificationsDots}></span>
              <span className={styles.productSpecification}>{value}</span>
            </div>
          ))}
        </div>
      </div>
      <ProductSection products={newProducts ?? []} />
    </div>
  );
};
