import React, { useState, useEffect } from 'react';
import { NavbarSimple } from './components/NavBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CenterPage from './pages/CenterPage';
import Scanner from './pages/ScannerPage';
import ArtsCollegePage from './pages/ArtsCollegePage';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AboutUsPage from './pages/AboutUsPage';
import Spinner from './components/Spinner';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';

const App = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {!contentLoaded && <Spinner />}
      
      {contentLoaded && (
        <>
          <NavbarSimple />
          <ScrollToTop />  
          {/* to scroll to top when routing to the page */}
          <Routes>
            <Route path="/masar-latest/" element={<HomePage />} />
            <Route path="/masar-latest/center" element={<CenterPage />} />
            <Route path="/masar-latest/arts" element={<ArtsCollegePage />} />
            <Route path="/masar-latest/scanner" element={<Scanner />} />
            <Route path="/masar-latest/about" element={<AboutUsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ScrollToTopButton/>
          <Footer />
        </>
      )}
    </Router>
  );
};

export default App;
