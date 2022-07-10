import { useEffect, useState } from "react";
import Service from "./Item";
import { SpinnerDotted } from 'spinners-react';
import '../Components/Itemlistcontainer.css';
import { Link } from "react-router-dom"

const Promesa = new Promise((res, rej) => {
    setTimeout(() => {
        <SpinnerDotted />
    }, 2000);
    res(Service)
    console.log("ping")
});

const Listado = () => {

    const [Servicios, SetServicios] = useState([]);

    useEffect(() => {
        Promesa.then((data) => {
            SetServicios(data)
        }).catch(() => {
            console.log("No hay disponibilidad")
        })
    }, []);

    return (
        <>
        <div id="lista">
            {Servicios.map((Servicio) =>
                <div class="articulo">
                    <Link to={Servicio.route}><h1 class="logoservicio">{Servicio.logo}</h1></Link>
                    <p>Plan: {Servicio.name}</p>
                    <p>Precio: USD {Servicio.price}</p>
                    <p>Cuentas disponibles por plan: {Servicio.available}</p>
                    <div class="btndetalles">
                    <Link to={Servicio.route}><p>MAS DETALLES</p></Link>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default Listado 