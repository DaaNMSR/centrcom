import { useNavigate } from 'react-router-dom';
import { Button } from '../../UI/Button';
import styles from './JobsPage.module.scss';
import { useAppDispatch } from '../../redux/hooks';
import { openModal } from '../../redux/reducers/modalSlice';
import { VacancyModal } from './components/VacancyModal';
import { Fragment } from 'react';
import { useGetVacanciesShortQuery } from '../../redux/api/vacanciesShortApi.ts';

export const JobsPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data: vacanciesShort } = useGetVacanciesShortQuery();

  return (
    <div className={styles.container}>
      <div className={styles.vacanciesWrapper}>
        {vacanciesShort?.map(vacancy => (
          <div className={styles.vacancy} key={vacancy.title}>
            <h2 className={styles.title}>{vacancy.title}</h2>
            <p className={styles.wages}>
              {vacancy.wages.length === 1
                ? `${vacancy.wages[0]} ₽`
                : `${vacancy.wages[0]} — ${vacancy.wages[1]} ₽`}
            </p>
            <div className={styles.detailsWrapper}>
              {vacancy.details.map((detail, i) => (
                <Fragment key={i}>
                  <p>{detail}</p>
                  {detail !== vacancy.details[vacancy.details.length - 1] && <span>•</span>}
                </Fragment>
              ))}
            </div>
            <p className={styles.description}>{vacancy.description}</p>
            <div className={styles.buttons}>
              <Button size="md" onClick={() => navigate(`/jobs/${vacancy.id}`)}>
                Подробнее
              </Button>
              <Button size="md" variant="yellow" onClick={() => dispatch(openModal(String(vacancy.id)))}>
                Откликнуться
              </Button>
            </div>
          </div>
        ))}
      </div>
      <VacancyModal />
    </div>
  );
};
