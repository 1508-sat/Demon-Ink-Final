import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Importamos el puente de conexión que creamos
import { supabase } from '../supabaseClient';

function Inicio() {
  // Estado obligatorio para almacenar los datos de la API (Sección 3 de la rúbrica)
  const [estilosTatuajes, setEstilosTatuajes] = useState([]);
  // Estado para controlar el indicador de carga en pantalla
  const [cargando, setCargando] = useState(true);

  // Hook useEffect para controlar el ciclo de vida y disparar la petición a Supabase
  useEffect(() => {
    async function obtenerEstilos() {
      try {
        setCargando(true);
        
        // Consultamos la tabla exacta en Supabase
        const { data, error } = await supabase
          .from('demon-ink-api')
          .select('*');

        if (error) {
          throw error;
        }

        // Si la data llegó correctamente, la guardamos en el estado
        if (data) {
          setEstilosTatuajes(data);
        }
      } catch (error) {
        console.error('Error al consumir la API de Supabase:', error.message);
      } finally {
        setCargando(false);
      }
    }

    obtenerEstilos();
  }, []); // Arreglo vacío para que se ejecute solo al cargar la página

  return (
    <main className="bg-black text-white min-vh-100">
      
      {/* HERO SECTION CON VIDEO */}
      <section className="position-relative d-flex align-items-center justify-content-center overflow-hidden" style={{ height: '75vh' }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="position-absolute w-100 h-100" 
          style={{ objectFit: 'cover', top: 0, left: 0, opacity: '0.3', zIndex: 1 }}
        >
          <source src="/img/tat1.mp4" type="video/mp4" />
        </video>

        <div className="container text-center position-relative" style={{ zIndex: 2 }}>
          <p className="text-uppercase tracking-widest small mb-2" style={{ color: '#8B0000', letterSpacing: '4px' }}>
            Estudio de Tatuajes de Autor
          </p>
          <h1 className="display-2 fw-bold font-monospace mb-3">DEMON INK</h1>
          <p className="lead text-white-50 max-w-md mx-auto mb-4">
            Transformamos tus ideas e historias en piezas de arte permanentes en la piel.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/presupuesto" className="btn btn-danger btn-lg fw-bold text-uppercase px-4">Presupuesto</Link>
            <Link to="/contacto" className="btn btn-outline-light btn-lg fw-bold text-uppercase px-4">Contacto</Link>
          </div>
        </div>
      </section>

      {/* GALERÍA DE ESPECIALIDADES CORREGIDA */}
      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-uppercase font-monospace text-danger mb-1">Nuestras Especialidades</h2>
          <hr className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: '#ff0000', opacity: '1' }} />
        </div>

        {/* Fila con columnas fijas para evitar el colapso */}
        <div className="row justify-content-center g-4">
          {cargando ? (
            /* Mensaje de carga con spinner de Bootstrap mientras viajan los datos */
            <div className="text-center text-white my-5">
              <div className="spinner-border text-danger" role="status"></div>
              <p className="mt-2 font-monospace small text-white-50">CONECTANDO A LA API DE SUPABASE...</p>
            </div>
          ) : estilosTatuajes.length === 0 ? (
            <p className="text-center text-white-50">No se encontraron estilos disponibles.</p>
          ) : (
            /* Mapeo dinámico directo desde el estado reactivo */
            estilosTatuajes.map((estilo) => (
              <div className="col-12 col-sm-6 col-lg-3" key={estilo.id}>
                <div className="card h-100 bg-dark text-white border-secondary shadow-lg overflow-hidden">
                  <div style={{ height: '280px' }}>
                    <img 
                      src={estilo.img} 
                      alt={estilo.titulo} 
                      className="w-100 h-100" 
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className="card-body bg-black border-top border-secondary p-3 text-center">
                    <h3 className="h5 text-uppercase font-monospace text-danger mb-2">{estilo.titulo}</h3>
                    <p className="small text-white-50 mb-0">{estilo.desc}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

    </main>
  );
}

export default Inicio;
