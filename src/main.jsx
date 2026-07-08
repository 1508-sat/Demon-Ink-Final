import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

// 1. IMPORTAMOS LOS ESTILOS DE BOOTSTRAP (Para los colores y formas)
import 'bootstrap/dist/css/bootstrap.min.css'

// 2. IMPORTAMOS EL JAVASCRIPT DE BOOTSTRAP (Para que las 3 líneas del menú funcionen al hacer clic)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)