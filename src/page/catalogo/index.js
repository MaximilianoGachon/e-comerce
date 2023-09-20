import "./style.css"
import { useEffect, useState } from "react"
import { getProducts } from "../../array"
import { Link } from "react-router-dom"


//import { getRate } from "../../utils/getRate"

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
            imagen }) => (

            <div key={id} className="Card-Detail">
                <ul>
                    <li><strong>{titulo}</strong></li>
                    <li><strong>{imagen}</strong></li>
                    <li><strong>{descripcion}</strong></li>
                    <li><strong>{precio}</strong></li>
                    <li>
                    <Link to={`/catalogo/${id}`}>
                    Ver mas
                   </Link>
                    </li>
                </ul>
            </div>
        ))}
    </div>
)}


export default Prendas