import React, { useState } from "react";
import { Helmet } from "react-helmet-async";


// ——— Importa aquí tus imágenes ———
import galeria1 from "../images/galeria1.png";
import galeria2 from "../images/galeria2.png";
import galeria3 from "../images/galeria3.png";
import galeria4 from "../images/galeria4.png";
import galeria5 from "../images/galeria5.png";
import galeria6 from "../images/galeria6.png";
// …añade todas las que necesites

const galleryImages = [galeria1, galeria2, galeria3, galeria4, galeria5, galeria6];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  // Alterna dirección de scroll: fila par → left-to-right, fila impar → right-to-left
  const rows = [0, 1, 2];

  return (
    <>
      <Helmet>
        <title>Galería – USAMS</title>
        <meta name="description" content="Tu espacio, tu estilo. USAMS se adapta." />
      </Helmet>

      <main className="gallery-page">
        <header className="gallery-header">
          <h1 className="gallery-title">Galería</h1>
          <p className="gallery-description">Tu espacio, tu estilo. USAMS se adapta.</p>
        </header>

        {rows.map((rowIndex) => (
          <div
            key={rowIndex}
            className={`gallery-row ${
              rowIndex % 2 === 0 ? "row--rtl" : "row--ltr"
            }`}
          >
            <div className="marquee">
              {[...galleryImages, ...galleryImages].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Galería ${i % galleryImages.length}`}
                  className="gallery-item"
                  onClick={() => setLightbox(src)}
                />
              ))}
            </div>
          </div>
        ))}

        {lightbox && (
          <div
            className="lightbox"
            onClick={() => setLightbox(null)}
          >
            <img src={lightbox} alt="Preview" />
          </div>
        )}
      </main>
    </>
  );
}