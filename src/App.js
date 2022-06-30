import React from 'react';
import NavBar from './Components/Navbar';
import Itemlistcntr from './Components/Itemlistcontainer';
import './App.css';

const App = () => {
  return (
    <>
      <NavBar />
      <Itemlistcntr Saludo="Selecciona tu plan DKM ideal para ti" />
    </>
  )
}

export default App;
