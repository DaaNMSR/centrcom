import styles from './SliderDots.module.scss';

interface SliderDotsProps {
  currentSlide: number;
  totalSlides: number;
}

const SliderDots: React.FC<SliderDotsProps> = ({ currentSlide, totalSlides }) => (
  <div className={styles.dotsContainer}>
    {Array.from({ length: totalSlides }).map((_, index) => (
      <div key={index} className={`${styles.dot} ${currentSlide === index ? styles.activeDot : ''}`} />
    ))}
  </div>
);

export default SliderDots;
