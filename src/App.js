
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import CartPage from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/Category';
import CartProvider from './contexts/CartContext';
//import {ItemCount} from './components/ItemCount';


function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/cart">
          <CartPage/>
          </Route>
          <Route path="/item/:id">
            <ProductDetail/>
          </Route>
          <Route path="/category/:catid">
            <CategoryPage/>
          </Route>

        </Switch>
       
      </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
