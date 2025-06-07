import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Vacancy } from '../../../mock-server/data/vacanciesShort.ts';

export const vacanciesShortApi = createApi({
  reducerPath: 'vacanciesShortApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: builder => ({
    getVacanciesShort: builder.query<Vacancy[], void>({
      query: () => 'vacancies-short',
    }),
  }),
});

export const { useGetVacanciesShortQuery } = vacanciesShortApi;
