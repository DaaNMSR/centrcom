import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FullProduct } from '../../../mock-server/data/newProducts.ts';

export const newProductsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: builder => ({
    getNewProducts: builder.query<FullProduct[], void>({
      query: () => `new-products`,
    }),
  }),
});

export const { useGetNewProductsQuery } = newProductsApi;
