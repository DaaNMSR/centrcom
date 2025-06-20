import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const filtersApi = createApi({
  reducerPath: 'filtersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: builder => ({
    getCategoryFilters: builder.query({
      query: category => `filters/${category}`,
    }),
  }),
});

export const { useGetCategoryFiltersQuery } = filtersApi;
