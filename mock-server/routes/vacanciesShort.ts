import { Router, Request, Response } from 'express';
import { vacanciesShort, Vacancy } from '../data/vacanciesShort';

const vacanciesShortRouter = Router();

vacanciesShortRouter.get('/', (req: Request, res: Response<Vacancy[]>): void => {
  res.json(vacanciesShort);
});

export default vacanciesShortRouter;
