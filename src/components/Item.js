import React from 'react'
import {Link} from 'react-router-dom'

function Item({id, nombre, imagen, ingrediente}) {
    
    return (
        <div className='card'>
            <img src={imagen} alt=''/>
            <div className='card-body'>
                <h3 className='card-title'>{nombre}</h3>
                <p>
                    {ingrediente}
                </p>
               
                
            </div>
            
        </div>
    )
}

export default Item
