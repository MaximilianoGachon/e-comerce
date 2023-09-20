import { getProductCat } from "../../array"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Categoria = () => {

    const [loading, setLoading] = useState(false)
    const [product, setProducts] = useState([])
    const { categoria } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductCat(categoria)
            .then((product) => {
                setProducts(product)
            })
            .catch(err => console.log({ err }))
            .finally(() => setLoading(false))
    }, [categoria])

    if (loading) return (<h3>Cargando Prendas...</h3>)

    return (
        <>
            <h1>Categorias</h1>

            <div key={categoria}>

                <ul>
                    <li><strong>{product?.titulo}</strong></li>
                    <li><strong>{product?.descripcion}</strong></li>
                    <li><strong>{product?.categoria}</strong></li>
                    <li><img src={product?.imagen}></img></li>
                    <li><strong>{product?.precio}</strong></li>
                </ul>
            </div>


        </>
    )
}

export default Categoria