//import NavbarComponent from"./components/NavbarComponent";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponents from "./components/NavbarComponents";


function App() {
  console.log("hola soy App el papa de todos")
  return (
    <BrowserRouter>
      hola mundo!!!
      <NavbarComponents/>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos a mi app!"/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="Categoria:"/>}/>
          <Route path="/detail/:id" element={<ItemDetailContainer/>}  />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
