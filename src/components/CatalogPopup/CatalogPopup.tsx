import styles from './CatalogPopup.module.scss';
import { useState } from 'react';
import {
  useGetCategoryNamesImagesQuery,
  useGetSubCategoriesByNameQuery,
} from '../../redux/api/categoriesApi.ts';

export const CatalogPopup = () => {
  const [currentCategory, setCurrentCategory] = useState<string | null>('Телевизоры и аудиотехника');
  const { data: categories } = useGetCategoryNamesImagesQuery();
  const { data: selectedCategoryDetails } = useGetSubCategoriesByNameQuery(currentCategory ?? '', {
    skip: !currentCategory,
  });

  return (
    <div className={styles.popupWrapper}>
      <div className={styles.sidebar}>
        {categories?.map(({ name, image }) => (
          <div key={name} className={styles.category} onClick={() => setCurrentCategory(name)}>
            <img src={image} alt={name} className={styles.categoryImg} />
            <span>{name}</span>
          </div>
        ))}
      </div>
      <div className={styles.subCategories}>
        {selectedCategoryDetails?.subcategories.map((sub, i) => (
          <div key={i} className={styles.columnSubCategory}>
            <h4>{sub.name}</h4>
            <ul>
              {sub.subSubcategories.map((item, id) => (
                <li key={id}>{`${item.name} (${item.quantity})`}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
