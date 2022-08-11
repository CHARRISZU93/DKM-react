import React, { useContext, useEffect, useState } from "react";
import { contexto } from '../Context/CartContext'
import { db } from './Firebase'
import { doc, addDoc, collection, serverTimestamp, updateDoc } from "firebase/firestore"
import { TextField } from "@mui/material";
import '../Components/Cart.css'



const Cart = () => {

    const { Service, addProduct, deleteProduct, clear, getQtyServicios } = useContext(contexto)
    const [idVenta, SetIdVenta] = useState("")
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
                <h1 className="campo">Datos del Comprador</h1>,
                <form>
                    <label>Nombre:</label>
                    <TextField id="nombre" onChange={Cambio} type="text" name="nombre" value={DatosComprador.nombre} />
                    <label>Apellido:</label>
                    <TextField id="apellido" onChange={Cambio} type="text" name="apellido" value={DatosComprador.apellido} />
                    <label>Direccion:</label>
                    <TextField id="direccion" onChange={Cambio} type="text" name="direccion" value={DatosComprador.direccion} />
                    <label>Telefono:</label>
                    <TextField id="telefono" onChange={Cambio} type="text" name="telefono" value={DatosComprador.telefono} />
                    <label>Email:</label>
                    <TextField id="email" onChange={Cambio} type="text" name="email" value={DatosComprador.email} />
                </form>
            </div>
        )
    }

    const FinalizarCompra = async () => {
        const VentasCollection = collection(db, 'VENTAS')

        await addDoc(VentasCollection, {
            Fecha: serverTimestamp(),
            Comprador: DatosComprador,
            Items: Service,
            Total: getQtyServicios(),
        })
            .then((result) => {
                console.log(result)
                SetIdVenta(result.id)
                clear()
            });
    }

    return (
        <>
            {!Service.id && !idVenta
                ? <h1 className="notificacion">No hay productos en el carrito</h1>
                : (!idVenta
                    ?
                    <>
                        <div>
                            <h1 className="campo">Estas a pocos pasos de empezar con DKM</h1>
                            <p className="campodescrp">Plan: {Service.name}</p>
                            <p className="campodescrp">Plan de Pago: USD {Service.price}</p>
                            <h1 className="campodescrp">Total Cuentas: {getQtyServicios()}</h1>
                        </div>
                        {Comprador()}
                        <div className="botones">
                        <button onClick={() => clear()}>Vaciar carrito</button>
                        <button onClick={() => FinalizarCompra()}>Finalizar compra</button>
                        <button onClick={() => deleteProduct(Service.id)}>Eliminar producto</button>
                        </div>
                    </>
                    :
                    <>
                        <h1 className="campo">Compra finalizada</h1>
                        <p className="campodescrp">Tu compra se ha realizado con exito...</p>
                        <p> --- </p>
                        <p className="campodescrp">Tu numero de venta es: {idVenta}</p>
                        <p className="campodescrp">Te hemos enviado la información de tu cuenta a tu bandeja de entrada</p>
                    </>
                )
            }
        </>
    )
}

export default Cart