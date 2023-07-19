
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/navBar'
import CartWidget from './components/CartWidget/cartWidget';
import Logo from './components/Logo/logo';
import './components/NavBar/navBar.css'
import CarouselHome from './components/CarouselHome/content';
import HomeContent from './components/HomeContent/homeContent';

function App() {
  const [contadorCarrito] = useState(0)



  return (
  <>
    <nav className='navBar'>
      <Logo></Logo>
      <ul>
          <NavBar />
          <NavBar titulo='Productos' />
          <NavBar titulo='Catalogo' />
          <NavBar titulo='Contacto' />
          <CartWidget contador={contadorCarrito}></CartWidget>
      </ul>
    </nav>
    <CarouselHome />
    <HomeContent />
  </>
  );
}

export default App;
