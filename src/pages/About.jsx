import React from 'react';
import { Helmet } from 'react-helmet-async';

function About() {
  return (
    <>
      <Helmet>
        <title>USAMS - Inicio</title>
        <meta name="description" content="Bienvenido a USAMS, tu tienda de accesorios tecnológicos." />
      </Helmet>
      <main>
        <h2>Inicio</h2>
        <p>Tu mejor opción en accesorios tecnológicos.</p>
      </main>
    </>
  );
}

export default About;