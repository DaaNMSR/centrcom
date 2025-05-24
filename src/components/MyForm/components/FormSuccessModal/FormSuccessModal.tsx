import { useEffect, useRef } from 'react';
import { Button } from '../../../../UI/Button';
import CloseIcon from '../../../Header/components/HeaderBottom/images/mySvg/CloseIcon';
import styles from './FormSuccessModal.module.css';

interface FormSuccessModalProps {
  description?: 'sellPage' | 'repairPage';
  onClose: () => void;
}

export const FormSuccessModal: React.FC<FormSuccessModalProps> = ({ description = 'sellPage', onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('mousedown', handleOutsideClick);

    document.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = originalStyle;
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className={styles.formModalWrapper}>
      <div className={styles.formModal} ref={modalRef}>
        <h2 className={styles.formModalTitle}>Заявка отправлена!</h2>
        <p className={styles.formModalTitleDescription}>
          Мы с вами свяжемся в течении 24 часов и сообщим
          {description === 'sellPage'
            ? ' готовы ли мы купить товар'
            : ' когда мы сможем забрать вашу технику для проведения диагностики'}
        </p>
        <Button variant="yellow" onClick={onClose}>
          Хорошо
        </Button>
        <div className={styles.formModalCloseIcon} onClick={onClose}>
          <CloseIcon color="#667085" width="20" height="20" />
        </div>
      </div>
    </div>
  );
};
