import { createHTML } from "./createHtml.js";
import { preguntaCorrecta } from "./preguntaCorrecta.js";
import { actualizarContador } from "./helpers.js";
import { getListPreguntasLocal } from "./helpers.js";

export default function renderPreg(numero, preguntas){
    start.classList.remove("start");
    start.classList.add("startAfter");

    const listPreguntas = getListPreguntasLocal()
  
    createHTML(numero, listPreguntas);
  
    if (!preguntas.includes(numero)) {
      preguntas.push(numero);
    }
    let respuestas = document.getElementsByClassName("respuesta");
    for (let i = 0; i < respuestas.length; i++) {
      respuestas[i].addEventListener(
        "click",
        preguntaCorrecta(listPreguntas[numero].respuestaCorrecta, preguntas)
      );
    }
    actualizarContador(preguntas)
  };