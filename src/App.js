import Form from "./components/form/Form";

import ItemListContainer from "./components/itemListContainer/ItemListContainer";

import Navbar from "./components/navBar/NavBar"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"

import Cart from "./components/cart/Cart";

import CartContextProvider from "./components/context/CartContext";

function App() {

  return (
   
  <BrowserRouter>

    <CartContextProvider>
    
      <Navbar />

      <Routes>

        <Route path="/" element={<ItemListContainer />} />
        
        <Route path="/category/:categoryName" element={<ItemListContainer />} />

        <Route path="/category" element={<ItemListContainer />}/>

        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />
        
        <Route path="/checkout" element={ <Form /> } />

        <Route path="/cart" element={ <Cart /> } />

        <Route path="*" element={ <h2>Esta URL no existe</h2> } />

      </Routes>

      </CartContextProvider>   
       
  </BrowserRouter>

  );
  
}

export default App;


