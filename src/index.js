// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import LoginView from './LoginView.js'; // Importa el LoginView
import HomeView from './HomeView.js'; // Importa el HomeView
import './index.css';  // Si tienes estilos globales

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} /> {/* Ruta para el login */}
        <Route path="/home" element={<HomeView />} /> {/* Ruta para la página de inicio */}
      </Routes>
    </Router>
  </React.StrictMode>
);
