import React, { useCallback, useEffect, useRef } from 'react';
import { Button } from '../../../../UI/Button';
import CloseIcon from '../../../Header/components/HeaderBottom/images/mySvg/CloseIcon';
import styles from './FormSuccessModal.module.scss';

interface FormSuccessModalProps {
  description?: 'sellPage' | 'repairPage' | 'jobsPage';
  onClose: () => void;
}

export const FormSuccessModal: React.FC<FormSuccessModalProps> = ({ description = 'sellPage', onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

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
  }, [handleEsc, handleOutsideClick]);

  return (
    <div className={styles.formModalWrapper}>
      <div className={styles.formModal} ref={modalRef}>
        <h2 className={styles.formModalTitle}>
          {description === 'jobsPage' ? 'Ваш отклик оставлен!' : 'Заявка отправлена!'}
        </h2>
        <p className={styles.formModalTitleDescription}>
          Мы с вами свяжемся в течении 24 часов
          {description === 'jobsPage' ? ' и договоримся на интревью' : ' и сообщим'}
          {description === 'sellPage' && ' готовы ли мы купить товар'}
          {description === 'repairPage' && ' когда мы сможем забрать вашу технику для проведения диагностики'}
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
