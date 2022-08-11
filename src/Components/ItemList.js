import { useEffect, useState } from "react";
import Service from "./Item";
import '../Components/Itemlistcontainer.css';
import { Link } from "react-router-dom"
import { db } from "./Firebase";
import { getDocs, collection } from "firebase/firestore";


const Promesa = new Promise((res, rej) => {
    res(Service)
})

const Listado = () => {

    const [Servicios, SetServicios] = useState([]);
    const [Services, SetServices] = useState([]);

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

    Promesa.then((data) => {
            SetServices(data)
        }).catch(() => {
            console.log("No hay disponibilidad")
        })

    return (
        <>
        <div id="lista">
        <div>
            {Services.map((Service) =>
                <div key={Service.id} className="articuloimg">
                <Link to={Service.route}><h1 className="logoservicio">{Service.logo}</h1></Link>
                </div>
            )}
            {Servicios.map((Servicio, i) =>
                <div className="articulo" key={Servicio.id}>
                    <p>Plan: {Servicio.name}</p>
                    <p>Precio: USD {Servicio.price}</p>
                    <p>Cuentas disponibles por plan: {Servicio.available}</p>
                    <div className="btndetalles">
                    <Link to={Servicio.route}><h1>MAS DETALLES</h1></Link>
                    </div>
                </div>
            )}
        </div>
        </div>
        </>
    )
}


export default Listado 