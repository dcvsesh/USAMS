import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import New from './pages/New';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />

          {/* Productos: lista global y por categoría */}
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:category" element={<Products />} />

          <Route path="/galeria" element={<Gallery />} />
          <Route path="/novedades" element={<New />} />
          <Route path="/encuentranos" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;