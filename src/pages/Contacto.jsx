import React, { useState } from 'react';

function Contacto() {
  // Memoria del formulario usando useState
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  // Función JS para capturar los datos mientras el usuario escribe
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Función JS para procesar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos capturados en RAM:", formData);
    alert(`Gracias ${formData.nombre}, hemos recibido tu mensaje.`);
  };

  return (
    <main className="bg-black text-white min-vh-100" style={{ paddingTop: '100px' }}>
      <div className="container py-5">
        
        {/* Título de la Sección */}
        <div className="text-center mb-5">
          <p className="text-uppercase tracking-widest small mb-2" style={{ color: '#8B0000', letterSpacing: '3px' }}>
            Agendamiento y Ubicación
          </p>
          <h2 className="display-4 fw-bold text-uppercase font-monospace">CONTÁCTANOS</h2>
          <hr className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: '#8B0000', opacity: '1' }} />
        </div>

        {/* CONTENEDOR BILATERAL: Formulario + Mapa */}
        <div className="row justify-content-center g-4">
          
          {/* COLUMNA 1: El Formulario de Contacto */}
          <div className="col-lg-5 col-md-6">
            <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow-lg border border-secondary h-100">
              <h3 className="h5 text-uppercase font-monospace mb-4 text-white">Envía tu idea</h3>
              
              <div className="mb-3">
                <label className="form-label small text-white-50">Nombre Completo</label>
                <input 
                  type="text" 
                  name="nombre" 
                  className="form-control bg-black text-white border-secondary" 
                  placeholder="Tu nombre" 
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label small text-white-50">Correo Electrónico</label>
                <input 
                  type="email" 
                  name="email" 
                  className="form-control bg-black text-white border-secondary" 
                  placeholder="nombre@ejemplo.com" 
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label small text-white-50">Idea del Tatuaje</label>
                <textarea 
                  name="mensaje" 
                  className="form-control bg-black text-white border-secondary" 
                  rows="4" 
                  placeholder="Describe el estilo, tamaño aproximado y zona..."
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-danger w-100 fw-bold text-uppercase mt-2">
                Enviar Solicitud
              </button>
            </form>
          </div>

          {/* COLUMNA 2: Google Maps Embebido con la Dirección Correcta */}
          <div className="col-lg-5 col-md-6">
            <div className="bg-dark p-4 rounded shadow-lg border border-secondary h-100 d-flex flex-column justify-content-between">
              <div>
                <h3 className="h5 text-uppercase font-monospace mb-2 text-white">Ubicación del Estudio</h3>
                <p className="text-white-50 small mb-3">
                  📍 Av. Escuela Agrícola, Macul (Sede Santiago Sur)
                </p>
              </div>
              
              {/* Contenedor del mapa con filtro estético optimizado */}
              <div className="w-100 rounded overflow-hidden border border-secondary flex-grow-1" style={{ minHeight: '250px' }}>
                <iframe 
                  title="Mapa Demon Ink"
                  /* SRC OFICIAL: Usa el formato embed simple basado en texto para forzar el pin rojo */
                  src="https://maps.google.com/maps?q=INACAP%20Sede%20Santiago%20Sur,%20Avenida%20Escuela%20Agr%C3%ADcola,%20Macul&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ 
                    border: 0, 
                    filter: 'grayscale(100%) invert(90%) contrast(150%) hue-rotate(180deg) opacity(0.75)' 
                        }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

export default Contacto;