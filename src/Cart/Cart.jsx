
import React,{useContext} from "react"
import {CartContext} from "../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart=()=>{
const {cart, clear,total}= useContext(CartContext)

    return(
        <div>
            {cart.length
            ? <div>
                {cart.map((item)=><CartItem key={item.id} item={item}/>)}
                <p>Total a pagar: ${total()}</p>
                <div>
                    <button className="btn btn-danger" onClick={clear}>Vaciar carrito</button>
                    <Link className="btn btn-dark " to="/checkout">Terminar compra</Link>
                </div>
              </div>
              : <div>
                    <h3>Tu carritoesta vacio! </h3>
                    <Link to="/" className="btn btn-dark">Ir a comprar</Link>
                </div>}

        </div>
    )
}

export default Cart