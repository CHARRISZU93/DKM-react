import React from "react";
import Itemcount from "./Itemcount";
import Listado from "./ItemList";
import '../Components/Itemlistcontainer.css';

const Itemlistcntr = ({ Saludo }) => {
    return (
        <>
            <p>{Saludo}</p>
            <Listado />
            <Itemcount Stock={10} />
        </>
    )
}

export default Itemlistcntr
