import React from 'react';
import NavBar from './Components/Navbar';
import Itemlistcntr from './Components/Itemlistcontainer';
import './App.css';
import ItemDetailcntr from './Components/ItemDetailContainer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  return (
      <BrowserRouter>
        <NavBar />
        <Itemlistcntr Saludo="Selecciona tu plan DKM ideal para ti" />
        <ItemDetailcntr/>
      </BrowserRouter>
  )
}

export default App;
