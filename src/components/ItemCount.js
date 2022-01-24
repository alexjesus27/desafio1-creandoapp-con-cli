
import { Fragment } from 'react';
import {Link} from 'react-router-dom'

export function ItemCount ({helados, total, setTotal, onAdd}){

    function contando(event){
        if(total<helados.stock){
            setTotal(total + 1)
        }else{
            alert("producto sin stock")
        }
    }

    function restar(event){
        if(total>0){
            setTotal(total -1)
        }
    }
    // function onAdd2(){
    //     const carrito = {...helados, total}
    //     console.log (carrito)
    // }
    // function agregar(event){
    //     //{alert(`se ha agregado ${total} helados al carrito`) onAdd}
    
    //     console.log(helados)
    // }
    
    return(
        <Fragment>
        <tr>
            <td><button className='btn btn-success' onClick={contando}>+</button></td>
            <td className='px-2'>{total}</td>
            <td><button className='btn btn-danger' onClick={restar}>-</button></td>
            <Link to="/cart">
            <td><button className='btn btn-primary' onClick={onAdd}>Agregar al carrito</button></td>
            </Link>
        </tr>
        </Fragment>
    )
}
