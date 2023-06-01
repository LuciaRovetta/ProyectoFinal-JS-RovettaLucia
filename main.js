//DECLARO FUNCIÓN PRODUCTOS EN LOCAL STORAGE//
guardarProductosLs()

function renderProductos(){
  let contenedor = document.getElementById ("contenido"); 
  let cajita = ""; 
  let productos = cargarProductosLs(); 
  for (const paquita of productos) {
    cajita += `<div class="card" style="width: 18rem;">
    <img src=" ${paquita.imagen}" class="card-img-top" alt="foto bolso"> 
    <div class="card-body">
      <h5 class="card-title">${paquita.titulo}</h5>
      <p>$${paquita.precio}</p>
      <p class="card-text">${paquita.descripcion}</p>
      <a href="#" class="btn text-light btn-dark" onClick="agregarAlCarrito(${paquita.id})">Agregar al carrito</a>
    </div>
  </div>` 
}
contenedor.innerHTML = cajita; 
}

renderProductos()
