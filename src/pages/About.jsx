import React, { useRef, useState, useEffect } from 'react';
import video from "../images/video.mp4";
import play from "../images/play.svg";

export default function About() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Contadores animados
  const [yearCount, setYearCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [countriesCount, setCountriesCount] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    // Duraciones en ms
    const durationYear = 2000;
    const durationProducts = 1500;
    const durationCountries = 1000;

    // Intervalos
    const stepYear = Math.max(Math.floor(durationYear / currentYear), 1);
    const stepProducts = Math.max(Math.floor(durationProducts / 10), 1);
    const stepCountries = Math.max(Math.floor(durationCountries / 5), 1);

    const timerYear = setInterval(() => {
      setYearCount(prev => {
        if (prev < currentYear) return prev + 1;
        clearInterval(timerYear);
        return prev;
      });
    }, stepYear);

    const timerProducts = setInterval(() => {
      setProductsCount(prev => {
        if (prev < 10) return prev + 1;
        clearInterval(timerProducts);
        return prev;
      });
    }, stepProducts);

    const timerCountries = setInterval(() => {
      setCountriesCount(prev => {
        if (prev < 8) return prev + 1;
        clearInterval(timerCountries);
        return prev;
      });
    }, stepCountries);

    return () => {
      clearInterval(timerYear);
      clearInterval(timerProducts);
      clearInterval(timerCountries);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Video promocional */}
      <section className="about-video" aria-label="Video promocional">
        <div className="about-video__container" onClick={togglePlay}>
          <video
            ref={videoRef}
            className="about-video__player"
            onClick={togglePlay}
          >
            <source src={video} type="video/mp4" />
          </video>
          {!isPlaying && (
            <img
              src={play}
              alt="Play"
              className="about-video__icon"
            />
          )}
        </div>
      </section>

      {/* Quiénes somos + estadísticas */}
      <section className="about-stats">
        <h2 className="about-stats__title">Quiénes somos</h2>

        <p className="about-stats__text">
          En USAMS creemos que la tecnología no solo debe ser funcional,
          también debe verse bien. Diseñamos accesorios que combinan potencia,
          estilo y durabilidad para un estilo de vida en movimiento.
        </p>
        <p className="about-stats__text">
          Llevamos innovación a tu día a día con productos que cargan,
          protegen y mejoran tu mundo digital.
        </p>

        <div className="about-stats__metrics">
          <div className="about-stats__metric">
            <div className="about-stats__circle">{yearCount}</div>
            <div className="about-stats__label">Desde</div>
          </div>
          <div className="about-stats__metric">
            <div className="about-stats__circle">{productsCount}</div>
            <div className="about-stats__label">Productos</div>
          </div>
          <div className="about-stats__metric">
            <div className="about-stats__circle">{countriesCount}</div>
            <div className="about-stats__label">Países</div>
          </div>
        </div>
      </section>
    </>
  );
}