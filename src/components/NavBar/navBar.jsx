import CartWidget from '../CartWidget/cartWidget';
import NavBarContent from './navBarContent';
import Logo from '../Logo/logo';
import { useState } from 'react';
import '../HomeContent/homeContent'





function NavBar() {
    const [ contadorCarrito ] = useState(0)


    return(
    <nav className='navBar'>
        <Logo></Logo>
        <ul>
            <NavBarContent />
            <NavBarContent titulo='Productos' url='/productos' />
            <NavBarContent titulo='Catalogo' url='/catalogo'/>
            <NavBarContent titulo='Contacto' />
            <CartWidget contador={contadorCarrito}></CartWidget>
        </ul>
    </nav>
    )
}

export default NavBar;