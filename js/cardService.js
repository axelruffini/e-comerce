function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("articulos"));
    console.log(memoria);

    if(!memoria){
        const nuevoArticulo = producto; //cambiar nuevoarticulo por nuevoproducto
        nuevoArticulo.cantidad=1;
        localStorage.setItem("articulos", JSON.stringify([nuevoArticulo]))
    } 
    else{
        const indiceProducto = memoria.findIndex(articulos => articulos.id === producto.id);
        console.log(indiceProducto)
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
        }else{
            nuevaMemoria[indiceProducto].cantidad ++;
        }
        localStorage.setItem("articulos", JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();
}

function restarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("articulos"));
    const indiceProducto = memoria.findIndex(articulos => articulos.id === producto.id);
    if (memoria[indiceProducto].cantidad === 1){
        memoria.splice(indiceProducto,1);
    }else{
        memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("articulos", JSON.stringify(memoria));
}

function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}


const contadorCarritoElement = document.getElementById("contadorCarrito");
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("articulos"));
    const contador = memoria.reduce((acum, current) => acum+current.cantidad,0 );
    contadorCarritoElement.innerText = contador;
}

actualizarNumeroCarrito();