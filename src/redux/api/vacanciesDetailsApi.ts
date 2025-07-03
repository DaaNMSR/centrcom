import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { VacanciesDetails } from '../../../mock-server/data/vacanciesDetails.ts';
import { API_BASE_URL } from '../../../apiBaseUrl.ts';

export const vacanciesDetailsApi = createApi({
  reducerPath: 'vacanciesDetailsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: builder => ({
    getVacancyDetailsById: builder.query<VacanciesDetails, number>({
      query: id => `vacancies-details/${id}`,
    }),
  }),
});

export const { useGetVacancyDetailsByIdQuery } = vacanciesDetailsApi;
