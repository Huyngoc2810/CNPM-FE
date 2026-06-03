import { useState } from 'react';
import './App.css';

// Import Components dùng chung
import Header from './components/Header';
import Footer from './components/Footer';

// Import tất cả các Pages
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import RoomDetailPage from './pages/RoomDetailPage';
import BookingPage from './pages/BookingPage';
import PaymentPage from './pages/PaymentPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AuthPage from './pages/AuthPage';
import AccountPage from './pages/AccountPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

function App() {
  
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="app-container">
      <Header setCurrentPage={setCurrentPage} />

      {/* RENDER CÁC TRANG DỰA VÀO STATE */}
      {currentPage === 'home' && <HomePage setCurrentPage={setCurrentPage} />}
      {currentPage === 'rooms' && <RoomsPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'room-detail' && <RoomDetailPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'booking' && <BookingPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'payment' && <PaymentPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'confirmation' && <ConfirmationPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'auth' && <AuthPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'account' && <AccountPage setCurrentPage={setCurrentPage} />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'contact' && <ContactPage />}

      <Footer />
    </div>
  );
}

export default App;