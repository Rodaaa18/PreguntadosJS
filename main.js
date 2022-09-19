import json from "./jsonMock/preguntas.json" assert { type: "json" };
import {fetchHora}  from "./src/fetch/fetchingHora.js";
import renderPreg from "./src/js/renderPregunta.js";
import getRandomInt from "./src/js/helpers.js";
import {actualizarContador} from "./src/js/helpers.js";
import volverAJugar from "./src/js/volverAJugar.js";
import {agregarPregunta} from "./src/js/agregarPregunta.js";

let start = document.querySelector("#start");
let preguntas = [];
let indexPregunta = getRandomInt(json.length);



const llenarHora =()=>{
  const hora = document.getElementById("hora");
  fetchHora(hora);
}
const Jugar = (e) => {
  e.preventDefault();
  llenarHora();
    // Inicializar contador
    const contador = document.getElementById("contador");
    const btnAgregar = document.querySelector("#crearPreg");
    const hora = document.querySelector("#hora");
    hora.classList.remove("none");
    btnAgregar.classList.remove("none");
    btnAgregar.classList.add("btn__agregar");
    contador.classList.remove("none");
    actualizarContador(preguntas, json)

    preguntas.length == 0 ? renderPreg(indexPregunta, json, preguntas) : Toastify({
      text: "No hay preguntas cargadas",
      duration: 1000,
      className: "info",
      gravity: "bottom", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      style: {
        background:
          "linear-gradient(rgba(224, 14, 14, 0.7), rgba(231, 7, 7, 0.7))",
      },
    }).showToast(); 
};

start.addEventListener("click", Jugar);
let volverAJugarBtn = document.querySelector("#volverAJugar");
volverAJugarBtn.addEventListener("click", ()=> volverAJugar(preguntas)); 
let btnAgregar = document.querySelector("#crearPreg");
btnAgregar.addEventListener("click", ()=>agregarPregunta(preguntas)); 

//Crear elementos



//Limpiar HTML

