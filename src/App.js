import './App.css';
import Navbar from "./componentes/navbar"
import Titulo from "./componentes/title"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from './page/inicio';
import Categoria from './page/categorias';
import Contacto from './page/contacto';
import Prendas from './page/catalogo';
import Detalle from "./page/detalle"
 

function App() {

  return (
    <BrowserRouter>
      
        <Titulo />

        <Navbar />

      <main>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/catalogo' element={<Prendas/>}/>  
          <Route path='/categoria' element={<Categoria/>}/> 
          <Route path='/contacto' element={<Contacto/>}/> 
          <Route path='/catalogo/:id' element={<Detalle/>}/> 
        </Routes>
      </main>

    </BrowserRouter>

  );
}

export default App;


