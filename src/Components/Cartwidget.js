import React from "react";
import Cart from '../Media/carticon.png'
import '../Components/Navbar.css'

const Cartwidget = () => {
    return (
        <a href="carrito.html"><img src={Cart} alt="Carrito"></img></a>
        )
}

export default Cartwidget