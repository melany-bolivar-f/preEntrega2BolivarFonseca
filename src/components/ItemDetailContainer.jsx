import React,{useEffect, useState} from "react";
import { getData } from "../mock/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer =()=>{
    const [product,setProduct]=useState({})
    const  {id}=useParams()
    useEffect(()=>{
        getData()
        .then((res)=>setProduct(res.find((item)=>item.id===id)))
        .catch((error)=>console.log(error))
    },[id])
    console.log(product)

    return(
        <div>
            ItemDetailContainer
            <ItemDetail product={product}/>
        </div>

    )
}

export default ItemDetailContainer;


