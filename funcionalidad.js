const sectionProductos = document.getElementById("sectionProductos");

const productos = [
    {
        id: 1,
        nombre: "Abrigo marron",
        descripcion: "Este producto es un abrigo",
        imagen: "../assets/img/Ropa/ropa1.png",
        precio: 400,
        categoria: "Abrigos"
    },
    {
        id: 2,
        nombre: "Remera basica",
        descripcion: "Este producto es una remera",
        imagen: "../assets/img/Ropa/ropa2.png",
        precio: 200,
    },
    {
        id: 3,
        nombre: "Gorro de lana",
        descripcion: "Este producto es un gorro para el frio",
        imagen: "./assets/img/Ropa/ropa3.png",
        precio: 110,
    }
];


    productos.forEach(producto => {
        let contenido = document.createElement("article");
        contenido.innerHTML = `
        <img src="${producto.imagen}" alt="">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
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