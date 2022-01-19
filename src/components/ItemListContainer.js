import React from 'react';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import productosHelados from '../productos/helados.json'



export function ItemListContainer(){
    const {catid} = useParams();

const promesa = new Promise(resolve =>{
    setTimeout(()=>{
        resolve(productosHelados);
    }, 2000);
})

async function cargarHelados(){
    const helados = await promesa;
    const categorias = helados.filter((helados)=>{
        if (catid){
            return catid == helados.catId;
         }else {
           return true;
        } 
    })
    return categorias
}

const [helados, setHelados] = useState(null)

    useEffect(()=>{
        cargarHelados().then((helados)=>{
            setHelados(helados)
        }) 
    }, [])

    if(helados == null){
        return(
            <div>Cargando...</div>
        )
    }
    return(
        <ItemList helados={helados}/>
        
    )

}