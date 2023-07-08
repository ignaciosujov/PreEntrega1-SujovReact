import '../NavBar/navBar.css'


function NavBar({ titulo = "Home"}){
    function saludo() {
        alert(`bienvenido a ${titulo}`)
    }

    

    return (
        <li>
            <a href="#" onClick={saludo}>{titulo}</a>
        </li>
    )
}



export default NavBar;