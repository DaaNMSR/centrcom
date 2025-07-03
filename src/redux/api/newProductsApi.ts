import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FullProduct } from '../../../mock-server/data/newProducts.ts';
import { API_BASE_URL } from '../../../apiBaseUrl.ts';

export const newProductsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: builder => ({
    getNewProducts: builder.query<FullProduct[], void>({
      query: () => `new-products`,
    }),
  }),
});

export const { useGetNewProductsQuery } = newProductsApi;
