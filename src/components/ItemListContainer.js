import React from 'react';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { getAllProducts, getProductoCategoryId } from '../firebase/operadores';



function cargarHelados(catid){
    const catId = catid?.catid
    console.log(catId)
    if (catId){
        return getProductoCategoryId(catId)
        
    } else {
        return  getAllProducts()
    }
}

export function ItemListContainer({catid}) {
   

    const [productos, setproductos] = useState([])

    useEffect(()=>{
        async function mostrarProductos() {
           
            const productos = await cargarHelados(catid)
            setproductos(productos)      
        }
        mostrarProductos()

    }, [catid])

    return <ItemList helados={productos}/>
    
}
