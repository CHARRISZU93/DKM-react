import React from "react"
import logo from '../../Media/a-different-kind-of-mkt.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <ul>
            <li>
                <a class="nav-link link-dark p-0" href="nosotros.html">NOSOTROS</a>
            </li>
            <li>
                <a class="nav-link link-dark p-0" href="servicios.html">SERVICIOS</a>
            </li>
            <li>
                <a class="nav-link link-dark pt-2 p-0" href="index.html"><img src={logo} alt="DKM"></img></a>
            </li>
            <li>
                <a class="nav-link link-dark p-0" href="pricing.html">PRICING</a>
            </li>
            <li>
                <a class="nav-link link-dark p-0" href="soporte.html">SOPORTE</a>
            </li>
        </ul>
    )
}

export default Navbar