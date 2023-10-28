import React, { useState,useContext } from "react"
import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import {db} from "../services/firebase"
import { CartContext } from "../context/CartContext"

const Checkout=()=>{
    const [user,setUser]=useState({})
    const [validateEmail,setValidateEmail]=useState("")
    const [orderId,setOrderId]=useState("")
    const {cart,total,clear}=useContext(CartContext)

    const datosComprador=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })

    }
    const finalizarCompra= (e)=>{
        e.preventDefault()
        if (!user.name && !user.phone){
            alert("completar todos los campos")
        }else{
            let order={
                user,
                item: cart,
                total: total(),
                date: serverTimestamp()
            }
            const ventas= collection(db,"orders")
            addDoc (ventas,order)
            .then((res)=>{
                setOrderId(res.id)
                clear()
            })
            .catch((error)=>console.log(error))

        }
    }


    return(
        <div>
            {orderId !==""
            ? <div>
                <h2>Felicitaciones ! tu orden fue generada con exito!</h2>
                <h5>Su Id de registro es: {orderId}</h5>
            </div>
            :<div>
            <h2>Terminar compra</h2>
            <h5>Por favor llenar con sus datos</h5>
            <form onSubmit={finalizarCompra}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="">Nombre Completo:</label>
                    <input className="form-control" onChange={datosComprador} type="text" placeholder="Nombre y Apellido" name="name"/>
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="">Numero de telefono:</label>
                    <input className="form-control" onChange={datosComprador} type="number" placeholder="+541122334455" name="phone"/>
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="">Direccion de email:</label>
                    <input className="form-control" onChange={datosComprador} type="email" placeholder="nike@dol.com" name="mail"/>
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="">Repita su email:</label>
                    <input className="form-control" onChange={((e)=>setValidateEmail(e.target.value))} type="email" placeholder="nike@dol.com" name="mail"/>
                </div>
                <button className="btn btn-dark"  type="submit" disabled={validateEmail !== user.mail}>Generar orden</button>
            </form>
        </div> }
        </div>
    )
}
export default Checkout