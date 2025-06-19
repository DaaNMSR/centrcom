import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { FullProduct } from '../../../mock-server/data/newProduct.ts';
import type { SortBy } from '../../pages/CategoryPage/components/SortPanel/SortPanel.tsx';

export const categoryProductsApi = createApi({
  reducerPath: 'categoryProductsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  endpoints: builder => ({
    getCategoryProducts: builder.query<
      { products: FullProduct[]; total: number },
      {
        shortCategory: string;
        page?: number;
        limit?: number;
        sortBy: SortBy;
      }
    >({
      query: ({ shortCategory, page = 1, limit = 15, sortBy }) => {
        const params = new URLSearchParams({
          page: String(page),
          limit: String(limit),
          sortBy,
        });

        params.set('sortBy', sortBy);

        return `/category/${shortCategory}?${params.toString()}`;
      },
      transformResponse: (response: FullProduct[], meta) => {
        const total = Number(meta?.response?.headers.get('X-Total-Count') || 0);
        return {
          products: response,
          total,
        };
      },
    }),

    getProductById: builder.query<FullProduct, string>({
      query: id => `/product/${id}`,
    }),
  }),
});

export const { useGetCategoryProductsQuery } = categoryProductsApi;
