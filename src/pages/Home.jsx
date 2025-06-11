// src/pages/Home.jsx
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Helmet } from "react-helmet-async";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import banner1 from "../images/banner1.jpg";
import video from "../images/video.mp4";
import play from "../images/play.svg";
import producto1 from "../images/producto1.jpg";
import producto2 from "../images/producto2.jpg";
import producto3 from "../images/producto3.jpg";
import producto4 from "../images/producto4.jpg";
import amazon from "../images/amazon.png";
import mercado from "../images/mercadolibre.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import youtube from "../images/youtube.png";
import bolsa from "../images/bolsa.jpg";
import audifonos from "../images/audifonos.jpg";
import chield from "../images/chield.svg";
import light from "../images/light.svg"


function Home() {
  const targetRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Scroll suave a marketplace
  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Play / Pause del video
  const togglePlay = () => {
    if (!videoRef.current) return;
    videoRef.current.paused
      ? videoRef.current.play()
      : videoRef.current.pause();
  };

  // Escuchar eventos del video
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    const onEnded = () => setIsPlaying(false);

    videoEl.addEventListener("play", onPlay);
    videoEl.addEventListener("pause", onPause);
    videoEl.addEventListener("ended", onEnded);

    return () => {
      videoEl.removeEventListener("play", onPlay);
      videoEl.removeEventListener("pause", onPause);
      videoEl.removeEventListener("ended", onEnded);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>USAMS – Tecnología que conecta contigo</title>
        <meta
          name="description"
          content="Descubre accesorios premium en USAMS: cargadores, audio, gadgets y más para mantenerte siempre conectado."
        />
        <link rel="canonical" href="https://www.tudominio.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="USAMS – Tecnología que conecta contigo" />
        <meta
          property="og:description"
          content="Accesorios premium: cargadores, audífonos, gadgets y más en USAMS México."
        />
        <meta property="og:url" content="https://www.tudominio.com/" />
        <meta
          property="og:image"
          content="https://www.tudominio.com/images/og-home.jpg"
        />
      </Helmet>

      <main>
        {/* Slider */}
        <header>
          <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {[banner1, banner1, banner1].map((src, i) => (
              <SwiperSlide key={i}>
                <div className="slide-content">
                  <img src={src} alt="Banner promoción" className="slide-background" />
                  <div className="slide-overlay">
                    <h2 className="title-slide_overlay">Tecnología que conecta contigo.</h2>
                    <p className="text-slide_overlay">
                      Encuentra tu próximo gadget favorito
                    </p>
                    <button onClick={handleScroll} className="button-slide_overlay">
                      Haz clic y elige tu marketplace
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </header>

        {/* Video promocional */}
        <section aria-label="Video promocional">
          <div className="video-container">
            <video ref={videoRef} className="video" onClick={togglePlay}>
              <source src={video} type="video/mp4" />
            </video>
            {!isPlaying && (
              <img
                src={play}
                alt="Play"
                className="play-icon"
                onClick={togglePlay}
              />
            )}
          </div>
        </section>

        {/* Colección */}
        <section className="collection" aria-labelledby="collection-heading">
          <h1 id="collection-heading" className="collection-title">
            Explora nuestra colección
          </h1>
          <p className="collection-text">
            Accesorios premium para cada necesidad
          </p>
          <div className="collection-grid">
            {/* Carga */}
            <div className="collection-card">
              <img
                src={producto1}
                alt="Cable de carga USAMS"
                className="collection-img-left"
                loading="lazy"
              />
              <div className="collection-text-block collection-text-block-left">
                <h3 className="collection-subtitle">Carga</h3>
                <p className="collection-desc">
                  Tu energía, sin interrupciones
                </p>
              </div>
            </div>
            {/* Audio */}
            <div className="collection-card">
              <img
                src={producto2}
                alt="Audífonos USAMS"
                className="collection-img-right"
                loading="lazy"
              />
              <div className="collection-text-block collection-text-block-right ">
                <h3 className="collection-subtitle">Audio</h3>
                <p className="collection-desc">Escucha cada detalle</p>
              </div>
            </div>
            {/* Gadgets */}
            <div className="collection-card">
              <img
                src={producto3}
                alt="Gadget USAMS"
                className="collection-img-left"
                loading="lazy"
              />
              <div className="collection-text-block collection-text-block-left">
                <h3 className="collection-subtitle">Gadgets</h3>
                <p className="collection-desc">
                  Todo lo demás que necesitas
                </p>
              </div>
            </div>
            {/* Accesorios de Auto */}
            <div className="collection-card">
              <img
                src={producto4}
                alt="Accesorio de auto USAMS"
                className="collection-img-right"
                loading="lazy"
              />
              <div className="collection-text-block collection-text-block-right ">
                <h3 className="collection-subtitle">Accesorios de Auto</h3>
                <p className="collection-desc">Tu auto, más inteligente</p>
              </div>
            </div>
          </div>
        </section>

     {/* Promoción */}
<section className="promo-section">
  <img
    src={bolsa}
    alt="Bolsa Waterproof USAMS"
    className="promo-item promo-item--left"
  />
  <img
    src={audifonos}
    alt="Audífonos inalámbricos USAMS"
    className="promo-item promo-item--right"
  />
</section>

 {/*Features*/}
  <section className="features-section">
  <div className="feature-item">
    <img
      src={chield}
      alt="Calidad internacional"
      className="feature-icon"
    />
    <p className="feature-text">
      Calidad internacional, ahora en México
    </p>
  </div>
  <div className="feature-item feature-item--right">
    <p className="feature-text">
      Soluciones simples para un mundo conectado
    </p>
    <img
      src={light}
      alt="Soluciones simples"
      className="feature-icon"
    />
  </div>
</section>

        {/* Marketplace */}
        <section
          className="marketplace"
          ref={targetRef}
          aria-labelledby="marketplace-heading"
        >
          <h2 id="marketplace-heading" className="marketplace-text">
            Tu siguiente compra, a solo un toque.
          </h2>
          <div className="marketplace-logos">
            <a
              href="https://www.amazon.com.mx/s?srs=12768528011"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-circle"
            >
              <img
                src={amazon}
                alt="Visita Amazon USAMS"
                className="logo-circle_image"
                loading="lazy"
              />
            </a>
            <a
              href="https://listado.mercadolibre.com.mx/usams#D[A:usams]"
              target="_blank"
              rel="noopener noreferrer"
              className="logo-circle"
            >
              <img
                src={mercado}
                alt="Visita Mercado Libre USAMS"
                className="logo-circle_image"
                loading="lazy"
              />
            </a>
          </div>
        </section>
      </main>

      {/* Iconos fijos de redes sociales */}
      <div className="social-icons-fixed">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src={instagram}
            alt="Instagram USAMS"
            className="social-icons-image"
            loading="lazy"
          />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img
            src={facebook}
            alt="Facebook USAMS"
            className="social-icons-image"
            loading="lazy"
          />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img
            src={youtube}
            alt="YouTube USAMS"
            className="social-icons-image"
            loading="lazy"
          />
        </a>
      </div>
    </>
  );
}

export default Home;