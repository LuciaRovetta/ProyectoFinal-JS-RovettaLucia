//RENDERIZADO DE PRODUCTOS//
function renderProductos(){
    let contenedor = document.getElementById ("contenido"); 
    let cajita = `<table class="table">`; 
    let productos = cargarCarritoLs(); 

    if (productos.length > 0) {
        for (const paquita of productos) {
            cajita += `<tr>
            <td> <img src="${paquita.imagen}" width="48" alt="foto bolso"></td>
            <td>${paquita.titulo}</td>
            <td>$${paquita.precio}</td>
            <td class = "text-end"><img src="trash.svg" alt="eliminar" width="24" onClick="eliminarProducto(${paquita.id})"></td>
            </tr>`;
        }
        cajita += `<tr>
        <td></td>
        <td>Total a pagar:</td>
        <td>$${totalAPagar()}</td>
        <td class = "text-end"><a href="#" class="btn text-light btn-dark" onClick="finalizarCompra()">Finalizar compra</a></td>
        </tr> 
        </table>`
        contenedor.innerHTML = cajita;
    } else {
        contenedor.innerHTML = '<p class = "text-center">No se encontraron productos</p>';
    }
}

  //EJECUTO FUNCIÓN DE RENDERIZADO DE PRODUCTOS//
renderProductos()


  
 