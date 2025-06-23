import styles from './CategoryPage.module.scss';
import { useGetCategoryProductsQuery } from '../../redux/api/categoryProductsApi.ts';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { categories, getPageOptions, getTotalPages, limit, removeFilter } from './const.ts';
import { FiltersSideBar } from './components/FiltersSideBar';
import { ProductList } from './components/ProductList';
import { AppliedFilters } from './components/AppliedFilters';
import { PaginationControls } from './components/PaginationControls';
import { SortPanel } from './components/SortPanel';
import { CategorySummary } from './components/CategorySummary';
import { PageNotFound } from '../../components/PageNotFound';
import type { SortBy } from './components/SortPanel/SortPanel.tsx';

export const CategoryPage = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>('popular');
  const [selectedFilters, setSelectedFilters] = useState<{ [filterName: string]: string[] }>({});
  const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
  const { shortCategory } = useParams<{ shortCategory: keyof typeof categories }>();
  const {
    data: categoryProducts,
    isLoading,
    isError,
  } = useGetCategoryProductsQuery(
    {
      shortCategory: shortCategory as string,
      page,
      limit,
      sortBy,
    },
    { skip: !shortCategory },
  );

  const totalPages = getTotalPages(categoryProducts?.total || 0, limit);
  const pageOptions = getPageOptions(totalPages);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <PageNotFound />;
  if (!shortCategory) return <PageNotFound />;

  return (
    <div className={styles.container}>
      <div className={styles.categoryHeader}>
        <CategorySummary count={categoryProducts?.total ?? 0} title={categories[shortCategory]} />
        <SortPanel viewType={viewType} onViewChange={setViewType} sortBy={sortBy} onSortChange={setSortBy} />
      </div>
      <div className={styles.content}>
        <FiltersSideBar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
        <main className={styles.mainContent}>
          <AppliedFilters
            selectedFilters={selectedFilters}
            resetFilters={() => setSelectedFilters({})}
            removeFilter={(filterName, value) => removeFilter(setSelectedFilters, filterName, value)}
          />

          <ProductList
            categoryProducts={categoryProducts}
            viewType={viewType}
            shortCategory={shortCategory}
          />
          <PaginationControls
            limit={limit}
            onPageChange={setPage}
            totalPages={totalPages}
            pageOptions={pageOptions}
            page={page}
            totalItems={categoryProducts?.total ?? 0}
          />
        </main>
      </div>
    </div>
  );
};
