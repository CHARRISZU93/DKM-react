import React from "react"
import logo from '../Media/a-different-kind-of-mkt.png'
import Cartwidget from "../Components/Cartwidget"
import '../Components/Navbar.css'

const Navbar = () => {
    return (
        <nav>
        <ul>
            <li>
                <a href="nosotros.html">NOSOTROS</a>
            </li>
            <li>
                <a href="servicios.html">SERVICIOS</a>
            </li>
            <li>
                <a href="index.html"><img src={logo} alt="DKM"></img></a>
            </li>
            <li>
                <a href="pricing.html">PRICING</a>
            </li>
            <li>
                <a href="soporte.html">SOPORTE</a>
            </li>
            <li>
                <Cartwidget/>
            </li>
        </ul>
        </nav>
    )
}

export default Navbar