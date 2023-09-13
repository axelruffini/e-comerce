function agregarAlCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("articulos"));
    console.log(memoria);
    if(!memoria){
        const nuevoArticulo = producto; //cambiar nuevoarticulo por nuevoproducto
        nuevoArticulo.canidad=1;
        localStorage.setItem("articulos", JSON.stringify([nuevoArticulo]))
    } 
    else{
        const indiceProducto = memoria.findIndex(articulos => articulos.id === producto.id);
        console.log(indiceProducto)
        const nuevaMemoria = memoria;
        if(indiceProducto === -1){
            nuevaMemoria.push(getNuevoProductoParaMemoria(producto));
        }else{
            nuevaMemoria[indiceProducto].canidad ++;
        }
        localStorage.setItem("articulos", JSON.stringify(nuevaMemoria));
    }
}

function getNuevoProductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.canidad = 1;
    return nuevoProducto;
}