const contenedortarjetas = document.getElementById("sectionProductos")

function crearTarjetasProductos() {
    contenedortarjetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("articulos"));
    if (productos && productos.length > 0) {

        productos.forEach(producto => {
            const nuevoArticulo = document.createElement("article");
            nuevoArticulo.innerHTML = `
        <div class="divAlign">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio}</p>
            <div>
                <button class="btn2">
                    -
                </button>
                <span class="cantidad">${producto.cantidad}</span>
                <button class="btn2">
                    +
                </button>
            </div>
        </div>
    `;
            contenedortarjetas.appendChild(nuevoArticulo);
            nuevoArticulo
                .getElementsByTagName("button")[1]
                .addEventListener("click", () => {
                    agregarAlCarrito(producto);
                });
                nuevoArticulo
                .getElementsByTagName("button")[0]
                .addEventListener("click", () => {
                    restarAlCarrito(producto)
                    crearTarjetasProductos();
                });
        });
    }
}

crearTarjetasProductos();