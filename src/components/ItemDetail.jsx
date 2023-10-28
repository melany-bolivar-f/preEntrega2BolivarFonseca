import React, { useState,useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ItemDetail =({product})=>{
    const [quantityAdded,setQatityAdded]=useState(false)
    const {addItem}= useContext(CartContext)
    


    const onAdd=(cantidad)=>{
        console.log(`compraste ${cantidad} productos`)
        setQatityAdded(cantidad)
        addItem(product, cantidad)
        
    }
    

    return(
        <div style={{width:"100%", textAlign:"center"}}>
            <h2>Detalle de:{product.name}</h2>
            <img src={product.img} alt={product.name} width="40%" />
            <p>Categoria:{product.category}</p>
            <p>Descripcion:{product.description}</p>
            <p>Stock:{product.stock}</p>
            <p>precio: ${product.price},00</p>
            {!quantityAdded ? <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            :<Link to="/cart" className="btn btn-dark mt-2">Ir al carrito</Link>}
        </div>

    )
}

export default ItemDetail;