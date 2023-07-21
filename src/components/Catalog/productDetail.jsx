import { useParams } from "react-router-dom";



function ProductDetail(){
const {id}= useParams()
const {name} = useParams()


    return(
        <div>
            Producto: {id}
            {name}
        </div>
    )
}

export default ProductDetail;