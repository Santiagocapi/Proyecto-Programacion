const contenedorProdctos = document.getElementById("productos");

let carrito = [];

productos.forEach((producto) => {
  const div = document.createElement("div");
  div.classList.add("card", i.categoria, "hide");
  div.innerHTML = `
    <div class="img_contenedor">
        <img src=${producto.image}>
    </div>
    <div class="contenedor_productos">
    <img src=${producto.image}>
    <h3 class="nombre_producto">${producto.productName}</h3>
    <h4>${producto.price}</h4>
    <a id="agregar" class="boton">${producto.carrito}</a>
    </div>
    `;
  contenedorProdctos.appendChild(div);

  const boton = document.getElementById("agregar");
  boton.addEventListener("click", () => {
    agregarAlCarrito(producto.id);
  });
});

const agregarAlCarrito = (idProd) => {
  // que no se repita el producto en el carrito
  const existe = carrito.some((prod) => prod.id === idProd);

  if (existe) {
    // si ya esta en el carrito le agregamos la cantidad
    const producto = carrito.map((prod) => {
      // el map encuantra cual es el producto que esta agregado y le sume la cantidad de ese
      if (prod.id === idProd) {
        prod.cantidad++;
      }
    });
  } else {
    // si no esta en el carrito que se agregue el producto
    const item = productos.find((prod) => prod.id === idProd);
    // cunado tenemos la id del prod, el push lo agrega al carrito
    carrito.push(item);
  }
};
