import { getData } from "../mock/data";
import { useEffect, useState} from "react";
import ItemList from "./ItemList"
import { useParams } from "react-router-dom";

const ItemListContainer=(props)=>{
    console.log("hola soy itemlistcontainer")
    const [products,setProducts]=useState([])
    const [loader,setLoader]=useState(false)
    const {categoryId}=useParams()

    console.log(categoryId)
    useEffect(()=>{
        setLoader(true)
        getData()
        .then((res)=>{
            if (categoryId){
                setProducts(res.filter((item)=>item.category === categoryId))
            }else{
                setProducts(res)
            }
        })
        .catch((error)=>setProducts(error))
        .finally(()=>setLoader(false))
    },[categoryId])
    console.log(products)
    
    return(
        <div>
            <h1>{props.greeting} {categoryId && <span style={{textTransform:"capitalize", color:"gray"}}>{categoryId}</span>}</h1>
            {loader ? <p>Cargando...</p>:<ItemList products={products}/>}
            
        </div>
    )
}

export default ItemListContainer;