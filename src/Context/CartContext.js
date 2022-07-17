import React, { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [ServiciosDet, SetServiciosDet] = useState([]);

    const addProduct = (ServiciosDet, Counter) => {
        console.log(ServiciosDet, Counter)
    }

    const deleteProduct = (id) => {
        SetServiciosDet(ServiciosDet.filter(ServiciosDet => ServiciosDet.id !== id))
    };

    const isInCart = (id) => {
        return ServiciosDet.some(ServiciosDet => ServiciosDet.id !== id)
    };

    const clear = (id) => {
        SetServiciosDet([]);
    }

    return(
        <Provider value={{addProduct, deleteProduct, isInCart, clear}}>
            {children}
        </Provider>
    )
} 

export default CustomProvider