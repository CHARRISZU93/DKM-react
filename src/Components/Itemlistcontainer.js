import React from "react";
import Listado from "./ItemList";

const Itemlistcntr = ({ Saludo }) => {
    return (
        <>
            <p>{Saludo}</p>
            <Listado />
        </>
    )
}

export default Itemlistcntr
