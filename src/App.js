import React from 'react';
import NavBar from './Components/Navbar';
import Itemlistcntr from './Components/Itemlistcontainer';
import './App.css';

const App = () => {
  return (
    <>
    <NavBar/>
    <Itemlistcntr Saludo="A Different Kind Of MKT" />
    </>
    )
}

export default App;
