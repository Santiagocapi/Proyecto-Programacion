let carritoCompras = document.querySelector(".carrito_compras");

document.querySelector("#carrito").onclick = () => {
  carritoCompras.classList.toggle("active");
  login.classList.remove("active");
  navbar.classList.remove("active");
};

let login = document.querySelector(".form_login");

document.querySelector("#login").onclick = () => {
  login.classList.toggle("active");
  carritoCompras.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#btn_menu").onclick = () => {
  navbar.classList.toggle("active");
  carritoCompras.classList.remove("active");
  login.classList.remove("active");
};