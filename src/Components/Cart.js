import React, { useContext } from "react";
import { contexto } from '../Context/CartContext'


const Cart = () => {

    const { ServiciosDet, Serviciodet, addProduct, deleteProduct, clear} = useContext(contexto)

    if (addProduct.length === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
            </div>
        )
    }

    return (
        <>
            {Serviciodet && ServiciosDet.map(() =>
                <p>{addProduct}</p>,
                <button onClick={() => deleteProduct(ServiciosDet.id)}>(X)</button>,
                <button onClick={() => clear()}>Limpiar</button>
                )}
        </>
    )
}

export default Cart