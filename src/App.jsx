import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Gallery from "./pages/Gallery";
import New from "./pages/New";
import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {["/", "/nosotros", "/productos", "/productos/:category", "/producto/:slug", "/galeria", "/novedades", "/encuentranos"].map(path => {
          let Element;
          switch (path) {
            case "/": Element = Home; break;
            case "/nosotros": Element = About; break;
            case "/productos": Element = Products; break;
            case "/productos/:category": Element = Products; break;
            case "/producto/:slug": Element = ProductDetail; break;
            case "/galeria": Element = Gallery; break;
            case "/novedades": Element = New; break;
            case "/encuentranos": Element = Contact; break;
            default: Element = Home;
          }
          return (
            <Route
              path={path}
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <Element />
                </motion.div>
              }
              key={path}
            />
          );
        })}
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}