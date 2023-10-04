import React,{useState} from "react"

const ItemCount= ({initial,stock,onAdd})=>{
    console.log("hola soy el contador")
    const [count,setCount]=useState(initial)
        const add=()=>{
            if (count<stock){
                setCount(count+1)
            }   
        }
        const decrese=()=>{
            if(count>0){
                setCount(count-1)
            }
        }
    const  addtocart=()=>{
        onAdd(count)
    }
    return(
        <div className="d-flex flex-column align-items-center">
            <div>
                <button className="btn btn-danger" onClick={decrese}>-</button>
                <span className="btn" >{count}</span>
                <button className="btn btn-success" onClick={add}>+</button>
            </div>
            <button className="btn btn-primary mt-2" onClick={addtocart} disabled={count===0}>comprar</button>

        </div>
    )
}

export default ItemCount;