import {useParams} from 'react-router-dom'
import {ItemDetailContainer} from '../components/ItemDetailContainer';


export default function ProductDetail(){
    const {id} = useParams()
    return <ItemDetailContainer heladoId={id}/>
}