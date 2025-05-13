import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import type { RootState } from '../../../../redux/store';
import { nextSlide } from '../../../../redux/reducers/sliderSlice';
import styles from './Slider.module.css';
import SliderDots from './components/SliderDots/SliderDots';
import Slide from './components/Slide/Slide';

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
          <Slide key={slide.id} slide={slide} backgroundImages={backgroundImages} />
        ))}
      </div>
      <SliderDots currentSlide={currentSlide} totalSlides={slides.length} />
    </div>
  );
};

export default Slider;
