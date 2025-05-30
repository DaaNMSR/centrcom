import { Link, useParams } from 'react-router-dom';
import styles from './VacancyDetailPage.module.css';
import { vacancyDescription, vacancyLists } from './const';
import { PageNotFound } from '../../../../components/PageNotFound';
import { Button } from '../../../../UI/Button';
import { ListDescription } from '../../../../components/ListDescription';
import { vacancies } from '../../const';
import { VacancyModal } from '../VacancyModal';
import { openModal } from '../../../../redux/reducers/modalSlice';
import { useAppDispatch } from '../../../../redux/hooks';

export const VacancyDetailPage = () => {
  const { vacancyId } = useParams();
  const vacancy = vacancies.find(v => v.id === Number(vacancyId));
  const dispatch = useAppDispatch();
  if (!vacancy) return <PageNotFound />;

  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <h1 className={styles.detailTitle}>{vacancy.title}</h1>
        <div>
          <h3 className={styles.subTitle}>Детали</h3>
          <ul className={styles.detailsList}>
            {Object.entries(vacancyDescription.details).map(([label, value]) => (
              <li key={label} className={styles.detailsItem}>
                <span className={styles.detailsItemTitle}>{label}:</span> <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.subTitle}>Расположение</h3>
          <span className={styles.location}>{vacancyDescription.location}</span>
        </div>
        <div>
          <h3 className={styles.subTitle}>Описание</h3>
          {vacancyDescription.description.map((line, i) => (
            <p className={styles.descriptionLine} key={i}>
              {line}
            </p>
          ))}
        </div>
        {vacancyLists.map((list, index) => (
          <ListDescription key={index} listContent={list} />
        ))}
      </div>
      <div className={styles.moreDetails}>
        <p className={styles.wages}>
          {vacancy.wages.length === 1
            ? `${vacancy.wages[0]}₽`
            : `${vacancy.wages[0]}₽ — ${vacancy.wages[1]}₽`}
        </p>
        <div className={styles.linksBlock}>
          <Button variant="yellow" onClick={() => dispatch(openModal(String(vacancy.id)))}>
            Откликнуться
          </Button>
          <Button>
            <Link to="https://www.avito.ru/" target="_blank">
              Вакансия на авито
            </Link>
          </Button>
          <Button variant="ghost">
            <Link to="tel:8(906)899-99-89">8(906)899-99-89</Link>
          </Button>
        </div>
      </div>
      <VacancyModal />
    </div>
  );
};
