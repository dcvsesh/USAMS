import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const allProducts = [
  { id: 1, name: 'Cargador iPhone', description: 'Carga rápida 20W' },
  { id: 2, name: 'Cable USB-C', description: '1 metro, alta resistencia' },
  { id: 3, name: 'Cargador Android', description: '18W universal' },
  // Agrega más productos...
];

function Products() {
   const query = useQuery();
  const searchTerm = query.get('search')?.toLowerCase() || '';
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const matches = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
    );
    setFiltered(matches);
  }, [searchTerm]);
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

export default Products;