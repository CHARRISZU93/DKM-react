import React from 'react';
import NavBar from './Components/Navbar';
import Itemlistcntr from './Components/Itemlistcontainer';
import './App.css';
import ItemDetailcntr from './Components/ItemDetailContainer'
import Cart from './Components/Cart'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/pricing' element={<Itemlistcntr Saludo="Selecciona tu plan DKM ideal para ti" />}></Route>
          <Route path='/Pricing/:PricingItem' element={<ItemDetailcntr/>}></Route>
          <Route path='/carrito' element={<Cart/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
