import React,{useEffect, useState} from "react";
//import { getData } from "../mock/data";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer =()=>{
    const [product,setProduct]=useState({})
    const [loader,setLoader]=useState(false)
    const  {id}=useParams()

    // useEffect(()=>{
    //     getData()
    //     .then((res)=>setProduct(res.find((item)=>item.id===id)))
    //     .catch((error)=>console.log(error))
    // },[id])
    // console.log(product)
    useEffect(()=>{
        setLoader(true)
        const colletionProd= collection(db,"productos")
        const referenciaAlDoc= doc(colletionProd,id)
        getDoc(referenciaAlDoc)
        .then((res)=>setProduct({id:res.id,...res.data()}))
        .catch((error)=>console.log(error))
        .finally(()=>setLoader(false))

    },[])

    return(
        <div>
            <ItemDetail product={product}/>
        </div>

    )
}

export default ItemDetailContainer;


