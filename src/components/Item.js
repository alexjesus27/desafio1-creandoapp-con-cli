import React from 'react'

function Item({nombre, imagen, ingrediente}) {
    
    return (
        <div className='card'>
            <img src={imagen} alt=''/>
            <div className='card-body'>
                <h3 className='card-title'>{nombre}</h3>
                <p>
                    {ingrediente}
                </p>
                <a className='btn btn-primary'>Detalle</a>
            </div>
            
        </div>
    )
}

export default Item
