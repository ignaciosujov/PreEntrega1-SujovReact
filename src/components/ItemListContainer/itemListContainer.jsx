import { useEffect, useState } from "react";
import ItemList from "../ItemList/itemList";
import ItemDetailContainer from "../ItemDetailContainer/itemDetailContainer";
import { getProducts } from "../../mock/dataProducts";
import { useParams } from "react-router-dom";


function ItemListContainer(){
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    
    
    useEffect(() => {
        getProducts()
        .then((res) => {
            if (categoryId){
                setProducts(res.filter((item) => item.category === categoryId))
            }else{
                setProducts(res)
            }
        })
        .catch((err) => console.log(err))
    }, [categoryId])

    let categoryName = ""

        if(categoryId === "vendidos"){
            categoryName = "más vendidos"
        }else{
            categoryName = categoryId
        }
    

    return(
        <div>
            <h2>Lista de Productos <span>{categoryName}</span>:</h2>
            <ItemList products={products}></ItemList>
        </div>
    )
}


export default ItemListContainer;