import React from 'react';

export function CartWidget({contador}){
    return(
        <div>
        
        <i className='bi bi-cart '><spam className='badge badge-light'>{contador}</spam></i>
        
        </div>
    );
}

