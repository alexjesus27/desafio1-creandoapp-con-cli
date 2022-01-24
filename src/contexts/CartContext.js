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
            
            const newHelado = [...carrito];
            newHelado.splice(index, 1, producto);
            
            setCarrito([...newHelado]);
            console.log(carrito);
        }else{
            let producto ={...helados, total2}
            setCarrito([...carrito, producto])
            console.log(carrito)
        }
    }

    const removeItem = (id) =>{
        let index = carrito.findIndex(helado => helado.id === id);

        const newHelado = [...carrito];
        newHelado.splice(index, 1);
        setCarrito([...newHelado]);
    }

    const clear = () =>{
        setCarrito([]);
    }

        

       // console.log(producto)
        
    

    return(
        <CartContext.Provider value ={{carrito, setCarrito, addToCart, removeItem, clear}}>

            {props.children}
        
        </CartContext.Provider>
    )
    
}

export default CartProvider;