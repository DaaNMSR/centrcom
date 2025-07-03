import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../../apiBaseUrl.ts';

export const filtersApi = createApi({
  reducerPath: 'filtersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: builder => ({
    getCategoryFilters: builder.query({
      query: category => `filters/${category}`,
    }),
  }),
});

export const { useGetCategoryFiltersQuery } = filtersApi;
