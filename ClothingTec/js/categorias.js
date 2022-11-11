for (let i of productos.data) {
    //crear carta
    let card = document.createElement("div");
    //categoria para carta
    card.classList.add("card", i.categoria, "hide");
    //img div
    let imgContenedor = document.createElement("div");
    imgContenedor.classList.add("img_contenedor");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContenedor.appendChild(image);
    card.appendChild(imgContenedor);
    //contenedor productos
    let contenedor = document.createElement("div");
    contenedor.classList.add("contenedor_productos");
    //nombre productos
    let name = document.createElement("h3");
    name.classList.add("nombre_producto");
    name.innerText = i.productName.toUpperCase();
    contenedor.appendChild(name);
    //precio productos
    let precio = document.createElement("h4");
    precio.innerText = i.price;
    contenedor.appendChild(precio);
    let carrito = document.createElement("a");
    carrito.classList.add("boton", "agregar_carrito");
    carrito.innerText = i.carrito;
    contenedor.appendChild(carrito);
  
    card.appendChild(contenedor);
    document.getElementById("productos").appendChild(card);
  }
  
  // Parametros pasados al boton
  function filterProduct(value) {
    let boton = document.querySelectorAll(".boton_categorias");
    boton.forEach((button) => {
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    // filtro 'todos' para los productos
    let mostrar = document.querySelectorAll(".card");
    mostrar.forEach((element) => {
      if (value == "todos") {
        element.classList.remove("hide");
      }
      else{
        // filtro de categorias
        if(element.classList.contains(value)){
          element.classList.remove("hide");
        }
        else{
          element.classList.add("hide");
        }
      }
    });
  }
  
  // poder buscar los productos en la barra de busqueda
  document.getElementById("search").addEventListener("click", () => {
    //inicializar
    let buscar = document.getElementById("search_input").value;
    let nombre = document.querySelectorAll(".nombre_producto");
    let card = document.querySelectorAll(".card");
    //recorrer todos los productos
    
    nombre.forEach((element,index) => {
      if(element.innerText.includes(buscar.toUpperCase())){
        //mostrar los productos buscados
        card [index].classList.remove("hide");
      } else{
        //esconder los otros
        card [index].classList.add("hide");
      }
    });
  })
  
  //Mostrar el filtro 'todos' al principio
  window.onload = () => {
    filterProduct("todos");
  };