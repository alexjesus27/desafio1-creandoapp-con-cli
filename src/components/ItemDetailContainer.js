import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

import productosHelados from '../productos/helados.json'

async function cargarHelados(id){
    const promesaHelados = new Promise((resolve) =>{
        setTimeout(()=>{
            const heladoId = productosHelados.find((ice) => ice.id == id)
            resolve(heladoId)
        }, 2000)
    })

    const helados = await promesaHelados

    return helados
}
export function ItemDetailContainer({heladoId}){

    const [helados, setHelados] = useState(null)

    useEffect(()=>{
        cargarHelados(heladoId).then((helados)=>{
            setHelados(helados)
        })
    }, [heladoId])

    if(helados == null){
        return(
            <div>Esperando el detalle...</div>
        )
    }


    return(
        <ItemDetail helados={helados}/>
    )
}