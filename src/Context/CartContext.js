import React, { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [Service, SetService] = useState({});
    const [Count, SetCount] = useState(0);

    const getQtyServicios = () => {
        return Count;
    }

    const addProduct = (Servicie, Counter) => {
        SetService(Servicie)
        SetCount(Counter)
    }

    const deleteProduct = () => {
        SetService({})
        SetCount(0)
    };

    const isInCart = (id) => {
        return Service.some(Servicie => Servicie.id !== id)
    };

    const clear = () => {
        SetService([])
        SetCount(0)

    }
     
    return(
        <Provider value={{Service, getQtyServicios, addProduct, deleteProduct, isInCart, clear}}>
            {children}
        </Provider>
    )
} 

export default CustomProvider