import React, { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [ServiciosDet, SetServiciosDet] = useState([]);

    const addProduct = (ServiciosDet, Counter) => {
        if(isInCart(ServiciosDet.id)){
            const newCart = [...ServiciosDet]
            const seleccion = newCart.find(item => item.id === ServiciosDet.id)
            seleccion.Counter += Counter
            SetServiciosDet(newCart)
        } else {
            SetServiciosDet([...ServiciosDet, {...ServiciosDet, Counter}])
        }
    }

    const deleteProduct = (id) => {
        SetServiciosDet(ServiciosDet.filter(ServiciosDet => ServiciosDet.id !== id))
    };

    const isInCart = (id) => {
        return ServiciosDet.some(ServiciosDet => ServiciosDet.id !== id)
    };

    const clear = () => {
        SetServiciosDet([])
    }
     
    return(
        <Provider value={{addProduct, deleteProduct, isInCart, clear}}>
            {children}
        </Provider>
    )
} 

export default CustomProvider