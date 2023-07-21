
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './components/NavBar/navBar.css'
import NavBar from './components/NavBar/navBar'
import Home from './components/home'
import Products from './components/Catalog/catalog';
import ProductDetail from './components/Catalog/productDetail';
import './components/HomeContent/homeContent'
import HomeContent from './components/HomeContent/homeContent';

function App() {
  const [contadorCarrito] = useState(0)



  return (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/productos" element={<HomeContent />} />
      <Route exact path="/catalogo" element={<Products/>} />
      <Route exact path="/catalogo/:id" element={<ProductDetail />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
