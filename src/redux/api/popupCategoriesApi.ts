import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { CatalogCategory } from '../../../mock-server/data/popupCategories.ts';
import { API_BASE_URL } from '../../../apiBaseUrl.ts';

export const popupCategoriesApi = createApi({
  reducerPath: 'popupCategoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
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
  popupCategoriesApi;
