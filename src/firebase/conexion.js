
import { initializeApp, firestore } from "firebase/app";
import 'firebase/firestore';


const app = initializeApp ({
  apiKey: "AIzaSyCp-Q4PYGWiXzUEF42sVAqhNRzdrueG8X4",
  authDomain: "thailand-ice-cream.firebaseapp.com",
  projectId: "thailand-ice-cream",
  storageBucket: "thailand-ice-cream.appspot.com",
  messagingSenderId: "585301420534",
  appId: "1:585301420534:web:07b8337b130bda759d7fd7"
});



export function getFirebase() {
    return app;
    
}

export function getFirestore() {
    return firestore(app);
    
}

export {firestore}