
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

import Navbar from "./components/navBar/NavBar"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"

function App() {

  return (
   
    <BrowserRouter>
    
      <Navbar />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        
        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/category" element={<ItemListContainer />}/>

        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

        <Route path="/cart" element={ <h3>Carrito de compras</h3> } />

        <Route path="*" element={ <h2>Esta URL no existe</h2> } />

      </Routes>

    
    </BrowserRouter>

  );
  
}

export default App;


