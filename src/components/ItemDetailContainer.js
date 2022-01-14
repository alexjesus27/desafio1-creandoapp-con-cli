import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

import productosHelados from '../productos/helados.json'

async function cargarHelados(id){
    const promesaHelados = new Promise((resolve) =>{
        setTimeout(()=>{
            resolve(productosHelados)
        }, 2000)
    })

    const helados = await promesaHelados

    return helados
}
export function ItemDetailContainer(){

    const [helados, setHelados] = useState(null)

    useEffect(()=>{
        cargarHelados(3).then((helados)=>{
            setHelados(helados)
        })
    }, [])

    if(helados == null){
        return(
            <div>Esperando el detalle...</div>
        )
    }


    return(
        <ItemDetail helados={helados}/>
    )
}