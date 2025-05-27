import { categoriesPopup } from './const';
import styles from './CatalogPopup.module.scss';
import { useState } from 'react';

export const CatalogPopup = () => {
  const [currentCategory, setCurrentCategory] = useState(0);

  return (
    <div className={styles.popupWrapper}>
      <div className={styles.sidebar}>
        {categoriesPopup.map((category, index) => (
          <div key={index} className={styles.category} onClick={() => setCurrentCategory(index)}>
            <img src={category.imgPath} alt={category.title} className={styles.categoryImg} />
            <span>{category.title}</span>
          </div>
        ))}
      </div>
      <div className={styles.subCategories}>
        {categoriesPopup[currentCategory].subTitles.map((sub, i) => (
          <div key={i} className={styles.columnSubCategory}>
            <h4>{sub.subTitle}</h4>
            <ul>
              {sub.subDescription.map((item, id) => (
                <li key={id}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
