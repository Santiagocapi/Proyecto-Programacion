if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}else{
    ready();
}

function ready(){
    // borrar productos de el carrito
    var borrarItem = document.getElementsByClassName("basurin");
    console.log(borrarItem);
    for (var i = 0; i < borrarItem.length; i++){
        var boton = borrarItem[i];
        boton.addEventListener("click",  borrarCarro);
    }

    // cambios en la cantidad
    var cantidadInput = document.getElementsByClassName("cantidad");
    for (var i = 0; i < cantidadInput.lenght; i++){
        var input = cantidadInput[i];
        input.addEventListener("change", cantidadCambiada);
    }

    // agregar al carrito
    var agregarAlCarrito = document.getElementsByClassName("agregar_carrito");
    for (var i = 0; i < agregarAlCarrito.lenght; i++){
        var botonCar = agregarAlCarrito[i];
        botonCar.addEventListener("click", agregarProdalCar);
    }
} 

// borrar productos del carrito
function borrarCarro(event){
    var clickBoton = event.target;
    clickBoton.parentElement.remove();
}

// cambios cantidad
function cantidadCambiada(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value=1;
    }
}

// agregar producto al carrito
function agregarProdalCar(event){
    var boton = event.target
    var compraProd = boton.parentElement
    var titulo = compraProd.getElementsByClassName("nombre_producto")[0].innerText;
    console.log(titulo);
}

// precio total
function actTotal () {
    var boxCarrito = document.getElementsByClassName("box_carrito");
    var contenedorCarrito = document.getElementsByClassName("contenedor_descr");
    var total = 0;
    for (var i = 0; i < contenedorCarrito.length; i++) {
        var contenedorCarro = contenedorCarrito[i];
        var precioElemento =  coontenedorCarro.getElementsByClassName("precio")[0];
        var cantidadElemento = contenedorCarro.getElementsByClassName("cantidad")[0];
        var precio = parseInt(precioElemento.innerText.replace("$",""))
        var cantidad = cantidadElemento.value;

        document.getElementsByClassName("total_precio")[0].innerText= "$" + total;
    }
    
}

