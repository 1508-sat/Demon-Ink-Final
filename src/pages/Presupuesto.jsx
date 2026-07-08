import React, { useState } from 'react';

function Presupuesto() {
  const zonas = {
    "": 0, "brazo_completo": 450000, "solo_brazo": 200000, "antebrazo": 200000,
    "cuello": 100000, "mano": 80000, "espalda_completa": 800000, "muslo": 300000,
    "pantorrilla": 200000, "pecho": 200000
  };

  const estilos = {
    "": 1.0, "fineline": 1.0, "realismo": 1.2, "black_grey": 1.2, "lettering": 1.5, "blackwork": 1.5, "color": 1.8
  };

  const imagenesEstilo = {
    "fineline": "/img/imagenfineline2.jpg",
    "realismo": "/img/imagenrealismo2.jpg",
    "black_grey": "/img/imagenblagrey2.jpg",
    "lettering": "/img/imagenlettering2.jpg",
    "blackwork": "/img/imagenblackwork2.jpg",
    "color": "/img/imagencolor2.jpg"
  };

  const [zonaSeleccionada, setZonaSeleccionada] = useState("");
  const [estiloSeleccionado, setEstiloSeleccionado] = useState("");
  const [precioEstimado, setPrecioEstimado] = useState(0);

  const calcularPresupuesto = (zona, estilo) => {
    const precioBase = zonas[zona] || 0;
    const multiplicador = estilos[estilo] || 1.0;
    setPrecioEstimado(precioBase * multiplicador);
  };

  return (
    <main className="bg-black text-white min-vh-100" style={{ paddingTop: '100px' }}>
      <div className="container py-5">
        
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold text-uppercase font-monospace">PRESUPUESTA TU IDEA</h2>
          <hr className="mx-auto" style={{ width: '60px', height: '3px', backgroundColor: '#8B0000', opacity: '1' }} />
        </div>

        <div className="row justify-content-center g-4">
          {/* LADO IZQUIERDO: SELECTORES Y FORMULARIO */}
          <div className="col-md-6">
            <div className="bg-dark p-4 rounded shadow-lg border border-secondary h-100">
              <div className="mb-4">
                <label className="form-label fw-bold text-uppercase small text-white">1. ¿Qué zona del cuerpo?</label>
                <select className="form-select bg-black text-white border-secondary" value={zonaSeleccionada} onChange={(e) => { setZonaSeleccionada(e.target.value); calcularPresupuesto(e.target.value, estiloSeleccionado); }}>
                  <option value="">-- Selecciona --</option>
                  <option value="brazo_completo">Brazo Completo ($450.000 - $500.000)</option>
                  <option value="solo_brazo">Solo Brazo ($200.000 - $250.000)</option>
                  <option value="antebrazo">Antebrazo ($200.000 - $250.000)</option>
                  <option value="cuello">Cuello ($100.000 - $150.000)</option>
                  <option value="mano">Mano ($80.000)</option>
                  <option value="espalda_completa">Espalda Completa ($800.000+)</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="form-label fw-bold text-uppercase small text-white">2. Elige el estilo</label>
                <select className="form-select bg-black text-white border-secondary" value={estiloSeleccionado} onChange={(e) => { setEstiloSeleccionado(e.target.value); calcularPresupuesto(zonaSeleccionada, e.target.value); }}>
                  <option value="">-- Selecciona --</option>
                  <option value="fineline">Fine Line [x1.0]</option>
                  <option value="realismo">Realismo [x1.2]</option>
                  <option value="black_grey">Black and Grey [x1.2]</option>
                  <option value="lettering">Lettering [x1.5]</option>
                  {/* OPTION AGREGADA EN EL MENÚ DESPLEGABLE */}
                  <option value="blackwork">Blackwork [x1.5]</option>
                  <option value="color">A Color [x1.8]</option>
                </select>
              </div>

              <div className="bg-black p-4 rounded text-center border border-danger my-3">
                <p className="text-uppercase tracking-wider small text-white-50 mb-1">Valor Estimado Base</p>
                <h3 className="display-5 fw-bold font-monospace text-danger">${precioEstimado.toLocaleString('es-CL')} CLP</h3>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: DETALLE VISUAL DINÁMICO */}
          <div className="col-md-5">
            <div className="bg-dark p-4 rounded shadow-lg border border-secondary h-100 d-flex flex-column align-items-center justify-content-center text-center">
              {estiloSeleccionado && imagenesEstilo[estiloSeleccionado] ? (
                <div>
                  <h4 className="text-uppercase font-monospace text-danger mb-3">Estilo Seleccionado</h4>
                  <img 
                    src={imagenesEstilo[estiloSeleccionado]} 
                    alt="Referencia" 
                    className="img-fluid rounded border border-secondary mb-3 shadow"
                    style={{ maxHeight: '300px', objectFit: 'cover' }}
                  />
                  <p className="small text-white-50">Vista previa referencial del acabado en la piel.</p>
                </div>
              ) : (
                <p className="text-white-50 italic">Selecciona un estilo para ver una referencia de nuestro trabajo.</p>
              )}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
export default Presupuesto;