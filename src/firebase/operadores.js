import reactRouterDom from "react-router-dom";
import { getFirestore, firestore } from "./conexion";

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

export async function crearOrden(orden){
    const db = getFirestore()

    const document = await db.collection('ordenes').add({
        cliente: orden.cliente,
        productos: orden.productos,
        fechaPedido: firestore.Timestamp.fromDate(new Date()),
        total: orden.total,
    })

    return document.id
}