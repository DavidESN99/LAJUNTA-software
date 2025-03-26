import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return <h2>Bienvenido a LA JUNTA resto-bar</h2>;
}

function Pedidos() {
  return <h2>Sección de Pedidos</h2>;
}

function Cocina() {
  return <h2>Sección de Cocina</h2>;
}

function Stock() {
  return <h2>Sección de Stock</h2>;
}

function Reservas() {
  return <h2>Sección de Reservas</h2>;
}

function NotFound() {
  return <h2>Página no encontrada</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/cocina" element={<Cocina />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
