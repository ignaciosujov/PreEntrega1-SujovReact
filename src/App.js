
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/navBar'
import CartWidget from './components/CartWidget/cartWidget';
import Logo from './components/Logo/logo';
import './components/NavBar/navBar.css'

function App() {
  const [contadorCarrito] = useState(0)



  return (
  <nav className='navBar'>
    <Logo></Logo>
    <ul>
        <NavBar />
        <NavBar titulo='Productos' />
        <NavBar titulo='Nosotros' />
        <NavBar titulo='Contacto' />
        <CartWidget contador={contadorCarrito}></CartWidget>
    </ul>
  </nav>
  );
}

export default App;
