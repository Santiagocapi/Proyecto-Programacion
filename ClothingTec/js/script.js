let buscar = document.querySelector(".buscar_form");

document.querySelector("#buscar").onclick = () => {
  buscar.classList.toggle("active");
  carritoCompras.classList.remove("active");
  login.classList.remov ("active");
  navbar.classList.remove("active");
};

let carritoCompras = document.querySelector(".carrito_compras");

document.querySelector("#carrito").onclick = () => {
  carritoCompras.classList.toggle("active");
  buscar.classList.remove("active");
  login.classList.remove("active");
  navbar.classList.remove("active");
};

let login = document.querySelector(".form_login");

document.querySelector("#login").onclick = () => {
  login.classList.toggle("active");
  buscar.classList.remove("active");
  carritoCompras.classList.remove("active");
  navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#btn_menu").onclick = () => {
  navbar.classList.toggle("active");
  buscar.classList.remove("active");
  carritoCompras.classList.remove("active");
  login.classList.remove("active");
};

/* Carrusel */

var swiper = new Sswiper(".carrusel", {
  loop:true,
  spaceBetween: 20,
  autoplay: {
    delay:7500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
