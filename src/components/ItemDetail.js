import React, { useContext } from 'react';
import { useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import {ItemCount} from './ItemCount';

function ItemDetail({helados}){

    
     
   const [total, setTotal] = useState(1)

   const cartContext = useContext(CartContext);

   //console.log(cartContext.carrito) 
   //console.log(cartContext.addToCart);
    const total2 = total
    const onAdd = ()=>{
        cartContext.addToCart(helados, total2)
    }


    return (
        <div className='card mb-3 mt-3 container' >
            <h3>Detalle del producto</h3>
            <div className='row g-0'>
                <div className='col-md-4'>
                    <img src={`../public/${helados.imagen}`} className='img-fluid rounded-start' alt=''/>
                    
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{helados.nombre}</h5>
                        <p className='card-text'>{helados.descripcion}</p>
                        <p className='card-text'><small className='text-muted'>{helados.ingredientes}</small></p>
                        <p className='card-text'>$ {helados.precio}</p>
                        <ItemCount helados={helados} total={total} setTotal={setTotal} onAdd={onAdd}/>
                        
                             
                        
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ItemDetail;
