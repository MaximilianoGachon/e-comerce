import "./style.css"
import ImgCarrito from "../Archivos/img"
import { Link } from "react-router-dom"

const routes = [
  {
    path: "/",
    text: "Inicio"
  },
  {
    path: "/catalogo",
    text: "Catalogo"
  },
  {
    path: "/categoria",
    text: "Categoria"
  },
  {
    path: "/contacto",
    text: "Contacto"
  },
]

const Navbar = () => {
  return (
    <header>
      <nav>
        <ul className="menu-links">

          {routes.map((route) => (
            <Link key={route.path}>{route.text}</Link>
          ))}

          <div className="menu-carrito">
            <img src={ImgCarrito.imgCarrito} />
            <p>3</p>
          </div>
        </ul>
      </nav>
    </header>
  )
}




export default Navbar