import {Link} from 'react-router-dom'
import Item from './Item'



function ItemList({helados}) {
    

    return (
        <div className='mt-3'>
            <h2>Sabores</h2>
            <div className='container mt-3'>
                <div className='row mt-3'>
                    {
                        helados.map(helado =>(
                            
                            <Link to={`/item/${helado.id}`} className='col-md-4 mt-3' key={helado.id}>
                                <Item nombre={helado.nombre} imagen={helado.imagen} ingrediente={helado.ingredientes}/>
                                
                            </Link>
                    
                        ))
                    }

                </div>
                
            </div>
        </div>
    )
}

export default ItemList
