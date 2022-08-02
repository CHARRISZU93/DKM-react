import React, { createContext, useState } from "react";

export const contexto = createContext()
const { Provider } = contexto

const CustomProvider = ({children}) => {

    const [Service, SetService] = useState([]);

    const getQtyServicios = () => {
        let qty = 0;
        Service.forEach(Servicio => qty += Servicio.qty)
        return qty;
    }

    const addProduct = (Servicie, Counter) => {
        console.log(Servicie)
        if(isInCart(Servicie.id)){
            const Busqueda = Servicie.find(Servicio => Servicio.id === Servicie.id)
            const Index = Servicie.indexOf(Busqueda)
            const newCart = [...Servicie]
            newCart[Index].qty += Servicie.qty;
            SetService(newCart)
        } else {
            SetService([...Service, {...Servicie, Counter}])
        };
        getQtyServicios();
    }

    const deleteProduct = (id) => {
        SetService(Service.filter(Servicie => Servicie.id !== id))
    };

    const isInCart = (id) => {
        return Service.some(Servicie => Servicie.id !== id)
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