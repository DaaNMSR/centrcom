import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { VacanciesDetails } from '../../../mock-server/data/vacanciesDetails.ts';

export const vacanciesDetailsApi = createApi({
  reducerPath: 'vacanciesDetailsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: builder => ({
    getVacancyDetailsById: builder.query<VacanciesDetails, number>({
      query: id => `vacancies-details/${id}`,
    }),
  }),
});

export const { useGetVacancyDetailsByIdQuery } = vacanciesDetailsApi;
