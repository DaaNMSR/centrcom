import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styles from './VacancyModal.module.css';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { closeModal } from '../../../../redux/reducers/modalSlice';
import { Input } from '../../../../UI/Input';
import { Button } from '../../../../UI/Button';
import CloseIcon from '../../../../components/Header/components/HeaderBottom/images/mySvg/CloseIcon';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Это поле обязательное, введите ваше имя!'),
  phone: Yup.string()
    .matches(
      /^(\+7|8)\s?\(?\d{3,4}\)?[\s-]?\d{2,3}[\s-]?\d{2,3}[\s-]?\d{0,3}$/,
      'Некорректный формат телефона',
    )
    .required('Это поле обязательное, введите ваш телефон!'),
});

export const VacancyModal = () => {
  const dispatch = useAppDispatch();
  const { isOpen, vacancyId } = useAppSelector(state => state.modal);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      dispatch(closeModal());
    }
  };

  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      dispatch(closeModal());
    }
  };

  useEffect(() => {
    if (isOpen) {
      const originalStyle = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    window.scrollTo(0, 0);
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEsc);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen]);

  if (!isOpen || !vacancyId) return null;
  return (
    <div className={styles.modalWrapper}>
      <div className={styles.modal} ref={modalRef}>
        <h2 className={styles.modalTitle}>Ваши данные</h2>
        <div className={styles.close} onClick={() => dispatch(closeModal())}>
          <CloseIcon width="20" height="20" color="rgba(102, 112, 133, 1)" />
        </div>
        <Formik
          initialValues={{ name: '', phone: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log({ values, vacancyId });
            setSubmitting(false);
            resetForm();
            dispatch(closeModal());
          }}
        >
          {({ values, handleChange, handleBlur, errors, touched }) => (
            <div className={styles.form}>
              <Form>
                <div className={styles.formInputs}>
                  <Input
                    name="name"
                    type="text"
                    label="Как вас зовут"
                    placeholder="Имя"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name ? errors.name : undefined}
                    touched={touched.name}
                  />
                  <Input
                    name="phone"
                    type="tel"
                    label="Телефон"
                    placeholder="+7 (000) 000-00-00"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.phone ? errors.phone : undefined}
                    touched={touched.phone}
                  />
                </div>
                <Button variant="yellow" type="submit">
                  Отправить
                </Button>
                <p className={styles.policyText}>
                  Нажимая на кнопку, вы соглашаетесь с{' '}
                  <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">
                    политикой конфиденциальности
                  </Link>
                </p>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
};
