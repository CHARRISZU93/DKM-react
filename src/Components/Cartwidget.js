import React from "react";
import { MdAddShoppingCart } from "react-icons/md"
import '../Components/Navbar.css'
import { contexto } from '../Context/CartContext'
import { useContext } from "react";
import { Link } from "react-router-dom"


const Cartwidget = () => {

    const { getQtyServicios } = useContext(contexto)

    return (
        <>
            <Link to="cart"><MdAddShoppingCart id="Cartwidget"  /></Link>
            {getQtyServicios()}
        </>
    )
}

export default Cartwidget