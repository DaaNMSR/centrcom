import React from 'react';
import styles from './SlideBackgroundImages.module.scss';

interface SlideBackgroundImagesProps {
  topLeft: string;
  bottomLeft: string;
  bottomRight: string;
}

const SlideBackgroundImages: React.FC<SlideBackgroundImagesProps> = ({
  topLeft,
  bottomLeft,
  bottomRight,
}) => {
  return (
    <>
      {topLeft && <img src={topLeft} className={`${styles.slideBackground} ${styles.topLeft}`} />}
      {bottomLeft && <img src={bottomLeft} className={`${styles.slideBackground} ${styles.bottomLeft}`} />}
      {bottomRight && <img src={bottomRight} className={`${styles.slideBackground} ${styles.bottomRight}`} />}
    </>
  );
};

export default SlideBackgroundImages;
