import React from 'react';
import TarjetaTatuador from '../components/TarjetaTatuador';

function Nosotros() {
  return (
    <main className="bg-black text-white min-vh-100" style={{ paddingTop: '100px' }}>
      <div className="container py-5">
        
        {/* TÍTULO DE LA SECCIÓN */}
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-uppercase font-monospace">SOBRE <span style={{ color: '#8B0000' }}>NOSOTROS</span></h2>
          <hr className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: '#8B0000', opacity: '1' }} />
        </div>

        {/* SECCIÓN MULTIMEDIA COMPUESTA (VIDEO + TEXTO HISTÓRICO) */}
        <div className="row align-items-center justify-content-center g-4 mb-5">
          
          {/* COLUMNA IZQUIERDA: Video del proceso en bucle */}
          <div className="col-md-5">
            <div className="rounded overflow-hidden border border-secondary shadow-lg ratio ratio-16x9">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-100 h-100" 
                style={{ objectFit: 'cover' }}
              >
                <source src="/img/tatu.mp4" type="video/mp4" />
                Tu navegador no soporta videos.
              </video>
            </div>
            <p className="text-center text-white-50 small mt-2 italic">🎥 Registro de sesiones en nuestro estudio</p>
          </div>

          {/* COLUMNA DERECHA: El manifiesto de Demon Ink */}
          <div className="col-md-6 text-secondary lead" style={{ fontSize: '1.05rem' }}>
            <p className="text-white fw-bold mb-3">
              En Demon Ink transformamos la piel en un lienzo de historias imperecederas.
            </p>
            <p className="mb-3">
              Nuestra pyme nació con la convicción de fusionar la precisión técnica de los sistemas informáticos con el alma del arte corporal, asegurando un estándar de higiene, diseño y personalización único en Santiago Sur.
            </p>
            <p className="mb-0">
              Cada pieza es trabajada de forma exclusiva por nuestro equipo, garantizando que el diseño final sea un reflejo fiel de tu identidad.
            </p>
          </div>

        </div>

        {/* SECCIÓN DEL ARTISTA */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 text-center mb-4">
            <h3 className="h4 text-uppercase font-monospace text-white">El Artista Principal</h3>
          </div>
          <div className="col-md-6 col-lg-4">
            <TarjetaTatuador />
          </div>
        </div>

      </div>
    </main>
  );
}

export default Nosotros;