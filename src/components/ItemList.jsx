import React from "react";
import Item from "./Item"


const ItemList=({products})=>{
    return(
        <div className="d-flex justify-content-around flex-wrap align-items-center">
            hola soy itemlist
            {products.map((prod)=> <Item key={prod.id} prod={prod}/>) }
        </div>
    )
}

export default ItemList;