import React, { useState } from "react"
import '../Components/Itemcount.css'


const Itemcount = ({ Stock }) => {

    const [Counter, Setcounter] = useState(1)

    const increase = () => {
        if (Counter < Stock) {
            Setcounter(Counter + 1)
        }
    }

    const decrease = () => {
        if (Counter > 1) {
            Setcounter(Counter - 1)
        }
    }

    const onAdd = () => {
        alert(`Agregaste ${Counter} cuentas al carrito`)
    }

    return (
        <div class="counter">
            <div class="cuentas">
                <h1>Cuentas disponibles: {Stock}</h1>
            </div>
            <div class="btn">
                <button class="btncambio" onClick={decrease}>-</button>
                <p>{Counter}</p>
                <button class="btncambio" onClick={increase}>+</button>
                <button class="btncambio" onClick={onAdd}>Agregar al Carrito</button>
            </div>
        </div>
    )
}

export default Itemcount