let productos = {
  data: [
    {
      id: "1",
      productName: "Remeron Kongo Bear",
      categoria: "remerones",
      price: "$4200",
      image: "./imagenes/Remera1.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "2",
      productName: "Remeron Wanted",
      categoria: "remerones",
      price: "$4200",
      image: "./imagenes/Remera2.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "3",
      productName: "Remeron Urban Culture",
      categoria: "remerones",
      price: "$4200",
      image: "./imagenes/Remera3.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "4",
      productName: "Remeron KB Black",
      categoria: "remerones",
      price: "$5400",
      image: "./imagenes/Remera4.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "5",
      productName: "Remeron Mr.White",
      categoria: "remerones",
      price: "$4200",
      image: "./imagenes/Remera5.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "6",
      productName: "Buzo Black Bandana",
      categoria: "buzos",
      price: "$7400",
      image: "./imagenes/Buzo1.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "7",
      productName: "Buzo Bandana Colors",
      categoria: "buzos",
      price: "$7400",
      image: "./imagenes/Buzo2.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "8",
      productName: "Buzo Final Chapter",
      categoria: "buzos",
      price: "$7000",
      image: "./imagenes/Buzo3.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "9",
      productName: "Buzo Blue Neon",
      categoria: "buzos",
      price: "$7000",
      image: "./imagenes/Buzo4.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "10",
      productName: "Buzo Essential",
      categoria: "buzos",
      price: "$7200",
      image: "./imagenes/Buzo5.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "11",
      productName: "Bermuda Black & White",
      categoria: "bermudas",
      price: "$5000",
      image: "./imagenes/Bermuda1.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "12",
      productName: "Bermuda Bandana Colors",
      categoria: "bermudas",
      price: "$5200",
      image: "./imagenes/Bermuda2.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "13",
      productName: "Bermuda Black Bandana",
      categoria: "bermudas",
      price: "$5000",
      image: "./imagenes/Bermuda3.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "14",
      productName: "Bermuda Sky Colors",
      categoria: "bermudas",
      price: "$5000",
      image: "./imagenes/Bermuda4.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "15",
      productName: "Bermuda Universal",
      categoria: "bermudas",
      price: "$5000",
      image: "./imagenes/Bermuda5.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "16",
      productName: "Pantalon Ibiza",
      categoria: "pantalones",
      price: "$7400",
      image: "./imagenes/Pantalon1.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "17",
      productName: "Pantalon Race",
      categoria: "pantalones",
      price: "$7200",
      image: "./imagenes/Pantalon2.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "18",
      productName: "Pantalon Blue Jean",
      categoria: "pantalones",
      price: "$7200",
      image: "./imagenes/Pantalon3.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "19",
      productName: "Pantalon Blue Neon",
      categoria: "pantalones",
      price: "$7400",
      image: "./imagenes/Pantalon4.jpg",
      carrito: "Añadir al Carrito"
    },
    {
      id: "20",
      productName: "Pantalon Essential",
      categoria: "pantalones",
      price: "$7400",
      image: "./imagenes/Pantalon5.jpg",
      carrito: "Añadir al Carrito"
    },
  ],
};

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
  carrito.setAttribute("id", "agregar");
  carrito.classList.add("boton");
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
