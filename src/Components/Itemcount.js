import React, { useState } from "react"
import '../Components/Itemcount.css'


const Itemcount = ({ initial, stock, onAdd }) => {

    const [Counter, Setcounter] = useState(initial)

    const increase = () => {
        if (Counter < stock) {
            Setcounter(Counter + 1)
        }
    }

    const decrease = () => {
        if (Counter > 1) {
            Setcounter(Counter - 1)
        }
    }

    const addCart = () => {
        onAdd(Counter)
    }

    return (
        <div className="counter">
            <div className="cuentas">
                <h1>Cuentas disponibles: {stock}</h1>
            </div>
            <div class="btn">
                <button className="btncambio" onClick={decrease}>-</button>
                <p>{Counter}</p>
                <button className="btncambio" onClick={increase}>+</button>
                <button className="btncambio" onClick={addCart}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default Itemcount