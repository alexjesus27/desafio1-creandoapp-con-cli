import { useContext } from "react";
import { Fragment } from "react";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { crearOrden } from "../firebase/operadores";
import { TexField } from "./TextField";


export function Cart() {

    const form = useForm()
    
    const cartContext = useContext(CartContext);
    const {carrito} = cartContext;

    async function onSubmit(formValues){
        const nuevaOrden = {
            cliente: formValues,
            productos: carrito,
            total: cartContext.TotalCompra(),
        }

        const nuevaOrdenId = await crearOrden(nuevaOrden)

        alert(`Gracias por su compra. Nro Orden: ${nuevaOrdenId}`)

        form.reset()
        clear()
    }
    
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
                     <h4>Complete con sus datos</h4>
                     <form onSubmit={form.handleSubmit(onSubmit)}>
                         <TexField
                            title="Nombre"
                            inputProps={{
                                placeholder: 'Alexis Duran',
                                required: true,
                                ...form.register('name')
                            }}
                         />
                         <TexField
                            title="Correo"
                            inputProps={{
                                placeholder: 'alexis@ejemplo.com',
                                required: true,
                                ...form.register('email')
                            }}
                         />
                         <TexField
                            title="Telefono"
                            inputProps={{
                                placeholder: '569XXXXXXXX',
                                required: true,
                                ...form.register('phone'),
                            }}
                         />
                        <button className="btn btn-primary m-3">Finalizar compra</button>
                     </form>
                     
                     
                     
                     </div> 
                     </div>   
        </Fragment>
   
    )
    
}