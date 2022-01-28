import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';



export function CartWidget(){
    const cartContext = useContext(CartContext);
    const contador = cartContext.contadorProductos();
    return(
        <div>
        
        <i className='bi bi-cart '><spam className='badge badge-light'>{contador}</spam></i>
        
        </div>
    );
}

