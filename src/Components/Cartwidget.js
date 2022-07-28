import React from "react";
import { MdAddShoppingCart } from "react-icons/md"
import '../Components/Navbar.css'
import { contexto } from '../Context/CartContext'
import { useContext } from "react";

const Cartwidget = () => {

    const { getQtyServicios } = useContext(contexto)

    return (
        <>
            <a href="cart"><MdAddShoppingCart id="Cartwidget"  /></a>
            <p>{getQtyServicios}</p>
        </>
    )
}

export default Cartwidget