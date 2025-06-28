import { Header } from './components/Header';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SellPage } from './pages/SellPage';
import { CreditPage } from './pages/CreditPage';
import { RepairPage } from './pages/RepairPage';
import { JobsPage } from './pages/JobsPage';
import { ContactsPage } from './pages/ContactsPage';
import { MainPage } from './pages/MainPage';
import { Footer } from './components/Footer';
import { Breadcrumbs } from './components/Breadcrumbs';
import { PageNotFound } from './components/PageNotFound';
import { VacancyDetailPage } from './pages/JobsPage/components/VacancyDetailPage';
import { CatalogPage } from './pages/CatalogPage';
import { SellCategory } from './pages/SellPage/components/SellCategory';
import { ProductPage } from './pages/ProductPage';
import { ScrollToTop } from './components/ScrollToTop';
import { CartPage } from './pages/CartPage';
import { CategoryPage } from './pages/CategoryPage';
import './App.scss';
import 'leaflet/dist/leaflet.css';

export const App = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isNotFoundPage = location.pathname === '/404';
  const isCartPage = location.pathname === '/cart';
  return (
    <>
      <Header />
      {!isMainPage && !isNotFoundPage && !isCartPage && (
        <div className="breadcrumbs">
          <Breadcrumbs />
        </div>
      )}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:shortCategory" element={<CategoryPage />} />
        <Route path="/catalog/:shortCategory/id/:id" element={<ProductPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/sell/:category" element={<SellCategory />} />
        <Route path="/credit" element={<CreditPage />} />
        <Route path="/repair" element={<RepairPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:vacancyId" element={<VacancyDetailPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
