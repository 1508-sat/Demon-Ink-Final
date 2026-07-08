import React from 'react';

function TarjetaTatuador() {
  return (
    <div className="card bg-dark text-white border-secondary h-100 shadow-lg mx-auto" style={{ maxWidth: '400px' }}>
      {/* Imagen del Artista */}
      <img 
        src="/img/tatuador.jpg" 
        className="card-img-top img-fluid" 
        alt="Sathya - Tatuador Principal"
        style={{ objectFit: 'cover', height: '350px' }}
      />
      
      {/* Cuerpo de la Tarjeta con Bootstrap */}
      <div className="card-body text-center d-flex flex-column justify-content-between">
        <div>
          <h4 className="card-title fw-bold text-uppercase font-monospace">Sathya</h4>
          <p className="card-text text-uppercase small tracking-widest mb-3" style={{ color: '#8B0000', letterSpacing: '2px' }}>
            Fundador & Artista Principal
          </p>
          <p className="card-text text-secondary small">
            Especialista en líneas finas, diseños de autor personalizados y estilos oscuros de alta precisión. Encargado de transformar tus ideas en piezas eternas.
          </p>
        </div>

        {/* Enlace simulado a Redes Sociales */}
        <div className="mt-4">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-outline-danger btn-sm text-uppercase fw-bold w-100"
          >
            Ver Portafolio (Instagram)
          </a>
        </div>
      </div>
    </div>
  );
}

export default TarjetaTatuador;