import React from 'react';
import ItemList from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import productosHelados from '../productos/helados.json'



export function ItemListContainer(){
    const {category} = useParams();


async function cargarHelados(){

    const promesa = new Promise(resolve =>{
        setTimeout(()=>{
            const categorias = productosHelados.filter((helados)=>{
            
                  if (category){
                    return category === helados.catId;
                }else {
                    return true;
               }
            })
       
            resolve(categorias)

    },2000)
})
    const helados = await promesa 

    return helados 
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