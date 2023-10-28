import React from "react";
import {Link} from "react-router-dom"

const Item=({prod})=>{
    return(
        <div className="card" style={{width:"24rem", marginTop:20}}>
            <img src={prod.img} alt={prod.name} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.category}</p>
                <p className="cad-text">{prod.description}</p>
                <p className="cad-text">${prod.price},00</p>
                <Link to={`/detail/${prod.id}`} className="btn btn-primary">ver mas </Link>
            </div>
        </div>
    )
}

export default Item;