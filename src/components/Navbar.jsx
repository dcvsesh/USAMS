import { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../images/usamslo.svg';
import searchIcon from '../images/search.svg';
import listaIcon from '../images/lista.svg';

function Navbar() {
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [showProductsMenu, setShowProductsMenu] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef(null);
  const productsMenuRef = useRef(null);
  const location = useLocation();
  const isProductsActive = location.pathname.startsWith('/productos');

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setExpanded(false);
      }
      if (productsMenuRef.current && !productsMenuRef.current.contains(e.target)) {
        setShowProductsMenu(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setExpanded(false);
        setShowProductsMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate(`/productos?search=${encodeURIComponent(query)}`);
      setQuery('');
      setExpanded(false);
    }
  };

  const toggleProductsMenu = (e) => {
    e.preventDefault();
    setShowProductsMenu((show) => !show);
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="USAMS Logo" className="nav_logo" />
        </Link>
      </div>

      <nav className="navbar__nav">
        <NavLink className="navbar_link" to="/">Inicio</NavLink>

        {/* Nuevo enlace “Nosotros” */}
        <NavLink
          className="navbar_link"
          to="/nosotros"
        >
          Nosotros
        </NavLink>

        {/* Menú desplegable de Productos */}
        <div className="navbar__dropdown-container" ref={productsMenuRef}>
          <div className="navbar__dropdown-trigger" onClick={toggleProductsMenu}>
            <span className={`navbar_link ${isProductsActive ? 'active' : ''}`}>
              Productos
            </span>
            <img
              src={listaIcon}
              alt="Ver categorías"
              className="navbar__dropdown-icon"
            />
          </div>
          {showProductsMenu && (
            <div className="navbar__dropdown-menu">
              <NavLink
                className="navbar__dropdown-item"
                to="/productos/carga"
                onClick={() => setShowProductsMenu(false)}
              >
                Carga
              </NavLink>
              <NavLink
                className="navbar__dropdown-item"
                to="/productos/audio"
                onClick={() => setShowProductsMenu(false)}
              >
                Audio
              </NavLink>
              <NavLink
                className="navbar__dropdown-item"
                to="/productos/gadgets"
                onClick={() => setShowProductsMenu(false)}
              >
                Gadgets
              </NavLink>
              <NavLink
                className="navbar__dropdown-item"
                to="/productos/accesorios-autos"
                onClick={() => setShowProductsMenu(false)}
              >
                Accesorios de Autos
              </NavLink>
            </div>
          )}
        </div>

        <NavLink className="navbar_link" to="/galeria">Galería</NavLink>
        <NavLink className="navbar_link" to="/novedades">Novedades</NavLink>
        <NavLink className="navbar_link" to="/encuentranos">Encuéntranos en</NavLink>
      </nav>

      <div className={`navbar__search ${expanded ? 'expanded' : ''}`} ref={searchRef}>
        <img
          src={searchIcon}
          alt="Buscar"
          className="search_icon"
          onClick={() => setExpanded((e) => !e)}
        />
        {expanded && (
          <input
            type="text"
            placeholder="Buscar..."
            className="navbar__search_input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            autoFocus
          />
        )}
      </div>
    </header>
  );
}

export default Navbar;