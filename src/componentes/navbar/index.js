import "./style.css"
import ImgCarrito from "../Archivos/img"

const Navbar = () => {
  return (
    <nav>
      
        <ul className="menu-links">
          <li><a href="">Inicio</a></li>
          <li><a href="">Catalogo</a></li>
          <li><a href="">Categoria</a></li>
          <li><a href="">Contacto</a></li>
          <div className="menu-carrito">
          <img src={ImgCarrito.imgCarrito}/>
          <p>3</p>
          </div>
        </ul>

      
    </nav>
  )
}




export default Navbar