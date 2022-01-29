import { useContext } from "react";
import { Fragment } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";


export function Cart() {
    
    const cartContext = useContext(CartContext);
    const {carrito} = cartContext;
    
    const clear = ()=>{
        cartContext.clear()
    }

    if(carrito == ''){
        return (
            <Fragment>
                <h1 className="mt-4">Su carrito esta vacio</h1>
                <Link to="/">
                <button className="btn btn-primary mt-4">Ir a Comprar</button>
                </Link>
            </Fragment>
           
        )
    }

    return(
        <Fragment >
            <div className="row mt-4 container-fluid">
            <div className="col-md-8">
            <h1>Sus Productos</h1>
            
            <div>
                
                     <table className="table mt-4" >
                                          <tbody>
                                          {carrito.map((helado)=>{
                                            return(
                                              <tr key={helado.id}>
                                                  <td><img src={`../public/${helado.imagen}`} className='img-fluid rounded-start' alt=''/></td>
                                                  <td>{helado.nombre}</td>
                                                  <td>cant. {helado.total2}</td>
                      	                        <td>$ {helado.precioTotal}</td>
                      	                        <td><button className="btn btn-danger" onClick={()=>{cartContext.removeItem(helado.id)}}>X</button></td>
                                                
                                              </tr>
                                              )})}
                                          </tbody>
                                      </table>
                     

                
                    
                
            </div>
            <button className="btn btn-danger" onClick={clear}>Vaciar carrito</button>
            </div>
            <div className="col-md-4">
                     <h3>Resumen de tu compra</h3>
                     <p>Total ${cartContext.TotalCompra()}</p>
                     <button className="btn btn-primary">Finalizar compra</button>
                     
                     
                     </div> 
                     </div>   
        </Fragment>
   
    )
    
}