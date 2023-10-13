const contenedortarjetas = document.getElementById("sectionProductos") 

function crearTarjetasProductos (productos){
    productos.forEach(producto => {
        const nuevoArticulo = document.createElement("article");
        nuevoArticulo.innerHTML = `
        <div>
            <img src="${producto.imagen}" alt="" class="card-img">
        </div>

        <div class="divAlign">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            
            <button class="btn" id="${producto.id}">
                <lord-icon
                    src="https://cdn.lordicon.com/udbbfuld.json"
                    trigger="hover"
                    colors="primary:#ffffff"
                    style="width:30px;height:30px">
                </lord-icon>
            </button>
        </div>
    `;
        contenedortarjetas.appendChild(nuevoArticulo);
        nuevoArticulo.getElementsByTagName("button")[0].addEventListener("click",()=>agregarAlCarrito(producto))
    });
}

crearTarjetasProductos(articulos);














/*
const sectionProductos = document.getElementById("sectionProductos");



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
                colors="primary:#00000"
                style="width:25px;height:25px">
            </lord-icon>
            </a>
        </div>
    `;
    sectionProductos.append(contenido);
});

*/