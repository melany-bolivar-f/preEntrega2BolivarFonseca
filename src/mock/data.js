

const products=[
    {id:"01", name:"Nike pegazus", price:40000, description:"funcionales para correr varios kilometros", category:"tenis", stock:10, img:"https://i.postimg.cc/FFk9HYD8/nikeA.png"},
    {id:"02", name:"Nike Max", price:50000, description:"funcionales para correr varios kilometros", category:"tenis", stock:10, img:"https://i.postimg.cc/vH1GDchC/nikeA.png"},
    {id:"03", name:"Nike Cacus", price:60000, description:"funcionales para correr varios kilometros", category:"tenis", stock:10, img:"https://i.postimg.cc/LsGbC8Lg/nikeA.png"},
    {id:"04", name:"Nike pegazus", price:40000, description:"funcional para hacer deporte", category:"ropa", stock:10, img:"https://i.postimg.cc/PxkMvp1y/nikeB.png"},
    {id:"05", name:"Nike Max", price:50000, description:"funcional para hacer deporte", category:"ropa", stock:10, img:"https://i.postimg.cc/nrS72C96/nikeB.png"},
    {id:"06", name:"Nike Cacus", price:60000, description:"funcional para hacer deporte", category:"ropa", stock:10, img:"https://i.postimg.cc/3JKYCtK5/nikeB.png"}
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