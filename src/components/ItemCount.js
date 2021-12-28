import {useState} from 'react';
import { Fragment } from 'react/cjs/react.production.min';

export function ItemCount (){
    const producto = 10;
    const [state, setstate] = useState(0)
    return(
        <Fragment>
        <p>Contador</p>
        <tr>
            <td><button className='btn btn-success' onClick={() =>{if(state<producto){setstate(state + 1)}else{alert("producto sin stock")}}}>+</button></td>
            <td className='px-4'>{state}</td>
            <td><button className='btn btn-danger' onClick={()=>{if(state>0){setstate(state - 1)}}}>-</button></td>
            <td><button className='btn btn-primary' onClick={()=>{alert("producto agregado")}}>Agregar al carrito</button></td>
        </tr>
        </Fragment>
    )
}
