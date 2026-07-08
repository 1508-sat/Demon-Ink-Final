import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ modoInfierno, toggleModoInfierno }) {
  return (
    <header>
      {/* Si el Modo Infierno está activo, el borde inferior cambia a rojo brillante con sombra */}
      <nav 
        className="navbar navbar-expand-lg navbar-dark fixed-top bg-black border-bottom"
        style={{ 
          borderColor: modoInfierno ? '#ff0000' : '#212529',
          boxShadow: modoInfierno ? '0 0 15px rgba(255, 0, 0, 0.5)' : 'none',
          transition: 'all 0.5s ease'
        }}
      >
        <div className="container">
          
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img 
              src="/img/logo1.jpg" 
              alt="Logo Demon Ink" 
              width="50" 
              height="50" 
              className="rounded-circle me-2" 
              style={{ border: modoInfierno ? '2px solid #ff0000' : 'none' }}
            />
            <span className="fw-bold">
              DEMON <span style={{ color: modoInfierno ? '#ff0000' : '#8B0000', transition: 'color 0.5s' }}>INK</span>
            </span>
          </Link>
          
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-uppercase small fw-bold align-items-center">
              
              <li className="nav-item">
                <Link className="nav-link" to="/">Inicio</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">Nosotros</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/contacto">Contacto</Link>
              </li>

              <li className="nav-item me-3">
                <Link className="nav-link" to="/presupuesto">Presupuesto</Link>
              </li>

              {/* BOTÓN INTERACTIVO: El switch del Modo Infierno */}
              <li className="nav-item mt-2 mt-lg-0">
                <button 
                  onClick={toggleModoInfierno}
                  className={`btn btn-sm fw-bold text-uppercase px-3 ${modoInfierno ? 'btn-danger' : 'btn-outline-secondary'}`}
                  style={{ transition: 'all 0.3s ease', letterSpacing: '1px' }}
                >
                  {modoInfierno ? '🔥 Modo Infierno' : '💀 Activar Infierno'}
                </button>
              </li>

            </ul>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;