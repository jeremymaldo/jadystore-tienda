//PRODUCTOS
const productos = [
    //Camisas
    {
        id:"camisa-01",
        titulo:"Camisa 01",
        imagen: "Imágenes/Productos/Camisas/Camisa-01.jpg",
        categoria:{
            nombre:"Camisas",
            id:"camisas"
        },
        precio:10
    },
    {
        id:"camisa-02",
        titulo:"Camisa 02",
        imagen: "Imágenes/Productos/Camisas/Camisa-02.jpg",
        categoria:{
            nombre:"Camisas",
            id:"camisas"
        },
        precio:10
    },
    {
        id:"camisa-03",
        titulo:"Camisa 03",
        imagen: "Imágenes/Productos/Camisas/Camisa-03.jpg",
        categoria:{
            nombre:"Camisas",
            id:"camisas"
        },
        precio:10
    },
    {
        id:"camisa-04",
        titulo:"Camisa 04",
        imagen: "Imágenes/Productos/Camisas/Camisa-04.jpg",
        categoria:{
            nombre:"Camisas",
            id:"camisas"
        },
        precio:10
    },
    {
        id:"camisa-05",
        titulo:"Camisa 05",
        imagen: "Imágenes/Productos/Camisas/Camisa-05.jpg",
        categoria:{
            nombre:"Camisas",
            id:"camisas"
        },
        precio:10
    },
    {
        id:"camisa-06",
        titulo:"Camisa 06",
        imagen: "Imágenes/Productos/Camisas/Camisa-06.jpg",
        categoria:{
            nombre:"Camisas",
            id:"camisas"
        },
        precio:10
    },
    //Pantalones
    {
        id:"pantalon-01",
        titulo:"Pantalon 01",
        imagen: "Imágenes/Productos/Pantalones/Pantalon-01.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones"
        },
        precio:10
    },
    {
        id:"pantalon-02",
        titulo:"Pantalon 02",
        imagen: "Imágenes/Productos/Pantalones/Pantalon-02.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones"
        },
        precio:10
    },
    {
        id:"pantalon-03",
        titulo:"Pantalon 03",
        imagen: "Imágenes/Productos/Pantalones/Pantalon-03.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones"
        },
        precio:10
    },
    {
        id:"pantalon-04",
        titulo:"Pantalon 04",
        imagen: "Imágenes/Productos/Pantalones/Pantalon-04.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones"
        },
        precio:10
    },
    {
        id:"pantalon-05",
        titulo:"Pantalon 05",
        imagen: "Imágenes/Productos/Pantalones/Pantalon-05.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones"
        },
        precio:10
    },
    {
        id:"pantalon-06",
        titulo:"Pantalon 06",
        imagen: "Imágenes/Productos/Pantalones/Pantalon-06.jpg",
        categoria:{
            nombre:"Pantalones",
            id:"pantalones"
        },
        precio:10
    },
    //Zapatos
    {
        id:"zapatos-01",
        titulo:"Zapatos 01",
        imagen: "Imágenes/Productos/Zapatos/zapatos-01.jpg",
        categoria:{
            nombre:"Zapatos",
            id:"setZapatos"
        },
        precio:10
    },
    {
        id:"zapatos-02",
        titulo:"Zapatos 02",
        imagen: "Imágenes/Productos/Zapatos/zapatos-02.jpg",
        categoria:{
            nombre:"Zapatos",
            id:"setZapatos"
        },
        precio:10
    },
    {
        id:"zapatos-03",
        titulo:"Zapatos 03",
        imagen: "Imágenes/Productos/Zapatos/zapatos-03.jpg",
        categoria:{
            nombre:"Zapatos",
            id:"setZapatos"
        },
        precio:10
    },
    {
        id:"zapatos-04",
        titulo:"Zapatos 04",
        imagen: "Imágenes/Productos/Zapatos/zapatos-04.jpg",
        categoria:{
            nombre:"Zapatos",
            id:"setZapatos"
        },
        precio:10
    },
    {
        id:"zapatos-05",
        titulo:"Zapatos 05",
        imagen: "Imágenes/Productos/Zapatos/zapatos-05.jpg",
        categoria:{
            nombre:"Zapatos",
            id:"setZapatos"
        },
        precio:10
    },
    {
        id:"zapatos-06",
        titulo:"Zapatos 06",
        imagen: "Imágenes/Productos/Zapatos/zapatos-06.jpg",
        categoria:{
            nombre:"Zapatos",
            id:"setZapatos"
        },
        precio:10
    },
    //Accesorios Para Hombre
    {
        id:"accesorioParaHombre-01",
        titulo:"Accesorio Para Hombre 01",
        imagen: "Imágenes/Productos/Accesorios Para Hombre/accesoriosHombre-01.jpg",
        categoria:{
            nombre:"Accesorios Para Hombre",
            id:"accesoriosParaHombre"
        },
        precio:10
    },
    {
        id:"accesorioParaHombre-02",
        titulo:"Accesorio Para Hombre 02",
        imagen: "Imágenes/Productos/Accesorios Para Hombre/accesoriosHombre-02.jpg",
        categoria:{
            nombre:"Accesorios Para Hombre",
            id:"accesoriosParaHombre"
        },
        precio:10
    },
    {
        id:"accesorioParaHombre-03",
        titulo:"Accesorio Para Hombre 03",
        imagen: "Imágenes/Productos/Accesorios Para Hombre/accesoriosHombre-03.jpg",
        categoria:{
            nombre:"Accesorios Para Hombre",
            id:"accesoriosParaHombre"
        },
        precio:10
    },
    {
        id:"accesorioParaHombre-04",
        titulo:"Accesorio Para Hombre 04",
        imagen: "Imágenes/Productos/Accesorios Para Hombre/accesoriosHombre-04.jpg",
        categoria:{
            nombre:"Accesorios Para Hombre",
            id:"accesoriosParaHombre"
        },
        precio:10
    },
    {
        id:"accesorioParaHombre-05",
        titulo:"Accesorio Para Hombre 05",
        imagen: "Imágenes/Productos/Accesorios Para Hombre/accesoriosHombre-05.jpg",
        categoria:{
            nombre:"Accesorios Para Hombre",
            id:"accesoriosParaHombre"
        },
        precio:10
    },
    {
        id:"accesorioParaHombre-06",
        titulo:"Accesorio Para Hombre 06",
        imagen: "Imágenes/Productos/Accesorios Para Hombre/accesoriosHombre-06.jpg",
        categoria:{
            nombre:"Accesorios Para Hombre",
            id:"accesoriosParaHombre"
        },
        precio:10
    },
    //Accesorios Para Mujer
    {
        id:"accesorioParaMujer-01",
        titulo:"Accesorio Para Mujer 01",
        imagen: "Imágenes/Productos/Accesorios para Mujer/accesoriosMujer-01.jpg",
        categoria:{
            nombre:"Accesorios para Mujer",
            id:"accesoriosParaMujer"
        },
        precio:10
    },
    {
        id:"accesorioParaMujer-02",
        titulo:"Accesorio Para Mujer 02",
        imagen: "Imágenes/Productos/Accesorios para Mujer/accesoriosMujer-02.jpg",
        categoria:{
            nombre:"Accesorios para Mujer",
            id:"accesoriosParaMujer"
        },
        precio:10
    },
    {
        id:"accesorioParaMujer-03",
        titulo:"Accesorio Para Mujer 03",
        imagen: "Imágenes/Productos/Accesorios para Mujer/accesoriosMujer-03.jpg",
        categoria:{
            nombre:"Accesorios para Mujer",
            id:"accesoriosParaMujer"
        },
        precio:10
    },
    {
        id:"accesorioParaMujer-04",
        titulo:"Accesorio Para Mujer 04",
        imagen: "Imágenes/Productos/Accesorios para Mujer/accesoriosMujer-04.jpg",
        categoria:{
            nombre:"Accesorios Para Mujer",
            id:"accesoriosParaMujer"
        },
        precio:10
    },
    {
        id:"accesorioParaMujer-05",
        titulo:"Accesorio Para Mujer 05",
        imagen: "Imágenes/Productos/Accesorios para Mujer/accesoriosMujer-05.jpg",
        categoria:{
            nombre:"Accesorios Para Mujer",
            id:"accesoriosParaMujer"
        },
        precio:10
    },
    {
        id:"accesorioParaMujer-06",
        titulo:"Accesorio Para Mujer 06",
        imagen: "Imágenes/Productos/Accesorios para Mujer/accesoriosMujer-06.jpg",
        categoria:{
            nombre:"Accesorios Para Mujer",
            id:"accesoriosParaMujer"
        },
        precio:10
    }
];
    
    const contenedorProductos = document.querySelector("#contenedor-productos");
    const botonesCategorias = document.querySelectorAll(".boton-categoria");
    const tituloPrincipal = document.querySelector("#titulo-principal");
    let botonesAgregar = document.querySelectorAll(".producto-agregar");
    const numero = document.querySelector("#numero");

function cargarProductos(productoElegidos){

    contenedorProductos.innerHTML = "";

    productoElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="producto-detalles">
                        <h3 class="producto-titulo">${producto.titulo}</h3>
                        <p class="producto-precio">$${producto.precio}</p>
                        <button class="producto-agregar" id="${producto.id}"><i class="bi bi-cart-plus"></i></button>
                    </div>`;

                    contenedorProductos.append(div);
    })
    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
        const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
        tituloPrincipal.innerText =productoCategoria.categoria.nombre;

        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
    }
    else{
        tituloPrincipal.innerText ="Todos los productos";
        cargarProductos(productos);
    }
    })
});

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumero();
} else{
    productosEnCarrito = [];
} 

function agregarAlCarrito(e) {

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto =>producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    }
    else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
     
    actualizarNumero();
    
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumero(){
    let nuevoNumero = productosEnCarrito.reduce((acc, producto)=> acc + producto.cantidad, 0);
    numero.innerText = nuevoNumero;
}