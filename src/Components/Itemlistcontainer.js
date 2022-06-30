import React from "react";
import Itemcount from "./Itemcount";
import Listado from "./ItemList";
import '../Components/body.css';

const Itemlistcntr = ({ Saludo }) => {
    return (
        <>
            <h1>{Saludo}</h1>
            <Listado />
            <Itemcount Stock={10} />
        </>
    )
}

export default Itemlistcntr
