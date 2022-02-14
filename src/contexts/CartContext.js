import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext(null);
    
const CartProvider = (props) => {
    const [carrito, setCarrito] = useState([])
    

    const addToCart =(helados, total2) =>{


        if(carrito.some(helado=> helado.id === helados.id)){
            let index = carrito.findIndex(helado => helado.id === helados.id );
            let producto = carrito[index];
            
            producto.total2 = producto.total2 + total2;
            producto.precioTotal = (producto.precioTotal + helados.precio * total2);
            const newHelado = [...carrito];
            newHelado.splice(index, 1, producto);
            
            setCarrito([...newHelado]);
            
            
        }else{
            const precioTotal = helados.precio * total2;
            let producto ={...helados, total2, precioTotal}
            setCarrito([...carrito, producto])
            
            
           
        }
    }

    const removeItem = (id) =>{
        let index = carrito.findIndex((helado)=> helado.id === id);
        
        const newHelado = [...carrito];
        newHelado.splice(index, 1);
        setCarrito([...newHelado]);

        
    }

    const clear = () =>{
        setCarrito([]);
    }
    
    const TotalCompra = () => {
        return  carrito.reduce((a,b)=>a + b.precioTotal, 0)
    }
    const contadorProductos =() =>{
        
        return carrito.reduce((a,b)=> a + b.total2, 0)
    }
    

    return(
        <CartContext.Provider value ={{carrito, setCarrito, addToCart, removeItem, clear, TotalCompra, contadorProductos}}>

            {props.children}
        
        </CartContext.Provider>
    )
    
}

export default CartProvider;