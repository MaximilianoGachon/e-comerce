import './App.css';
import Navbar from "./componentes/navbar"
import Titulo from "./componentes/title"
//import Prendas from "./componentes/Catalogo"
import { BrowserRouter, routes, route } from "react-router-dom"
import Inicio from './page/inicio';
import Catalogo from './page/catalogo';
import Categoria from './page/categorias';
import Contacto from './page/contacto';

function App() {
  return (
    <BrowserRouter>
      
        <Titulo />

        <Navbar />

      <main>
        <routes>
          <route path='/' element={<Inicio/>}/>
          <route path='/catalogo' element={<Catalogo/>}/>  
          <route path='/categoria' element={<Categoria/>}/> 
          <route path='/contacto' element={<Contacto/>}/> 
        </routes>
      </main>

    </BrowserRouter>

  );
}

export default App;


