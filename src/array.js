const productsPrenda = [
    {
      id: 1,
      titulo: "Camiseta",
      precio: 19.99,
      descripcion: "Camiseta de algodón de alta calidad",
      imagen: "imagen1.jpg"
    },
    {
      id: 2,
      titulo: "Pantalones",
      precio: 29.99,
      descripcion: "Pantalones de mezclilla para hombre",
      imagen: "imagen2.jpg"
    },
    {
      id: 3,
      titulo: "Vestido",
      precio: 39.99,
      descripcion: "Vestido elegante para ocasiones especiales",
      imagen: "imagen3.jpg"
    },
    {
      id: 4,
      titulo: "Chaqueta de Cuero",
      precio: 59.99,
      descripcion: "Chaqueta de cuero genuino para hombre",
      imagen: "imagen4.jpg"
    },
    {
      id: 5,
      titulo: "Sudadera con Capucha",
      precio: 24.99,
      descripcion: "Sudadera cómoda y abrigada",
      imagen: "imagen5.jpg"
    },
    {
      id: 6,
      titulo: "Falda",
      precio: 34.99,
      descripcion: "Falda elegante para mujer",
      imagen: "imagen6.jpg"
    },
    {
      id: 7,
      titulo: "Zapatos Deportivos",
      precio: 49.99,
      descripcion: "Zapatos deportivos para correr",
      imagen: "imagen7.jpg"
    },
    {
      id: 8,
      titulo: "Abrigo de Invierno",
      precio: 79.99,
      descripcion: "Abrigo acolchado para el invierno",
      imagen: "imagen8.jpg"
    },
    {
      id: 9,
      titulo: "Sombrero de Paja",
      precio: 14.99,
      descripcion: "Sombrero de paja trenzada para el verano",
      imagen: "imagen9.jpg"
    },
    {
      id: 10,
      titulo: "Jeans Skinny",
      precio: 39.99,
      descripcion: "Jeans ajustados para mujer",
      imagen: "imagen10.jpg"
    },
    {
      id: 11,
      titulo: "Blusa",
      precio: 29.99,
      descripcion: "Blusa elegante para mujer",
      imagen: "imagen11.jpg"
    },
    {
      id: 12,
      titulo: "Chaleco",
      precio: 44.99,
      descripcion: "Chaleco informal para hombre",
      imagen: "imagen12.jpg"
    },
    {
      id: 13,
      titulo: "Zapatos de Tacón",
      precio: 54.99,
      descripcion: "Zapatos de tacón alto para mujer",
      imagen: "imagen13.jpg"
    },
    {
      id: 14,
      titulo: "Shorts",
      precio: 19.99,
      descripcion: "Shorts casuales para el verano",
      imagen: "imagen14.jpg"
    },
    {
      id: 15,
      titulo: "Jersey",
      precio: 34.99,
      descripcion: "Jersey de punto cálido",
      imagen: "imagen15.jpg"
    },
    {
      id: 16,
      titulo: "Traje",
      precio: 99.99,
      descripcion: "Traje elegante para hombre",
      imagen: "imagen16.jpg"
    },
    {
      id: 17,
      titulo: "Blusa de Seda",
      precio: 49.99,
      descripcion: "Blusa de seda suave y delicada",
      imagen: "imagen17.jpg"
    },
    {
      id: 18,
      titulo: "Mochila",
      precio: 39.99,
      descripcion: "Mochila resistente y espaciosa",
      imagen: "imagen18.jpg"
    },
    {
      id: 19,
      titulo: "Gafas de Sol",
      precio: 19.99,
      descripcion: "Gafas de sol con estilo",
      imagen: "imagen19.jpg"
    },
    {
      id: 20,
      titulo: "Bufanda",
      precio: 9.99,
      descripcion: "Bufanda suave y abrigada",
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
  
  export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log({productsPrenda, id})
        const product = productsPrenda.find((product) => product.id === id)
        if (product) return resolve(product)
        return reject({ error: 'No encontrado' })
      }, 500)
    })
  }