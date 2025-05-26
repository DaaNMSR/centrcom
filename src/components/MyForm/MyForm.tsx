import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import React, { useState } from 'react';
import styles from './MyForm.module.scss';
import { Input } from '../../UI/Input';
import { Button } from '../../UI/Button';
import { RadioButton } from '../../UI/RadioButton';
import { Link } from 'react-router-dom';
import UploadIcon from './images/form-icon.svg';
import CloseIcon from './images/close.png';
import { FormSuccessModal } from './components/FormSuccessModal';
import { sellCards } from '../../pages/SellPage/const';
import { repairCards } from '../../pages/RepairPage/const';

interface MyFormProps {
  fileUpload?: boolean;
  header?: 'sellPage' | 'repairPage' | 'jobsPage';
  initialSelect?: string;
}

export const MyForm: React.FC<MyFormProps> = ({
  fileUpload = false,
  header = 'sellPage',
  initialSelect = '',
}) => {
  const [preview, setPreview] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const OPTIONS = [
    { value: '', label: 'Выберите тип техники' },
    ...(header === 'sellPage' ? sellCards : repairCards).map(card => ({
      value: card.title,
      label: card.title,
    })),
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Это поле обязательное, введите ваше имя!'),
    phone: Yup.string()
      .matches(
        /^(\+7|8)\s?\(?\d{3,4}\)?[\s-]?\d{2,3}[\s-]?\d{2,3}[\s-]?\d{0,3}$/,
        'Некорректный формат телефона',
      )
      .required('Это поле обязательное, введите ваш телефон!'),
    email: Yup.string().email('Неверный email').required('Это поле обязательное, введите вашу почту!'),
    type: Yup.string().required('Это поле обязательное, выберите тип техники!'),
    price: Yup.number()
      .typeError('Должно быть числом')
      .min(1, 'Цена должна быть больше 0')
      .required('Это поле обязательное, введите желаемую сумму!'),
    title: Yup.string().required('Это поле обязательное, введите полное название вашей техники!'),
    ...(fileUpload && {
      file: Yup.mixed()
        .required('Пожалуйста, загрузите фото устройства')
        .test(
          'fileFormat',
          'Неподдерживаемый формат файла',
          value => value instanceof File && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type),
        ),
    }),
    ...(header === 'repairPage' && {
      comment: Yup.string().required('Это поле обязательное, опишите вашу проблему!'),
    }),
  });

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (field: string, value: unknown) => void,
  ) => {
    const file = event.currentTarget.files?.[0];
    if (!file) return;

    setFieldValue('file', file);

    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <>
      {showModal && <FormSuccessModal description={header} onClose={() => setShowModal(false)} />}
      <Formik
        initialValues={{
          name: '',
          phone: '',
          email: '',
          type: initialSelect,
          price: '',
          title: '',
          comment: '',
          condition: 'new',
          file: null,
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setSubmitting(false);
          resetForm();
          setPreview(null);
          setShowModal(true);
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
          isSubmitting,
        }) => (
          <div className={styles.form}>
            <div className={styles.formHeader}>
              <h2 className={styles.formHeaderTitle}>
                {header === 'sellPage' ? 'Хотите продать технику?' : 'Нужен ремонт?'}
              </h2>
              <p className={styles.formHeaderDescription}>
                {header === 'sellPage'
                  ? 'Заполните форму и получите предварительную цену в течении 24 часов. Или напишите нам в удобный для вас мессенджер:'
                  : 'Заполните форму, мы проведем диагностику и все отремонтируем! Или напишите нам в удобный для вас мессенджер:'}{' '}
                <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
                ,{' '}
                <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
                ,{' '}
                <a href="https://www.viber.com/" target="_blank" rel="noopener noreferrer">
                  Viber
                </a>
              </p>
            </div>

            <Form>
              <h2 className={styles.formTitle}>Ваши данные</h2>
              <div className={styles.inputsFirstBlock}>
                <Input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Имя"
                  error={touched.name ? errors.name : undefined}
                  touched={touched.name}
                  label="Как вас зовут"
                />
                <Input
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="+7 (000) 000-00-00"
                  error={touched.phone ? errors.phone : undefined}
                  touched={touched.phone}
                  label="Телефон"
                />
                <Input
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="username@gmail.com"
                  error={touched.email ? errors.email : undefined}
                  touched={touched.email}
                  label="Email"
                />
              </div>

              <h2 className={styles.formTitle}>Информация об устройстве</h2>
              <div className={styles.inputsSecondBlock}>
                <Input
                  name="type"
                  type="select"
                  value={values.type}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.type ? errors.type : undefined}
                  touched={touched.type}
                  options={OPTIONS}
                  label="Тип техники"
                />
                <Input
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Желаемая сумма"
                  error={touched.price ? errors.price : undefined}
                  touched={touched.price}
                  label="Цена"
                />
              </div>

              <Input
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Полное название устройства"
                error={touched.title ? errors.title : undefined}
                touched={touched.title}
                label="Полное название"
              />

              {header === 'repairPage' && (
                <div className={styles.textAreaWrapper}>
                  <Input
                    type="textarea"
                    name="comment"
                    value={values.comment}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Опишите вашу проблему"
                    error={touched.comment ? errors.comment : undefined}
                    touched={touched.comment}
                    label="Ваш комментарий"
                  />
                </div>
              )}

              {fileUpload && (
                <>
                  <div className={styles.radioGroup}>
                    <RadioButton
                      name="condition"
                      label="Новое"
                      value="new"
                      checked={values.condition === 'new'}
                      onChange={() => setFieldValue('condition', 'new')}
                    />
                    <RadioButton
                      name="condition"
                      label="Б/у"
                      value="used"
                      checked={values.condition === 'used'}
                      onChange={() => setFieldValue('condition', 'used')}
                    />
                    <RadioButton
                      name="condition"
                      label="Неисправное"
                      value="broken"
                      checked={values.condition === 'broken'}
                      onChange={() => setFieldValue('condition', 'broken')}
                    />
                  </div>

                  <div
                    className={`${styles.fileUploadWrapper} ${
                      errors.file && touched.file ? styles.fileError : ''
                    }`}
                  >
                    <label className={styles.fileUpload}>
                      <input
                        type="file"
                        hidden
                        accept="image/gif,image/jpeg,image/png"
                        onChange={e => handleFileChange(e, setFieldValue)}
                        onBlur={() => setFieldTouched('file', true)}
                      />
                      <div className={styles.fileUploadContent}>
                        {preview ? (
                          <img src={preview} alt="Загруженное фото" className={styles.uploadedImage} />
                        ) : (
                          <>
                            <img src={UploadIcon} alt="upload" />
                            <p className={` ${errors.file && touched.file ? styles.fileErrorText : ''}`}>
                              Добавить фото (gif, jpg, png)
                            </p>
                          </>
                        )}
                      </div>
                    </label>

                    {preview && (
                      <button
                        type="button"
                        className={styles.removeFileButton}
                        onClick={() => {
                          setPreview(null);
                          setFieldValue('file', null);
                          setFieldTouched('file', false);
                        }}
                      >
                        <img src={CloseIcon} alt="удалить фото" />
                      </button>
                    )}

                    {errors.file && touched.file && <div className={styles.errorMessage}>{errors.file}</div>}
                  </div>
                </>
              )}

              <Button type="submit" variant="yellow" className={styles.submit} disabled={isSubmitting}>
                {header === 'sellPage' ? 'Продать' : 'Запросить диагностику'}
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
    </>
  );
};
