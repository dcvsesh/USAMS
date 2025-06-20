import React from "react";
import allProducts from "../data/products";

export default function New() {
  // suponiendo que marcas “new: true” en tus datos
  const news = allProducts.filter((p) => p.isNew).slice(0, 8);

  return (
    <main className="novedades-page">
      <div className="novedades-grid">
        {/* Fila 1 */}
        <a href={`/producto/${news[0].slug}`} className="new-item new-item--1">
          <span className="new-badge">NUEVO</span>
          <img src={news[0].img[0]} alt={news[0].name} className="new-image" />
        </a>
        <h1 className="new-title">Novedades USAMS</h1>

        {/* Fila 2 */}
        <a href={`/producto/${news[1].slug}`} className="new-item new-item--2">
          <img src={news[1].img[0]} alt={news[1].name} className="new-image" />
        </a>
        <a href={`/producto/${news[2].slug}`} className="new-item new-item--3">
          <img src={news[2].img[0]} alt={news[2].name} className="new-image" />
        </a>
        <p className="new-desc">
          Tecnología recién salida del horno. Descubre lo último en carga, audio y protección.
        </p>

        {/* Fila 3 */}
        {news.slice(3, 6).map((p, i) => (
          <a
            key={p.id}
            href={`/producto/${p.slug}`}
            className={`new-item new-item--${4 + i}`}
          >
            <img src={p.img[0]} alt={p.name} className="new-image" />
          </a>
        ))}

        {/* Fila 4 */}
        {news.slice(6, 8).map((p, i) => (
          <a
            key={p.id}
            href={`/producto/${p.slug}`}
            className={`new-item new-item--${7 + i}`}
          >
            <img src={p.img[0]} alt={p.name} className="new-image" />
          </a>
        ))}
      </div>
    </main>
  );
}