let productos = {
  data: [
    {
      productName: "Kongo Bear",
      categoria: "Remerones",
      price: "$4000",
      image: "./imagenes/Remera1.jpg",
    },
    {
      productName: "Wanted",
      categoria: "Remerones",
      price: "$4000",
      image: "./imagenes/Remera2.jpg",
    },
    {
      productName: "Urban Culture",
      categoria: "Remerones",
      price: "$4000",
      image: "./imagenes/Remera3.jpg",
    },
    {
      productName: "KB Black",
      categoria: "Remerones",
      price: "$5400",
      image: "./imagenes/Remera4.jpg",
    },
    {
      productName: "Mr.White",
      categoria: "Remerones",
      price: "$4000",
      image: "./imagenes/Remera5.jpg",
    },
  ],
};

for (let i of productos.data){
	//crear carta
	let card = document.createElement("div");
	//categoria para carta
	card.classList.add("card","i.categoria");
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
	name.classList.add ("nombre_producto");
	name.innerText = i.productName.toUpperCase();
	contenedor.appendChild(name);
	//precio productos
	let precio = document.createElement("h4");
	precio.innerText = i.price;
	contenedor.appendChild(precio);

	card.appendChild(contenedor);
	document.getElementById("productos").appendChild(card);
}
