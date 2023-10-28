
import React, { useContext } from "react"
//import {BsCart4} from "react-icons/bs"
import { Badge } from "react-bootstrap"
import { CartContext } from "../context/CartContext"


const CartWidget =()=>{
    const {cartQuantity}=useContext(CartContext)






    return(
        <div>
            <img src="../img/carrito.png" alt="carrito"  width="30rem"/>
            {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}


        </div>
    )
}

export default CartWidget;