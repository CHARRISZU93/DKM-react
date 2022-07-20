import React from 'react';
import NavBar from './Components/Navbar';
import Itemlistcntr from './Components/Itemlistcontainer';
import './App.css';
import ItemDetailcntr from './Components/ItemDetailContainer'
import CustomProvider from './Context/CartContext'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Cart from './Components/Cart';

const App = () => {
  return (
    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Routes>
          <Route path='/pricing' element={<Itemlistcntr Saludo="Selecciona tu plan DKM ideal para ti" />}></Route>
          <Route path='/Pricing/:PricingItem' element={<ItemDetailcntr />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </CustomProvider>
    </BrowserRouter>
  )
}

export default App;
