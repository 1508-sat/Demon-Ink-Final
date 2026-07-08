import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-secondary py-4 text-center border-top border-dark mt-auto">
      <div className="container">
        {/* Nombre de tu pyme con los colores característicos */}
        <p className="mb-1 fw-bold text-white uppercase small tracking-wider">
          DEMON <span style={{ color: '#8B0000' }}>INK</span> TATTOO STUDIO
        </p>
        {/* Texto de derechos de autor */}
        <p className="mb-0 small">
          &copy; {new Date().getFullYear()} Todos los derechos reservados.
        </p>
        <p className="text-muted" style={{ fontSize: '10px' }}>
          Desarrollado bajo estándares de calidad y seguridad de la información.
        </p>
      </div>
    </footer>
  );
}

export default Footer;