import React from 'react';

// importa tus logos
import liverpoolLogo from '../images/liverpool.png';
import walmartLogo  from '../images/walmart.png';

export default function Contact() {
  return (
    <main className="contact-page">
    <section className="contact">
  <h2 className="contact__title">Puntos de venta</h2>
  <p className="contact__subtitle">
    Llévate tus gadgets USAMS al instante en tiendas físicas cerca de ti.
  </p>
  <div className="contact__logos">
    <div className="contact__logo-circle">
      <img src={liverpoolLogo} alt="Liverpool" className="contact__logo-image" />
    </div>
    <div className="contact__logo-circle">
      <img src={walmartLogo} alt="Walmart" className="contact__logo-image" />
    </div>
  </div>
</section>
    </main>
  );
}