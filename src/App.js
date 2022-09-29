import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer greeting={"Bienvenido a mi primera pagina en proceso!"}/>
    </div>
  );
}

export default App;
