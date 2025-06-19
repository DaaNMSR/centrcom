import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Category {
  description: string;
  imagePath: string;
  shortCategory: string;
}

export const mainCategoriesApi = createApi({
  reducerPath: 'mainCategoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: builder => ({
    getMainCategoryNames: builder.query<Category[], void>({
      query: () => `main-categories`,
    }),
  }),
});

export const { useGetMainCategoryNamesQuery } = mainCategoriesApi;
