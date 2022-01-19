import React from 'react';

function ItemDetail({helados}){
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
                        <button className='btn btn-primary'>Agregar al carro</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default ItemDetail;
