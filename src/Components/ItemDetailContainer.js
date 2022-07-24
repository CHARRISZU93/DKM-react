import { useEffect, useContext, useState } from "react";
// import ServiceDet from "./ItemDetail";
// import { SpinnerDotted } from 'spinners-react';
import "../Components/Itemlistcontainer"
import { useParams, Link } from "react-router-dom";
import '../Components/ItemDetailContainer.css'
import Itemcount from "./Itemcount";
import { contexto } from '../Context/CartContext'
import { db } from "./Firebase";
import { getDoc, collection, doc } from "firebase/firestore";


/*const Promesa = new Promise((res, rej) => {
    setTimeout(() => {
        <SpinnerDotted />
    }, 2000);
    res(ServiceDet)
    console.log("ping")
})*/

const ItemDetailcntr = () => {

    const { PricingItem } = useParams()

    const [Servicio, SetServicio] = useState([]);

    const [Pagar, SetPagar] = useState(false)

    const { addProduct } = useContext(contexto)

    const onAdd = (ServiciosDet,Counter) => {
        SetPagar(true);
        addProduct(ServiciosDet, Counter)
    }

    useEffect(() => {
        const serviceCollection = collection(db, "SERVICIOS");
        const detalles = doc(serviceCollection, PricingItem);
        getDoc(detalles).then(result => {
            const detalle = {
                id: result.id,
                ...result.data(),
            };
            SetServicio(detalle)
        }).catch(error => {
            console.log("Error 444")
        }
        )
    }, [PricingItem])


    /*Promesa.then((data) => {
        SetServiciosDet(data.filter((ServicioDet) => { 
            console.log(ServicioDet)
            console.log(PricingItem)
            return ServicioDet.name === PricingItem

        }))
    }).catch(() => {
        console.log("Error 444")
    })
}, [PricingItem]); */

return (
    <>
    <div id="detalle">
        {Servicio.map((Servicio) =>
    <div class="campo">
        <h1 class="campologoservicio">{Servicio.logo}</h1>
        <p class="campodescrp">Plan {Servicio.name}</p>
        <p class="campodescrp">Precio Desde USD {Servicio.price}</p>
        <p class="campodescripcion">Incluye: {Servicio.descrp}</p>
        </div>
        )}
    <div className="cuentas">
        {!Pagar
            ? <Itemcount initial={1} stock={10} onAdd={onAdd}/>
            : <Link to="/cart">
            <button className="btncambio">Ir a Pagar</button>
            </Link>
        }
    </div>
    </div>
    </>
)}

export default ItemDetailcntr 
