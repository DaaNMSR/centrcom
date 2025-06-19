import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FullProduct } from '../../../mock-server/data/newProduct.ts';

export const productsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: builder => ({
    getProductById: builder.query<FullProduct, number>({ query: id => `products/${id}` }),
  }),
});

export const { useGetProductByIdQuery } = productsApi;
