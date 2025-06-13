// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // <-- importar aquí

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Gallery from "./pages/Gallery";
import New from "./pages/New";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <HelmetProvider>
      {" "}
      {/* <-- envolver aquí */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />

          {/* Lista y filtrado */}
          <Route path="/productos" element={<Products />} />
          <Route path="/productos/:category" element={<Products />} />

          {/* Detalle por slug */}
          <Route path="/producto/:slug" element={<ProductDetail />} />

          <Route path="/galeria" element={<Gallery />} />
          <Route path="/novedades" element={<New />} />
          <Route path="/encuentranos" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}
