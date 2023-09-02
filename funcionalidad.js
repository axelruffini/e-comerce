const sectionProductos = document.getElementById("sectionProductos");

const productos = [
    {
        id: 1,
        nombre: "Abrigo marron",
        imagen: "./assets/img/Ropa/ropa1.png",
        precio: 400,
        categoria: "Abrigos"
    },
    {
        id: 2,
        nombre: "Remera basica",
        imagen: "./assets/img/Ropa/ropa2.png",
        precio: 200,
    },
    {
        id: 3,
        nombre: "Gorro de lana",
        imagen: "./assets/img/Ropa/ropa3.png",
        precio: 110,
    },
    {
        id: 4,
        nombre: "Chaqueta de Cuero Negra",
        imagen: "./assets/img/Ropa/ropa2.png",
        precio: 450,
        categoria: "Chaquetas"
    },
    {
        id: 5,
        nombre: "Pantalones Vaqueros Clásicos",
        imagen: "./assets/img/Ropa/ropa1.png",
        precio: 250,
        categoria: "Pantalones"
    },
    {
        id: 6,
        nombre: "Bufanda de Lana Tejida",
        imagen: "./assets/img/Ropa/ropa3.png",
        precio: 35,
        categoria: "Accesorios"
    }
];


    productos.forEach(producto => {
        let contenido = document.createElement("article");
        contenido.innerHTML = `
        <img src="${producto.imagen}" alt="">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <div class="btn-grupo">
            <a href="./pages/articulo.html" class="btn">ver</a>
            <a href="./pages/articulo.html" class="btn" id="${producto.id}">
            <lord-icon
                src="https://cdn.lordicon.com/udbbfuld.json"
                trigger="hover"
                colors="primary:#ffffff"
                style="width:25px;height:25px">
            </lord-icon>
            </a>
        </div>
    `;
        sectionProductos.append(contenido);
    });