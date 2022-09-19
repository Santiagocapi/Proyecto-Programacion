const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{10,10}$/, // 7 a 14 numeros.
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "correo":
      if (expresiones.correo.test(e.target.value)) {
        document
          .getElementById("grupo__correo")
          .classList.remove("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__correo")
          .classList.add("formulario__grupo-correcto");
        document
          .querySelector("#grupo__correo i")
          .classList.add("fa-check-circle");
        document
          .querySelector("#grupo__correo i")
          .classList.remove("fa-times-circle");
        document
          .querySelector("#grupo__correo .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .getElementById("grupo__correo")
          .classList.add("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__correo")
          .classList.remove("formulario__grupo-correcto");
        document
          .querySelector("#grupo__correo i")
          .classList.remove("fa-check-circle");
        document
          .querySelector("#grupo__correo i")
          .classList.add("fa-times-circle");
        document
          .querySelector("#grupo__correo .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;
    case "password":
      if (expresiones.password.test(e.target.value)) {
        document
          .getElementById("grupo__password")
          .classList.remove("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__password")
          .classList.add("formulario__grupo-correcto");
        document
          .querySelector("#grupo__password i")
          .classList.add("fa-check-circle");
        document
          .querySelector("#grupo__password i")
          .classList.remove("fa-times-circle");
        document
          .querySelector("#grupo__password .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .getElementById("grupo__password")
          .classList.add("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__password")
          .classList.remove("formulario__grupo-correcto");
        document
          .querySelector("#grupo__password i")
          .classList.remove("fa-check-circle");
        document
          .querySelector("#grupo__password i")
          .classList.add("fa-times-circle");
        document
          .querySelector("#grupo__password .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;
    case "password2":
      break;
    case "telefono":
      if (expresiones.telefono.test(e.target.value)) {
        document
          .getElementById("grupo__telefono")
          .classList.remove("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__telefono")
          .classList.add("formulario__grupo-correcto");
        document
          .querySelector("#grupo__telefono i")
          .classList.add("fa-check-circle");
        document
          .querySelector("#grupo__telefono i")
          .classList.remove("fa-times-circle");
        document
          .querySelector("#grupo__telefono .formulario__input-error")
          .classList.remove("formulario__input-error-activo");
      } else {
        document
          .getElementById("grupo__telefono")
          .classList.add("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__telefono")
          .classList.remove("formulario__grupo-correcto");
        document
          .querySelector("#grupo__telefono i")
          .classList.remove("fa-check-circle");
        document
          .querySelector("#grupo__telefono i")
          .classList.add("fa-times-circle");
        document
          .querySelector("#grupo__telefono .formulario__input-error")
          .classList.add("formulario__input-error-activo");
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});
