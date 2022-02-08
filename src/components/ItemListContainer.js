import React from 'react';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllProducts, getProductoCategoryId } from '../firebase/operadores';

import productosHelados from '../productos/helados.json'


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
