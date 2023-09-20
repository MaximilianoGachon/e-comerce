import "./style.css"
import { useEffect, useState } from "react"
import { getProducts } from "../../array"
import { Link } from "react-router-dom"

const Prendas = () => {

    const [loading, setLoading] = useState(false)

    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((products) => setProducts(products))
            .catch(error => console.log({ error }))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return (<h3>Cargando Prendas...</h3>)
 
    return ( 
    <div className="Card">

        {products.map(({ 
            id,
            titulo,
            precio,
            descripcion,
            categoria,
            imagen }) => (

            <div key={id} className="Card-Detail">

                <ul>

                    <li><strong>{titulo}</strong></li>
                    <div><img src={`/Img/${imagen}`}
                    className="Img-Card"/></div>
                    <li><strong>{descripcion}</strong></li>
                    <li><strong>{categoria}</strong></li>
                    <li><strong>{precio}</strong></li>
                    

                    <Link to={`/catalogo/${id}`}>
                    Ver mas
                   </Link>
                    
                </ul>
            </div>
        ))}
    </div>
)}


export default Prendas