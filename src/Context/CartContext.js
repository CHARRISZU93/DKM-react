import React, { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [ServiciosDet, SetServiciosDet] = useState([]);

    const getQtyServicios = () => {
        let qty = 0;
        ServiciosDet.forEach(Servicio => qty += Servicio.qty)
        return qty;
    }

    const addProduct = (ServiciosDet, Counter) => {
        if(isInCart(ServiciosDet.id)){
            const Busqueda = ServiciosDet.find(Servicio => Servicio.id === ServiciosDet.id)
            const Index = ServiciosDet.indexOf(Busqueda)
            const newCart = [...ServiciosDet]
            newCart[Index].qty += ServiciosDet.qty;
            SetServiciosDet(newCart)
        } else {
            SetServiciosDet([...ServiciosDet, {...ServiciosDet, Counter}])
        };
        getQtyServicios();
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
        <Provider value={{getQtyServicios, addProduct, deleteProduct, isInCart, clear}}>
            {children}
        </Provider>
    )
} 

export default CustomProvider