import { useEffect, useContext, useState } from "react";
import Service from "./Item";
import { useParams, Link } from "react-router-dom";
import '../Components/ItemDetailContainer.css'
import Itemcount from "./Itemcount";
import { contexto } from '../Context/CartContext'
import { db } from "./Firebase";
import { getDoc, collection, doc } from "firebase/firestore";

/* 
const Promesa = new Promise((res, rej) => {
    res(Service)
}) */

const ItemDetail = () => {

    const { PricingItem } = useParams()

    const [Servicio, SetServicio] = useState([]);

/*     const [Services, SetServices] = useState([]);
 */
    const [Pagar, SetPagar] = useState(false)

    const { addProduct } = useContext(contexto)

    const onAdd = (Counter) => {
        SetPagar(true);
        addProduct(Servicio, Counter)
    }

    useEffect(() => {
        const serviceCollection = collection(db, "SERVICIOS");
        const detalles = doc(serviceCollection, PricingItem);
        getDoc(detalles).then(result => {
            SetServicio(result.data())
            const detalle = {
                id: result.id,
                ...result.data(),
            };
            SetServicio(detalle)
        }).catch(error => {
            console.log("Error 404")
        }
        )
    }, [PricingItem])


    /* Promesa.then((data) => {
        SetServicesDet(data.filter((Service) => {
            return Service.name === PricingItem
        }))
    }).catch(() => {
        console.log("Error 404")
    }) */

    return (
            <div id="campo">
            <div>
                {/* {ServicesDet.map((Service) =>
                        <h1 className="campologoservicio">{Service.logo}</h1>
                )} */}
                <p className="campodescrp">Plan {Servicio.name}</p>
                <p className="campodescrp">Precio Desde USD {Servicio.price}</p>
                <p className="campodescripcion">Incluye: {Servicio.descrp}</p>
                <div className="cuentas">
                    {!Pagar
                        ? <Itemcount initial={1} stock={10} onAdd={onAdd} />
                        : <Link to="/cart">
                            <button className="btncambio">Ir a Pagar</button>
                        </Link>
                    }
                </div>
            </div>
            </div>
    )



}

export default ItemDetail;