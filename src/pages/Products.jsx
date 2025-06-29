// src/pages/Products.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import allProducts from '../data/products';

// Hook para leer ?search=
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

// Traduce slugs de URL a la clave interna de categoría
const slugToKey = {
  carga: 'carga',
  audio: 'audio',
  auto: 'auto',
  'accesorios-de-auto': 'auto',
  'accesorios-autos': 'auto',
  gadgets: 'gadgets',
};

// Metadatos legibles
const categoryMeta = {
  carga: {
    label: 'Carga',
    description: 'Conexión rápida y segura para todos tus dispositivos.',
  },
  audio: {
    label: 'Audio',
    description: 'Calidad de sonido superior para cada momento de tu día.',
  },
  auto: {
    label: 'Accesorios de Auto',
    description: 'Tecnología inteligente para llevar en el camino.',
  },
  gadgets: {
    label: 'Gadgets',
    description: 'Más opciones para complementar tu vida digital.',
  },
};

export default function Products() {
  const { category: slug } = useParams(); 
  const key = slugToKey[slug];
  const meta = categoryMeta[key];
  const query = useQuery();
  const searchTerm = query.get('search') || '';
  const [filtered, setFiltered] = useState([]);

  // Normaliza cadenas (sin tildes, minúsculas)
  const normalize = (str = '') =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  useEffect(() => {
    let result = allProducts;

    // Filtra por categoría si hay slug
    if (key) {
      result = result.filter(p => p.category === key);
    }
    // Filtra por búsqueda si hay término
    if (searchTerm) {
      const term = normalize(searchTerm);
      result = result.filter(
        p =>
          normalize(p.name).includes(term) ||
          normalize(p.description).includes(term)
      );
    }

    setFiltered(result);
  }, [key, searchTerm]);

  const title = meta ? meta.label : 'Todos los Productos';
  const description = meta
    ? meta.description
    : 'Catálogo completo de productos USAMS';

  // Lógica de cuantos slides mostrar y si hacer loop
  const MAX_VISIBLE = 3;
  const slidesToShow = filtered.length < MAX_VISIBLE ? 1 : MAX_VISIBLE;
  const shouldLoop = filtered.length > slidesToShow;

  return (
    <>
      <Helmet>
        <title>{searchTerm ? 'Tu búsqueda USAMS' : `${title} – USAMS`}</title>
        <meta name="description" content={searchTerm ? `Resultados para: ${searchTerm}` : description} />
        <link
          rel="canonical"
          href={`https://www.tudominio.com/productos${slug ? '/' + slug : ''}`}
        />
      </Helmet>

      <main className="products-page">
        <header className="products-page__header">
          {searchTerm ? (
            <>
              <h1 className="category-title">Tu búsqueda USAMS</h1>
              <p className="search-results">
                Resultados para: <strong>{searchTerm}</strong>
              </p>
            </>
          ) : (
            <>
              <h1 className="category-title">{title}</h1>
              <p className="category-description">{description}</p>
            </>
          )}
        </header>

        <Swiper
          slidesPerView={slidesToShow}
          centeredSlides={true}
          loop={shouldLoop}
          navigation
          modules={[Navigation, Pagination]}
          className="products-page__carousel"
        >
          {filtered.map(prod => (
            <SwiperSlide key={prod.id}>
              <div className="product-card--list">
                <img
                  src={prod.img[0]}
                  alt={prod.name}
                  className="product-card--thumb"
                  loading="lazy"
                />
                <h3 className="product-card--name">{prod.name}</h3>
                <p className="product-card--price">{prod.price}</p>
                <Link to={`/producto/${prod.slug}`} className="btn-detail">
                  Más Información
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </>
  );
}