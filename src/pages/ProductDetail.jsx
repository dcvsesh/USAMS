// src/pages/ProductDetail.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import allProducts from "../data/products";

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return (
      <main className="product-detail">
        <h1>Producto no encontrado</h1>
        <button
          className="product-detail__back"
          onClick={() => navigate(-1)}
        >
          ← Volver
        </button>
      </main>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.name} – USAMS</title>
        <meta name="description" content={product.description} />
        <link
          rel="canonical"
          href={`https://www.tudominio.com/producto/${product.slug}`}
        />
      </Helmet>

      <main className="product-detail">
        <button
          className="product-detail__back"
          onClick={() => navigate(-1)}
        >
          ← Volver
        </button>

        <div className="product-detail__content">
          {/* Galería principal */}
          <div className="product-detail__gallery">
            <Swiper
              navigation
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="product-detail__carousel"
              spaceBetween={20}
            >
              {product.img.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    alt={`${product.name} imagen ${i + 1}`}
                    className="product-detail__image"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Información */}
          <div className="product-detail__info">
            <h1 className="product-detail__title">{product.name}</h1>
            <p className="product-detail__desc">{product.description}</p>

            {/* Features */}
            <div className="product-detail__features">
              {product.features?.map((f, i) => (
                <div key={i} className="feature-items">
                  <img
                    src={f.icon}
                    alt={f.label}
                    className="feature-icon"
                  />
                  <span className="feature-label">{f.label}</span>
                </div>
              ))}
            </div>

            {/* Compra */}
            <div className="product-detail__purchase">
              <div className="product-detail__price-colors">
                <p className="product-detail__price">{product.price}</p>
                {product.colors && (
                  <div className="product-detail__colors">
                    Colores:
                    {product.colors.map((c, i) => (
                      <span
                        key={i}
                        className="color-dot"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="product-detail__buttons">
                <a
                  href={product.amazonLink}
                  className="btn-buy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar en Amazon
                </a>
                <a
                  href={product.mercadoLink}
                  className="btn-buy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Comprar en Mercado Libre
                </a>
              </div>
            </div>
          </div>
        </div>

           {product.additionalImages && (
  <div className="product-detail__additional-gallery">
    {/* Columna izquierda: img 1 y 3 */}
    <div className="additional-column additional-column--left">
      {[0, 2].map((i) => (
        <img
          key={i}
          src={product.additionalImages[i]}
          alt={`${product.name} extra ${i + 1}`}
          className={`additional-image additional-image--${i + 1}`}
        />
      ))}
    </div>
    {/* Columna derecha: img 2 y 4 */}
    <div className="additional-column additional-column--right">
      {[1, 3].map((i) => (
        <img
          key={i}
          src={product.additionalImages[i]}
          alt={`${product.name} extra ${i + 1}`}
          className={`additional-image additional-image--${i + 1}`}
        />
      ))}
    </div>
  </div>
)}
      </main>
    </>
  );
}