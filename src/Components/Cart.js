import React, { useContext, useState } from "react";
import { contexto } from '../Context/CartContext'
import { db } from './Firebase'
import { doc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"


const Cart = () => {

    const { ServiciosDet, addProduct, deleteProduct, clear, getQtyServicios} = useContext(contexto)
    const { idVenta, SetIdVenta } = useState("")

    const DatosComprador = () => {
        return(
            <div>
            <h1>Datos del Comprador</h1>,
                <form>
                    <label>Nombre:</label>,
                    <input type="text" name="nombre" />,
                    <label>Apellido:</label>,
                    <input type="text" name="apellido" />,
                    <label>Direccion:</label>,
                    <input type="text" name="direccion" />,
                    <label>Telefono:</label>,
                    <input type="text" name="telefono" />,
                    <label>Email:</label>,
                    <input type="text" name="email" />,
                    <button type="submit">Pagar</button>,
                </form>
            </div>
        )
    }

    const FinalizarCompra = () => {
        const VentasCollection = collection(db, 'VENTAS')
        addDoc(VentasCollection, {
            DatosComprador,
            Items: ({addProduct}), 
            Fecha: serverTimestamp(),
            Total: 500
        })
        .then((result) => {
            SetIdVenta(result.id)
        });
        const UpdateCollection = doc(db, 'SERVICIOS')
        updateDoc(UpdateCollection, {stock1: 10})
    }

    return (
        <>
            {ServiciosDet.lenght === 0
                ? <h1>No hay productos en el carrito</h1>
                : <>
                {ServiciosDet.map(ServiciosDet => (
                    <h1 key={ServiciosDet.id}> {ServiciosDet.name} </h1>)
                )}
                <button onClick={() => clear()}>Vaciar carrito</button>
                <button onClick={() => deleteProduct(ServiciosDet.id)}>Eliminar producto</button>
                <button onClick={() => FinalizarCompra()}>Finalizar compra</button>
                </>
}           
        </>
        )
}

export default Cart