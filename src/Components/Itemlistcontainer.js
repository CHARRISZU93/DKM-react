import React from "react";
import Listado from "./ItemList";
import '../Components/Itemlistcontainer.css';

const Itemlistcntr = ({ Saludo }) => {
    return (
        <>
            <p>{Saludo}</p>
            <Listado />
        </>
    )
}

export default Itemlistcntr
