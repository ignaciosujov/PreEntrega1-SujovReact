import { Link } from "react-router-dom"


const PRODUCTS = [{id: 1, name: "lamapara1"}, {id: 2, name: "lampara2"}, {id: 3, name: "lampara3"}]


function Products(){
    return(
        <div>
            <h2>Lista de Productos:</h2>
            {PRODUCTS.map(product => (
                <Link key={product.id} to={`/catalogo/${product.id}`}>{product.name}</Link>
            ))}
        </div>
    )
}

export default Products;