import { getListPreguntasLocal } from "./helpers.js";

const createHTML = (numero) => {

  const listPreguntas = getListPreguntasLocal()

  let contenedor = document.querySelector("#contenedorJuego");

  let pregunta = document.createElement("div");
  pregunta.id = "preguntaBody";
  pregunta.className = "preguntaBody";
  let respuestas = document.createElement("div");
  respuestas.id = "preguntasBody";
  respuestas.className = "game__card__preguntas";

  pregunta.innerHTML = `<h2 class="pregunta">Pregunta:</h2>
                        <p class="pregunta2" id="pregunta">${listPreguntas[numero].pregunta}</p>`;

  respuestas.innerHTML = `<button class="respuesta" id="primerPregunta">${listPreguntas[numero].respuesta1}</button>
                          <button class="respuesta" id="segundaPregunta">${listPreguntas[numero].respuesta2}</button>
                          <button class="respuesta" id="tercerPregunta">${listPreguntas[numero].respuesta3}</button>
                          <button class="respuesta" id="cuartaPregunta">${listPreguntas[numero].respuesta4}</button>`;

  contenedor.appendChild(pregunta);
  contenedor.appendChild(respuestas);
};

  export {createHTML};