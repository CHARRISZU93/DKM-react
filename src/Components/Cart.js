import React, { useContext, useEffect, useState } from "react";
import { contexto } from '../Context/CartContext'
import { db } from './Firebase'
import { doc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"


const Cart = () => {

    const { Service, addProduct, deleteProduct, clear, getQtyServicios } = useContext(contexto)
    const { idVenta, SetIdVenta } = useState("")
    const [DatosComprador, SetDatosComprador] = useState({
        nombre: "",
        apellido: "",
        direccion: "",
        telefono: "",
        email: "",
    })

    const Comprador = () => {

        const Cambio = (e) => {
            switch (e.target.id) {
                case "nombre":
                    SetDatosComprador({ ...DatosComprador, nombre: e.target.value })
                    break;
                case "apellido":
                    SetDatosComprador({ ...DatosComprador, apellido: e.target.value })
                    break;
                case "direccion":
                    SetDatosComprador({ ...DatosComprador, direccion: e.target.value })
                    break;
                case "telefono":
                    SetDatosComprador({ ...DatosComprador, telefono: e.target.value })
                    break;
                case "email":
                    SetDatosComprador({ ...DatosComprador, email: e.target.value })
                    break;
            }
        }

        return (
            <div>
                <h1>Datos del Comprador</h1>,
                <form>
                    <label>Nombre:</label>,
                    <input id="nombre" onChange={Cambio.bind(this)} type="text" name="nombre" value={DatosComprador.nombre} />,
                    <label>Apellido:</label>,
                    <input id="apellido" onChange={Cambio} type="text" name="apellido" />,
                    <label>Direccion:</label>,
                    <input id="direccion" onChange={Cambio} type="text" name="direccion" />,
                    <label>Telefono:</label>,
                    <input id="telefono" onChange={Cambio} type="text" name="telefono" />,
                    <label>Email:</label>,
                    <input id="email" onChange={Cambio} type="text" name="email" />,
                </form>
            </div>
        )
    }

    const FinalizarCompra = () => {
        const VentasCollection = collection(db, 'VENTAS')

        addDoc(VentasCollection, {
            DatosComprador,
            Items: ({ addProduct }),
            Fecha: serverTimestamp(),
            Total: 500
        })
            .then((result) => {
                SetIdVenta(result.id)
            });
        const UpdateCollection = doc(db, 'SERVICIOS')
        updateDoc(UpdateCollection, { stock1: 10 })
    }

    return (
        <>
            {!Service.id
                ? <h1>No hay productos en el carrito</h1>
                : <>
                    <div className="campo">
                        <h1 className="campologoservicio">{Service.logo}</h1>
                        <p className="campodescrp">Plan {Service.name}</p>
                        <p className="campodescrp">Precio Desde USD {Service.price}</p>
                    </div>
                    <button onClick={() => clear()}>Vaciar carrito</button>
                    <button onClick={() => deleteProduct(Service.id)}>Eliminar producto</button>
                    <Comprador />
                    <button onClick={() => FinalizarCompra()}>Finalizar compra</button>

                </>

            }
        </>
    )
}

export default Cart