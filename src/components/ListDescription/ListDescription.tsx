import type { List } from '../../pages/CreditPage/const';
import styles from './ListDescription.module.scss';
import React from 'react';

interface ListDescriptionProps {
  listContent: List;
}

export const ListDescription: React.FC<ListDescriptionProps> = ({ listContent }) => {
  return (
    <div>
      {listContent.mainTitle && <h2 className={styles.mainTitle}>{listContent.mainTitle}</h2>}
      <ul className={styles.list}>
        {listContent.lists.map((item, index) => (
          <li key={index} className={styles.listItem}>
            <div className={styles.listMarker}></div> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
