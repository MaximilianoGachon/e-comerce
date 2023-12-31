import "./style.css"
import { Link} from "react-router-dom"

const Routes = [
  {
    path: "/",
    text: "Inicio"
  },
  {
    path: "/catalogo",
    text: "Prendas"
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

          {Routes.map((Route) => (
            <Link to={Route.path}>{Route.text}</Link>
          ))}

          <div className="menu-carrito">
            <img src={"/Img/Img-Carrito.png"} />
            <p>3</p>
          </div>
        </ul>
      </nav>
    </header>
  )
}




export default Navbar