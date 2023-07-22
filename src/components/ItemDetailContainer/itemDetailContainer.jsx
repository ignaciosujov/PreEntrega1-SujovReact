import React, { useEffect, useState } from 'react'
import { getItem } from '../../mock/dataProducts'
import ItemDetail from '../ItemDetail/itemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        getItem(id)
        .then((res) => setProduct(res))
        .catch((err) => console.log(err))
    }, [])
  return (
    <div><ItemDetail product={product}></ItemDetail></div>
  )
}

export default ItemDetailContainer;