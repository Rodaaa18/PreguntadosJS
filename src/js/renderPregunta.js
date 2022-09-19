import { createHTML } from "./createHtml.js";
import { preguntaCorrecta } from "./preguntaCorrecta.js";
import { actualizarContador } from "./helpers.js";
export default function renderPreg(numero, json, preguntas){
    start.classList.remove("start");
    start.classList.add("startAfter");
  
    createHTML(numero, json);
  
    if (!preguntas.includes(numero)) {
      preguntas.push(numero);
    }
    let respuestas = document.getElementsByClassName("respuesta");
    for (let i = 0; i < respuestas.length; i++) {
      respuestas[i].addEventListener(
        "click",
        preguntaCorrecta(json[numero].respuestaCorrecta, json, preguntas)
      );
    }
    actualizarContador(preguntas, json)
  };