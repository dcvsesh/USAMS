import React from 'react';
import footerLogo from '../images/logoblanco.png';      // Tu logo en blanco
import facebookIcon from '../images/facebook.png';
import youtubeIcon from '../images/youtube.png';
import instagramIcon from '../images/instagram.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={footerLogo} alt="USAMS Logo" className="footer-logo" />
        </div>
        <div className="footer-content">
          <h2 className="footer-title">¡Conecta con nosotros!</h2>
          <p className="footer-subtitle">Síguenos en nuestras redes sociales</p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/USAMS-Mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <img src={facebookIcon} alt="Facebook" className="footer-icon" />
              <span>USAMS México</span>
            </a>
            <a
              href="https://www.youtube.com/USAMS-Mexico"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <img src={youtubeIcon} alt="YouTube" className="footer-icon" />
              <span>USAMS México</span>
            </a>
            <a
              href="https://www.instagram.com/usams.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
            >
              <img src={instagramIcon} alt="Instagram" className="footer-icon" />
              <span>@usams.mx</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;