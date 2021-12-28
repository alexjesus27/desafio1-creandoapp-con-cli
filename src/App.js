import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import {ItemCount} from './components/ItemCount';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Futura pagina de venta de Helados tailandeses
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <ItemListContainer/>
      <ItemCount/>
    </div>
  );
}

export default App;
