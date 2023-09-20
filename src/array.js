

const productsPrenda = [
    {
      id: 1,
      titulo: "Camiseta",
      precio: "USD $19.99",
      descripcion: "Camiseta de algodón de alta calidad",
      categoria: "Camiseta",
      imagen: "Imagen1.jpg"
    },
    {
      id: 2,
      titulo: "Pantalones",
      precio: "USD $29.99",
      descripcion: "Pantalones de mezclilla para hombre",
      categoria: "Pantalon",
      imagen: "imagen2.jpg"
    },
    {
      id: 3,
      titulo: "Vestido",
      precio: "USD $39.99",
      descripcion: "Vestido elegante para ocasiones especiales",
      categoria: "Vestido",
      imagen: "imagen3.jpg"
    },
    {
      id: 4,
      titulo: "Chaqueta de Cuero",
      precio: "USD $59.99",
      descripcion: "Chaqueta de cuero genuino para hombre",
      categoria: "Campera",
      imagen: "imagen4.jpg"
    },
    {
      id: 5,
      titulo: "Sudadera con Capucha",
      precio: "USD $24.99",
      descripcion: "Sudadera cómoda y abrigada",
      categoria: "Camiseta",
      imagen: "imagen5.jpg"
    },
    {
      id: 6,
      titulo: "Falda",
      precio: "USD $34.99",
      descripcion: "Falda elegante para mujer",
      categoria: "Pantalon",
      imagen: "imagen6.jpg"
    },
    {
      id: 7,
      titulo: "Zapatos Deportivos",
      precio: "USD $49.99",
      descripcion: "Zapatos deportivos para correr",
      categoria: "Calzado",
      imagen: "imagen7.jpg"
    },
    {
      id: 8,
      titulo: "Abrigo de Invierno",
      precio: "USD $79.99",
      descripcion: "Abrigo acolchado para el invierno",
      categoria: "Campera",
      imagen: "imagen8.jpg"
    },
    {
      id: 9,
      titulo: "Sombrero de Paja",
      precio: "USD $14.99",
      descripcion: "Sombrero de paja trenzada para el verano",
      categoria: "Accesorio",
      imagen: "imagen9.jpg"
    },
    {
      id: 10,
      titulo: "Jeans Skinny",
      precio: "USD $39.99",
      descripcion: "Jeans ajustados para mujer",
      categoria: "Pantalon",
      imagen: "imagen10.jpg"
    },
    {
      id: 11,
      titulo: "Blusa",
      precio: "USD $29.99",
      descripcion: "Blusa elegante para mujer",
      categoria: "Remera",
      imagen: "imagen11.jpg"
    },
    {
      id: 12,
      titulo: "Chaleco",
      precio: "USD $44.99",
      descripcion: "Chaleco informal para hombre",
      categoria: "Remera",
      imagen: "imagen12.jpg"
    },
    {
      id: 13,
      titulo: "Zapatos de Tacón",
      precio: "USD $54.99",
      descripcion: "Zapatos de tacón alto para mujer",
      categoria: "Calzado",
      imagen: "imagen13.jpg"
    },
    {
      id: 14,
      titulo: "Shorts",
      precio: "USD $19.99",
      descripcion: "Shorts casuales para el verano",
      categoria: "Pantalon",
      imagen: "imagen14.jpg"
    },
    {
      id: 15,
      titulo: "Jersey",
      precio: "USD $34.99",
      descripcion: "Jersey de punto cálido",
      categoria: "Pantalon",
      imagen: "imagen15.jpg"
    },
    {
      id: 16,
      titulo: "Traje",
      precio: "USD $99.99",
      descripcion: "Traje elegante para hombre",
      categoria: "Conjuntos",
      imagen: "imagen16.jpg"
    },
    {
      id: 17,
      titulo: "Blusa de Seda",
      precio: "USD $49.99",
      descripcion: "Blusa de seda suave y delicada",
      categoria: "Remera",
      imagen: "imagen17.jpg"
    },
    {
      id: 18,
      titulo: "Mochila",
      precio: "USD $39.99",
      descripcion: "Mochila resistente y espaciosa",
      categoria: "Accesorio",
      imagen: "imagen18.jpg"
    },
    {
      id: 19,
      titulo: "Gafas de Sol",
      precio: "USD $19.99",
      descripcion: "Gafas de sol con estilo",
      categoria: "Accesorio",
      imagen: "imagen19.jpg"
    },
    {
      id: 20,
      titulo: "Bufanda",
      precio: "USD $9.99",
      descripcion: "Bufanda suave y abrigada",
      categoria: "Accesorio",
      imagen: "imagen20.jpg"
    }
  ];


  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(productsPrenda)
      }, 1000)
    })
  }
  
  export const getProductId = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log({productsPrenda, id})
        const product= productsPrenda.find((product) => product.id === id)
        if (product) return resolve(product)
        return reject({ error: 'No encontrado' })
      }, 500)
    })
  }

