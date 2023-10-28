//import NavbarComponent from"./components/NavbarComponent";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponents from "./components/NavbarComponents";
import React,{useEffect} from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./services/firebase";
import { products } from "./mock/data";
import Checkout from "./Checkout/Checkout";
import { CartProvider } from "./context/CartContext";
import Cart from "./Cart/Cart";


function App() {
  // useEffect(()=>{
  //   const colectionProductos= collection(db,"productos")
  //   products.map((item)=>addDoc(colectionProductos,item))

  // },[])
  console.log("hola soy App el papa de todos")
  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarComponents/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi app!"/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoria:"/>}/>
            <Route path="/detail/:id" element={<ItemDetailContainer/>}  />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
