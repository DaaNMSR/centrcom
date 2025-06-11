import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CatalogCategory } from '../../../mock-server/data/catalogCategories.ts';

export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: builder => ({
    getCategoryNames: builder.query<{ name: string }[], void>({ query: () => `categories/names` }),
    getSubCategoriesByName: builder.query<CatalogCategory, string>({
      query: name => `categories/${name}`,
    }),
    getCategoryNamesImages: builder.query<{ name: string; image: string }[], void>({
      query: () => 'categories/names-images',
    }),
  }),
});

export const { useGetCategoryNamesQuery, useGetSubCategoriesByNameQuery, useGetCategoryNamesImagesQuery } =
  categoriesApi;
