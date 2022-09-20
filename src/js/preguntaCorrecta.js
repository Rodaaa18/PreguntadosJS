import renderPreg from "./renderPregunta.js";
import { Perdiste } from "./perdiste.js";
import { limpiarHTML } from "./limpiarHtml.js";
import getRandomInt from "./helpers.js";
import { getListPreguntasLocal } from "./helpers.js";

const preguntaCorrecta = (value, preguntas) => (e) => {
    e.preventDefault();
    const listPreguntas = getListPreguntasLocal()
  
    if (e.target.innerText.toLowerCase() == value.toLowerCase()) {
      e.target.style.background = "green";
      let indexNewPregunta = -1;
      if (preguntas.length === listPreguntas.length) {
        Toastify({
          text: "GANASTE",
          duration: 10000,
          className: "info",
          gravity: "bottom",
          position: "center",
          style: {
            background:
              "linear-gradient(rgba(43, 247, 25, 0.7), rgba(44, 231, 7, 0.7))",
          },
        }).showToast();
      } else {
        do {
          indexNewPregunta = getRandomInt(listPreguntas.length);
        } while (preguntas.includes(indexNewPregunta));
        {
          limpiarHTML();
          renderPreg(indexNewPregunta, preguntas);
          Toastify({
            text: "RESPUESTA CORRECTA",
            duration: 1000,
            className: "info",
            gravity: "bottom",
            position: "center",
            style: {
              background:
                "linear-gradient(rgba(43, 247, 25, 0.7), rgba(44, 231, 7, 0.7))",
            },
          }).showToast();
        }
      }
    } else {
      Perdiste();
      Toastify({
        text: "RESPUESTA INCORRECTA",
        duration: 1000,
        className: "info",
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        style: {
          background:
            "linear-gradient(rgba(224, 14, 14, 0.7), rgba(231, 7, 7, 0.7))",
        },
      }).showToast();
    }
  };

  export {preguntaCorrecta};