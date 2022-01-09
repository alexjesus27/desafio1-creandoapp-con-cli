import React, {useEffect, useState} from 'react'
import Item from './Item'
import addictive_cream from '../imagenes/addictive_cream.png'
import kiwi_sensation from '../imagenes/kiwi_sensation.png'
import mint_chocolate from '../imagenes/mint_chocolate.png'
import crazy_banana from '../imagenes/crazy_banana.png'
import strawberry_passion from '../imagenes/strawberry_passion.png'
import fresh_blueberry from '../imagenes/fresh_blueberry.png'

const promesa = new Promise(resolve =>{
    setTimeout(()=>{
        const helados = [
            {
                id: 1,
                nombre: "Addictive cream",
                ingredientes: "Oreo, Limón, Topping",
                imagen: addictive_cream
        
            },
            {
                id: 2,
                nombre: "Kiwi sensation",
                ingredientes: "Kiwi, Pistacho, Topping",
                imagen: kiwi_sensation
            },
            {
                id: 3,
                nombre: "Mint Chocolate",
                ingredientes: "Menta, Chocolate, Topping",
                imagen: mint_chocolate
            },
            {
                id: 4,
                nombre: "Crazy banana",
                ingredientes: "Banana, Chirimoya, Topping",
                imagen: crazy_banana
            },
            {
                id: 5,
                nombre: "Strawberry passion",
                ingredientes: "Frutilla, Coco, Topping",
                imagen: strawberry_passion
            },
            {
                id: 6,
                nombre: "Fresh blueberry",
                ingredientes: "Arandano, Frambuesa, Topping",
                imagen: fresh_blueberry
            }]
            resolve(helados)

    },2000)
})



function ItemList() {
    
    const [productos, setProductos] = useState(null)

    useEffect(() => {
        promesa.then(res =>setProductos(res))
        
        
    }, [])

    if(productos == null){
        return(
            <div>Cargando...</div>
        )
    }


    return (
        <div>
            <h2>Sabores</h2>
            <div className='container'>
                <div className='row'>
                    {
                        productos.map(helado =>(
                            <div className='col-md-4' key={helado.id}>
                                <Item nombre={helado.nombre} imagen={helado.imagen} ingrediente={helado.ingredientes}/>
                            </div>
                        ))
                    }

                </div>
                
            </div>
        </div>
    )
}

export default ItemList
