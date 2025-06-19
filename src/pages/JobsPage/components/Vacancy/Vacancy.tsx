import styles from './Vacancy.module.scss';
import React, { Fragment } from 'react';
import { Button } from '../../../../UI/Button';
import { openModal } from '../../../../redux/reducers/modalSlice.ts';
import { useNavigate } from 'react-router-dom';
import type { Vacancy as VacancyType } from '../../../../../mock-server/data/vacanciesShort.ts';
import { useAppDispatch } from '../../../../redux/hooks.ts';

interface VacancyProps {
  vacancy: VacancyType;
}

export const Vacancy: React.FC<VacancyProps> = ({ vacancy }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.vacancy} key={vacancy.title}>
      <h2 className={styles.title}>{vacancy.title}</h2>
      <p className={styles.wages}>
        {vacancy.wages.length === 1 ? `${vacancy.wages[0]} ₽` : `${vacancy.wages[0]} — ${vacancy.wages[1]} ₽`}
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
  );
};
