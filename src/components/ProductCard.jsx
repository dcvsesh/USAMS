// src/components/ProductCard.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function ProductCard({ product }) {
  // product.img ya es un arreglo de fuentes
  const images = Array.isArray(product.img) ? product.img : [];

  return (
    <div className="product-card">
      <Swiper
        pagination={{ clickable: true }}
        navigation
        modules={[Pagination, Navigation]}
        className="product-card__carousel"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={src}
              alt={`${product.name} imagen ${idx + 1}`}
              className="product-card__image"
              loading="lazy"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__price">{product.price}</p>
      <button className="product-card__button">Más Información</button>
    </div>
  );
}