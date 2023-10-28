

export const products=[
    
    { name:"Nike Max", price:50000, description:"funcionales para correr varios kilometros", category:"tenis", stock:10, img:"https://i.postimg.cc/vH1GDchC/nikeA.png"},
    { name:"Nike Cacus", price:60000, description:"funcionales para correr varios kilometros", category:"tenis", stock:10, img:"https://i.postimg.cc/LsGbC8Lg/nikeA.png"},
    { name:"Nike fly", price:40000, description:"funcional para hacer deporte", category:"ropa", stock:10, img:"https://i.postimg.cc/PxkMvp1y/nikeB.png"},
    { name:"Nike bad", price:50000, description:"funcional para hacer deporte", category:"ropa", stock:10, img:"https://i.postimg.cc/nrS72C96/nikeB.png"},
    { name:"Nike pol", price:60000, description:"funcional para hacer deporte", category:"ropa", stock:10, img:"https://i.postimg.cc/3JKYCtK5/nikeB.png"}
]

export const getData=()=>{
    let error=false;
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if (error){
                reject("hubo un error, intente mas tarde")
            }else{
                resolve(products)
            }
        },3000);
    })
}