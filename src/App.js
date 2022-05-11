import logo from './logo.svg';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from'./components/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <ItemListContainer titulo="Hola mundo"/>
     
      <ItemCount/>

      </header>
    </div>
  );
}

export default App;
