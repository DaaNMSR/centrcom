import styles from './JobsPage.module.scss';
import { VacancyModal } from './components/VacancyModal';
import { useGetVacanciesShortQuery } from '../../redux/api/vacanciesShortApi.ts';
import { Vacancy } from './components/Vacancy';

export const JobsPage = () => {
  const { data: vacanciesShort } = useGetVacanciesShortQuery();

  return (
    <div className={styles.container}>
      <div className={styles.vacanciesWrapper}>
        {vacanciesShort?.map(vacancy => <Vacancy vacancy={vacancy} />)}
      </div>
      <VacancyModal />
    </div>
  );
};
