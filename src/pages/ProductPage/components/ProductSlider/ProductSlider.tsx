import React, { useState, useRef, useEffect } from 'react';
import styles from './ProductSlider.module.scss';

interface ProductSliderProps {
  images: string[];
  alt: string;
}

export const ProductSlider: React.FC<ProductSliderProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    handleSwipeEnd();
  };

  const handleSwipeEnd = () => {
    const delta = touchStartX.current - touchEndX.current;

    if (delta > 50 && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (delta < -50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.slider}>
      <div
        className={styles.sliderWindow}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleSwipeEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className={styles.sliderTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((src, idx) => (
            <img key={idx} src={src} alt={`${alt} ${idx + 1}`} className={styles.slide} draggable={false} />
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
};
