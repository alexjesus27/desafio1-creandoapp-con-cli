import reactRouterDom from "react-router-dom";
import { getFirestore } from "./conexion";

function documentoProductos(documento) {
    return{
        id: documento.id,
        ...documento.data(),
    }
    
}

export async function getAllProducts(){
    const db = getFirestore()

    const snapshot = await db.collection('productos').get()

    const productos = snapshot.docs.map(documentoProductos)

    return productos

    

}

export async function getProductoId(heladoId) {

    const db = getFirestore()

    const doc = await db.collection('productos').doc(heladoId).get()

    if(!doc.exists){
        return null
    }

    return documentoProductos(doc)
    
}

export async function getProductoCategoryId(catId){
    const db = getFirestore()

    const snapshot = await db.collection('productos').where('catId', '==', catId).get()

    const productos = snapshot.docs.map(documentoProductos)

    return productos
}