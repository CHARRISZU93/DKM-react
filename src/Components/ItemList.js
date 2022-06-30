import { useEffect, useState } from "react";
import Service from "./Item";
import { PacmanLoader } from "react-spinners";
import "../Components/body.css"

const Promesa = new Promise((res, rej) => {
    setTimeout(() => {
        <PacmanLoader />
    }, 4000);
    res(Service)
});

const Listado = () =>{

    const [Servicios, SetServicios] = useState([]);

    useEffect(()=>{
        Promesa.then((data)=>{
            SetServicios(data)
        }).catch(()=>{
            console.log("No hay disponibilidad")
        })
    },[]);

    return(
        <>
        {Servicios.map((Servicio)=> 
            <div>
                <h1 class="logoservicio">{Servicio.logo}</h1>
                <p>Plan: {Servicio.name}</p>
                <p>Precio: USD {Servicio.price}</p>
                <p>Cuentas disponibles por plan: {Servicio.available}</p>
            </div>
            )}
        </>
    )
}

export default Listado 