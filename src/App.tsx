import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import SellPage from './pages/SellPage/SellPage';
import CreditPage from './pages/CreditPage/CreditPage';
import RepairPage from './pages/RepairPage/RepairPage';
import JobsPage from './pages/JobsPage/JobsPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import MainPage from './pages/MainPage/MainPage';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/credit" element={<CreditPage />} />
        <Route path="/repair" element={<RepairPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
};

export default App;
