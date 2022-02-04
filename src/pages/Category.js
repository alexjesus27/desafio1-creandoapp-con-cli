
import { useParams } from "react-router-dom";
import { ItemListContainer } from "../components/ItemListContainer";

export default function CategoryPage(){

    const {catid} = useParams()

    console.log(catid)
   
    
    return <ItemListContainer catid = {{catid}}/>
}