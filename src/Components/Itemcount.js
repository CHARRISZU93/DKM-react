import React, { useState } from "react"
import '../Components/Itemcount.css'


const Itemcount = ({Stock}) => {

    const [Counter, Setcounter] = useState(1)

    const increase = () => {
        if (Counter<Stock){
        Setcounter(Counter+1)
    }
    }

    const decrease = () => {
        if(Counter>1){
        Setcounter(Counter-1)
    }
    }

    const onAdd = () =>{
        alert(`Agregaste ${Counter} cuentas al carrito`)
    }

    return (
        <>
        <h1>Cuentas disponibles: {Stock}</h1>
        <h1>
        <button onClick={decrease}>-</button>
        {Counter}
        <button onClick={increase}>+</button>
        </h1>
        <button onClick={onAdd}>Agregar al Carrito</button>
        </>
    )
}

export default Itemcount