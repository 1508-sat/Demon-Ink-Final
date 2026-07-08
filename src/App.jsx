import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. IMPORTAMOS NUESTROS COMPONENTES REUTILIZABLES
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 2. IMPORTAMOS NUESTRAS PÁGINAS (PANTALLAS)
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Presupuesto from './pages/Presupuesto';

function App() {
  // Estado de React: false = Modo Estándar, true = Modo Infierno
  const [modoInfierno, setModoInfierno] = useState(false);

  // Función para alternar el modo
  const toggleModoInfierno = () => {
    setModoInfierno(!modoInfierno);
  };

  return (
    <Router>
      {/* Inyectamos una clase dinámica en el contenedor principal según el estado */}
      <div className={`d-flex flex-column min-vh-100 bg-black ${modoInfierno ? 'modo-infierno-activo' : ''}`}>
        
        {/* Le pasamos el estado y la función al Navbar como Props */}
        <Navbar modoInfierno={modoInfierno} toggleModoInfierno={toggleModoInfierno} />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/presupuesto" element={<Presupuesto />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;