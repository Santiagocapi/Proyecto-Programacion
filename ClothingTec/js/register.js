const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const inputsClass = document.getElementsByClassName("formulario__input");
const botonForm = document.getElementsByClassName("formulario__btn");
import axios from "axios";

const expresiones = {
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const campos = {
  correo: false,
  password: false,
  telefono: false
}

let newUser = {
  email: '',
  name: '',
  password: ''
}


const validarFormulario = (e) => {
  switch (e.target.name) {
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo');
      break;
    case "password":
      validarCampo(expresiones.password, e.target, 'password');
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
      break;
  }
};

const validarCampo = (expresiones, input, campo) => {
  if (expresiones.test(input.value)) {
    document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
    document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-correcto");
    document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
    document.getElementById(`grupo__${campo}`).classList.remove("formulario__grupo-correcto");
    document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
    document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
    campos[campo] = false;
  }
}

const validarPassword2 = () => {
  const inputPassword1 = document.getElementById(`password`);
  const inputPassword2 = document.getElementById(`password2`);

  if (inputPassword1.value !== inputPassword2.value) {
    document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-correcto");
    document.getElementById(`grupo__password2`).classList.add("formulario__grupo-incorrecto");
    document.querySelector(`#grupo__password2 i`).classList.add("fa-times-circle");
    document.querySelector(`#grupo__password2 i`).classList.remove("fa-check-circle");
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add("formulario__input-error-activo");
    campos['password'] = false;
  } else {
    document.getElementById(`grupo__password2`).classList.remove("formulario__grupo-incorrecto");
    document.getElementById(`grupo__password2`).classList.add("formulario__grupo-correcto");
    document.querySelector(`#grupo__password2 i`).classList.add("fa-check-circle");
    document.querySelector(`#grupo__password2 i`).classList.remove("fa-times-circle");
    document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove("formulario__input-error-activo");
    campos['password'] = true;
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

function handleSubmit(e) {
  if (e.target[0].value === '') {
    return
  }

  newUser.email = e.target[0].value
  console.log('1: '+e.target[0].value);

  if (e.target[1].value === '') {
    return
  }

  console.log('2: '+e.target[1].value);

  if (e.target[2].value === '' || e.target[2].value !== e.target[1].value) {
    return
  }

  newUser.password = e.target[2].value
  console.log('3: '+e.target[2].value);
  
  if (e.target[3].value === '' ) {
    return
  }

  newUser.name = e.target[3].value
  console.log('4: '+e.target[3].value);

  if (!e.target[4].checked){
    return
  }

  console.log('Acepto los terminos')
  console.log(newUser)
}



formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  handleSubmit(e)

  const terminos = document.getElementById('terminos');
  if (campos.correo && campos.password && terminos.checked) {
    formulario.reset();

    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    }, 5000);

    document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
      icono.classList.remove('formulario__grupo-correcto');
    });

  } else {
    document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    setTimeout(() => {
      document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    }, 4000)
  }

  axios.post("http://localhost:5000/api/user", newUser)
  .then((res)=> console.log(res))
  .catch((err)=> console.log(err))

});