import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product } from '../../../mock-server/data/product.ts';

export const productsApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: builder => ({
    getProductById: builder.query<Product, number>({ query: id => `products/${id}` }),
  }),
});

export const { useGetProductByIdQuery } = productsApi;
