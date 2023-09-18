//import "./style.css"
import { useEffect, useState } from "react"
import { getProducts } from "../../array"
//import { getRate } from "../../utils/getRate"

const Prendas = () => {

    const [loading, setLoading] = useState(false)

    const [products, setProducts] = useState([])

    useEffect(() => {
        setLoading(true)
        getProducts()
            .then((products) => setProducts(products))
            .catch(err => console.log({ err }))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return (<h3>Cargando Prendas...</h3>)
 
    return (
    <div>

        {products.map(({ 
            id,
            titulo,
            precio,
            descripcion,
            imagen }) => (

            <div key={id}>
                <ul>
                    <li><strong>{titulo}</strong></li>
                    <li><strong>{imagen}</strong></li>
                    <li><strong>{descripcion}</strong></li>
                    <li><strong>{precio}</strong></li>
                </ul>
            </div>
        ))}
    </div>
)}


export default Prendas