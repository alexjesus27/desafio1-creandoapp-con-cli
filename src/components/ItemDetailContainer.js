import React from 'react';
import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

import productosHelados from '../productos/helados.json'
import { getProductoId } from '../firebase/operadores';

export function ItemDetailContainer({heladoId}) {
    

    const [helados, setHelados] = useState([])

    useEffect(()=>{
        async function cargarHelado() {
            
            const helados = await getProductoId(heladoId)
            setHelados(helados)
                
            
            }
            cargarHelado()
        }, [heladoId])
        return <ItemDetail helados={helados} />
    
}
