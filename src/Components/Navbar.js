import React from "react"
import logo from '../Media/a-different-kind-of-mkt.png'
import Cartwidget from "../Components/Cartwidget"
import '../Components/Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="">NOSOTROS</Link>
                </li>
                <li>
                    <Link to="">SERVICIOS</Link>
                </li>
                <li>
                    <Link to="/"><img src={logo} alt="DKM"></img></Link>
                </li>
                <li>
                    <Link to="pricing">PRICING</Link>
                </li>
                <li>
                    <Link to="">SOPORTE</Link>
                </li>
                <li>
                    <Link to="cart">
                    <Cartwidget />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar