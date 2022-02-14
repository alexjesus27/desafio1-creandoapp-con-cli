
import { useParams } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer";

export default function CategoryPage(){

    const {catid} = useParams()

    
   
    
    return <ItemListContainer catid = {{catid}}/>
}