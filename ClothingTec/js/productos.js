let productos = {
  data: [
    {
      productName: "Remeron Kongo Bear",
      categoria: "Remerones",
      price: "$4200",
      image: "./imagenes/Remera1.jpg",
    },
    {
      productName: "Remeron Wanted",
      categoria: "Remerones",
      price: "$4200",
      image: "./imagenes/Remera2.jpg",
    },
    {
      productName: "Remeron Urban Culture",
      categoria: "Remerones",
      price: "$4200",
      image: "./imagenes/Remera3.jpg",
    },
    {
      productName: "Remeron KB Black",
      categoria: "Remerones",
      price: "$5400",
      image: "./imagenes/Remera4.jpg",
    },
    {
      productName: "Remeron Mr.White",
      categoria: "Remerones",
      price: "$4200",
      image: "./imagenes/Remera5.jpg",
    },
    {
      productName: "Buzo Black Bandana",
      categoria: "Buzos",
      price: "$7400",
      image: "./imagenes/Buzo1.jpg",
    },
    {
      productName: "Buzo Bandana Colors",
      categoria: "Buzos",
      price: "$7400",
      image: "./imagenes/Buzo2.jpg",
    },
    {
      productName: "Buzo Final Chapter",
      categoria: "Buzos",
      price: "$7000",
      image: "./imagenes/Buzo3.jpg",
    },
    {
      productName: "Buzo Blue Neon",
      categoria: "Buzos",
      price: "$7000",
      image: "./imagenes/Buzo4.jpg",
    },
    {
      productName: "Buzo Essential",
      categoria: "Buzos",
      price: "$7200",
      image: "./imagenes/Buzo5.jpg",
    },
    {
      productName: "Bermuda Black & White",
      categoria: "Bermudas",
      price: "$5000",
      image: "./imagenes/Bermuda1.jpg",
    },
    {
      productName: "Bermuda Bandana Colors",
      categoria: "Bermudas",
      price: "$5200",
      image: "./imagenes/Bermuda2.jpg",
    },
    {
      productName: "Bermuda Black Bandana",
      categoria: "Bermudas",
      price: "$5000",
      image: "./imagenes/Bermuda3.jpg",
    },
    {
      productName: "Bermuda Sky Colors",
      categoria: "Bermudas",
      price: "$5000",
      image: "./imagenes/Bermuda4.jpg",
    },
    {
      productName: "Bermuda Universal",
      categoria: "Bermudas",
      price: "$5000",
      image: "./imagenes/Bermuda5.jpg",
    },
    {
      productName: "Pantalon Ibiza",
      categoria: "Pantalones",
      price: "$7400",
      image: "./imagenes/Pantalon1.jpg",
    },
    {
      productName: "Pantalon Race",
      categoria: "Pantalones",
      price: "$7200",
      image: "./imagenes/Pantalon2.jpg",
    },
    {
      productName: "Pantalon Blue Jean",
      categoria: "Pantalones",
      price: "$7200",
      image: "./imagenes/Pantalon3.jpg",
    },
    {
      productName: "Pantalon Blue Neon",
      categoria: "Pantalones",
      price: "$7400",
      image: "./imagenes/Pantalon4.jpg",
    },
    {
      productName: "Pantalon Essential",
      categoria: "Pantalones",
      price: "$7400",
      image: "./imagenes/Pantalon5.jpg",
    },
  ],
};

for (let i of productos.data) {
  //crear carta
  let card = document.createElement("div");
  //categoria para carta
  card.classList.add("card", "i.categoria", "hide");
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

  card.appendChild(contenedor);
  document.getElementById("productos").appendChild(card);
}
