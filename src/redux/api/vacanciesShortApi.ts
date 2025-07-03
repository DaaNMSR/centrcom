import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Vacancy } from '../../../mock-server/data/vacanciesShort.ts';
import { API_BASE_URL } from '../../../apiBaseUrl.ts';

export const vacanciesShortApi = createApi({
  reducerPath: 'vacanciesShortApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: builder => ({
    getVacanciesShort: builder.query<Vacancy[], void>({
      query: () => 'vacancies-short',
    }),
  }),
});

export const { useGetVacanciesShortQuery } = vacanciesShortApi;
