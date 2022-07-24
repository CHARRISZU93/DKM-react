import { useEffect, useState } from "react";
// import Service from "./Item";
// import { SpinnerDotted } from 'spinners-react';
import '../Components/Itemlistcontainer.css';
import { Link } from "react-router-dom"
import { db } from "./Firebase";
import { getDocs, collection } from "firebase/firestore";


/*const Promesa = new Promise((res, rej) => {
    setTimeout(() => {
        <SpinnerDotted />
    }, 2000);
    res(Service)
    console.log("ping")
});*/

const Listado = () => {

    const [Servicios, SetServicios] = useState([]);

    useEffect(() => {
        const serviceCollection = collection(db, "SERVICIOS");
        getDocs(serviceCollection).then(resultado => {
            const lista = resultado.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data(),
                }
            })
            SetServicios(lista)
        }).catch(error => {
            console.log("No hay disponibilidad")
        }
        )
    }, [])

    /*    Promesa.then((data) => {
            SetServicios(data)
        }).catch(() => {
            console.log("No hay disponibilidad")
        })
    }, []);*/

    return (
        <>
        <div id="lista">
            {Servicios.map((Servicio) =>
                <div className="articulo">
                    <Link to={Servicio.route}><h1 className="logoservicio">{Servicio.logo}</h1></Link>
                    <p>Plan: {Servicio.name}</p>
                    <p>Precio: USD {Servicio.price}</p>
                    <p>Cuentas disponibles por plan: {Servicio.available}</p>
                    <div className="btndetalles">
                    <Link to={Servicio.route}><p>MAS DETALLES</p></Link>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default Listado 