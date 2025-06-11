import { Router, Request, Response } from 'express';
import { vacanciesDetails, VacanciesDetails } from '../data/vacanciesDetails';

const vacanciesDetailsRouter = Router();

vacanciesDetailsRouter.get('/', (req: Request, res: Response<VacanciesDetails[]>): void => {
  res.json(vacanciesDetails);
});

vacanciesDetailsRouter.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const vacancy = vacanciesDetails.find(v => v.id === id);

  if (vacancy) {
    res.json(vacancy);
  } else {
    res.status(404).json({ message: 'Вакансия не найдена' });
  }
});

export default vacanciesDetailsRouter;
