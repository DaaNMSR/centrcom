import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import type { RootState } from '../../../../redux/store';
import { nextSlide } from '../../../../redux/reducers/sliderSlice';
import styles from './Slider.module.css';
import { Link } from 'react-router-dom';

const Slider: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentSlide, slides, backgroundImages } = useAppSelector((state: RootState) => state.slider);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(nextSlide());
    }, 3000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const slideStyle = {
    transform: `translateX(-${currentSlide * 100}%)`,
    transition: 'transform 0.5s ease-in-out',
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slidesWrapper} style={slideStyle}>
        {slides.map(slide => (
          <div key={slide.id} className={`${slide.address ? styles.mainSlide : styles.slide}`}>
            {backgroundImages?.topLeft && (
              <img src={backgroundImages.topLeft} className={`${styles.slideBackground} ${styles.topLeft}`} />
            )}
            {backgroundImages?.bottomLeft && (
              <img
                src={backgroundImages.bottomLeft}
                className={`${styles.slideBackground} ${styles.bottomLeft}`}
              />
            )}
            {backgroundImages?.bottomRight && (
              <img
                src={backgroundImages.bottomRight}
                className={`${styles.slideBackground} ${styles.bottomRight}`}
              />
            )}
            <div className={styles.slideInner}>
              <h2 className={`${slide.id === 1 ? styles.mainSlideTitle : styles.slideTitle}`}>
                {slide.title}
              </h2>
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
        ))}
      </div>
      <div className={styles.dotsContainer}>
        {slides.map((_, index) => (
          <div key={index} className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
