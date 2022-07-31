import React, { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [Servicie, SetService] = useState([]);

    const getQtyServicios = () => {
        let qty = 0;
        Servicie.forEach(Servicio => qty += Servicio.qty)
        return qty;
    }

    const addProduct = (Servicie, Counter) => {
        if(isInCart(Servicie.id)){
            const Busqueda = Servicie.find(Servicio => Servicio.id === Servicie.id)
            const Index = Servicie.indexOf(Busqueda)
            const newCart = [...Servicie]
            newCart[Index].qty += Servicie.qty;
            SetService(newCart)
        } else {
            SetService([...Servicie, {...Servicie, Counter}])
        };
        getQtyServicios();
    }

    const deleteProduct = (id) => {
        SetService(Servicie.filter(Servicie => Servicie.id !== id))
    };

    const isInCart = (id) => {
        return Servicie.some(Servicie => Servicie.id !== id)
    };

    const clear = () => {
        SetService([])

    }
     
    return(
        <Provider value={{getQtyServicios, addProduct, deleteProduct, isInCart, clear}}>
            {children}
        </Provider>
    )
} 

export default CustomProvider