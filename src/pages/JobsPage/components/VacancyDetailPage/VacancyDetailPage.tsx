import { useParams } from 'react-router-dom';
import styles from './VacancyDetailPage.module.scss';
import { PageNotFound } from '../../../../components/PageNotFound';
import { Button } from '../../../../UI/Button';
import { ListDescription } from '../../../../components/ListDescription';
import { VacancyModal } from '../VacancyModal';
import { openModal } from '../../../../redux/reducers/modalSlice';
import { useAppDispatch } from '../../../../redux/hooks';
import { useGetVacancyDetailsByIdQuery } from '../../../../redux/api/vacanciesDetailsApi.ts';
import { useGetVacanciesShortQuery } from '../../../../redux/api/vacanciesShortApi.ts';

export const VacancyDetailPage = () => {
  const { vacancyId } = useParams();
  const dispatch = useAppDispatch();

  const { data: vacancy, isLoading, isError } = useGetVacancyDetailsByIdQuery(Number(vacancyId));
  const { data: vacanciesShort } = useGetVacanciesShortQuery();

  if (isLoading) return <p>Загрузка...</p>;
  if (isError || !vacancy) return <PageNotFound />;

  const vacancyWages = vacanciesShort?.find(v => v.id === Number(vacancyId));

  return (
    <div className={styles.container}>
      <div className={styles.detailContainer}>
        <h1 className={styles.detailTitle}>{vacancy.title}</h1>
        <div>
          <h3 className={styles.subTitle}>Детали</h3>
          <ul className={styles.detailsList}>
            {Object.entries(vacancy.details).map(([label, value]) => (
              <li key={label} className={styles.detailsItem}>
                <span className={styles.detailsItemTitle}>{label}:</span> <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={styles.subTitle}>Расположение</h3>
          <span className={styles.location}>{vacancy.location}</span>
        </div>
        <div>
          <h3 className={styles.subTitle}>Описание</h3>
          {vacancy.description.map((line, i) => (
            <p className={styles.descriptionLine} key={i}>
              {line}
            </p>
          ))}
        </div>
        <ListDescription listContent={{ mainTitle: vacancy.mainTitle, lists: vacancy.lists }} />
        <ListDescription listContent={{ mainTitle: vacancy.subTitle, lists: vacancy.subLists }} />
      </div>
      <div className={styles.moreDetails}>
        <p className={styles.wages}>
          {vacancyWages?.wages?.length === 1
            ? `${vacancyWages.wages[0]} ₽`
            : `${vacancyWages?.wages?.[0]} — ${vacancyWages?.wages?.[1]} ₽`}
        </p>
        <div className={styles.linksBlock}>
          <Button variant="yellow" onClick={() => dispatch(openModal(String(vacancy.id)))}>
            Откликнуться
          </Button>
          <Button>
            <a href="https://www.avito.ru/" target="_blank" rel="noopener noreferrer">
              Вакансия на авито
            </a>
          </Button>
          <Button variant="ghost">
            <a href="tel:8(906)899-99-89">8(906)899-99-89</a>
          </Button>
        </div>
      </div>
      <VacancyModal />
    </div>
  );
};
