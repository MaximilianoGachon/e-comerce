import { useParams } from "react-router"
import { useEffect, useState } from "react"
import { getProductId } from "../../array"
import { Link } from "react-router-dom"
//import { useParams } from "react-router-dom"


const Detalle = () => {

    const [loading, setLoading] = useState(false)
    const [product, setProducts] = useState(null)
    const { id } = useParams()


    useEffect(() => {
        setLoading(true)
        getProductId(Number(id))
          .then((product) => {
            setProducts(product)
          })
          .catch(err => console.log({ err }))
          .finally(() => setLoading(false))
      }, [id])

    if (loading) return (<h3>Cargando Prendas...</h3>)

    return (
        <div className="Card">

            <Link to="/catalogo">

                <p>Volver</p>
                
            </Link>

            <div key={id} className="Card-Detail">
                <ul>
                    <li><strong>{product?.titulo}</strong></li>
                    <li><img src={product?.imagen}/> </li>
                    <li><strong>{product?.descripcion}</strong></li>
                    <li><strong>{product?.categoria}</strong></li>
                    <li><strong>{product?.precio}</strong></li>
                </ul>
            </div>

        </div>
    )
}





export default Detalle