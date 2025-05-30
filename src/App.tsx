import { Header } from './components/Header/Header';
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
import { CartEmptyPage } from './pages/CartEmptyPage';
import './App.css';
import 'leaflet/dist/leaflet.css';
import { ProductPage } from './pages/ProductPage/ProductPage.tsx';

export const App = () => {
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  const isNotFoundPage = location.pathname === '/404';
  return (
    <>
      <Header />
      {!isMainPage && !isNotFoundPage && (
        <div className="breadcrumbs">
          <Breadcrumbs />
        </div>
      )}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/sell/:category" element={<SellCategory />} />
        <Route path="/credit" element={<CreditPage />} />
        <Route path="/repair" element={<RepairPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/:vacancyId" element={<VacancyDetailPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cartempty" element={<CartEmptyPage />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
