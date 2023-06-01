//GUARDO PRODUCTO EN LOCAL STORAGE//
function guardarProductosLs() {
    fetch("productos.json")
    .then(respuesta => respuesta.json())
    .then(data => {
    localStorage.setItem("productos", JSON.stringify(data))
    })
  }
  

  //CARGO PRODUCTOS EN LOCAL STORAGE//
  function cargarProductosLs(){
    return JSON.parse(localStorage.getItem("productos")) || []
  }

 //GUARDO PRODUCTOS EN LO CAL STORAGE//
  function guardarCarritoLs(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }
  
  //RETURN PRODUCTOS CARGADOS AL CARRITO EN LOCAL STORAGE//
  function cargarCarritoLs(){
    return JSON.parse(localStorage.getItem("carrito")) || []
  }
  
  //AGREGO PRODUCTOS EN CARRITO//
  function agregarAlCarrito(id) {
    let productos = cargarProductosLs(); 
    let producto = productos.find ((paquita) => paquita.id == id);  
    let carrito = cargarCarritoLs();
  
    carrito.push (producto);

    localStorage.setItem("carrito", JSON.stringify(carrito)) 

   // AGREGO ALERT// 
    Swal.fire({
        icon: 'success',
        title: 'Su producto fue agregado'
      })
  }


  //ELIMINO PRODUCTO AGREGADO POR ID//
  function eliminarProducto (id) {
    let carrito = cargarCarritoLs(); 
    let nuevoCarrito = carrito.filter ((paquita) => paquita.id != id);
  
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito))

    renderProductos()

  }

  //REALIZO OPERACIÓN DE SUMA DE PRODUCTOS EN CARRITO//
  function totalAPagar () {
    let precioFinal = 0;
    let carrito = cargarCarritoLs(); 
    carrito.forEach(carteras => { 
       precioFinal += carteras.precio
    });
    return precioFinal 
  }


  //ALERT DE COMPRA FINALIZADA//
  function finalizarCompra () {
    Swal.fire({
        icon: 'success',
        title: 'Gracias por tu compra',
        text: 'El total a pagar es $' + totalAPagar ()
      })
  }

  
  
