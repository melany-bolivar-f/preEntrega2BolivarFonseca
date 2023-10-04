import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail =({product})=>{
    const onAdd=(cantidad)=>{
        console.log(`compraste ${cantidad} productos`)
    }

    return(
        <div>
            <h2>Detalle de:{product.name}</h2>
            <img src={product.img} alt="otro" />
            <p>Categoria:{product.category}</p>
            <p>Descripcion:{product.description}</p>
            <p>Stock:{product.stock}</p>
            <p>precio: ${product.price},00</p>
            <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        </div>

    )
}

export default ItemDetail;