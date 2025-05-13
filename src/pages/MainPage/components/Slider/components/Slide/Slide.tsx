import React from 'react';
import { Link } from 'react-router-dom';
import SlideBackgroundImages from './components/SlideBackgroundImages/SlideBackgroundImages';
import styles from './Slide.module.css';

export interface SlideProps {
  slide: {
    id: number;
    title: string;
    description?: string;
    location?: string;
    address?: string;
    button?: { to: string; text: string };
    mainBackground?: string;
  };
  backgroundImages: {
    topLeft: string;
    bottomLeft: string;
    bottomRight: string;
  };
}

const Slide: React.FC<SlideProps> = ({ slide, backgroundImages }) => {
  return (
    <div className={`${slide.address ? styles.mainSlide : styles.slide}`}>
      <SlideBackgroundImages
        topLeft={backgroundImages.topLeft}
        bottomLeft={backgroundImages.bottomLeft}
        bottomRight={backgroundImages.bottomRight}
      />
      <div className={styles.slideInner}>
        <h2 className={`${slide.id === 1 ? styles.mainSlideTitle : styles.slideTitle}`}>{slide.title}</h2>
        {slide.description && <p className={styles.slideDescription}>{slide.description}</p>}
        {slide.location && <p className={styles.slideLocation}>{slide.location}</p>}
        {slide.address && <p className={styles.slideAddress}>{slide.address}</p>}
        {slide.button && (
          <Link className={styles.slideButton} to={slide.button.to}>
            {slide.button.text}
          </Link>
        )}
      </div>
      {slide.mainBackground && (
        <img src={slide.mainBackground} className={`${styles.slideBackground} ${styles.bottomRight}`} />
      )}
    </div>
  );
};

export default Slide;
