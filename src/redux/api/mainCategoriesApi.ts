import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_BASE_URL } from '../../../apiBaseUrl.ts';

export interface Category {
  description: string;
  imagePath: string;
  shortCategory: string;
}

export const mainCategoriesApi = createApi({
  reducerPath: 'mainCategoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: builder => ({
    getMainCategoryNames: builder.query<Category[], void>({
      query: () => `main-categories`,
    }),
  }),
});

export const { useGetMainCategoryNamesQuery } = mainCategoriesApi;
