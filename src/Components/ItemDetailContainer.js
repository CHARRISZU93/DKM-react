import { useEffect, useState } from "react";
import ServiceDet from "./ItemDetail";
import { SpinnerDotted } from 'spinners-react';
import "../Components/Itemlistcontainer"
import { useParams } from "react-router-dom";
import '../Components/ItemDetailContainer.css'

const Promesa = new Promise((res, rej) => {
    setTimeout(() => {
        <SpinnerDotted />
    }, 2000);
    res(ServiceDet)
    console.log("ping")
});

const ItemDetailcntr = () => {

    const { PricingItem } = useParams()

    const [ServiciosDet, SetServiciosDet] = useState([]);

    useEffect(() => {
        Promesa.then((data) => {
            SetServiciosDet(data.filter((ServicioDet) => { 
                console.log(ServicioDet)
                console.log(PricingItem)
                return ServicioDet.name === PricingItem

            }))
        }).catch(() => {
            console.log("Error 444")
        })
    }, [PricingItem]);

    return (
        <>
            {ServiciosDet.map((ServicioDet) =>
                <div class="campo">
                    <div>
                    <h1 class="campologoservicio">{ServicioDet.logo}</h1>
                    </div>
                    <div>
                    <p class="campodescrp">Plan {ServicioDet.name}</p>
                    <p class="campodescrp">Precio Desde USD {ServicioDet.price}</p>
                    <p class="campodescripcion">Incluye: {ServicioDet.descrp}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default ItemDetailcntr 
