import './App.css';
import Navbar from "./componentes/navbar"
import Titulo from "./componentes/title"
import Prendas from "./componentes/Catalogo"


function App() {
  return (
    <>
    <header>
      <Titulo/>
      
      <Navbar/>

      
    </header>

    <main>
      <Prendas/>  
    </main>
    </>
  );
}

export default App;
